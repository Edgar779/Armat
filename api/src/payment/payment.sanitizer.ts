import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ISanitize } from '../util';
import { InvoiceDTO, PaymentDTO, PmtMethodDTO } from './dto';
import { IPayment } from './interface';

@Injectable()
export class PaymentSanitizer implements ISanitize {
  sanitize(payment: IPayment): PaymentDTO {
    const sanitizedPayment: PaymentDTO = {
      id: payment.id,
      amount: payment.amount,
      memberId: payment.memberId,
      orderId: payment.orderId,
      stripeInvoiceId: payment.stripeInvoiceId,
      stripeCustomerId: payment.stripeCustomerId,
      cancelDate: payment.cancelDate,
      invoicePDF: payment.invoicePDF,
      createdAt: payment.createdAt
    };
    return sanitizedPayment;
  }

  /** Sanitizes an array of Payments */
  sanitizeMany(payments: IPayment[]): PaymentDTO[] {
    const sanitizedPayments: PaymentDTO[] = [];
    payments.map((payment) => sanitizedPayments.push(this.sanitize(payment)));
    return sanitizedPayments;
  }

  /** sanittize card info */
  sanitizePmtMethod(PmtMethod: Stripe.PaymentMethod): PmtMethodDTO {
    const sanitizedPm: PmtMethodDTO = {
      card: PmtMethod.card.brand,
      exp_month: PmtMethod.card.exp_month,
      exp_year: PmtMethod.card.exp_year,
      last4: PmtMethod.card.last4,
      type: PmtMethod.type,
    };
    return sanitizedPm;
  }

  /** sanitize invoices */
  sanitizeInvoices(invoices: Stripe.Invoice[]): InvoiceDTO[] {
    const sanitized: InvoiceDTO[] = [];
    invoices.forEach((invoice) => {
      const lineItem = invoice.lines.data[0];
      sanitized.push({
        amountDue: invoice.amount_due,
        amountRemaining: invoice.amount_remaining,
        amountPaid: invoice.amount_paid,
        invoicePDF: invoice.invoice_pdf,
        hostedInvoiceUrl: invoice.hosted_invoice_url,
        startDate: new Date(lineItem.period.start * 1000),
        endDate: new Date(lineItem.period.end * 1000),
      });
    });
    return sanitized;
  }
}
