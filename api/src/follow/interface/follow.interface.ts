import { Document } from 'mongoose';

export interface IFollow extends Document {
  uniqueId: string;
  user: string;
  org: string;
}
