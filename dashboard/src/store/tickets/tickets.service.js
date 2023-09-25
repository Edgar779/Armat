import axios from "axios";
import { getId } from "utils";

export const ticketService = {
  /** Member */

  createTicketService: (body) => axios.post(`/tickets`, body, { auth: true }),

  editTicketService: (id, body) => axios.patch(`/tickets/${id}`, body, { auth: true }),

  getTicketsListService: (params) => axios.get(`/tickets`, { params: { ...params, org:getId }, auth: true }),

  getTicketByIdService: (id) => axios.get(`/tickets/${id}`, { auth: true }),

  getSoldTicketInfoService: (id) => axios.get(`/ticket-order/${id}`, { auth: true }),

  getSoldTicketService: (id, params) => axios.get(`/ticket-order/ticket/${id}/admin`, {
    params: { ...params },
    auth: true
  }),

  changeTicketStatusService: (id) => axios.patch(`/ticket-order/${id}/setStatus`, null, { auth: true })

  /** End */

};
