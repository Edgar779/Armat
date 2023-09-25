import { GET_EVENT_TICKETS_SUCCESS, GET_MY_TICKETS_SUCCESS, REMOVE_TOTAL_AMOUNT, SAVE_TOTAL_AMOUNT } from './tickets.types';

/**Ticket reducer */

const initialState = {
    eventTickets: [],
    myTickets: null,
    itemTotal: null,
};

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT_TICKETS_SUCCESS:
            return {
                ...state,
                eventTickets: action.payload,
            };

        case GET_MY_TICKETS_SUCCESS:
            return {
                ...state,
                myTickets: action.payload,
            };

        case SAVE_TOTAL_AMOUNT:
            return {
                ...state,
                itemTotal: action.payload?.params,
            };

        case REMOVE_TOTAL_AMOUNT:
            return {
                ...state,
                itemTotal: null,
            };

        default:
            return state;
    }
};
