import { Document } from 'mongoose';
import { Role } from '..';
import { IUser } from '../../user';
import { AuthStatus } from '../constants';
/** Data type is used to descibe the data model of the Auth collection */
export interface IAuth extends Document {
  email: string;
  password?: string;
  googleId?: string;
  appleId?: string;
  twitterId?: string;
  facebookId?: string;
  invitedBy?: string | IUser;
  role: Role;
  phoneNumber?: string;
  /**Mathods */
  comparePassword?: any;
  sessions: string[];
  status: AuthStatus;
}
