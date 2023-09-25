import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { SessionDTO } from 'src/auth';
import { OrgUserDTO } from 'src/orgUser/dto';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import {
  AssignUserListDTO,
  CreateUserListDTO,
  DeleteUserListDTO,
  EditListDTO,
  GetUserListQuery,
  UserListCountDTO,
  UserListDTO,
} from './dto';
import { IUserList } from './interface';
import { OrgUserListModel } from './list.model';
import { UserListSanitizer } from './userList.sanitizer';

@Injectable()
export class ListService {
  constructor(private readonly sanitizer: UserListSanitizer, private readonly orgUserService: OrgUserService) {
    this.model = OrgUserListModel;
  }
  private model: Model<IUserList>;

  /** create user list */
  async create(orgId: string, dto: CreateUserListDTO): Promise<UserListDTO> {
    const list = new this.model({
      org: orgId,
      name: dto.listName,
      members: dto.members,
    });
    await list.save();
    return this.sanitizer.sanitize(list);
  }

  /** add user in list */
  async assignUserToList(_id: string, orgId: string, dto: AssignUserListDTO): Promise<UserListDTO> {
    if (!dto.members && !dto.tags) {
      throw new HttpException('Members or tags should not be empty', HttpStatus.BAD_REQUEST);
    }
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, orgId);
    const [list, orgUsers] = await Promise.all([
      this.model.findById(_id),
      dto.members
        ? this.orgUserService.findAllByIds(orgId, dto.members)
        : this.orgUserService.findAllByFilters(orgId, dto.tags),
    ]);
    this.checkList(list);
    const members = this.filterOrgMembers(list.members as any, orgUsers);
    list.members.push(...members);
    await list.save();
    return this.sanitizer.sanitize(list);
    // return this.sanitizer.sanitize(await org.populate({ path: 'userList', populate: { path: 'members' } }));
  }

  /** get user list by member id */
  async getById(_id: string): Promise<UserListDTO> {
    const list = await this.model.findById(_id).populate('members');
    this.checkList(list);
    return this.sanitizer.sanitize(list);
  }

  /** get user list by member id */
  async getListsByOrg(orgId: string, user: SessionDTO): Promise<UserListDTO[]> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    const lists = await this.model.find({ org: orgId });
    return this.sanitizer.sanitizeMany(lists);
  }

  /** get user list by member id */
  async getByQuery(_id: string, orgId: string, dto: GetUserListQuery, user: SessionDTO): Promise<UserListCountDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    const query: FilterQuery<IUserList> = { _id, org: orgId };
    const filterQuery: FilterQuery<IUserList> = {};
    if (dto.tags) filterQuery['tags.name'] = { $in: dto.tags };
    if (dto.userType) filterQuery['userType'] = dto.userType;
    const [list, count] = await Promise.all([
      this.model.findOne(query).populate({
        path: 'members',
        options: { skip: dto.skip, limit: dto.limit },
        match: filterQuery,
        populate: [{ path: 'tags' }, { path: 'member' }],
      }),
      this.model.findById(_id),
    ]);
    this.checkList(list);
    return { list: this.sanitizer.sanitize(list), count: count.members.length };
  }

  /** update user list */
  async update(_id: string, orgId: string, dto: EditListDTO): Promise<UserListDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, orgId);
    const list = await this.model.findOne({ _id, org: orgId });
    this.checkList(list);
    list.name = dto.name;
    await list.save();
    return this.sanitizer.sanitize(list);
  }

  /** delete the list */
  async remove(_id: string, orgId: string): Promise<string> {
    const list = await this.model.findOne({ _id, org: orgId });
    this.checkList(list);
    await list.deleteOne();
    return _id;
  }

  /** delete user in list */
  async deleteUserList(_id: string, orgId: string, dto: DeleteUserListDTO): Promise<UserListDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, orgId);
    const list = await this.model.findOne({ _id, org: orgId });
    this.checkList(list);
    dto.members.forEach((member) => {
      const index = list.members.findIndex((el) => {
        return el.id.toString() === member.toString();
      });
      list.members.splice(list.members[index], 1);
    });
    await list.save();
    return this.sanitizer.sanitize(list);
  }

  /** Private Methods */
  /** @throws not found exception if the list was not found */
  private checkList(list: IUserList) {
    if (!list) {
      throw new HttpException('Could not find the list', HttpStatus.NOT_FOUND);
    }
  }

  /** filter duplicate users */
  private filterOrgMembers(listMembers: string[], orgUsers: OrgUserDTO[]): string[] {
    const memberIds = [];
    for (let i = 0; i < orgUsers.length; i++) {
      const index = listMembers.findIndex((member) => {
        return member.toString() === orgUsers[i].id.toString();
      });
      if (index === -1) {
        memberIds.push(orgUsers[i].id);
      }
    }
    return memberIds;
  }
}
