import { Module } from '@nestjs/common';
import { FileModule } from 'src/file/file.module';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { PaymentModule } from 'src/payment/payment.module';
import { TicketModule } from 'src/ticket/ticket.module';
import { TicketOrderController } from './ticketOrder.controller';
import { TicketOrderSanitizer } from './ticketOrder.sanitizer';
import { TicketOrderService } from './ticketOrder.service';
import { RsvpModule } from 'src/rsvp/rsvp.module';
import { ConverterModule } from 'src/converter/converter.module';
import { EventModule } from 'src/event/event.module';
import { MailerModule } from 'src/components/mailer/mailer.module';

@Module({
  imports: [TicketModule, FileModule, PaymentModule, OrgUserModule, RsvpModule, ConverterModule, EventModule, MailerModule],
  controllers: [TicketOrderController],
  providers: [TicketOrderService, TicketOrderSanitizer],
  exports: [TicketOrderService, TicketOrderSanitizer],
})
export class TicketOrderModule { }
