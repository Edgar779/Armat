import { Injectable } from '@nestjs/common';
import { OrgService } from 'src/org/org.service';
import { OrgCategoryModel } from 'src/orgCategory/orgCategory.model';
import { OrgModel } from 'src/org/org.model';
import { OrgCategoryService } from 'src/orgCategory/orgCategory.service';
import { OrgStatus } from 'src/org/org.constants';
import { PastEventModel } from 'src/event/event.model';

@Injectable()
export class MasterService {
  constructor(private readonly orgService: OrgService, private readonly orgCategoryService: OrgCategoryService) {}

  async updateCategoryCounts() {
    await OrgCategoryModel.updateMany(
      {},
      {
        $set: { nonProfitUsers: [], businessUsers: [] },
        $unset: { businessUsedCount: 1, nonProfitUsedCount: 1 },
      },
    );
    const orgs = await OrgModel.find();
    for (let i = 0; i < orgs.length; i++) {
      if (orgs[i].status === OrgStatus.ACTIVE) {
        await this.orgCategoryService.addOrgs(orgs[i].categories, orgs[i]._id.toString(), orgs[i].type);
      }
    }
    const categories = await await OrgCategoryModel.find();
    return categories;
  }

  async updatePastEvents() {
    await PastEventModel.updateMany({}, { $set: { isPast: true } });
    return;
  }
}
