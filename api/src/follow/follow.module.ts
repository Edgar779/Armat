import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowSanitizer } from './follow.sanitizer';
import { FollowService } from './follow.service';

@Module({
  exports: [FollowService],
  controllers: [FollowController],
  providers: [FollowService, FollowSanitizer],
})
export class FollowModule {}
