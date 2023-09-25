import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventSanitizer } from './event.sanitizer';
import { NotificationModule } from '../notification/notification.module';
import { PastEventService } from './pastEvent.service';
import { AddressModule } from '../components/address/address.module';
import { PastEventController } from './pastEvents.controller';
import { FileModule } from '../file/file.module';
import { OrgModule } from 'src/org/org.module';
import { SponsorModule } from 'src/sponsor/sponsor.module';
import { AlgoliaModule } from 'src/algolia/algolia.module';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { AuthModule } from 'src/auth/auth.module';
import { EventTagModule } from 'src/event-tag/event-tag.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';

@Module({
  imports: [
    FileModule,
    NotificationModule,
    AddressModule,
    OrgModule,
    SponsorModule,
    AlgoliaModule,
    OrgUserModule,
    AuthModule,
    EventTagModule,
    SubscriptionModule,
  ],
  providers: [EventService, EventSanitizer, PastEventService],
  controllers: [EventController, PastEventController],
  exports: [EventService, PastEventService, EventSanitizer],
})
export class EventModule {}
