import { Document } from 'mongoose';
import { Role } from '..';

export interface IInvitation extends Document {
  role: Role;
  email: string;
  inviter: string;
}
