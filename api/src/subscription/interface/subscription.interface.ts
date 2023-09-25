import { Types, Document } from 'mongoose';

export interface ISubscription extends Document {
  subscriber: Types.ObjectId;
  eventId: Types.ObjectId;
}
