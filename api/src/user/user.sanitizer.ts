import { Injectable } from '@nestjs/common';
import { AuthDTO, IAuth } from '../auth';
import { AuthSanitizer } from '../auth/auth.sanitizer';
import { ISanitize } from '../util';
import { UserDTO } from './dto';
import { IUser } from './interface';

@Injectable()
export class UserSanitizer implements ISanitize {
  constructor(private readonly authSanitizer: AuthSanitizer) {}
  sanitize(user: IUser): UserDTO {
    const sanitized: UserDTO = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      settings: user.settings,
      auth: this.getAuth(user.auth),
      avatar: user.avatar,
      phoneNumber: user.phoneNumber,
      socialAvatar: user.socialAvatar,
      orgs: user.orgs,
    };
    if (user.organizerInfo && user.organizerInfo.contactName) {
      sanitized.organizerInfo = {
        contactName: user.organizerInfo.contactName,
        contactPhone: user.organizerInfo.contactPhone,
        contactEmail: user.organizerInfo.contactEmail,
      };
    }
    return sanitized;
  }

  sanitizeMany(users: IUser[]): UserDTO[] {
    const sanitized: UserDTO[] = [];
    for (let i = 0; i < users.length; i++) {
      sanitized.push(this.sanitize(users[i]));
    }
    return sanitized;
  }

  /** Private methods */
  private getAuth(auth: string | IAuth): AuthDTO {
    const populated = auth as IAuth;
    if (populated && populated.role) {
      return this.authSanitizer.sanitize(auth as IAuth);
    } else {
      return undefined;
    }
  }
}
