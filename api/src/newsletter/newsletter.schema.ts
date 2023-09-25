import { Document, Schema, model } from 'mongoose';

const newsLetterSchema = new Schema({
  subscriber: String,
  email: String,
});

export interface INewsletter extends Document {
  subscriber: string;
  email: string;
}

export const NewsletterModel = model<INewsletter>('Newsletter', newsLetterSchema);
