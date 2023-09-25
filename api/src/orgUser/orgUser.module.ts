import { Module } from '@nestjs/common';
import { OrgUserService } from './orgUser.service';
import { OrgUserController } from './orgUser.controller';
import { UserOrgSanitizer } from './orgUser.sanitizer';
import { MailerModule } from 'src/components/mailer/mailer.module';
import { NotificationModule } from 'src/notification/notification.module';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MailerModule, NotificationModule, UserModule, AuthModule],
  controllers: [OrgUserController],
  providers: [OrgUserService, UserOrgSanitizer],
  exports: [OrgUserService, UserOrgSanitizer],
})
export class OrgUserModule {}
