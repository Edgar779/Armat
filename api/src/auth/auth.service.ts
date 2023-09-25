import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { MailerService } from '../components/mailer/mailer.service';
import { MongooseUtil } from '../util';
import { NotificationType } from '../util/constants';
import { AuthModel } from './auth.model';
import { AuthSanitizer } from './auth.sanitizer';
import { AuthStatus, JWT_SECRET_FORGET_PASS, JWT_SECRET_SIGNIN, Role, SESSION_EXPIRATION } from './constants';
import {
  AuthDTO,
  ChangePassDTO,
  EditAuthDTO,
  InvitationDTO,
  ResetPassDTO,
  SessionDTO,
  SignedInDTO,
  SigninDTO,
  SocialDTO,
} from './dto';
import { IAuth, IInvitation, IToken } from './interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly sanitizer: AuthSanitizer,
    @Inject(forwardRef(() => MailerService))
    private readonly mailerService: MailerService, // @Inject(forwardRef(() => NotificationService)) // private readonly notService: NotificationService,
  ) {
    this.model = AuthModel;
    this.mongooseUtil = new MongooseUtil();
  }

  private model: Model<IAuth>;
  private invitationModel: Model<IInvitation>;
  private mongooseUtil: MongooseUtil;

  /** Public API */
  async create(id: string, email: string, password: string, phoneNumber?: string): Promise<SignedInDTO> {
    try {
      let auth = await this.model.findById(id);
      if (auth) {
        auth.password = password;
        auth.phoneNumber = phoneNumber;
      } else {
        auth = new this.model({
          _id: id,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          role: Role.MEMBER,
        });
      }
      auth.status = AuthStatus.ACTIVE;
      const loggedInDTO = await this.login(auth);
      auth.sessions.push(loggedInDTO.token);
      console.log(auth, 'aaaa');

      auth = await auth.save();
      console.log(auth, 'auth');
      return loggedInDTO;
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, ' User with this email or phone number exists');
      throw err;
    }
  }

  /** invite user (user) */
  async invite(_id: string, email: string, userId: string): Promise<InvitationDTO> {
    const auth = new this.model({
      _id,
      email,
      invitedBy: userId,
      role: Role.MEMBER,
      status: AuthStatus.PENDING,
    });
    await Promise.all([auth.save(), this.mailerService.sendMail({ type: NotificationType.INVITE, email })]);
    const response = {
      authId: auth._id,
      email: email,
      message: 'The member has been invited',
      invitedId: userId,
    };
    return response;
  }



  /**
   * @purpose - to determine whether the user trying to login to the system exists already or is a new user.
   *            The registration process can have the following 3 scenarios:
   *            1. Scenario 1: Brand new user - register user, generate token
   *            2. Scenario 2: User is registered with a different method - add this method to the user, create and return a token
   *            3. Scenario 3: User is registered with the current method- generate and return the token
   * @param socialProfile - Social profile object with which this function is called
   * @returns {Object} - {accessToken: string, Flag}
   */
  async socialLogin(dto: SocialDTO): Promise<SignedInDTO> {
    // eslint-disable-next-line prefer-const
    let [existing, auth, invitation] = await Promise.all([
      this.model.findOne({ [dto.providerKey]: dto.socialId }),
      this.model.findOne({ email: dto.email }),
      this.invitationModel.findOne({ email: dto.email }),
    ]);
    if (!existing) {
      // Social method did not exists, search further for the account
      if (auth) {
        //Scenario 2: User is registered with a different method
        if (!auth[dto.providerKey]) auth[dto.providerKey] = dto.socialId;
      } else {
        // Check if the provider state is valid
        this.checkProviderError(dto.email);
        auth = new this.model({
          _id: dto.id,
          email: dto.email,
          sessions: [],
          [dto.providerKey]: dto.socialId,
          role: Role.MEMBER,
        });
      }
    } else {
      // Scenario 1: user was found with this social method
      auth = existing;
    }
    const loggedInDTO = await this.login(auth);
    if (!auth.sessions) auth.sessions = [];
    auth.sessions.push(loggedInDTO.token);
    if (invitation) {
      // Process Invitation
      auth.role = invitation.role;
      auth.invitedBy = invitation.inviter;
      await Promise.all([this.invitationModel.deleteMany({ email: dto.email }), auth.save()]);
    } else {
      await auth.save();
    }
    return loggedInDTO;
  }

  /** Used to sign up an admin user */
  // signupAdmin = async (signupDTO: SignupDTO): Promise<AuthDTO> => {
  //   let auth: IAuth = await this.model.findOne({ email: signupDTO.email });
  //   if (auth) {
  //     throw new HttpException('A User with this email already exists', HttpStatus.CONFLICT);
  //   }
  //   // did not find such a user
  //   auth = await new this.model({
  //     email: signupDTO.email,
  //     password: signupDTO.password,
  //     role: Role.ADMIN,
  //   }).save();
  //   signupDTO.authId = auth.id;
  //   signupDTO.role = this.convertRole(auth.role);
  //   return this.getSigninResponse(auth);
  // };

  /** Sign in a user and return the signed in auth object */
  signin = async (dto: SigninDTO): Promise<SignedInDTO> => {
    let auth: IAuth;
    if (dto.email) {
      auth = await this.model.findOne({ email: dto.email });
    } else if (dto.phoneNumber) {
      auth = await this.model.findOne({ phoneNumber: dto.phoneNumber });
    } else {
      throw new HttpException('Email and phoneNumber not set', HttpStatus.BAD_REQUEST);
    }
    this.checkAuth(auth);
    if (!auth.password) {
      throw new HttpException('This user does not have a password on file', HttpStatus.BAD_REQUEST);
    }
    const isPasswordCorrect = await auth.comparePassword(dto.password);
    this.checkPassword(isPasswordCorrect);
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  };

  /** Find the auth object */
  getRaw = async (id: string): Promise<AuthDTO> => {
    const auth: IAuth = await this.model.findOne({ _id: id });
    this.checkAuth(auth);
    return await this.login(auth);
  };

  /** get the auth by id (orgUser) */
  async getById(_id: string): Promise<IAuth> {
    const auth = await this.model.findById(_id);
    return auth;
  }

  /** get invited user (user) */
  async getInvitedUser(email: string): Promise<IInvitation> {
    const invitedUser = await this.invitationModel.findOne({ email });
    if (invitedUser) return invitedUser;
    return null;
  }

  /** Find user by its email (orgUser) */
  async getByEmail(email: string): Promise<IAuth> {
    const auth = await this.model.findOne({ email: email });
    if (auth) return auth;
    return null;
  }

  /** Changing the user email */
  edit = async (id: string, dto: EditAuthDTO): Promise<SignedInDTO> => {
    const auth = await this.model.findById(id);
    this.checkAuth(auth);
    if (dto.email) auth.email = dto.email;
    if (dto.phoneNumber) auth.phoneNumber = dto.phoneNumber;
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  };

  /**  Changing the user password **/
  changePassword = async (dto: ChangePassDTO): Promise<SignedInDTO> => {
    const auth = await this.model.findOne({
      _id: dto.user.id,
    });
    this.confirmPassword(dto.newPassword, dto.confirmation);
    if (auth.password) {
      const isPasswordCorrect = await auth.comparePassword(dto.password);
      this.checkPassword(isPasswordCorrect);
      this.confirmPassword(dto.newPassword, dto.confirmation);
    }
    auth.password = dto.newPassword;
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  };

  /** Forgot password. sends a link with a token to the users email to reset password*/
  forgotPassword = async (email: string) => {
    const auth = await this.model.findOne({ email });
    this.checkAuth(auth);
    const minutesToExpire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 minutes to expire
    const expString = minutesToExpire.toString();
    const token = await this.generateToken(auth, JWT_SECRET_FORGET_PASS, expString);
    await this.mailerService.sendMail({
      email,
      resetToken: token,
      type: NotificationType.FORGOT_PASSWORD,
    });
  };

  /** Resets users password */
  resetPassword = async (resetPassDTO: ResetPassDTO): Promise<SignedInDTO> => {
    const auth = await this.model.findOne({ email: resetPassDTO.email });
    this.checkAuth(auth);
    auth.password = resetPassDTO.newPassword;
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  };

  /** Removes auth from the database */
  remove = async (id: string): Promise<IAuth> => {
    const [auth] = await Promise.all([
      this.model.findOneAndDelete({ _id: id }),
      // await this.subService.deleteBySubscriber(id),
    ]);
    return auth;
  };

  setRoleAdmin = async (id: string) => {
    const auth = await this.model.findOneAndUpdate({ _id: id }, { $set: { role: Role.ADMIN } });
    return auth;
  };

  /** Verify session */
  getSession = async (authId: string, token: string): Promise<IAuth> => {
    const auth = await this.model.findById(authId);
    if (!auth || !auth.sessions.includes(token)) {
      throw new HttpException('session is invalid, sign in again', HttpStatus.UNAUTHORIZED);
    }
    // this.checkActive(auth);
    return auth;
  };

  /** Removes the user token from the auth, clearing the user session */
  logout = async (id: string, token: string): Promise<string> => {
    const auth = await this.model.findOneAndUpdate({ _id: id }, { $pull: { sessions: token } });
    this.checkAuth(auth);
    return auth.sessions.find((e) => e === token);
  };

  /** Verifies Roles - checks if the user has the needed roles or not*/
  hasAccess = (allowedRoles: Role[], user: SessionDTO) => {
    if (!user) return false;
    if (allowedRoles.find((role) => role === user.role)) {
      return true;
    } else {
      return false;
    }
  };
  /*Enforces acces. If the user does not have the needed role, an exception is thrown */
  enforceAccess = (allowedRoles: Role[], user: SessionDTO) => {
    if (!this.hasAccess(allowedRoles, user)) {
      throw new HttpException('User does not have permission to access resource', HttpStatus.UNAUTHORIZED);
    }
  };

  /** Cleans expired tokens */
  cleanSessions = async () => {
    const auths = await this.model.find({});
    let sessions;
    for (let i = 0; i < auths.length; i++) {
      sessions = auths[i].sessions;
      for (let j = 0; j < sessions.length; j++) {
        try {
          await this.decodeToken(sessions[j]);
        } catch (err) {
          sessions.splice(j, 1);
        }
      }
    }
  };

  /** Checks for the tokens validity */
  async decodeToken(token: string) {
    if (!token) {
      throw new HttpException('An access token must be set to access this resource', HttpStatus.UNAUTHORIZED);
    }
    try {
      // Verify token
      const decoded: IToken = await jwt.verify(token, JWT_SECRET_SIGNIN);
      return decoded;
    } catch (err) {
      throw new HttpException('Your session is expired, please login again', HttpStatus.UNAUTHORIZED);
    }
  }

  //Private Members
  /** generates the response for signed in users */
  private async login(auth: IAuth): Promise<SignedInDTO> {
    const token = await this.generateToken(auth, JWT_SECRET_SIGNIN, SESSION_EXPIRATION);
    const signedIn: SignedInDTO = {
      token,
      role: auth.role,
      status: auth.status,
    };
    return signedIn;
  }

  /** Generates a token using an IAuth object */
  private async generateToken(auth: IAuth, secret: string, expiration?: string): Promise<string> {
    const tokenEntity: IToken = {
      email: auth.email,
      id: auth._id,
      role: auth.role,
    };
    if (expiration) {
      return await jwt.sign(tokenEntity, secret, { expiresIn: expiration });
    } else {
      return await jwt.sign(tokenEntity, secret);
    }
  }

  /** throws user not found exception if the @param auth is undefined */
  private checkAuth = (auth) => {
    if (!auth) {
      throw new HttpException('Such user does not exist in our records', HttpStatus.NOT_FOUND);
    }
  };

  /** Check the password and throw http exception if incorrect */
  private checkPassword = (isCorrect) => {
    if (!isCorrect) {
      throw new HttpException('user password does not match', HttpStatus.FORBIDDEN);
    }
  };

  /** Confirms whether the newPassword and the confirmation are matching */
  private confirmPassword = (newPass, confirmation) => {
    if (newPass !== confirmation) {
      throw new HttpException('The new password does not match with the confirmation', HttpStatus.CONFLICT);
    }
  };

  /** Tells the user that the social login provider has an inconsistent state with Armat */
  private checkProviderError(email: string) {
    if (!email) {
      throw new HttpException(
        `Our records show that this social signin was used for an account that does not exist anymore.
        Please login to you social account, disconnect Armat from this id (e.g. appleId) and try to login again or use another method`,
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
}
