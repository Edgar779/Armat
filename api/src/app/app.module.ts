import { Module } from '@nestjs/common';
import { ScheduleModule as Scheduler } from '@nestjs/schedule';
import { AlgoliaModule } from 'src/algolia/algolia.module';
import { MasterModule } from 'src/master/master.module';
import { PaymentModule } from 'src/payment/payment.module';
import { RsvpModule } from 'src/rsvp/rsvp.module';
import { TagModule } from 'src/tag/tag.module';
import { TicketOrderModule } from 'src/ticket-order/ticketOrder.module';
import { TicketModule } from 'src/ticket/ticket.module';
import { AuthModule } from '../auth/auth.module';
import { CategoryModule } from '../category/category.module';
import { AddressModule } from '../components/address/address.module';
import { MailerModule } from '../components/mailer/mailer.module';
import { ScheduleModule } from '../components/schedule/schedule.module';
import { FollowModule } from '../follow/follow.module';
import { NewsletterModule } from '../newsletter';
import { NotificationModule } from '../notification/notification.module';
import { OrgModule } from '../org/org.module';
import { OrgCategoryModule } from '../orgCategory/orgCategory.module';
import { UserModule } from '../user/user.module';
import { WorkerModule } from '../worker/worker.module';
import { AppController } from './app.controller';
import { DatabaseConnection } from './app.database';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    MailerModule,
    AuthModule,
    NotificationModule,
    WorkerModule,
    NewsletterModule,
    CategoryModule,
    OrgCategoryModule,
    OrgModule,
    ScheduleModule,
    FollowModule,
    AddressModule,
    AlgoliaModule,
    Scheduler.forRoot(),
    MasterModule,
    RsvpModule,
    TicketModule,
    PaymentModule,
    TicketOrderModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
