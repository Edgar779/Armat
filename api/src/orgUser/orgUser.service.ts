import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { promises as fs } from 'fs';
import { FilterQuery, Model, Types } from 'mongoose';
import { Role, SessionDTO } from 'src/auth';
import { AuthService } from 'src/auth/auth.service';
import { MailerService } from 'src/components/mailer/mailer.service';
import { NotificationService } from 'src/notification/notification.service';
import { UserService } from 'src/user/user.service';
import { MongooseUtil } from 'src/util';
import { NotificationType } from '../util/constants';
import { CreateOrgUserDTO, DeleteOrgUserDTO, GetUserOrgQuery, OrgUserDTO, OrgUserListDTO } from './dto';
import { IOrgUser } from './interface';
import { CSVFields, OrgUser } from './orgUser.constants';
import { OrgUserModel } from './orgUser.model';
import { UserOrgSanitizer } from './orgUser.sanitizer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Parser } = require('json2csv');

@Injectable()
export class OrgUserService {
  constructor(
    private readonly sanitizer: UserOrgSanitizer,
    private readonly mailerService: MailerService,
    private readonly notService: NotificationService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    this.model = OrgUserModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IOrgUser>;
  private mongooseUtil: MongooseUtil;

  /** create new userOrg */
  async createRole(dto: CreateOrgUserDTO): Promise<OrgUserDTO> {
    try {
      let authId: string;
      const [orgUser] = await Promise.all([
        this.model.findOne({ org: dto.org, member: dto.user.id }),
        this.authService.getByEmail(dto.email),
      ]);
      switch (dto.userType) {
        case OrgUser.ORGADMIN:
          await this.enforceOrgAccess([], dto.user, orgUser?.userType);
          break;
        case OrgUser.ORGMANAGER:
          await this.enforceOrgAccess([OrgUser.ORGADMIN], dto.user, orgUser?.userType);
          break;
        case OrgUser.ORGMEMBER:
          await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, orgUser?.userType);
          break;
        default:
          break;
      }

      const invite = await this.invite(dto.email, dto.user, dto.org, dto.name, dto.userType);
      authId = invite;
      const userOrg = new this.model({
        member: dto.member ? dto.member : authId,
        auth: dto.member ? dto.member : authId,
        org: dto.org,
        userType: dto.userType,
      });

      await Promise.all([
        this.notifyRoleChange(dto.user.id, dto.email, dto.userType, orgUser?.userType, authId),
        userOrg.save(),
      ]);

      return this.sanitizer.sanitize(userOrg);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'member is exist');
      throw err;
    }
  }

  /** invite user */
  async invite(email: string, user: SessionDTO, orgId: string, name?: string, userType?: OrgUser): Promise<string> {
    await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, userType);
    const authId = await this.userService.invite(email, name, user.id, orgId, userType);
    return authId;
  }

  /** update user role */
  async updateRole(dto: CreateOrgUserDTO): Promise<OrgUserDTO> {
    const [orgUser, orgUserByMember] = await Promise.all([
      this.model.findOne({ org: dto.org, member: dto.user.id }),
      this.model.findOne({ org: dto.org, member: dto.member }),
    ]);
    this.checkOrgUser(orgUserByMember);
    switch (dto.userType) {
      case OrgUser.ORGADMIN:
        await this.enforceOrgAccess([], dto.user, orgUser?.userType);
        break;
      case OrgUser.ORGMANAGER:
        await this.enforceOrgAccess([OrgUser.ORGADMIN], dto.user, orgUser?.userType);
        break;
      case OrgUser.ORGMEMBER:
        await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, orgUser?.userType);
        break;
      default:
        break;
    }
    orgUserByMember.userType = dto.userType;
    await Promise.all([
      this.notifyRoleChange(dto.user.id, dto.email, dto.userType, orgUser?.userType, dto.member),
      orgUserByMember.save(),
      this.userService.updateUserType(orgUserByMember.member, orgUserByMember.org, dto.userType),
    ]);
    return this.sanitizer.sanitize(orgUserByMember);
  }

  /** delete many members */
  async deleteRoles(dto: DeleteOrgUserDTO): Promise<string[]> {
    const tasks = [];
    const [orgUser, orgUserByMembers] = await Promise.all([
      this.model.findOne({ org: dto.org, member: dto.user.id }),
      this.model.find({ org: dto.org, member: { $in: dto.members } }).populate('member'),
    ]);
    if (orgUserByMembers.length !== dto.members.length) {
      throw new HttpException('some orgusers are not found', HttpStatus.NOT_FOUND);
    }
    // this.checkOrgUser(orgUserByMember);
    for (let i = 0; i < orgUserByMembers.length; i++) {
      const orgUserByMember = orgUserByMembers[i];
      switch (orgUserByMember.userType) {
        case OrgUser.ORGADMIN:
          await this.enforceOrgAccess([], dto.user, orgUser?.userType);
          break;
        case OrgUser.ORGMANAGER:
          await this.enforceOrgAccess([OrgUser.ORGADMIN], dto.user, orgUser?.userType);
          break;
        case OrgUser.ORGMEMBER:
          await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, orgUser?.userType);
          break;
        default:
          break;
      }
      tasks.push(
        this.notService.create({
          type: NotificationType.DELETEMEMBER,
          inviter: dto.user.id,
          userId: orgUserByMember._id,
        }),
        this.notService.sendSMS({ type: NotificationType.DELETEMEMBER, userId: orgUserByMember._id }),
        this.mailerService.sendMail({
          type: NotificationType.DELETEMEMBER,
          userId: orgUserByMember._id,
          email: orgUserByMember.member.email,
        }),
        orgUserByMember.deleteOne(),
        this.userService.deleteUserType(orgUserByMember.member, orgUserByMember.org),
      );
    }
    return dto.members;
  }

  /** find all orgUsers by org id */
  async findAll(orgId: string, dto: GetUserOrgQuery, user?: SessionDTO): Promise<OrgUserListDTO> {
    await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER, OrgUser.ORGMEMBER], user, null, orgId);
    const query: FilterQuery<IOrgUser> = { org: orgId };
    if (dto.tags) {
      query['tags'] = { $in: dto.tags };
    } else if (dto.members) {
      query['_id'] = { $in: dto.members };
    }
    if (dto.userType) query.userType = dto.userType;
    const [orgUsers, count] = await Promise.all([
      this.model.find(query).populate('member').populate('auth').populate('tags').skip(dto.skip).limit(dto.limit),
      this.model.countDocuments(query),
    ]);
    return { orgUsers: this.sanitizer.sanitizeMany(orgUsers), count };
  }

  /** find all orgusers by ids (org)*/
  async findAllByIds(orgId: string, members: string[]): Promise<OrgUserDTO[]> {
    const orgUsers = await this.model.find({ org: orgId, _id: { $in: members } });
    this.checkOrgUser(orgUsers[0]);
    return this.sanitizer.sanitizeMany(orgUsers);
  }

  /** find all orgusers by filters (org) */
  async findAllByFilters(orgId: string, tags: string[]): Promise<OrgUserDTO[]> {
    const orgUsers = await this.model.find({ org: orgId, tags: { $in: tags } });
    this.checkOrgUser(orgUsers[0]);
    return this.sanitizer.sanitizeMany(orgUsers);
  }

  /** find orgUser by id */
  async findOne(_id: string): Promise<OrgUserDTO> {
    const orgUser = await this.model.findById(_id);
    this.checkOrgUser(orgUser);
    return this.sanitizer.sanitize(orgUser);
  }

  /** get orgUser by id (event) */
  async getRaw(_id: string): Promise<IOrgUser> {
    const orgUser = await this.model.findById(_id);
    return orgUser;
  }

  /** find orgUser by member id (event, org)*/
  async getMember(memberId: string, orgId?: string): Promise<IOrgUser> {
    const query: FilterQuery<IOrgUser> = { member: memberId };
    if (orgId) query.org = orgId;
    const orgUser = await this.model.findOne(query);
    return orgUser;
  }

  /** get user type by org id and member id */
  async getUserType(orgId: string, memberId: string): Promise<OrgUser | null> {
    const orgUser = await this.model.findOne({ org: orgId, member: memberId });
    if (orgUser) {
      return orgUser.userType;
    } else {
      return null;
    }
  }

  /** assign tag */
  async assignTag(_id: string, tagId: string, orgId: string, user: SessionDTO): Promise<OrgUserDTO> {
    await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    const orgUser = await this.model.findById(_id);
    this.checkOrgUser(orgUser);
    const index = orgUser.tags.findIndex((tag) => {
      return tag.toString() === tagId.toString();
    });
    if (index !== -1) {
      throw new HttpException('Tag exist', HttpStatus.BAD_REQUEST);
    }
    orgUser.tags.push(tagId);
    await orgUser.save();
    return this.sanitizer.sanitize(orgUser);
  }

  /** unassign tag */
  async unassignTag(_id: string, tagId: string, orgId: string, user: SessionDTO): Promise<OrgUserDTO> {
    await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId);
    const orgUser = await this.model.findById(_id);
    this.checkOrgUser(orgUser);
    const index = orgUser.tags.findIndex((tag) => {
      return tag.toString() === tagId.toString();
    });
    if (index === -1) {
      throw new HttpException('Tag was not found', HttpStatus.BAD_REQUEST);
    }
    orgUser.tags.splice(index, 1);
    await orgUser.save();
    return this.sanitizer.sanitize(orgUser);
  }

  /** delete the members */
  async deleteMembers(memberIds: string[], orgId: string, user: SessionDTO): Promise<string[]> {
    const orgUser = await this.model.findOne({ member: user.id, org: orgId });
    this.checkOrgUser(orgUser);
    await this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, orgUser?.userType);
    const tasks = [];
    const members = await this.model.find({ org: orgId, member: { $in: memberIds } }).populate('member');
    members.forEach((memberDetail) => {
      tasks.push(
        this.notService.create({ type: NotificationType.DELETEMEMBER, inviter: user.id, userId: memberDetail.member }),
        this.notService.sendSMS({ type: NotificationType.DELETEMEMBER, userId: memberDetail.member }),
        this.mailerService.sendMail({
          type: NotificationType.DELETEMEMBER,
          userId: memberDetail.member,
          email: memberDetail.member.member.email,
        }),
        this.model.deleteMany({ org: orgId, member: { $in: memberIds } }),
      );
    });
    await Promise.all(tasks);
    return memberIds;
  }

  /** download csv file */
  async getCsvFile(orgId: string, dto: GetUserOrgQuery, user: SessionDTO, res: Response) {
    const query: FilterQuery<IOrgUser> = { org: orgId };
    if (dto.tags) {
      query['tags'] = { $in: dto.tags };
    } else if (dto.members) {
      query['_id'] = { $in: dto.members };
    }
    const [orgUsers] = await Promise.all([
      this.model.find(query).populate('member'),
      this.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, orgId),
    ]);
    const csvData = this.getCSVData(orgUsers);
    const parser = new Parser({ fields: CSVFields });
    const csv = parser.parse(csvData);
    const paths = process.cwd() + '/src/views/Members.csv';
    await fs.writeFile(paths, csv);
    res.download(paths);
  }

  /*Enforces acces. If the user does not have the needed role, an exception is thrown */
  async enforceOrgAccess(allowedRoles: OrgUser[], user?: SessionDTO, userType: OrgUser = null, orgId: string = null) {
    if (user?.role === Role.ADMIN) {
      return true;
    }
    let type: OrgUser = userType;
    if (orgId) {
      type = await this.getUserType(orgId, user.id);
    }
    if (!this.hasAccess(allowedRoles, type)) {
      throw new HttpException('User does not have permission to access resource', HttpStatus.UNAUTHORIZED);
    }
  }

  /** Verifies Roles - checks if the user has the needed roles or not*/
  hasAccess(allowedRoles: OrgUser[], userType: OrgUser) {
    if (!userType) return false;
    if (allowedRoles.find((role) => role === userType)) {
      return true;
    } else {
      return false;
    }
  }

  /***************************** Private Methods ****************************/
  /** @throws not found exception if the orgUser was not found */
  private checkOrgUser(orgUser: IOrgUser) {
    if (!orgUser) {
      throw new HttpException('OrgUser with this information was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** returns the data that will be used to generate a CSV file */
  private getCSVData(orgUsers: IOrgUser[]): any[] {
    const csvData: any[] = [];
    orgUsers.forEach((orgUser) => {
      csvData.push({
        email: orgUser.member?.email,
        fullName: orgUser.member?.fullName,
        phoneNumber: orgUser.member?.phoneNumber,
        userType: orgUser?.userType,
      });
    });
    return csvData;
  }

  /** Compares old role and new role based on the hierarchi of the roles.
   * @returns 0 if roles are the same, 1 if new role is an upgrade and -1 if the new role is a downgrade
   */
  private compareRoles(newRole: OrgUser, oldRole?: OrgUser): number {
    if (!oldRole) return 1;
    const roles = [OrgUser.ORGMEMBER, OrgUser.ORGMANAGER, OrgUser.ORGADMIN];
    const newRoleIndex = roles.findIndex((role) => newRole === role);
    const oldRoleIndex = roles.findIndex((role) => oldRole === role);
    if (newRoleIndex == oldRoleIndex) return 0;
    if (newRoleIndex > oldRoleIndex) return 1;
    return -1;
  }

  /** Send in-app notification */
  private async notifyRoleChange(
    inviter: string,
    email: string,
    newRole: OrgUser,
    oldRole?: OrgUser,
    userId?: string,
  ): Promise<string> {
    const isUpgrade = this.compareRoles(newRole, oldRole) < 0 ? false : true;
    let message = 'null';
    let type = null;
    switch (newRole) {
      case OrgUser.ORGADMIN:
        type = NotificationType.UPGRADE_ORGANIZATION_ADMIN;
        message = 'The member has been upgraded to an organization admin';
        break;
      case OrgUser.ORGMANAGER:
        if (isUpgrade) {
          type = NotificationType.UPGRADE_ORGANIZATION_MANAGER;
          message = 'The member has been upgraded to an organization manager';
        } else {
          type = NotificationType.DOWNGRADE_ORGANIZATION_MANAGER;
          message = 'The member has been downgraded to a organization manager';
        }
        break;
      case OrgUser.ORGMEMBER:
        if (isUpgrade) {
          type = NotificationType.UPGRADE_ORGANIZATION_MEMBER;
          message = 'The member has been upgraded to an organization member';
        } else {
          type = NotificationType.DOWNGRADE_ORGANIZATION_MEMBER;
          message = 'The member has been downgraded to a organization member';
        }
        break;
    }
    if (userId) {
      await this.notService.create({ type, inviter, userId });
      await this.notService.sendSMS({ type, userId });
      await this.mailerService.sendMail({ type, email, userId });
    } else {
      await this.mailerService.sendMail({ type, email });
    }
    return message;
  }
}
