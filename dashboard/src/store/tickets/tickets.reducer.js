import {
  GET_SOLD_TICKETS_INFORMATION_SUCCESS,
  GET_SOLD_TICKETS_SUCCESS,
  GET_TICKET_BY_ID_SUCCESS,
  GET_TICKETS_SUCCESS
} from "./tickets.type";

const initialState = {
  ticketList: null,
  ticketById: null,
  soldTicketInfo: null,
  soldTickets: null,
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {

    /** Ticket */

    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        ticketList: action.payload
      };

    case GET_TICKET_BY_ID_SUCCESS:
      return {
        ...state,
        ticketById: action.payload
      };

    case GET_SOLD_TICKETS_INFORMATION_SUCCESS:
      return {
        ...state,
        soldTicketInfo: action.payload
      };

    case GET_SOLD_TICKETS_SUCCESS:
      return {
        ...state,
        soldTickets: action.payload
      };

    /** End */

    default:
      return state;
  }
};
