import {
    createEvent,
    getEvents,
    getEventCategories,
    getEventTags,
    deleteEvents,
    getEventById,
    changeEventStatus, getEventRsvp, editEvent, editNote, getEventSponsorsForEdit, editEventAccess, editEventAccessList
} from "./event.action";

export { eventReducer } from './event.reducer';
export { watchEvent } from './event.saga';

export const eventActions = {
    /** Events */
    getEvents,
    getEventById,
    editEvent,
    editEventAccess,
    editEventAccessList,
    createEvent,
    deleteEvents,
    changeEventStatus,


    /** End */

    /** Events Tags, Categories, Types*/
    getEventCategories,
    getEventTags,
    /** End */

    /** Rsvp */
    getEventRsvp,
    /** End */

    /** Notes */
    getEventSponsorsForEdit,
    editNote,
    /** End */

};
