import { Module } from '@nestjs/common';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { RsvpController } from './rsvp.controller';
import { RsvpService } from './rsvp.service';
import { EventModule } from 'src/event/event.module';
import { RsvpSanitizer } from './rsvp.sanitizer';

@Module({
  imports: [OrgUserModule, EventModule],
  controllers: [RsvpController],
  providers: [RsvpService, RsvpSanitizer],
  exports: [RsvpService],
})
export class RsvpModule {}
