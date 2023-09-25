/**Events export index */

import {
    ApproveEvent, approveOrRejectSponsor,
    ByAlphabeticalOrganizers,
    ByAlphabeticalOrganizersDefault,
    ByDateEvents,
    createEvent,
    deleteEvent,
    DisapproveEvent, editEvent, editNote,
    FilterByType,
    getEvents, getEventSponsors, getEventSponsorsForEdit, getPendingSponsors,
    PublishEvent, removeEventSponsorsList,
    searchEvents, setEventStatus,
    SubmitEvent,
    UnpublishEvent,
} from './events.action';


export { eventsReducer } from './events.reducer';
export { watchEvents } from './events.saga';
export { GET_EVENTS, GET_EVENTS_SUCCESS } from './events.types';

export const EventsActions = {
    createEvent,
    editEvent,
    getEvents,
    deleteEvent,
    ByDateEvents,
    FilterByType,
    ByAlphabeticalOrganizers,
    ByAlphabeticalOrganizersDefault,
    searchEvents,
    SubmitEvent,
    ApproveEvent,
    DisapproveEvent,
    UnpublishEvent,
    PublishEvent,

    setEventStatus,

    // event sponsors

    getPendingSponsors,
    removeEventSponsorsList,
    getEventSponsors,
    getEventSponsorsForEdit,
    approveOrRejectSponsor,
    editNote,
};
