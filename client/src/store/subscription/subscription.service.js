import axios from 'axios';

export const subscribeService = {
    subscribe: async (body) => await axios.post('/newsletter/subscribe', body),

    unsubscribe: (body) => axios.delete(`/subscriptions/${body.eventId}`, { auth: true }),
};
