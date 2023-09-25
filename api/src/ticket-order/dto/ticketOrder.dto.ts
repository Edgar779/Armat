import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/file';
import { TicketDTO } from 'src/ticket/dto';

export class TicketOrderDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  ticketId: TicketDTO;
  @ApiProperty()
  memberId: string;
  @ApiProperty()
  email: string;
  @ApiProperty({ type: FileDTO })
  qr: FileDTO;
  @ApiProperty()
  ticketPDF: string;
  @ApiProperty()
  org: string;
  @ApiProperty()
  ticketCount: number;
  @ApiProperty()
  cancelDate: Date;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  status: string;
  @ApiProperty()
  orderId: string;
}