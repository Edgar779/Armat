import { Injectable } from '@nestjs/common';
import { IOrg } from 'src/org';
import { IUser } from 'src/user';
import { ISanitize } from 'src/util';
import { FollowDTO } from './dto';
import { IFollow } from './interface/follow.interface';

@Injectable()
export class FollowSanitizer implements ISanitize {
  sanitize(follow: IFollow): FollowDTO {
    const org = this.getOrg(follow.org);
    const user = this.getUser(follow.user);
    const sanitized: FollowDTO = {
      id: follow.uniqueId,
      userId: user?.id ? user.id : user,
      userName: user?.fullName ? user.fullName : undefined,
      orgId: org?.id ? org.id : org,
      orgName: org?.id ? org.name : undefined,
    };
    return sanitized;
  }

  sanitizeMany(follows: IFollow[]): FollowDTO[] {
    const sanitized: FollowDTO[] = [];
    for (let i = 0; i < follows.length; i++) {
      sanitized.push(this.sanitize(follows[i]));
    }
    return sanitized;
  }

  /** Private Methods */
  private getOrg(doc: IOrg | string): any {
    const org = doc as IOrg;
    if (org) {
      if (org.name) {
        return {
          id: org._id,
          name: org.name,
        };
      } else {
        return doc.toString();
      }
    }
    return undefined;
  }

  private getUser(doc: IUser | string): any {
    const user = doc as IUser;
    if (user) {
      if (user.fullName) {
        return {
          id: user._id,
          fullName: user.fullName,
        };
      } else {
        return doc.toString();
      }
    }
    return undefined;
  }
}
