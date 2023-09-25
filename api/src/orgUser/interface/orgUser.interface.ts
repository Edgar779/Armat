import { Document } from 'mongoose';
import { IOrg } from 'src/org';
import { IUser } from 'src/user/interface';
import { OrgUser } from '../orgUser.constants';
import { IAuth } from 'src/auth';
import { ITag } from 'src/tag/interface';

export interface IOrgUser extends Document {
  member: IUser['_id'];
  auth: IAuth['_id'];
  org: IOrg['_id'];
  tags: ITag['_id'];
  userType: OrgUser;
}

export interface IMember {
  _id?: string;
  email: string;
  fullName: string;
  phoneNumber: string;
}
