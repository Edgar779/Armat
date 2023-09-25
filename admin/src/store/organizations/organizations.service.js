/**Tags and Categories service */
import axios from 'axios';

export const authService = {

    crateOrgService: ( data ) => axios.post('/orgs', data, { auth: true }),

    editOrgService: ( data ) => axios.patch(`/orgs/${data.id}`, data.data, { auth: true }),

    getOrgService: ( params ) => axios.get('/orgs/byAdmin', { params: params,  auth: true }),

    getMyOrgs: ( params ) => axios.get('/orgs/getMyOrgs', { params: params,  auth: true }),

    getAllOrgService: ( params ) => axios.get('/orgs/byAdmin', {   auth: true }),

    getOrgByIdService: ( id ) => axios.get(`/orgs/${id}`, { auth: true }),

    deleteOrgService: ( id ) => axios.delete(`/orgs/${id}`, { auth: true }),

    /**Claims types */
    getClaimsService: ( id ) => axios.get(`/orgs/${id}/claims`, { auth: true }),

    approveClaimService: ( id ) => axios.patch(`/orgs/claims/${id}`, null,{ auth: true }),

    rejectClaimService: ( id ) => axios.delete(`/orgs/claims/${id}`, { auth: true }),

    /**Edits types */
    getEditsService: ( id ) => axios.get(`/orgs/${id}/edits`, { auth: true }),

    acceptOrRejectService: (info) => axios.patch(`/orgs/edits/${info.id}?action=${info.action}`, null, { auth: true }),

    /**Status */
    setStatusService: ( info, id ) => axios.patch(`/orgs/${id}/setStatus`, info , { auth: true }),

    /**Manager */
    removeManagerService: ( id ) => axios.patch(`/orgs/${id}/removeManager`, null, { auth: true}),

    /**Sponsoring */
    getPendingSponsorsService: (id) => axios.get(`/events/sponsorRequests/${id}`, { auth: true }),

    getEventSponsorsService: (id) => axios.get(`/events/sponsored/${id}`, { auth: true }),

    getEventSponsorsEdService: (id) => axios.get(`/events/${id}/sponsors`, { auth: true }),

    editSponsorsNoteService: ( event ) => axios.patch(`/events/${event.id}/sponsors`, event.info, { auth: true }),

    approveOrRejectSponsorService: (info) => axios.patch(`/events/${info.eventId}/setSponsorRequest`, info.statusInfo, { auth: true }),

};
