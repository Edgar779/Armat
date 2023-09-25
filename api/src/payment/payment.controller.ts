import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { InvoiceDTO, PaymentDTO, PmtMethodDTO } from './dto';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN, SessionDTO } from 'src/auth';
import Stripe from 'stripe';
import { ParseObjectIdPipe, Public } from 'src/util';

@Controller('payments')
@ApiTags('Payment Endpoints')
@ApiHeader({ name: ACCESS_TOKEN })
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // create payment method or update
  @Post('pmtMethod')
  @ApiOkResponse({ type: PaymentDTO })
  async createPmt(@Query('pmMethodId') pmMethodId: string, @Body('user') user: SessionDTO): Promise<string> {
    return await this.paymentService.createPmt(pmMethodId, user);
  }

  /** Get the subscription for the user */
  @Get('pmtMethod')
  @ApiOkResponse({ type: PmtMethodDTO })
  async getPmtMethod(@Body('user') user: SessionDTO): Promise<PmtMethodDTO> {
    const pmtMethod = await this.paymentService.getPmtMethod(user);
    return pmtMethod;
  }

  // @Post('createPaymentMethodTest')
  // @Public()
  // async createPaymentMethodTest(): Promise<string> {
  //   return await this.paymentService.createPaymentMethodTest();
  // }

  /** get all payments */
  @Get()
  @ApiOkResponse({ type: [PaymentDTO] })
  findAll(@Body('user') user: SessionDTO) {
    return this.paymentService.findAll(user);
  }
  /** Get the invoices for the customer */
  @Get('invoices')
  @ApiOkResponse({ type: [InvoiceDTO] })
  async getInvoices(@Body('user') user: SessionDTO): Promise<InvoiceDTO[]> {
    const invoices = await this.paymentService.getInvoices(user);
    return invoices;
  }

  /** get payment by id */
  @Get(':id')
  @ApiOkResponse({ type: PaymentDTO })
  findOne(@Param('id', ParseObjectIdPipe) id: string, @Body('user') user: SessionDTO) {
    return this.paymentService.findOne(id, user);
  }

  /** Used for processing the webook data */
  @Post('/webhook')
  @Public()
  async stripeWebhook(dto: Stripe.Event) {
    const webhookResponse = await this.paymentService.processWebhook(dto);
    return webhookResponse;
  }
}
