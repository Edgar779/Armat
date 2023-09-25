import { Injectable } from '@nestjs/common';
import { EventSanitizer } from 'src/event/event.sanitizer';
import { ISanitize } from '../util';
import { TicketDTO } from './dto';
import { ITicket } from './interface';

@Injectable()
export class TicketSanitizer implements ISanitize {
  constructor(private readonly eventSaznitizer: EventSanitizer) {}

  sanitize(ticket: ITicket): TicketDTO {
    const sanitizedTicket: TicketDTO = {
      id: ticket.id,
      name: ticket.name,
      eventId: ticket.eventId?.title ? this.eventSaznitizer.sanitize(ticket.eventId) : ticket.eventId,
      capacity: ticket.capacity,
      description: ticket.description,
      price: ticket.price,
      startDate: ticket.startDate,
      startTime: ticket.startTime,
      endDate: ticket.endDate,
      endTime: ticket.endTime,
      minOrder: ticket.minOrder,
      maxOrder: ticket.maxOrder,
      access: ticket.access,
      status: ticket.status,
      soldOut: ticket.soldOut,
      org: ticket.org,
      displayId: ticket.displayId.prefix + ticket.displayId.suffix,
    };
    return sanitizedTicket;
  }

  /** Sanitizes an array of tickets */
  sanitizeMany(tickets: ITicket[]): TicketDTO[] {
    const sanitizedTickets: TicketDTO[] = [];
    tickets.map((ticket) => sanitizedTickets.push(this.sanitize(ticket)));
    return sanitizedTickets;
  }
}
