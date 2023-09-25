import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { FilterQuery, Model } from 'mongoose';
import { IEvent } from 'src/event';
import { FileDTO } from 'src/file';
import { OrgCategoryService } from 'src/orgCategory/orgCategory.service';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { OrgUserService } from 'src/orgUser/orgUser.service';
import { CreateUserListDTO } from 'src/userList/dto';
import { ListService } from 'src/userList/userList.service';
import { AlgoliaService } from '../algolia/algolia.service';
import { Role, SessionDTO } from '../auth';
import { AuthService } from '../auth/auth.service';
import { AddressService } from '../components/address/address.service';
import { SendMailDTO } from '../components/mailer/dto/sendMail.dto';
import { MailerService } from '../components/mailer/mailer.service';
import { ScheduleService } from '../components/schedule/schedule.service';
import { FileService } from '../file/file.service';
import { FollowService } from '../follow/follow.service';
import { CreateNotificationDTO, SMSDTO } from '../notification/dto';
import { NotificationService } from '../notification/notification.service';
import { SponsorService } from '../sponsor/sponsor.service';
import { NotificationType } from '../util/constants';
import { ClaimSanitizer } from './claim.sanitizer';
import {
  ClaimDTO,
  CreateOrgDTO,
  EditOrgDTO,
  EditRO,
  EditSocialsDTO,
  OrgDTO,
  QueryDTO,
  ReviewsDTO,
  SetStatusDTO,
  SocialsDTO,
} from './dto';
import { IOrg, IOrgEdit } from './interface';
import { GOOGLE_API_KEY, OrgEditAction, OrgStatus, YELP_API_KEY } from './org.constants';
import { OrgClaimModel, OrgEditModel, OrgModel } from './org.model';
import { OrgSanitizer } from './org.sanitizer';

@Injectable()
export class OrgService {
  constructor(
    private readonly sanitizer: OrgSanitizer,
    private readonly authService: AuthService,
    private readonly addressService: AddressService,
    private readonly scheduleService: ScheduleService,
    private readonly claimSanitizer: ClaimSanitizer,
    private readonly notService: NotificationService,
    private readonly fileService: FileService,
    private readonly followService: FollowService,
    private readonly mailService: MailerService,
    private readonly algoliaService: AlgoliaService,
    private readonly sponsorService: SponsorService,
    private readonly orgCatService: OrgCategoryService,
    private readonly orgUserService: OrgUserService,
    private readonly listService: ListService,
  ) {
    this.model = OrgModel;
  }
  private model: Model<IOrg>;

  /** create a new organization */
  async create(dto: CreateOrgDTO): Promise<OrgDTO> {
    const org = new this.model({
      name: dto.name,
      type: dto.type,
      phoneNumber: dto.phoneNumber,
      email: dto.email,
      creator: dto.user.id,
      address: await this.addressService.getAddress(dto.address),
      mainImage: dto.mainImage,
      avatar: dto.avatar,
      images: dto.images ? dto.images : [],
      numEdits: 0,
      description: dto.description,
      hours: this.scheduleService.createSchedule(dto.hours),
      website: dto.website,
      socails: {},
      reviews: {},
      categories: dto.categories ? dto.categories : [],
      userList: [],
    });
    this.authService.hasAccess([Role.ADMIN], dto.user);
    await this.orgCatService.addOrgs(dto.categories, org._id.toString(), dto.type);
    org.status = OrgStatus.ACTIVE;
    await org.save();
    const populated = await this.model.findById(org._id).populate('creator').populate('categories');
    await this.algoliaService.addOrg(populated);
    return this.sanitizer.sanitize(populated);
  }

  /** edit an organization */
  async edit(id: string, dto: EditOrgDTO): Promise<OrgDTO> {
    console.log(dto.user, 'haf', id)
    const [org] = await Promise.all([
      this.model.findById(id),
      this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, id),
    ]);
    this.checkOrg(org);
    if (dto.name) org.name = dto.name;
    if (dto.phoneNumber) org.phoneNumber = dto.phoneNumber;
    if (dto.email) org.email = dto.email;
    if (dto.type) org.type = dto.type;
    if (dto.description) org.description = dto.description;
    if (dto.website) org.website = dto.website;
    if (dto.address) org.address = await this.addressService.getAddress(dto.address);
    if (dto.hours) org.hours = this.scheduleService.createSchedule(dto.hours);
    if (dto.categories) {
      await Promise.all([
        this.orgCatService.removeOrgs(org.categories, org._id.toString(), org.type),
        this.orgCatService.addOrgs(dto.categories, org._id.toString(), org.type),
      ]);
      org.categories = dto.categories;
    }
    // Avatar operations
    if (dto.removeAvatar) {
      await this.fileService.deleteFile(dto.user.id.toString(), org.avatar.id);
      org.avatar = undefined;
    } else if (dto.changeAvatar) {
      if (org.avatar) {
        await this.fileService.deleteFile(dto.user.id.toString(), org.avatar.id);
      }
      org.avatar = dto.changeAvatar;
    }
    await this.manageImages(org, dto);
    await org.save();
    const populated = await this.model.findById(org._id).populate('creator').populate('categories');
    await this.algoliaService.addOrg(populated);
    return this.sanitizer.sanitize(populated);
  }

  /** Return the organization edits */
  async getEdits(id: string, user: SessionDTO): Promise<EditRO[]> {
    this.authService.enforceAccess([Role.ADMIN], user);
    const edits = await OrgEditModel.find({ org: id }).populate('categories').populate('editor');
    return this.sanitizer.sanitizeOrgEdits(edits);
  }

  /** Get an organization */
  async get(_id: string, user?: SessionDTO): Promise<OrgDTO> {
    const query: FilterQuery<IOrg> = { _id };
    const [org] = await Promise.all([
      this.model
        .findOne(query)
        .populate('categories')
        .populate({
          path: 'userList',
          populate: { path: 'members' },
        }),
      // this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, _id),
    ]);
    this.checkOrg(org);
    return this.sanitizer.sanitize(org);
  }

  /** Get an organization */
  async getRaw(id: string): Promise<IOrg> {
    const org = await this.model.findById(id);
    this.checkOrg(org);
    return org;
  }

  /** get list by member (event) */
  async getListByMember(_id: string, listIds: string[], userId: string): Promise<number> {
    const org = await this.model.findById(_id).populate({ path: 'userList', match: { _id: { $in: listIds } } });
    const validLists = org.userList.filter((list) => list.members.includes(userId));
    return validLists.length;
  }

  /** find member litst */
  async findMemberLists(userId: string, orgId?: string): Promise<string[]> {
    const lists = [];
    const org = await this.model.findById(orgId).populate('userList');
    if (!org) return lists;
    org.userList.forEach((list) => {
      list.members.forEach((member) => {
        if (member.toString() === userId.toString()) {
          lists.push(list._id);
        }
      });
    });
    return lists;
  }
  /** check lists */
  async isOrgList(_id: string, listIds: string[]) {
    const org = await this.model.findById(_id);
    this.checkOrg(org);
    if (!org.userList?.length) throw new HttpException('List was not found', HttpStatus.NOT_FOUND);
    listIds.forEach((listId) => {
      const index = org.userList.findIndex((list) => list._id.toString() === listId.toString());
      if (index === -1) {
        throw new HttpException('List with this listId was not found', HttpStatus.NOT_FOUND);
      }
    });
  }

  /** get all orgs public data */
  async getAll(filters: QueryDTO): Promise<OrgDTO[]> {
    const query: FilterQuery<IOrg> = {};
    if (filters?.type) query.type = filters.type;
    if (filters?.status) query.status = filters.status;
    if (filters?.categories) query.categories = { $in: filters.categories };
    const orgs = await this.model.find(query).populate('creator').populate('categories');
    return this.sanitizer.sanitizeMany(orgs);
  }

  /** Get all organization by user id- can provide a filter by type, paginated */
  async getMyOrgs(filters: QueryDTO, user: SessionDTO): Promise<OrgDTO[]> {
    this.authService.hasAccess([Role.ADMIN], user);
    const query: FilterQuery<IOrg> = { creator: user.id };
    if (filters?.type) query.type = filters.type;
    if (filters?.status) query.status = filters.status;
    if (filters?.categories) query.categories = { $in: filters.categories };
    const orgs = await this.model.find(query).populate('creator').populate('categories');
    return this.sanitizer.sanitizeMany(orgs);
  }

  /** Get all organization by admin - can provide a filter by type, paginated */
  async getAllByAdmin(filters: QueryDTO, user: SessionDTO): Promise<OrgDTO[]> {
    this.authService.hasAccess([Role.ADMIN], user);
    const query: FilterQuery<IOrg> = {};
    if (filters?.type) query.type = filters.type;
    if (filters?.status) query.status = filters.status;
    if (filters?.categories) query.categories = { $in: filters.categories };
    const orgs = await this.model.find(query).populate('creator').populate('categories');
    return this.sanitizer.sanitizeMany(orgs);
  }

  /** get all orgs by member - can provide a filter by type, paginated*/
  async getAllByMember(filters: QueryDTO, user: SessionDTO): Promise<OrgDTO[]> {
    const orgUser = await this.orgUserService.getMember(user.id);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, orgUser?.userType, null);
    const query: FilterQuery<IOrg> = {};
    const filterQuery: FilterQuery<IOrg> = { member: user.id };
    if (filters?.type) query.type = filters.type;
    if (filters?.status) query.status = filters.status;
    if (filters?.categories) query.categories = { $in: filters.categories };
    const orgs = await this.model
      .find(query)
      .populate('creator')
      .populate('categories')
      .populate({ path: 'userList', populate: { path: 'members', match: filterQuery } });
    return this.sanitizer.sanitizeMany(this.sanitizeOrgs(orgs));
  }

  /** Gets the orgs that the user is following */
  async getFollowed(userId: string): Promise<OrgDTO[]> {
    const follows = await this.followService.getByUser(userId);
    const ids = [];
    for (let i = 0; i < follows.length; i++) {
      ids.push(follows[i].orgId);
    }
    const orgs = await this.model.find({ _id: { $in: ids } });
    return this.sanitizer.sanitizeMany(orgs);
  }

  /** Approve or reject org edits decided by the @param action */
  async processEdit(editId: string, user: SessionDTO, action: OrgEditAction): Promise<OrgEditAction> {
    this.authService.enforceAccess([Role.ADMIN], user);
    const edit = await OrgEditModel.findById(editId);
    this.checkEdit(edit);
    const org = await this.model.findById(edit.org);
    this.checkOrg(org);
    const tasks = [];
    if (action === OrgEditAction.APPROVE) {
      //Appoving an edit
      if (edit.name) org.name = edit.name;
      if (edit.phoneNumber) org.phoneNumber = edit.phoneNumber;
      if (edit.email) org.email = edit.email;
      if (edit.address) org.address = await this.addressService.getAddress(edit.address);
      if (edit.description) org.description = edit.description;
      if (edit.website) org.website = edit.website;
      if (edit.hours) org.hours = edit.hours;
      if (edit.categories) {
        tasks.push(this.orgCatService.removeOrgs(org.categories, org._id.toString(), org.type));
        tasks.push(this.orgCatService.addOrgs(edit.categories, org._id.toString(), org.type));
        org.categories = edit.categories;
      }
    }
    org.numEdits = org.numEdits - 1;
    tasks.push(org.save());
    tasks.push(edit.deleteOne());
    await Promise.all(tasks);
    const populated = await this.model.findById(org._id).populate('creator').populate('categories');
    await this.algoliaService.addOrg(populated);
    return action;
  }

  /** change organization status */
  async setStatus(id: string, dto: SetStatusDTO): Promise<OrgDTO> {
    const org = await this.model.findById(id);
    this.checkOrg(org);
    if (dto.status === OrgStatus.REJECTED) {
      this.authService.enforceAccess([Role.ADMIN], dto.user);
      org.comment = dto.comment;
      if (org.status === OrgStatus.ACTIVE) {
        this.orgCatService.removeOrgs(org.categories, org._id.toString(), org.type);
      }
    } else if (dto.status === OrgStatus.ACTIVE) {
      this.authService.enforceAccess([Role.ADMIN], dto.user);
      if (org.status !== OrgStatus.ACTIVE) {
        await this.orgCatService.addOrgs(org.categories, org._id.toString(), org.type);
      }
    } else if (dto.status === OrgStatus.ARCHIVED) {
      this.authService.enforceAccess([Role.ADMIN], dto.user);
      if (org.status === OrgStatus.ACTIVE) {
        this.orgCatService.removeOrgs(org.categories, org._id.toString(), org.type);
      }
    }
    org.status = dto.status;
    await org.save();
    const [populated] = await Promise.all([
      this.model.findById(org._id).populate('creator').populate('categories'),
      this.algoliaService.addOrg(org),
    ]);
    return this.sanitizer.sanitize(populated);
  }

  /** Permenantly delete an org from the db */
  async delete(id: string, user: SessionDTO): Promise<string> {
    const org = await this.model.findById(id);
    this.checkOrg(org);
    this.authService.enforceAccess([Role.ADMIN], user);
    if (org.images && org.images.length > 0) {
      const ids = org.images.map((image) => image.id);
      this.fileService.deleteFiles(user.id, ids);
    }
    await Promise.all([
      OrgClaimModel.deleteMany({ org: id }),
      OrgEditModel.deleteMany({ org: id }),
      this.sponsorService.deleteByOrg(org._id),
      this.algoliaService.delete(id),
      this.orgCatService.removeOrgs(org.categories, org._id.toString(), org.type),
      org.deleteOne(),
    ]);
    return org._id;
  }

  /** claim an organization - must be a  */
  async claim(id: string, user: SessionDTO) {
    const org = await this.model.findById(id);
    this.checkOrg(org);
    let [orgUser, claim] = await Promise.all([
      this.orgUserService.getMember(user.id, id),
      OrgClaimModel.findOne({ org: id, user: user.id }),
    ]);
    if (orgUser?.userType === OrgUser.ORGADMIN) {
      throw new HttpException('This organization is already claimed', HttpStatus.NOT_ACCEPTABLE);
    }
    if (claim) {
      throw new HttpException('You have already submitted a claim', HttpStatus.CONFLICT);
    }
    claim = await new OrgClaimModel({
      org: id,
      user: user.id,
      email: user.email,
    }).save();
    return;
  }

  /** set an owner for organization */
  async approveClaim(claimId: string, user: SessionDTO) {
    this.authService.enforceAccess([Role.ADMIN], user);
    const claim = await OrgClaimModel.findById(claimId).populate('user');
    if (!claim) {
      throw new HttpException('Claim was not found', HttpStatus.NOT_FOUND);
    }
    const [org, orgUser] = await Promise.all([
      this.model.findById(claim.org),
      this.orgUserService.getMember(claim.user, String(claim.org)),
    ]);
    if (orgUser?.userType === OrgUser.ORGADMIN) {
      throw new HttpException('This organization is already claimed', HttpStatus.NOT_ACCEPTABLE);
    }
    await Promise.all([
      this.orgUserService.createRole({
        email: claim.email,
        member: claim.user,
        name: claim.user.fullName,
        org: org.id,
        userType: OrgUser.ORGADMIN,
        user,
      }),
      // claim.deleteOne(),
      // OrgClaimModel.deleteMany({ org: org._id }),
      // org.save(),
      // this.notService.create({
      //   userId: claim.user,
      //   type: NotificationType.CLAIM_APPROVED,
      //   org: org._id,
      // }),
      // this.notService.sendSMS({
      //   type: NotificationType.CLAIM_APPROVED,
      //   userId: claim.user,
      // }),
    ]);
    return;
  }

  /** Reject a notification and notify the user */
  async rejectClaim(claimId: string, user: SessionDTO) {
    this.authService.enforceAccess([Role.ADMIN], user);
    const claim = await OrgClaimModel.findById(claimId);
    if (!claim) {
      throw new HttpException('Claim was not found', HttpStatus.NOT_FOUND);
    }
    await Promise.all([
      claim.deleteOne(),
      this.notService.create({
        userId: claim.user,
        type: NotificationType.CLAIM_REJECTED,
        org: claim.org.toHexString(),
      }),
      this.notService.sendSMS({
        type: NotificationType.CLAIM_REJECTED,
        userId: claim.user,
      }),
    ]);
    return;
  }

  /** create user list */
  async createUserList(_id: string, dto: CreateUserListDTO): Promise<OrgDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, _id);
    if (!dto.members && !dto.tags) {
      const org = await this.model.findById(_id);
      this.checkOrg(org);
      const list = await this.listService.create(_id, { listName: dto.listName });
      const listId = <any>list.id;
      org.userList.push(listId);
      await org.save();
      return this.sanitizer.sanitize(await org.populate('userList'));
    }
    const [org, orgUsers] = await Promise.all([
      this.model.findById(_id),
      dto.members
        ? this.orgUserService.findAllByIds(_id, dto.members)
        : this.orgUserService.findAllByFilters(_id, dto.tags),
    ]);
    this.checkOrg(org);
    const members = [];
    orgUsers.forEach((orgUser) => {
      members.push(orgUser.id);
    });
    const list = await this.listService.create(_id, { listName: dto.listName, members });
    const listId = <any>list.id;
    org.userList.push(listId);
    await org.save();
    return this.sanitizer.sanitize(await org.populate('userList'));
  }

  /** duplicate user list */
  async duplicateList(_id: string, listId: string, listName: string, user: SessionDTO): Promise<OrgDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, _id);
    const [org, list] = await Promise.all([this.model.findById(_id), this.listService.getById(listId)]);
    this.checkOrg(org);
    const newList = await this.listService.create(_id, {
      listName,
      members: list.members.map((members) => members.id),
    });
    const listid = <any>newList.id;
    org.userList.push(listid);
    await org.save();
    return this.sanitizer.sanitize(await org.populate('userList'));
  }

  /** delete list */
  async deleteList(_id: string, listId: string, user: SessionDTO): Promise<OrgDTO> {
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], user, null, _id);
    const [org, list] = await Promise.all([this.model.findById(_id), this.listService.getById(listId)]);
    this.checkOrg(org);
    const index = org.userList.findIndex((list) => list.toString() === listId.toString());
    if (index !== -1) {
      org.userList.splice(index, 1);
    }
    await Promise.all([org.save(), this.listService.remove(list.id, _id)]);
    return this.sanitizer.sanitize(await org.populate('userList'));
  }

  /** Returns true if the user has claimed an org and false otherwise */
  async hasClaimed(userId: string, orgId: string): Promise<boolean> {
    const claim = await OrgClaimModel.findOne({ user: userId, org: orgId });
    if (claim) return true;
    return false;
  }

  /** Get claims for an organization */
  async getClaims(orgId: string, user: SessionDTO): Promise<ClaimDTO[]> {
    this.authService.enforceAccess([Role.ADMIN], user);
    const claims = await OrgClaimModel.find({ org: orgId }).populate('org').populate('user');
    return this.claimSanitizer.sanitizeMany(claims);
  }

  /** Notifies the followers of the organization of event creation */
  async notifyFollowers(type: NotificationType, orgId: string, event: IEvent) {
    const org = await this.model.findById(orgId);
    this.checkOrg(org);
    const followers = await this.followService.getByOrg(orgId);
    const smsDTOs: SMSDTO[] = [];
    const notifDTOs: CreateNotificationDTO[] = [];
    const mailDTOs: SendMailDTO[] = [];
    for (let i = 0; i < followers.length; i++) {
      smsDTOs.push({
        type: type,
        orgName: org.name,
        userId: followers[i].userId,
        eventName: event.title,
      });
      notifDTOs.push({
        type: type,
        userId: followers[i].userId,
        event: event._id,
        org: orgId,
      });
      mailDTOs.push({
        type: type,
        email: null,
        orgName: org.name,
        userId: followers[i].userId,
      });
    }
    await Promise.all([
      this.notService.sendManySMS(smsDTOs),
      this.notService.createMany(notifDTOs),
      this.mailService.sentMailMany(mailDTOs),
    ]);
  }

  /** Gets the socials reviews and profile links for an organization*/
  async getSocials(orgId: string): Promise<SocialsDTO> {
    const org = await this.model.findById(orgId);
    this.checkOrg(org);
    return await this.getSocialResponse(org);
  }

  /** Edit sociakls */
  async editSocials(orgId: string, dto: EditSocialsDTO): Promise<SocialsDTO> {
    const org = await this.model.findById(orgId);
    this.checkOrg(org);
    await this.orgUserService.enforceOrgAccess([OrgUser.ORGADMIN, OrgUser.ORGMANAGER], dto.user, null, orgId);
    if (!org.socials) org.socials = {};
    if (!org.reviews) org.reviews = {};
    if (dto.google || dto.google === null) org.socials.google = dto.google;
    if (dto.yelp || dto.yelp === null) org.socials.yelp = dto.yelp;
    if (dto.youtube || dto.youtube === null) org.socials.youtube = dto.youtube;
    if (dto.facebook || dto.facebook === null) org.socials.facebook = dto.facebook;
    if (dto.instagram || dto.instagram === null) org.socials.instagram = dto.instagram;
    if (dto.twitter || dto.twitter === null) org.socials.twitter = dto.twitter;

    if (dto.googlePlaceId) org.reviews.googlePlaceId = dto.googlePlaceId;
    if (dto.yelpBusinessId) org.reviews.yelpBusinessId = dto.yelpBusinessId;
    await org.save();
    return await this.getSocialResponse(org);
  }

  /** Private Methods */
  /** @throws not found exception if the org was not found */
  private checkOrg(org: IOrg) {
    if (!org) {
      throw new HttpException('Could not find the organization', HttpStatus.NOT_FOUND);
    }
  }

  /** sanitize orgs */
  private sanitizeOrgs(orgs: IOrg[]): IOrg[] {
    const sanitizedOrgs = [];
    for (let i = 0; i < orgs.length; i++) {
      if (orgs[i].userList.length) {
        const index = orgs[i].userList.findIndex((userList) => {
          return userList.members.length;
        });
        if (index !== -1) {
          sanitizedOrgs.push(orgs[i]);
        }
      }
    }
    return sanitizedOrgs;
  }

  private checkEdit(edit: IOrgEdit) {
    if (!edit) {
      throw new HttpException('Could not find the edit', HttpStatus.NOT_FOUND);
    }
  }

  /** Updates the event images */
  private async manageImages(org: IOrg, dto: EditOrgDTO) {
    const newImages: FileDTO[] = [];
    const idsToRemove = [];
    dto.imagesToAdd?.forEach((img) => org.images.push(img));
    dto.imagesToRemove?.forEach((img) => idsToRemove.push(img.id));
    if (idsToRemove.length > 0) await this.fileService.deleteFiles(org.creator, idsToRemove);
    let imageIndex;
    for (let i = 0; i < org.images?.length; i++) {
      // check if this image needs to be deleted
      imageIndex = idsToRemove.findIndex((id) => org.images[i].id === id);
      if (imageIndex < 0) {
        //does not need to be deleted
        newImages.push(org.images[i]);
      } else {
        //needs to be deleted
        if (org.mainImage > i) {
          org.mainImage = org.mainImage - 1;
        } else if (org.mainImage === i) {
          org.mainImage = 0;
        }
      }
    }
    if (newImages.length < 1) org.mainImage = undefined;
    org.images = newImages;
    //Set the main image
    if (dto.mainImage || !(dto.mainImage < 0 || dto.mainImage >= org.images.length)) {
      org.mainImage = dto.mainImage;
    }
  }

  /** get social response */
  private async getSocialResponse(org: IOrg): Promise<SocialsDTO> {
    if (!org.socials) return {};
    const results = await Promise.all([this.getGoogleSocial(org), this.getYelpSocial(org)]);
    const socials: SocialsDTO = {
      googleReviews: results[0],
      yelpReviews: results[1],
      googleLink: org.socials?.google,
      yelpLink: org.socials?.yelp,
      youtubeLink: org.socials?.youtube,
      instagramLink: org.socials?.instagram,
      facebookLink: org.socials?.facebook,
      twitterLink: org.socials?.twitter,
    };
    return socials;
  }

  /** get Google Reviews */
  private async getGoogleSocial(org: IOrg): Promise<ReviewsDTO> {
    const reviews: ReviewsDTO = {};
    if (org.reviews?.googlePlaceId) {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?reference=${org.reviews?.googlePlaceId}&key=${GOOGLE_API_KEY}`;
      reviews.entityId = org.reviews.googlePlaceId;
      try {
        const response = await axios.get(url);
        if (response.data || response.data.result) {
          const result = response.data.result;
          if (!result) return reviews;
          if (result.rating) reviews.rating = result.rating;
          if (result.user_ratings_total) reviews.numReviews = result.user_ratings_total;
          if (result.reviews?.length > 0) {
            const reviewsFromGoogle = result.reviews;
            reviews.reviews = [];
            for (let i = 0; i < reviewsFromGoogle.length; i++) {
              reviews.reviews.push({
                rating: reviewsFromGoogle[i].rating,
                authorName: reviewsFromGoogle[i].author_name,
                text: reviewsFromGoogle[i].text,
              });
            }
          }
        }
        return reviews;
      } catch (err) {
        console.log(err.message);
      }
    }
    return reviews;
  }

  /** get Google Reviews */
  private async getYelpSocial(org: IOrg): Promise<ReviewsDTO> {
    const reviews: ReviewsDTO = {};
    if (org.reviews?.yelpBusinessId) {
      const urls = [
        `https://api.yelp.com/v3/businesses/${org.reviews.yelpBusinessId}`,
        `https://api.yelp.com/v3/businesses/${org.reviews.yelpBusinessId}/reviews`,
      ];
      reviews.entityId = org.reviews.yelpBusinessId;
      try {
        const [businssResponse, reviewsResponse] = await Promise.all([
          axios.get(urls[0], {
            headers: { Authorization: 'Bearer ' + YELP_API_KEY },
          }),
          axios.get(urls[1], {
            headers: { Authorization: 'Bearer ' + YELP_API_KEY },
          }),
        ]);
        if (businssResponse.data) {
          const details = businssResponse.data;
          if (details.rating) reviews.rating = details.rating;
          if (!reviews.numReviews && details.review_count) reviews.numReviews = details.review_count;
        }

        if (!reviews.numReviews && reviewsResponse.data?.total) reviews.numReviews = reviewsResponse.data.total;
        if (reviewsResponse?.data?.reviews?.length > 0) {
          const yelpReviews = reviewsResponse.data.reviews;
          reviews.reviews = [];
          for (let i = 0; i < yelpReviews.length; i++) {
            reviews.reviews.push({
              rating: yelpReviews[i].rating,
              authorName: yelpReviews[i].user?.name,
              text: yelpReviews[i].text,
            });
          }
        }
        return reviews;
      } catch (err) {
        console.log(err.message);
      }
    }
    return reviews;
  }
}
