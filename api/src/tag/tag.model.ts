import { model, Schema, Types } from 'mongoose';
import { ITag } from './interface';

export const tagSchema = new Schema(
  {
    org: { type: Types.ObjectId, ref: 'org' },
    name: { type: String },
    color: { type: String },
  },
  { timestamps: true },
);

export const TagModel = model<ITag>('tag', tagSchema);
