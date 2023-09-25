import { Injectable } from '@nestjs/common';
import { IUser } from '../user';
import { ISanitize } from '../util';
import { AuthDTO } from './dto';
import { IAuth } from './interface';

@Injectable()
export class AuthSanitizer implements ISanitize {
  sanitize(auth: IAuth): AuthDTO {
    const sanitizedUser: AuthDTO = {
      role: auth.role,
      status: auth.status
    };
    const inviter = auth.invitedBy ? (auth.invitedBy as IUser) : null;
    if (inviter && inviter.fullName) {
      sanitizedUser.inviterName = inviter.fullName;
      sanitizedUser.inviterId = inviter._id;
    } else {
      sanitizedUser.inviterId = auth.invitedBy as string;
    }
    return sanitizedUser;
  }

  sanitizeMany(auths: IAuth[]): AuthDTO[] {
    const sanitized: AuthDTO[] = [];
    for (let i = 0; i < auths.length; i++) {
      sanitized.push(this.sanitize(auths[i]));
    }
    return sanitized;
  }

  /** Private Methods */
}
