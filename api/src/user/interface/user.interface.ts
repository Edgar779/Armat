import { Document } from 'mongoose';
import { FileDTO } from '../../file';
import { IAuth } from '../../auth';

export interface IOrganizer {
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
}

export interface IUser extends Document {
  auth: string | IAuth;
  orgs: Array<any>;
  fullName: string;
  email: string;
  phoneNumber?: string;
  avatar?: FileDTO;
  socialAvatar: string;
  organizerInfo?: IOrganizer;
  settings: {
    notificationSettings: {
      allowText: boolean;
      allowInApp: boolean;
      allowEmail: boolean;
    };
  };
}
