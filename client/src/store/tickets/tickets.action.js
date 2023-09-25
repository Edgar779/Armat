import {
    BUY_TICKET,
    BUY_TICKET_NO_TOKEN,
    GET_EVENT_TICKETS,
    GET_MY_TICKETS,
    REMOVE_TOTAL_AMOUNT,
    SAVE_TOTAL_AMOUNT
} from "./tickets.types";

/**Ticket actions */

export const getEventTickets = (eventId) => {
    return {
        type: GET_EVENT_TICKETS,
        payload: { eventId },
    };
};

export const getMyTickets = (params, load) => {
    return {
        type: GET_MY_TICKETS,
        payload: { params, load },
    };
};

export const buyTicket = (params, eventId) => {
    return {
        type: BUY_TICKET,
        payload: { params, eventId },
    };
};

export const buyTicketNoToken = (params, eventId) => {
    return {
        type: BUY_TICKET_NO_TOKEN,
        payload: { params, eventId },
    };
};

export const saveTotal = (params) => {
    return {
        type: SAVE_TOTAL_AMOUNT,
        payload: { params },
    };
};
export const removeTotal = () => {
    return {
        type: REMOVE_TOTAL_AMOUNT,
    };
};
