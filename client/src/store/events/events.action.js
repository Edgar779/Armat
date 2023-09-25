/**Events actions */

import {
    CREATE_EVENTS,
    DELETE_EVENTS,
    FILTER_CALENDAR_EVENTS_BY_START_END_DATE,
    FILTER_EVENTS_BY_LOCATION_TYPE,
    FILTER_EVENTS_BY_START_END_DATE,
    FILTER_ORGANIZERS_BY_DATE,
    FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY,
    FILTER_ORGANIZERS_BY_DEFAULT,
    FILTER_TITLE_BY_AZ,
    FILTER_TITLE_BY_ZA,
    GET_EVENTS,
    GET_PUBLIC_EVENTS,
    GET_SINGLE_EVENT,
    PUBLISH_EVENT,
    SEARCH_BY_CATEGORIES,
    SEARCH_EVENTS,
    SEARCH_EVENTS_FOR_CALENDAR,
    SEARCH_EVENTS_FOR_MAP,
    SEARCH_EVENTS_FOR_MAP_SELECT,
    SUBMIT_EVENT,
    UNPUBLISH_EVENT,
    SUBSCRIBE_EVENT,
    SEARCH_BY_CATEGORIES_CALENDAR,
    UNSUBSCRIBE_EVENT,
    SEARCH_EVENTS_FOR_SUBSCRIPTIONS,
    GET_SUBSCRIBES,
    CLEAR_EVENT_STATUS,
    FILTER_CALENDAR_DATE_BY_TIME,
    SINGLE_EVENT_REMOVE,
    CREATE_EVENTS_SUCCESS_CLEAR,
    SET_EVENT_STATUS,
    EDIT_EVENTS,
    GET_PENDING_SPONSORS,
    GET_EVENT_SPONSORS,
    GET_EVENT_SPONSORS_FOR_EDIT,
    APPROVE_REJECT_SPONSOR,
    REMOVE_SPONSORS_LIST,
    EDIT_SPONSOR_NOTE,
    CREATE_RSVP, EDIT_RSVP, GET_CURRENT_RSVP
} from "./events.types";

export const createEvent = (eventData) => {
    return {
        type: CREATE_EVENTS,
        payload: { eventData },
    };
};

export const editEvent = (eventData, id, type, orgId) => {
    return {
        type: EDIT_EVENTS,
        payload: { eventData, id, type, orgId },
    };
};
export const createEventClear = () => {
    return {
        type: CREATE_EVENTS_SUCCESS_CLEAR,
    };
};

export const getEvents = (type, load, params) => {
    return {
        type: GET_EVENTS,
        payload: { type, load, params },
    };
};

export const getSubscribes = () => {
    return {
        type: GET_SUBSCRIBES,
    };
};

export const getMuSubscriptions = () => {
    return {
        type: GET_EVENTS,
        payload: {},
    };
};

export const deleteEvent = (data, type, orgId) => {
    return {
        type: DELETE_EVENTS,
        payload: { data, type, orgId },
    };
};

//SearchPage Events

export const searchEvents = (name, type) => {
    return {
        type:
            type === 'Calendar' ? SEARCH_EVENTS_FOR_CALENDAR : type === 'mySubscriptions' ? SEARCH_EVENTS_FOR_SUBSCRIPTIONS : SEARCH_EVENTS,
        payload: { name },
    };
};
export const searchEventsForMap = (name) => {
    return {
        type: SEARCH_EVENTS_FOR_MAP,
        payload: { name },
    };
};
export const searchTitleEventsForMap = (name) => {
    return {
        type: SEARCH_EVENTS_FOR_MAP_SELECT,
        payload: { name },
    };
};

export const searchByCategories = (cat, type) => {
    return {
        type: type === 'Calendar' ? SEARCH_BY_CATEGORIES_CALENDAR : SEARCH_BY_CATEGORIES,
        payload: { cat },
    };
};

/**Filters */

// Organizers

export const ByAlphabeticalOrganizers = (name) => {
    return {
        type: name === 'ZA' ? FILTER_TITLE_BY_ZA : FILTER_TITLE_BY_AZ,
    };
};

export const ByAlphabeticalOrganizersDefault = () => {
    return {
        type: FILTER_ORGANIZERS_BY_DEFAULT,
    };
};

// By Date
export const ByDateEvents = () => {
    return {
        type: FILTER_ORGANIZERS_BY_DATE,
    };
};
export const ByDateLatestEvents = () => {
    return {
        type: FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY,
    };
};

export const filterByStartEndDate = (date, filterType) => {
    return {
        type: filterType === 'Calendar' ? FILTER_CALENDAR_EVENTS_BY_START_END_DATE : FILTER_EVENTS_BY_START_END_DATE,
        payload: { date },
    };
};

export const filterByStartEndDateTime = (time) => {
    return {
        type: FILTER_CALENDAR_DATE_BY_TIME,
        payload: time,
    };
};
// By Location Type

export const ByLocationTypeEvents = (locationType) => {
    return {
        type: FILTER_EVENTS_BY_LOCATION_TYPE,
        payload: { locationType },
    };
};

//Events status

export const submitEvent = (eventId) => {
    return {
        type: SUBMIT_EVENT,
        payload: { eventId },
    };
};

export const UnpublishEvent = (data) => {
    return {
        type: UNPUBLISH_EVENT,
        payload: { data },
    };
};

export const publishEvent = (eventId) => {
    return {
        type: PUBLISH_EVENT,
        payload: { eventId },
    };
};

//For get public events
export const GetPublicEvents = () => {
    return {
        type: GET_PUBLIC_EVENTS,
    };
};

//For get single event
export const GetSingleEvent = (id) => {
    return {
        type: GET_SINGLE_EVENT,
        payload: { id },
    };
};
export const singleEventRemove = () => {
    return {
        type: SINGLE_EVENT_REMOVE,
    };
};

//for subscribe event

export const subscribeEvent = (data) => {
    return {
        type: SUBSCRIBE_EVENT,
        payload: { data },
    };
};

export const unsubscribe = (data) => {
    return {
        type: UNSUBSCRIBE_EVENT,
        payload: data,
    };
};

export const clearEventStatus = () => {
    return {
        type: CLEAR_EVENT_STATUS,
    };
};

export const setEventStatus = (type, id) => {
    return {
        type: SET_EVENT_STATUS,
        payload: { type, id },
    };
};

//Event Sponsors
export const getPendingSponsors = (orgId) => {
    return {
        type: GET_PENDING_SPONSORS,
        payload: orgId,
    };
};

export const removeEventSponsorsList = () => {
    return {
        type: REMOVE_SPONSORS_LIST,
    };
};
export const getEventSponsors = (orgId) => {
    return {
        type: GET_EVENT_SPONSORS,
        payload: orgId,
    };
};

export const getEventSponsorsForEdit = (evId) => {
    return {
        type: GET_EVENT_SPONSORS_FOR_EDIT,
        payload: evId,
    };
};

export const approveOrRejectSponsor = (info) => {
    return {
        type: APPROVE_REJECT_SPONSOR,
        payload: info,
    };
};

export const editNote = (info, event) => {
    return {
        type: EDIT_SPONSOR_NOTE,
        payload: { info, event },
    };
};

// Rsvp

export const createRsvp = (id, type) => {
    return {
        type: CREATE_RSVP,
        payload: { id, type },
    };
};

export const editRsvp = (id, type, eventId) => {
    return {
        type: EDIT_RSVP,
        payload: { id, type, eventId },
    };
};

export const getCurrentRsvp = (id) => {
    return {
        type: GET_CURRENT_RSVP,
        payload: { id },
    };
};
