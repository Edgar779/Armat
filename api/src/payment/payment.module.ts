import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentSanitizer } from './payment.sanitizer';
import { MailerModule } from 'src/components/mailer/mailer.module';

@Module({
  imports: [MailerModule],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentSanitizer],
  exports: [PaymentService],
})
export class PaymentModule { }
