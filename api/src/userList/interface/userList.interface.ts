import { IOrg } from 'src/org';
import { IOrgUser } from 'src/orgUser/interface';
import { Document } from 'mongoose';

export interface IUserList extends Document {
  id?: string;
  org: IOrg['_id'];
  name: string;
  members: IOrgUser['_id'];
}
