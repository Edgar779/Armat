import { Injectable } from '@nestjs/common';
import { AuthSanitizer } from 'src/auth/auth.sanitizer';
import { ISanitize } from '../util';
import { OrgUserDTO } from './dto';
import { MemberDTO } from './dto/orgUser.dto';
import { IMember, IOrgUser } from './interface';

@Injectable()
export class UserOrgSanitizer implements ISanitize {
  constructor(private readonly authSanitizer: AuthSanitizer) {}
  sanitize(orgUser: IOrgUser): OrgUserDTO {
    const sanitized: OrgUserDTO = {
      id: orgUser._id,
      member: orgUser.member?.email ? this.sanitizeMember(orgUser.member) : orgUser.member,
      auth: orgUser.auth?.email ? this.authSanitizer.sanitize(orgUser.auth) : orgUser.auth,
      org: orgUser.org,
      userType: orgUser.userType,
      tags: orgUser.tags,
    };

    return sanitized;
  }

  sanitizeMany(orgUsers: IOrgUser[]): OrgUserDTO[] {
    const sanitized: OrgUserDTO[] = [];
    for (let i = 0; i < orgUsers.length; i++) {
      sanitized.push(this.sanitize(orgUsers[i]));
    }
    return sanitized;
  }

  sanitizeMember(member: IMember): MemberDTO {
    const sanitized: MemberDTO = {
      id: member._id,
      email: member.email,
      fullName: member.fullName,
      phoneNumber: member.phoneNumber,
    };
    return sanitized;
  }
}
