/**Ticket index */

import { buyTicket, buyTicketNoToken, getEventTickets, getMyTickets, removeTotal, saveTotal } from "./tickets.action";

export { ticketsReducer } from './tickets.reducer';
export { watchTickets } from './tickets.saga';

export const ticketActions = {
    getEventTickets,
    getMyTickets,
    buyTicket,
    buyTicketNoToken,
    saveTotal,
    removeTotal,
};
