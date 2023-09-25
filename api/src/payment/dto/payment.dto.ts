import { ApiProperty } from '@nestjs/swagger';

export class PaymentDTO {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  id: string;
  @ApiProperty()
  memberId: string;
  @ApiProperty()
  stripeInvoiceId: string;
  @ApiProperty()
  stripeCustomerId: string;
  @ApiProperty()
  cancelDate: Date;
  @ApiProperty()
  invoicePDF: string;
  @ApiProperty()
  orderId: string;
  @ApiProperty()
  createdAt: string
}

export class PmtMethodDTO {
  @ApiProperty()
  card: string;
  @ApiProperty()
  exp_month: number;
  @ApiProperty()
  exp_year: number;
  @ApiProperty()
  last4: string;
  @ApiProperty()
  type: string;
}
