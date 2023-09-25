import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDTO {
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  endDate: Date;
  @ApiProperty()
  amountPaid: number;
  @ApiProperty()
  amountDue: number;
  @ApiProperty()
  amountRemaining: number;
  @ApiProperty()
  invoicePDF: string;
  @ApiProperty()
  hostedInvoiceUrl: string;
}
