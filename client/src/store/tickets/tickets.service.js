/**Events service */

import axios from 'axios';

export const ticketService = {
    getEventTicketService: (id) => axios.get(`/tickets?eventId=${id}`, { auth: true }),

    getEventPublicTicketService: (id) => axios.get(`/tickets?eventId=${id}`),

    myTicketsService: (params) => axios.get(`/ticket-order`, { params: { ...params }, auth: true }),

    buyTicketService: (params) => axios.post(`/ticket-order`, params, { auth: true }),

    buyTicketByTokenService: (params) => axios.post(`/ticket-order`, params, { auth: false }),
};
