import { Module } from '@nestjs/common';
import { NotificationModule } from '../notification/notification.module';
import { AddressModule } from '../components/address/address.module';
import { AuthModule } from '../auth/auth.module';
import { OrgCategoryModule } from '../orgCategory/orgCategory.module';
import { UserModule } from '../user/user.module';
import { ClaimSanitizer } from './claim.sanitizer';
import { OrgController } from './org.controller';
import { OrgSanitizer } from './org.sanitizer';
import { OrgService } from './org.service';
import { FileModule } from '../file/file.module';
import { ScheduleModule } from '../components/schedule/schedule.module';
import { FollowModule } from '../follow/follow.module';
import { MailerModule } from '../components/mailer/mailer.module';
import { SponsorModule } from 'src/sponsor/sponsor.module';
import { AlgoliaModule } from 'src/algolia/algolia.module';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { UserOrgSanitizer } from 'src/orgUser/orgUser.sanitizer';
import { UserListModule } from 'src/userList/userList.module';

@Module({
  imports: [
    OrgCategoryModule,
    AuthModule,
    UserModule,
    AddressModule,
    NotificationModule,
    FileModule,
    ScheduleModule,
    FollowModule,
    MailerModule,
    SponsorModule,
    AlgoliaModule,
    OrgUserModule,
    UserListModule,
  ],
  controllers: [OrgController],
  providers: [OrgService, OrgSanitizer, ClaimSanitizer, UserOrgSanitizer],
  exports: [OrgService, OrgSanitizer],
})
export class OrgModule {}
