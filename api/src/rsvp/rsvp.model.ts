import { model, Schema, Types } from 'mongoose';
import { IRsvp } from './interface';
import { RsvpStatus } from './rsvp.constants';

const rsvpSchema = new Schema(
  {
    eventId: { type: Types.ObjectId, ref: 'event' },
    memberId: { type: Types.ObjectId, ref: 'user' },
    status: { type: String, enum: RsvpStatus },
  },
  { timestamps: true },
);

export const RsvpModel = model<IRsvp>('rsvp', rsvpSchema);
