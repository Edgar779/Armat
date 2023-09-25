import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaymentDTO, InvoiceDTO, PaymentDTO, PmtMethodDTO } from './dto';
import Stripe from 'stripe';
import { FilterQuery, Model } from 'mongoose';
import { IPayment } from './interface';
import { PaymentModel } from './payment.model';
import { PaymentSanitizer } from './payment.sanitizer';
import { Currency } from './payment.constants';
import { SessionDTO } from 'src/auth';
import { MailerService } from 'src/components/mailer/mailer.service';

@Injectable()
export class PaymentService {
  constructor(private readonly sanitizer: PaymentSanitizer, private readonly mailerService: MailerService) {
    this.stripe = new Stripe(
      // process.env.STRIPE_SKEY
      'sk_test_51LmCY4HoKYb9ljrZKNqe6e09viQy6YyhrCacRyveuyi3AuJ42XVZ0U9pjogWtHUe9dezEd6GzJKpLd984lYhpqfL00oHptE7td',
      {
        apiVersion: '2022-11-15',
      },
    );
    this.model = PaymentModel;
  }
  private stripe: Stripe;
  private model: Model<IPayment>;

  // /** create pmt (TEST) do not touch */
  async createPaymentMethodTest(): Promise<string> {
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 8,
        exp_year: 2024,
        cvc: '314',
      },
    });
    return paymentMethod.id;
  }

  // create payment method or update
  async createPmt(pmMethodId: string, user: SessionDTO): Promise<string> {
    let payment = await this.model.findOne({ memberId: user.id });
    // let payment;
    if (!payment) {
      const customerStripe = await this.stripe.customers.create({
        metadata: { user: user.id },
        email: user.email,
      });
      await this.stripe.paymentMethods.attach(pmMethodId, {
        customer: customerStripe.id,
      });
      await this.stripe.customers.update(customerStripe.id, {
        invoice_settings: {
          default_payment_method: pmMethodId,
        },
      });
      payment = new this.model({
        stripeCustomerId: customerStripe.id,
        memberId: user.id,
      });
      await payment.save();
    } else {
      await this.stripe.paymentMethods.attach(pmMethodId, {
        customer: payment.stripeCustomerId,
      });
      await this.stripe.customers.update(payment.stripeCustomerId, {
        invoice_settings: {
          default_payment_method: pmMethodId,
        },
      });
    }
    return payment._id;
  }

  /** create the payment (ticket-order) */
  async pay(
    dto: CreatePaymentDTO
  ): Promise<PaymentDTO> {
    let stripeCustomerId: string;
    const query: FilterQuery<IPayment> = {};
    query.$or = [{ memberId: dto.user?.id }, { email: dto.email }];
    const customer = await this.model.findOne(query);
    if (!customer) {
      const customerStripe = await this.stripe.customers.create({
        metadata: { user: dto.user?.id },
        email: dto.user?.email ? dto.user.email : dto.email,
      });
      stripeCustomerId = customerStripe.id;
    } else {
      stripeCustomerId = customer.stripeCustomerId;
    }
    if (dto.pmtMethod) {
      await this.setDefaultPM(stripeCustomerId, dto.pmtMethod)
    }
    const invoiceId = await this.createInvoice(stripeCustomerId, dto.amount)
    const payInvoice = await this.stripe.invoices.pay(invoiceId);
    const payment = new this.model({
      amount: dto.amount,
      memberId: dto.user?.id,
      customerEmail: dto.email,
      orderId: dto.orderId,
      stripeInvoiceId: invoiceId,
      invoicePDF: payInvoice.invoice_pdf,
      stripeCustomerId,
      isPackageActive: false,
    });
    await payment.save();
    return this.sanitizer.sanitize(payment);
  }

  /** cancel the payment by ticketOrderId (ticketOrder) */
  async cancel(ticketOrderId: string): Promise<PaymentDTO> {
    try {
      const payment = await this.model.findOne({ ticketOrderId });
      this.checkPayment(payment);
      await this.stripe.invoices.voidInvoice(payment.stripeInvoiceId);
      // await this.stripe.paymentIntents.cancel(payment.stripePmtIntentId);
      payment.cancelDate = new Date();
      await payment.save();
      return this.sanitizer.sanitize(payment);
    } catch (e) {
      throw new HttpException(`${e}`, HttpStatus.EXPECTATION_FAILED);
    }
  }

  /** find all payments */
  async findAll(user: SessionDTO): Promise<PaymentDTO[]> {
    const payments = await this.model
      .find({ memberId: user.id })
      .populate({ path: 'ticketId', select: 'description' });
    return this.sanitizer.sanitizeMany(payments);
  }

  /** find payment */
  async findOne(_id: string, user: SessionDTO): Promise<PaymentDTO> {
    const payment = await this.model
      .findOne({ memberId: user.id })
      .populate({ path: 'ticketId', select: 'description' });
    this.checkPayment(payment);
    return this.sanitizer.sanitize(payment);
  }

  /** Gets the user's payment method */
  async getPmtMethod(user: SessionDTO): Promise<PmtMethodDTO> {
    const payment = await this.model.findOne({ memberId: user.id });
    const customer = (await this.stripe.customers.retrieve(payment.stripeCustomerId, {
      expand: ['invoice_settings.default_payment_method'],
    })) as Stripe.Customer;
    const response = this.sanitizer.sanitizePmtMethod(
      customer.invoice_settings.default_payment_method as Stripe.PaymentMethod,
    );
    return response;
  }

  /** Gets the invoices for a specific customer */
  async getInvoices(user: SessionDTO): Promise<InvoiceDTO[]> {
    const payment = await this.model.findOne({ memberId: user.id });
    const invoiceList = await this.stripe.invoices.list({
      customer: payment.stripeCustomerId,
    });
    return this.sanitizer.sanitizeInvoices(invoiceList.data);
  }

  /** designed to handle events emitted by stripe when an invoice was not paid succesfully.
   * This will set the expiry date of the subscription @constant GRACE_PERIOD days in the future */
  async processWebhook(event: Stripe.Event) {
    let invoice: Stripe.Invoice, payment: IPayment;
    switch (event.type) {
      case 'invoice.paid':
        invoice = event.data.object as Stripe.Invoice;
        payment = await this.model.findOne({ stripeCustomerId: invoice.customer as string }).populate('memberId');
        this.checkPayment(payment);
        await this.mailerService.sendInvoice(
          payment.memberId?.email ? payment.memberId.email : payment.customerEmail,
          invoice.invoice_pdf,
        );
        // payment.paymentFaile = false;
        break;
      case 'invoice.payment_failed':
        //Cancel the subscription of the user until they update their subscription
        invoice = event.data.object as Stripe.Invoice;
        payment = await this.model.findOne({ stripeCustomerId: invoice.customer as string }).populate('memberId');
        this.checkPayment(payment);
        const tasks = [];
        // tasks.push(this.stripe.paymentIntents.cancel(payment.stripePmtIntentId));
        tasks.push(
          this.mailerService.sendInactivation(
            payment.memberId?.email ? payment.memberId.email : payment.customerEmail,
            new Date(),
          ),
        );
        await Promise.all(tasks);
        break;
    }
    return;
  }

  /** Private Methods */
  /** checks if the payment is valid or throws a not found exception */
  private checkPayment(payment: IPayment) {
    if (!payment) {
      throw new HttpException('Payment was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** set default payment method to customer */
  private async setDefaultPM(stripeCustomerId: string, pmtMethod: string) {
    await this.stripe.paymentMethods.attach(pmtMethod, {
      customer: stripeCustomerId,
    });
    await this.stripe.customers.update(stripeCustomerId, {
      invoice_settings: {
        default_payment_method: pmtMethod,
      },
    });
  }

  /** create the invoice */
  private async createInvoice(stripeCustomerId: string, amount: number): Promise<string> {
    const invoice = await this.stripe.invoices.create({
      customer: stripeCustomerId,
    });
    await this.stripe.invoiceItems.create({
      customer: stripeCustomerId,
      amount: amount * 100,
      currency: Currency.usd,
      invoice: invoice.id,
    });
    return invoice.id;
  }
}
