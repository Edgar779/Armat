import { Document } from 'mongoose';

export interface ITag extends Document {
  org: string;
  name: string;
  color: string;
}
