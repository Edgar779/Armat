/**Payment service */

import axios from 'axios';

export const paymentService = {
    assignCardService: (body) => axios.post(`/payments/pmtMethod`, null, { params: { pmMethodId: body }, auth: true }),

    getCurrentCardService: () => axios.get(`/payments/pmtMethod`, { auth: true }),

    getInvoicesService: () => axios.get(`/payments`, { auth: true }),
};
