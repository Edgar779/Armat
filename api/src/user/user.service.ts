import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { APPLE_KEY } from 'src/auth';
import { OrgUser } from 'src/orgUser/orgUser.constants';
import { AuthService } from '../auth/auth.service';
import { SignedInDTO, SocialDTO } from '../auth/dto';
import { FileService } from '../file/file.service';
import { MongooseUtil } from '../util';
import { DOMAIN_NAME } from '../util/constants';
import { CreateUserDTO, EditUserDTO, UserDTO } from './dto';
import { IUser } from './interface';
import { UserModel } from './user.model';
import { UserSanitizer } from './user.sanitizer';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly sanitizer: UserSanitizer,
    private readonly fileService: FileService,
  ) {
    this.model = UserModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IUser>;
  private mongooseUtil: MongooseUtil;

  /** Service API */
  /** Create a new user */
  async create(dto: CreateUserDTO): Promise<SignedInDTO> {
    try {
      let user = await this.model.findOne({ email: dto.email });
      if (user) {
        if (dto.fullName) user.fullName = dto.fullName;
        if (dto.avatar) user.avatar = dto.avatar;
        user.phoneNumber = dto.phoneNumber;
      } else {
        user = new this.model({
          email: dto.email,
          fullName: dto.fullName,
          avatar: dto.avatar,
          phoneNumber: dto.phoneNumber,
        });
      }
      user.settings = {
        notificationSettings: {
          allowText: true,
          allowInApp: true,
          allowEmail: true,
        },
      };
      user.auth = user._id;
      const auth = (
        await Promise.all([this.authService.create(user._id, user.email, dto.password, dto.phoneNumber), user.save()])
      )[0];
      return auth;
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User with this email or phone number exists');
      throw err;
    }
  }

  /** create and invite the user (orgUser) */
  async invite(email: string, name: string, memberId: string, orgId: string, userType: OrgUser): Promise<string> {
    try {
      const getByEmail = await this.model.findOne({ email });
      if (getByEmail) {
        getByEmail.orgs.push({ org: orgId, userType });
        await getByEmail.save();
        return getByEmail.auth as string;
      }
      const user = new this.model({
        email: email,
        fullName: name,
      });
      user.orgs.push({ org: orgId, userType });
      user.auth = user._id;
      const auth = (await Promise.all([this.authService.invite(user._id, user.email, memberId), user.save()]))[0];
      return auth.authId;
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User with this email or phone number exists');
      throw err;
    }
  }

  /** invite by member */
  async inviteByMember(userId: string, email: string): Promise<string> {
    const getByEmail = await this.model.findOne({ email });
    if (getByEmail) {
      throw new HttpException('User already invited', HttpStatus.BAD_REQUEST);
    }
    const newUser = new this.model({
      email,
    });
    const auth = await this.authService.invite(newUser._id, newUser.email, userId);
    newUser.auth = auth.authId;
    await newUser.save();
    return 'ok';
  }
  /** Create an account with the social logins or log the user in */
  async socialLogin(dto: SocialDTO): Promise<any> {
    let auth: SignedInDTO;
    if (dto.email) {
      let user = await this.model.findOne({ email: dto.email });
      //apple does not work
      if (!user) {
        user = new this.model({
          fullName: dto.fullName,
          email: dto.email,
          socialAvatar: dto.avatar,
        });
        user.auth = user.id;
        dto.id = user._id;
        await user.save();
      }
      auth = await this.authService.socialLogin(dto);
    } else if (dto.providerKey === APPLE_KEY) {
      //apple didnt
      auth = await this.authService.socialLogin(dto);
    }
    return {
      url: `${DOMAIN_NAME}/socialLogin?token=${auth.token}`,
    };
  }

  /** Edit user information */
  async edit(dto: EditUserDTO): Promise<UserDTO> {
    let user = await this.model.findOne({
      _id: dto.user.id,
    });
    this.checkUser(user);
    if (dto.email && dto.phoneNumber) {
      await this.authService.edit(dto.user.id, { email: dto.email, phoneNumber: dto.phoneNumber });
      user.email = dto.email;
      user.phoneNumber = dto.phoneNumber;
    } else if (dto.email) {
      await this.authService.edit(dto.user.id, { email: dto.email });
      user.email = dto.email;
    } else if (dto.phoneNumber) {
      await this.authService.edit(dto.user.id, { phoneNumber: dto.phoneNumber });
      user.phoneNumber = dto.phoneNumber;
    }
    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.removeAvatar) {
      await this.fileService.deleteFile(dto.user.id, user.avatar.id);
    } else if (dto.changeAvatar) {
      if (user.avatar) {
        await this.fileService.deleteFile(dto.user.id, user.avatar.id);
      }
      user.avatar = dto.changeAvatar;
    }
    if (dto.organizer) {
      if (!user.organizerInfo) user.organizerInfo = {};
      if (dto.organizer.contactEmail) user.organizerInfo.contactEmail = dto.organizer.contactEmail;
      if (dto.organizer.contactPhone) user.organizerInfo.contactPhone = dto.organizer.contactPhone;
      if (dto.organizer.contactName) user.organizerInfo.contactName = dto.organizer.contactName;
    }
    if (dto.settings) user.settings = dto.settings;
    user = await user.save();
    return this.sanitizer.sanitize(user);
  }

  /** update the userType (orgUser) */
  async updateUserType(userId: string, orgId: string, userType: string): Promise<string> {
    const user = await this.model.findById(userId);
    this.checkUser(user);
    user.orgs.forEach((orgData) => {
      if (orgData.org.toString() === orgId.toString()) {
        orgData.userType = userType;
      }
    });
    await user.save();
    return 'ok';
  }

  /** delete the user type (orgUser)*/
  async deleteUserType(userId: string, orgId: string): Promise<string> {
    const user = await this.model.findById(userId);
    this.checkUser(user);
    const index = user.orgs.findIndex((orgData) => orgData.org.toString() === orgId.toString());
    user.orgs.splice(index, 1);
    await user.save();
    return 'ok';
  }

  /** Find all users */
  async getAll(): Promise<UserDTO[]> {
    const users = await this.model
      .find()
      .populate({ path: 'auth', populate: { path: 'invitedBy' } })
      .exec();
    return this.sanitizer.sanitizeMany(users);
  }

  /** Get a user by its id */
  async get(id: string): Promise<UserDTO> {
    const user = await this.model.findOne({ _id: id }).populate('auth');
    this.checkUser(user);
    return this.sanitizer.sanitize(user);
  }

  /** returns unsanitized user */
  async getRaw(id: string): Promise<IUser> {
    const user = await this.model.findById(id);
    this.checkUser(user);
    return user;
  }

  /** Removes auth from the database */
  async remove(id: string) {
    await Promise.all([this.model.deleteMany({ _id: id }), this.authService.remove(id)]);
    return id;
  }

  /** Private Members */
  /** Check if the user exists */
  private checkUser(user: IUser) {
    if (!user) {
      throw new HttpException('The profile was not found', HttpStatus.NOT_FOUND);
    }
  }
}
