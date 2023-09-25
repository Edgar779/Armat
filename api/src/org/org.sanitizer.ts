import { Injectable } from '@nestjs/common';
import { AddressSanitizer } from 'src/components/address/address.sanitizer';
import { OrgCategoryDTO } from 'src/orgCategory/dto';
import { OrgCategorySanitizer } from 'src/orgCategory/orgCategory.sanitizer';
import { UserOrgSanitizer } from 'src/orgUser/orgUser.sanitizer';
import { IUser, UserDTO } from '../user';
import { UserSanitizer } from '../user/user.sanitizer';
import { ISanitize } from '../util';
import { EditRO, OrgDTO } from './dto';
import { IOrg, IOrgEdit } from './interface';
import { IUserList } from 'src/userList/interface';
import { UserListDTO } from 'src/userList/dto';

@Injectable()
export class OrgSanitizer implements ISanitize {
  constructor(
    private readonly userSanitizer: UserSanitizer,
    private readonly addressSanitizer: AddressSanitizer,
    private readonly categorySanitizer: OrgCategorySanitizer,
    private readonly userOrgSanitizer: UserOrgSanitizer,
  ) {}

  sanitize(org: IOrg): OrgDTO {
    // org.userList[0]?.name ? this.sanitizeLists(org.userList) :
    const sanitized: OrgDTO = {
      id: org._id,
      name: org.name,
      userList: org.userList,
      type: org.type,
      status: org.status,
      phoneNumber: org.phoneNumber,
      email: org.email,
      description: org.description,
      creator: this.getCreator(org.creator),
      address: this.addressSanitizer.sanitize(org.address),
      createdAt: org.createdAt,
      updatedAt: org.updatedAt,
      categories: org.populated('categories') ? this.getCategories(org.categories) : org.categories,
      mainImage: org.mainImage,
      images: org.images.length > 0 ? org.images : undefined,
      numEdits: org.numEdits,
      comment: org.comment ? org.comment : undefined,
      hours: org.hours,
      website: org.website,
      avatar: org.avatar,
    };
    return sanitized;
  }

  sanitizeMany(orgs: IOrg[]): OrgDTO[] {
    const sanitized: OrgDTO[] = [];
    for (let i = 0; i < orgs.length; i++) {
      sanitized.push(this.sanitize(orgs[i]));
    }
    return sanitized;
  }

  sanitizeLists(lists: IUserList[]): UserListDTO[] {
    const sanitized: UserListDTO[] = [];
    lists.forEach((list) => {
      sanitized.push({
        id: list._id,
        name: list.name,
        org: list.org,
        members: list.members[0]?.member ? this.userOrgSanitizer.sanitizeMany(list.members) : list.members,
      });
    });

    return sanitized;
  }

  /** get the sanitized user who created the event */
  getCreator(creator: any): UserDTO {
    if (!creator) return null;
    if (creator?.fullName) {
      return this.userSanitizer.sanitize(creator as IUser);
    } else {
      return creator;
    }
  }

  /** get the sanitized categories */
  getCategories(categories: any[]): OrgCategoryDTO[] {
    if (categories?.length > 0) {
      if (categories[0]?.name) {
        return this.categorySanitizer.sanitizeMany(categories);
      } else {
        return categories;
      }
    }
  }

  /** Sanitizes the edits of an organization */
  sanitizeOrgEdits(edits: IOrgEdit[]): EditRO[] {
    const sanitized: EditRO[] = [];
    for (let i = 0; i < edits.length; i++) {
      const edit = edits[i];
      const sanitizedEdit: EditRO = {
        id: edit._id,
        editor: this.getCreator(edit.editor),
        createdAt: edit.createdAt,
      };
      if (edit.name) sanitizedEdit.name = edit.name;
      if (edit.email) sanitizedEdit.email = edit.email;
      if (edit.phoneNumber) sanitizedEdit.phoneNumber = edit.phoneNumber;
      if (edit.address) sanitizedEdit.address = edit.address;
      if (edit.website) sanitizedEdit.website = edit.website;
      if (edit.hours) sanitizedEdit.hours = edit.hours;
      if (edit.description) sanitizedEdit.description = edit.description;
      if (edit.categories) sanitizedEdit.categories = edit.categories;
      sanitized.push(sanitizedEdit);
    }
    return sanitized;
  }
}
