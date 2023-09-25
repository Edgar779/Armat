import { Injectable } from '@nestjs/common';
import { ISanitize } from '../util';
import { OrgCategoryDTO } from './dto';
import { IOrgCategory } from './interface';

@Injectable()
export class OrgCategorySanitizer implements ISanitize {
  sanitize(cat: IOrgCategory): OrgCategoryDTO {
    return {
      id: cat._id,
      text: cat.name,
      parent: cat.parent,
      businessUsedCount: cat.businessUsedCount,
      nonProfitUsedCount: cat.nonProfitUsedCount,
      businessUsers: cat.businessUsers,
      nonProfitUsers: cat.nonProfitUsers,
    };
  }

  sanitizeMany(cats: IOrgCategory[]): OrgCategoryDTO[] {
    const sanitized: OrgCategoryDTO[] = [];
    for (let i = 0; i < cats.length; i++) {
      sanitized.push(this.sanitize(cats[i]));
    }
    return sanitized;
  }
}
