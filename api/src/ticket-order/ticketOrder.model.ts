import { model, Schema, Types } from 'mongoose';
import { FileSchema } from 'src/file';
import { ITicketOrder } from './interface';
import { TikcetOrderStatus } from './ticketOrder.constants';

const TicketOrderSchema = new Schema(
  {
    orderId: { type: String },
    ticketId: { type: Types.ObjectId, ref: 'ticket' },
    memberId: { type: Types.ObjectId, ref: 'user' },
    email: { type: String },
    org: { type: Types.ObjectId, ref: 'org' },
    qr: FileSchema,
    ticketPDF: { type: String },
    status: { type: String, enum: TikcetOrderStatus, default: TikcetOrderStatus.NOTCHECKED },
    cancelDate: { type: Date },
    price: Number,
  },
  { timestamps: true },
);

export const TicketOrderModel = model<ITicketOrder>('ticketOrder', TicketOrderSchema);
