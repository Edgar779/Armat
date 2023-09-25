/**Payment index */

import { assignCard, getCurrentCard, getInvoices } from "./payments.action";

export { paymentsReducer } from './payments.reducer';
export { paymentsTickets } from './payments.saga';

export const paymentActions = {
    assignCard,
    getCurrentCard,
    getInvoices,
};
