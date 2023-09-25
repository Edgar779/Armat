import { Document, Types } from 'mongoose';
import { IWeek } from 'src/components/schedule';
import { IUser } from '../../user';

export interface IOrgEdit extends Document {
  org: Types.ObjectId;
  editor: IUser['id'];
  name?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  categories?: string[];
  description?: string;
  hours?: IWeek;
  website?: string;
  createdAt: Date;
}
