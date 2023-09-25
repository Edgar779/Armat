import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { EventTagController } from './event-tag.controller';
import { EventTagService } from './event-tag.service';

@Module({
  imports: [AuthModule],
  controllers: [EventTagController],
  providers: [EventTagService],
})
export class EventTagModule {}
