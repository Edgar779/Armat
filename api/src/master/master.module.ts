import { Module } from '@nestjs/common';
import { OrgModule } from 'src/org/org.module';
import { OrgCategoryModule } from 'src/orgCategory/orgCategory.module';
import { MasterService } from './master.service';

@Module({
  providers: [MasterService],
  imports: [OrgModule, OrgCategoryModule],
  exports: [MasterService],
})
export class MasterModule {}
