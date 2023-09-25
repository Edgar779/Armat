import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTagDTO, EditTagDTO, TagDTO } from './dto';
import { ITag } from './interface';
import { TagModel } from './tag.model';
import { TagSanitizer } from './tag.sanitizer';
import { Model } from 'mongoose';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { SessionDTO } from 'src/auth';

@Injectable()
export class TagService {
  constructor(private readonly sanitizer: TagSanitizer, private readonly orgUserService: OrgUserService) {
    this.model = TagModel;
  }
  private model: Model<ITag>;
  async create(dto: CreateTagDTO): Promise<TagDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, dto.org);
    const tags = await this.model.find({ org: dto.org });
    const index = tags.findIndex((tag) => {
      return tag.name === dto.name;
    });
    if (index !== -1) {
      throw new HttpException('Tag exist', HttpStatus.BAD_REQUEST);
    }
    const tag = new this.model({
      org: dto.org,
      name: dto.name,
      color: dto.color,
    });
    await tag.save();
    return this.sanitizer.sanitize(tag);
  }

  /** find all tags */
  async findAll(org: string, user: SessionDTO): Promise<TagDTO[]> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, org);
    const tags = await this.model.find({ org: org });
    return this.sanitizer.sanitizeMany(tags);
  }

  /** find tag by id */
  async findOne(_id: string, org: string, user: SessionDTO): Promise<TagDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, org);
    const tag = await this.model.findOne({ _id, org: org });
    this.checkTag(tag);
    return this.sanitizer.sanitize(tag);
  }

  /** update the tag */
  async update(_id: string, org: string, dto: EditTagDTO) {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, org);
    const tag = await this.model.findOne({ _id, org: org });
    this.checkTag(tag);
    if (dto.name) tag.name = dto.name;
    if (dto.color) tag.color = dto.color;
    await tag.save();
    return this.sanitizer.sanitize(tag);
  }

  /** delete the tag */
  async remove(_id: string, org: string, user: SessionDTO): Promise<string> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, org);
    const tag = await this.model.findOne({ _id, org: org });
    this.checkTag(tag);
    await tag.deleteOne();
    return _id;
  }

  /***************************** Private Methods ****************************/
  /** @throws not found exception if the tag was not found */
  private checkTag(tag: ITag) {
    if (!tag) {
      throw new HttpException('Tag with this information was not found', HttpStatus.NOT_FOUND);
    }
  }
}
