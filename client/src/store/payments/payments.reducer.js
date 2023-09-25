import { GET_CURRENT_CARD_SUCCESS, GET_PAYMENT_INVOICES_SUCCESS } from './payments.types';

/**Payment reducer */

const initialState = {
    currentCard: null,
    invoices: null,
};

export const paymentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_CARD_SUCCESS:
            return {
                ...state,
                currentCard: action.payload,
            };

        case GET_PAYMENT_INVOICES_SUCCESS:
            return {
                ...state,
                invoices: action.payload,
            };

        default:
            return state;
    }
};
