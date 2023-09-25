import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseUtil } from '../util';
import { CategoryModel, ICategory } from './category.model';

@Injectable()
export class CategoryService {
  constructor() {
    this.model = CategoryModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<ICategory>;
  private mongooseUtil: MongooseUtil;

  /** add tags */
  create = async (categories: string[]): Promise<string[]> => {
    try {
      let docs = categories.map((category) => new this.model({ categoryName: category }));
      docs = await this.model.insertMany(docs, { ordered: false });
      return docs.map((category) => category.categoryName);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, ' User with this email or phone number exists');
      throw err;
    }
  };

  /** Get all tags */
  getAll = async (): Promise<string[]> => {
    const categories = await this.model.find();
    return categories.map((category) => category.categoryName);
  };

  /** Delete a tag by its name */
  delete = async (categories: string[]): Promise<number> => {
    const result = await this.model.deleteMany({ categoryName: { $in: categories } });
    return result.deletedCount;
  };
}
