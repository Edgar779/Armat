
/**Events service */
import axios from 'axios';

export const authService = {

    getEvents: (Type) => {
        if (Type === 'Events') {
         return axios.get(`/events/admin`, { auth:true });
        }
        if (Type === 'MyEvents') {
            return   axios.get(`/events/byCreator`, { auth:true });
        }
    },
    createEvents: (data) => {return axios.post (`/events`, data, { auth:true });},

    editEventsService: (data, id) => axios.patch(`/events/${id}`, data, { auth: true }),

    DeleteEvent: (data) => {
        if (data.type === 'MyEvents') {
            const res = axios.delete(`/events/${data.id}`, { auth:true });
            return res;
        }
        if (data.type === 'Events') {
            const res = axios.delete(`/events/${data.id}`, { auth:true });
            return res;
        }
    },
    SubmitEvent: (eventId) => {
        const res = axios.post(
          `/myevent/${eventId}/submit`,
          {},
            { auth:true }
        );
        return res;
    },
    UnpublishEvent: (data) => {
        if (data.type === 'MyEvents') {
            const res = axios.post(
              `/myevent/${data.eventId}/unpublish`,
              {},
                { auth:true }
            );
            return res;
        }
        if (data.type === 'Events') {
            const res = axios.post(
              `/events/${data.eventId}/unpublish/${data.creatorId}`,
              {},
                { auth:true }
            );
            return res;
        }
    },
    PublishEvent: (data) => {
        const res = axios.post(
          `/myevent/${data.eventId}/publish`,
          {},
            { auth:true }
        );
        return res;
    },
    ApproveEvent: (data) => {
        const res = axios.post(
          `/events/${data.eventId}/approve/${data.creatorId}`,
          {},
            { auth:true }
        );
        return res;
    },
    RejectEvent: (data) => {
        const res = axios.post(
          `/events/${data.eventId}/reject`,
          {
              comment: data.comment,
          },
            { auth:true }
        );
        return res;
    },

    setStatusService:( data ) => axios.patch(`/events/${data.id}/setStatus`, data.info, {auth:true}),


    //Sponsors Request
    getPendingSponsorsService: (id) => axios.get(`/events/sponsorRequests/${id}`, { auth: true }),

    getEventSponsorsService: (id) => axios.get(`/events/sponsored/${id}`, { auth: true }),

    getEventSponsorsEdService: (id) => axios.get(`/events/${id}/sponsors`, { auth: true }),

    editSponsorsNoteService: (id, info) => axios.patch(`/events/${id}/sponsors`, info, { auth: true }),

    approveOrRejectSponsorService: (info) => axios.patch(`/events/${info.eventId}/setSponsorRequest`, info.statusInfo, { auth: true }),
};