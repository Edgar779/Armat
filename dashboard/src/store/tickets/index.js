import {
    changeTicketStatus,
    createTicket,
    editTicket,
    getSoldTicket,
    getSoldTicketInfo,
    getTicketById,
    getTickets
} from "./tickets.action";
export { ticketReducer } from './tickets.reducer';
export { watchTickets } from './tickets.saga';

export const ticketsActions = {
    /** Ticket */
    createTicket,
    editTicket,
    getTickets,
    getTicketById,
    getSoldTicket,
    getSoldTicketInfo,
    changeTicketStatus,
    /** End */
};
