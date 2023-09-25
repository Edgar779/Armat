import { ASSIGN_CARD, GET_CURRENT_CARD, GET_PAYMENT_INVOICES } from "./payments.types";

/**Payment actions */

export const assignCard = (params) => {
    return {
        type: ASSIGN_CARD,
        payload: { params },
    };
};

export const getCurrentCard = ( ) => {
    return {
        type: GET_CURRENT_CARD,
    };
};

export const getInvoices = ( ) => {
    return {
        type: GET_PAYMENT_INVOICES,
    };
};
