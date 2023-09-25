import { Schema, Types, model } from 'mongoose';
import { ISubscription } from './interface';

const SubscriptionSchema = new Schema({
  subscriber: { type: Types.ObjectId, ref: 'user' },
  eventId: { type: Types.ObjectId, ref: 'event' },
});

export const SubscriptionModel = model<ISubscription>('subscription', SubscriptionSchema);
