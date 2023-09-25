import { model, Schema, Types } from 'mongoose';
import { ITicket } from './interface';
import { TicketAccess, TicketStatus } from './ticket.constants';
import { DisplayIdSchema } from '../globals/displayId/displayId.model';

const AccessSchema = new Schema({
  status: { type: String, enum: TicketAccess },
  listIds: [{ type: Types.ObjectId, ref: 'orgUserList' }],
});

const TicketSchema = new Schema({
  name: { type: String },
  eventId: { type: Types.ObjectId, ref: 'event' },
  capacity: { type: Number },
  soldOut: { type: Number, default: 0 },
  description: { type: String },
  price: { type: Number },
  startDate: { type: Date },
  startTime: { type: String },
  endDate: { type: Date },
  endTime: { type: String },
  minOrder: { type: Number },
  maxOrder: { type: Number },
  access: AccessSchema,
  status: { type: String, enum: TicketStatus },
  org: { type: Types.ObjectId, ref: 'org' },
  displayId: DisplayIdSchema,
});

export const TicketModel = model<ITicket>('ticket', TicketSchema);
