import axios from "axios";
import { getId } from "utils";

export const eventsService = {

  /** Events */

  getEventsService: (params) => axios.get(`/events/org/${getId}`, { params: { ...params }, auth: true }),

  getEventByIdService: (id) => axios.get(`/events/${id}`, { auth: true }),

  createEventService: (body) => axios.post(`/events`, body, { auth: true }),

  editEventService: (body, id) => axios.patch(`/events/${id}`, body, { auth: true }),

  editEventAccessService: (id, status) => axios.patch(`/events/${id}/access/setStatus`, null, {
    params: { status: status },
    auth: true
  }),

  editEventAccessListService: (id, list) => axios.patch(`/events/${id}/list/add`, null, {
    params: { listIds: list },
    auth: true
  }),

  deleteEventsService: (body) => axios.delete(`/events/org/${getId}`, { params: { "eventIds": body }, auth: true }),

  changeEventStatusService: (body) => axios.patch(`/events/${body?.id}/setStatus`, {
    status: body?.status,
    comment: ""
  }, { auth: true }),

  /** End */

  /** Events Tags, Categories */

  getEventCategoriesService: () => axios.get(`/categories`, { auth: true }),

  getEventTagsService: () => axios.get(`/eventTags`, { auth: true }),

  /** End */

  /** Rsvp */

  getRsvpService: (eventId) => axios.get(`/rsvp`, { params: { eventId: eventId }, auth: true }),

  /** End */

  /** Notes */

  getEventSponsorsEdService: (id) => axios.get(`/events/${id}/sponsors`, { auth: true }),

  editNoteService: (id, info) => axios.patch(`/events/${id}/sponsors`, info, { auth: true })

  /** End */
};
