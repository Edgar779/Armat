import { Document } from 'mongoose';
import { FileDTO } from 'src/file';
import { ITicket } from 'src/ticket/interface';
import { IUser } from 'src/user';

export interface ITicketOrder extends Document {
  ticketId: ITicket['_id'];
  memberId: IUser['_id'];
  email: string;
  qr: FileDTO;
  ticketPDF: string;
  org: string;
  ticketCount: number;
  cancelDate: Date;
  createdAt: Date;
  status: string;
  price: number;
  orderId: string;
}
