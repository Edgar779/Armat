import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseUtil } from 'src/util';
import { FollowDTO } from './dto';
import { FollowModel } from './follow.model';
import { FollowSanitizer } from './follow.sanitizer';
import { IFollow } from './interface';

@Injectable()
export class FollowService {
  constructor(private readonly sanitizer: FollowSanitizer) {
    this.model = FollowModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IFollow>;
  private mongooseUtil: MongooseUtil;

  /** Create a new follow  */
  async create(userId: string, orgId: string): Promise<FollowDTO> {
    const follow = new this.model({
      uniqueId: userId + orgId,
      org: orgId,
      user: userId,
    });
    try {
      await follow.save();
      return this.sanitizer.sanitize(follow);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'You are already following this organization');
      throw err;
    }
  }

  /** Return all the follows that have this organizaton  */
  async getByOrg(orgId: string): Promise<FollowDTO[]> {
    const follows = await this.model.find({ org: orgId }).populate('user');
    return this.sanitizer.sanitizeMany(follows);
  }

  /** Return all the follows that have this user  */
  async getByUser(userId: string): Promise<FollowDTO[]> {
    const follows = await this.model.find({ user: userId });
    return this.sanitizer.sanitizeMany(follows);
  }

  /** Remove a follow */
  async delete(userId: string, orgId: string): Promise<string> {
    const follow = await this.model.findOneAndDelete({ uniqueId: userId + orgId });
    this.checkFollow(follow);
    return follow._id;
  }

  /** Private methods */
  private checkFollow(follow: IFollow) {
    if (!follow) {
      throw new HttpException('Could not find the follower link', HttpStatus.NOT_FOUND);
    }
  }
}
