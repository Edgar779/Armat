import { Injectable } from '@nestjs/common';
import { ISanitize } from '../util';
import { ClaimDTO } from './dto';
import { ClaimeeDTO, ClaimOrgDTO } from './dto/claim.dto';
import { IOrgClaim } from './interface';

@Injectable()
export class ClaimSanitizer implements ISanitize {
  sanitize(claim: IOrgClaim): ClaimDTO {
    const sanitized: ClaimDTO = {
      id: claim._id,
      org: this.getOrg(claim.org),
      user: this.getUser(claim.user),
      createdAt: claim.createdAt,
    };
    return sanitized;
  }

  sanitizeMany(orgs: IOrgClaim[]): ClaimDTO[] {
    const sanitized: ClaimDTO[] = [];
    for (let i = 0; i < orgs.length; i++) {
      sanitized.push(this.sanitize(orgs[i]));
    }
    return sanitized;
  }

  /** get the sanitized user who created the event */
  getUser(user: any): ClaimeeDTO {
    if (user && user.fullName) {
      return {
        id: user._id,
        name: user.fullName,
        avatar: user.avatar,
      };
    } else {
      return user;
    }
  }

  /** Sanitize the org */
  getOrg(org: any): ClaimOrgDTO {
    if (org.name) {
      return {
        id: org._id,
        name: org.name,
      };
    } else {
      return org;
    }
  }
}
