import { forwardRef, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { AuthTemplate, ContactTemplate, EventTemplate, InvoiceTemplate } from './templates';
import { UserModule } from '../../user/user.module';
import { TicketTemplate } from './templates/ticket.template';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [MailerService, AuthTemplate, ContactTemplate, EventTemplate, InvoiceTemplate, TicketTemplate],
  controllers: [MailerController],
  exports: [MailerService],
})
export class MailerModule { }
