import { Document } from 'mongoose';

export interface IEventTag extends Document {
  tagName: string;
}
