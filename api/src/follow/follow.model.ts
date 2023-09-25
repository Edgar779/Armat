import { Types, Schema, model } from 'mongoose';
import { IFollow } from './interface';

const followSchema = new Schema({
  uniqueId: { type: String, required: true, unique: true },
  user: { type: Types.ObjectId, ref: 'user', required: true },
  org: { type: Types.ObjectId, ref: 'org', required: true },
});

export const FollowModel = model<IFollow>('follow', followSchema);
