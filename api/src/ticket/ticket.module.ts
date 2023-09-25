import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TicketSanitizer } from './ticket.sanitizer';
import { OrgUserModule } from 'src/orgUser/orgUser.module';
import { DisplayIdModule } from 'src/globals/displayId/displayId.module';
import { EventModule } from 'src/event/event.module';
import { OrgModule } from 'src/org/org.module';

@Module({
  imports: [OrgUserModule, OrgModule, DisplayIdModule, EventModule],
  controllers: [TicketController],
  providers: [TicketService, TicketSanitizer],
  exports: [TicketService, TicketSanitizer],
})
export class TicketModule {}
