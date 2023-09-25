import { model, Schema, Types } from 'mongoose';
import { IUserList } from './interface';

const ListSchema = new Schema(
  {
    org: { type: Types.ObjectId, ref: 'org' },
    name: { type: String },
    members: [{ type: Types.ObjectId, ref: 'orgUser' }],
  },
  { timestamps: true },
);
export const OrgUserListModel = model<IUserList>('userList', ListSchema);
