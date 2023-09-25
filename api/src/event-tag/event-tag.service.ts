import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseUtil } from '../util';
import { IEventTag } from './interface';
import { EventTagModel } from './event-tag.model';
import { OrgUserService } from 'src/orgUser/orgUser.service';

@Injectable()
export class EventTagService {
  constructor() {
    this.model = EventTagModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private readonly model: Model<IEventTag>;
  private mongooseUtil: MongooseUtil;

  /** add tags */
  create = async (tags: string[]): Promise<string[]> => {
    try {
      const docs = tags.map((tag) => new this.model({ tagName: tag }));
      const addedTags = await this.model.insertMany(docs, { ordered: false });
      return addedTags.map((tag) => tag.tagName);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, ' User with this email or phone number exists');
      throw err;
    }
  };

  /** Get all tags */
  getAll = async (): Promise<string[]> => {
    const tags = await this.model.find();
    return tags.map((tag) => tag.tagName);
  };

  /** Delete a tag by its name */
  delete = async (tags: string[]): Promise<number> => {
    const result = await this.model.deleteMany({ tagName: { $in: tags } });
    return result.deletedCount;
  };
}
