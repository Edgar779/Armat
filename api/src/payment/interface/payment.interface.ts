import { Document } from 'mongoose';
import { ITicketOrder } from 'src/ticket-order/interface';
import { IUser } from 'src/user';

export interface IPayment extends Document {
  id: string;
  memberId: IUser['_id'];
  orderId: string;
  // ticketOrderId: ITicketOrder['_id'];
  stripeCustomerId: string;
  stripeInvoiceId: string;
  amount: number;
  cancelDate: Date;
  customerEmail: string;
  invoicePDF: string;
  createdAt: string;
}
