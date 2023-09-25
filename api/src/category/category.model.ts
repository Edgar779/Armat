import { Document, model, Schema } from 'mongoose';

const CategorySchema = new Schema({
  categoryName: { type: String, required: true, unique: true },
});

export const CategoryModel = model<ICategory>('category', CategorySchema);

export interface ICategory extends Document {
  categoryName: string;
}
