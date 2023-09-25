import { Document, Types } from 'mongoose';
import { IUser } from '../../user';

export interface IOrgClaim extends Document {
  id: string;
  org: Types.ObjectId;
  user: IUser['id'];
  createdAt: Date;
  email: string;
}
