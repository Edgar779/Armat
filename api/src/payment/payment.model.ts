import { model, Schema, Types } from 'mongoose';
import { IPayment } from './interface';

const PaymentSchema = new Schema(
  {
    memberId: { type: Types.ObjectId, ref: 'user' },
    orderId: { type: String },
    // ticketOrderId: { type: Types.ObjectId, ref: 'ticketOrder' },
    stripeInvoiceId: { type: String },
    amount: { type: Number },
    stripeCustomerId: { type: String },
    customerEmail: { type: String },
    cancelDate: { type: Date },
    invoicePDF: { type: String }
  },
  { timestamps: true },
);

export const PaymentModel = model<IPayment>('payment', PaymentSchema);
