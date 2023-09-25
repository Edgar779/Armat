import { Injectable } from '@nestjs/common';
import { TicketSanitizer } from 'src/ticket/ticket.sanitizer';
import { ISanitize } from '../util';
import { TicketOrderDTO } from './dto';
import { ITicketOrder } from './interface';

@Injectable()
export class TicketOrderSanitizer implements ISanitize {
  constructor(private readonly ticketSanitizer: TicketSanitizer) { }
  sanitize(ticketOrder: ITicketOrder): TicketOrderDTO {
    const sanitizedTicketOrder: TicketOrderDTO = {
      id: ticketOrder.id,
      ticketId: ticketOrder.ticketId?.name ? this.ticketSanitizer.sanitize(ticketOrder.ticketId) : ticketOrder.ticketId,
      memberId: ticketOrder.memberId?.email ? ticketOrder.memberId.fullName : ticketOrder.memberId,
      email: ticketOrder.email,
      qr: ticketOrder.qr,
      ticketPDF: ticketOrder.ticketPDF,
      org: ticketOrder.org,
      status: ticketOrder.status,
      ticketCount: ticketOrder.ticketCount,
      createdAt: ticketOrder.createdAt,
      cancelDate: ticketOrder.cancelDate,
      orderId: ticketOrder.orderId
    };
    return sanitizedTicketOrder;
  }

  /** Sanitizes an array of ticket orders */
  sanitizeMany(ticketOrders: ITicketOrder[]): TicketOrderDTO[] {
    const sanitizedTicketOrders: TicketOrderDTO[] = [];
    ticketOrders.map((ticketOrder) => sanitizedTicketOrders.push(this.sanitize(ticketOrder)));
    return sanitizedTicketOrders;
  }
}
