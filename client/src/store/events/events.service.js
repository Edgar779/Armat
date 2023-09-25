/**Events service */

import axios from 'axios';
const token = typeof window !== 'undefined' && localStorage.getItem('access-token');
export const eventService = {
    getEvents: async (data) => {
        if (data.type === 'subscriptions') {
            const res = axios.get(`/events/subscribed`, { auth: true });
            return res;
        }
        if (data.type === 'pastEvents') {
            const res = axios.get(`/pastEvents`);
            return res;
        }
        if (data.type === 'upcomingEvents') {
            if (token) {
                const res = axios.get(`/events/upcoming/events`, { params: { sorting: data.params }, auth: true });
                return res;
            } else {
                const res = axios.get(`/events/upcoming/events`, { params: { sorting: data.params } });
                return res;
            }
        } else {
            const res = axios.get(`/events/byCreator`, { auth: true });
            return res;
        }
    },

    createEventsService: (data) => axios.post('/events', data, { auth: true }),

    editEventsService: (data, id) => axios.patch(`/events/${id}`, data, { auth: true }),

    getSubscribes: () => axios.get('/events/subscribed', { auth: true }),

    DeleteEvent: (data) => axios.delete(`/events/${data}`, { auth: true }),

    submitEvent: (eventId) => axios.post(`/myevent/${eventId}/submit`, {}, { auth: true }),

    UnpublishEvent: (data) => {
        if (data.type === 'MyEvents') {
            axios.post(`/myevent/${data.eventId}/unpublish`, {}, { auth: true });
        }
        if (data.type === 'Events') {
            axios.post(`/events/${data.eventId}/unpublish/${data.creatorId}`, {}, { auth: true });
        }
    },

    PublishEvent: (eventId) => axios.post(`/myevent/${eventId}/publish`, {}, { auth: true }),

    GetPublicEvents: () => axios.get('/events/upcoming', { auth: true }),

    GetSingleEvent: async (eventId) => await axios.get(`/events/${eventId}`, { auth: true }),

    GetSingleEventPublic: async (eventId) => await axios.get(`/events/${eventId}`),

    SubscribeEvent: async (body) => await axios.post('/subscriptions', body.data, { auth: true }),

    unsubscribe: async (body) => await axios.delete(`/subscriptions/${body.eventId}`, { auth: true }),

    setEventStatusSaga: (info) => axios.patch(`/events/${info.id}/setStatus`, info.type, { auth: true }),

    //Sponsors Request
    getPendingSponsorsService: (id) => axios.get(`/events/sponsorRequests/${id}`, { auth: true }),

    getEventSponsorsService: (id) => axios.get(`/events/sponsored/${id}`),

    getEventSponsorsEdService: (id) => axios.get(`/events/${id}/sponsors`),

    editSponsorsNoteService: (id, info) => axios.patch(`/events/${id}/sponsors`, info, { auth: true }),

    approveOrRejectSponsorService: (info) => axios.patch(`/events/${info.eventId}/setSponsorRequest`, info.statusInfo, { auth: true }),

    // Rsvp
    createRsvpService: (id, type) => axios.post(`/rsvp`, { eventId: id, status: type }, { auth: true }),

    editRsvpService: (id, type) => axios.patch(`/rsvp/${id}`, { status: type }, { auth: true }),

    getCurrentRsvpService: (id) => axios.get(`/rsvp/event/${id}/byMember`, { auth: true }),
};
