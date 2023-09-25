import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { MailerModule } from '../components/mailer/mailer.module';
import { NotificationService } from './notification.service';
import { NotificationSanitizer } from './notification.sanitizer';
import { NotificationController } from './notification.controller';

@Module({
  imports: [MailerModule, forwardRef(() => UserModule)],
  controllers: [NotificationController],
  providers: [NotificationSanitizer, NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
