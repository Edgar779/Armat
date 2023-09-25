import { Injectable } from '@nestjs/common';
import { UserOrgSanitizer } from 'src/orgUser/orgUser.sanitizer';
import { ISanitize } from '../util';
import { UserListDTO } from './dto';
import { IUserList } from "./interface";


@Injectable()
export class UserListSanitizer implements ISanitize {
  constructor(private readonly userOrgSanitizer: UserOrgSanitizer) {}
  sanitize(list: IUserList): UserListDTO {
    const sanitized: UserListDTO = {
      id: list.id,
      members: list.members[0]?.userType ? this.userOrgSanitizer.sanitizeMany(list.members) : list.members,
      name: list.name,
      org: list.org,
    };

    return sanitized;
  }

  sanitizeMany(lists: IUserList[]): UserListDTO[] {
    const sanitized: UserListDTO[] = [];
    for (let i = 0; i < lists.length; i++) {
      sanitized.push(this.sanitize(lists[i]));
    }
    return sanitized;
  }
}
