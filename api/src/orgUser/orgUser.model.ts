import { model, Schema, Types } from 'mongoose';
import { IOrgUser } from './interface';
import { OrgUser } from './orgUser.constants';

const orgUserSchema = new Schema(
  {
    member: { type: Types.ObjectId, ref: 'user' },
    auth: { type: Types.ObjectId, ref: 'auth' },
    org: { type: Types.ObjectId, ref: 'org' },
    tags: [{ type: Types.ObjectId, ref: 'tag' }],
    userType: { type: String, enum: OrgUser },
  },
  { timestamps: true },
);

export const OrgUserModel = model<IOrgUser>('orgUser', orgUserSchema);
