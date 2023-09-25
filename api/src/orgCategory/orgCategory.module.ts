import { Module } from '@nestjs/common';
import { OrgCategoryService } from './orgCategory.service';
import { OrgCategoryController } from './orgCategory.controller';
import { AuthModule } from '../auth/auth.module';
import { OrgCategorySanitizer } from './orgCategory.sanitizer';

@Module({
  imports: [AuthModule],
  providers: [OrgCategoryService, OrgCategorySanitizer],
  controllers: [OrgCategoryController],
  exports: [OrgCategorySanitizer, OrgCategoryService],
})
export class OrgCategoryModule {}
