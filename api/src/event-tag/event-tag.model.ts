import { model, Schema } from 'mongoose';
import { IEventTag } from './interface';

const EventTagSchema = new Schema({
  tagName: { type: String, required: true, unique: true },
});

export const EventTagModel = model<IEventTag>('eventTag', EventTagSchema);
