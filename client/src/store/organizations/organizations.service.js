/**Tags and Categories service */
import axios from 'axios';

export const authService = {
    crateOrgService: (data) => axios.post('/orgs', data, { auth: true }),

    editOrgService: (data) => axios.patch(`/orgs/${data.id}`, data.data, { auth: true }),

    getOrgService: (params) => axios.get('/orgs', { params: params }),

    getOrgServiceByCat: (params) => axios.get('/orgs', { params: params.info }),

    getAllOrgService: () => axios.get('/orgs', { params: { status: 'ACTIVE' } }),

    getOrgByIdService: (id) => axios.get(`/orgs/${id}`),

    deleteOrgService: (id) => axios.delete(`/orgs/${id}`, { auth: true }),

    /**Claims types */
    getClaimsService: (id) => axios.get(`/orgs/${id}/claims`, { auth: true }),

    approveClaimService: (id) => axios.patch(`/orgs/claims/${id}`, null, { auth: true }),

    rejectClaimService: (id) => axios.delete(`/orgs/claims/${id}`, { auth: true }),

    /**Edits types */
    getEditsService: (id) => axios.get(`/orgs/${id}/edits`, { auth: true }),

    acceptOrRejectService: (info) => axios.patch(`/orgs/${info.id}/edits`, { params: info.action, auth: true }),

    /**Status */
    setStatusService: (info, id) => axios.patch(`/orgs/${id}/setStatus`, info, { auth: true }),

    /**Claim */
    claimService: (id) => axios.post(`/orgs/${id}/claims`, null, { auth: true }),

    /**Events */
    getOrgEventsService: (id) => axios.get(`/events/byOrganization/${id}`),

    /**Categories */
    getOrgCategoriesService: () => axios.get(`/orgCategories`),

    /**Follows */
    followService: (info) => axios.post(`/follow`, info, { auth: true }),

    unfollowService: (id) => axios.delete(`/follow/${id}`, { auth: true }),

    getFollowsService: () => axios.get(`/follow/myFollows`, { auth: true }),

    getFollowsServiceFilter: () => axios.get(`/orgs/followed`, { auth: true }),
};
