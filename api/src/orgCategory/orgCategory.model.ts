import { model, Schema, Types } from 'mongoose';
import { IOrgCategory } from './interface';

const orgCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  parent: { type: Types.ObjectId, ref: 'orgCategory' },
  nonProfitUsers: [String],
  businessUsers: [String],
  // nonProfitUsedCount: Number,
  // businessUsedCount: Number,
});

export const OrgCategoryModel = model<IOrgCategory>('orgCategory', orgCategorySchema);
