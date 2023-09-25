import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TagSanitizer } from './tag.sanitizer';
import { OrgUserModule } from 'src/orgUser/orgUser.module';

@Module({
  imports: [OrgUserModule],
  controllers: [TagController],
  providers: [TagService, TagSanitizer],
  exports: [TagService],
})
export class TagModule {}
