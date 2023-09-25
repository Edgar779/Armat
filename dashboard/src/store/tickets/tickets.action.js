import {
    CHANGE_TICKET_STATUS,
    CREATE_TICKET,
    EDIT_TICKET,
    GET_SOLD_TICKETS, GET_SOLD_TICKETS_INFORMATION,
    GET_TICKET_BY_ID,
    GET_TICKETS
} from "./tickets.type";

/** Tickets */

export const createTicket = (body, params) => {
    return{
        type: CREATE_TICKET,
        payload: { body, params }
    }
}

export const editTicket = (id, body) => {
    return{
        type: EDIT_TICKET,
        payload: { id, body }
    }
}

export const getTickets = ( params ) => {
    return{
        type: GET_TICKETS,
        payload: { params }
    }
}

export const getTicketById = ( id ) => {
    return{
        type: GET_TICKET_BY_ID,
        payload: { id }
    }
}

export const getSoldTicket = ( id, params ) => {
    return{
        type: GET_SOLD_TICKETS,
        payload: { id, params }
    }
}

export const getSoldTicketInfo = ( id ) => {
    return{
        type: GET_SOLD_TICKETS_INFORMATION,
        payload: { id }
    }
}

export const changeTicketStatus = ( id, ticketId ) => {
    return{
        type: CHANGE_TICKET_STATUS,
        payload: {id, ticketId }
    }
}

/** End */