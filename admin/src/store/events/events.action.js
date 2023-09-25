/**Events actions */

import {
    APPROVE_EVENT,
    CREATE_EVENTS,
    DELETE_EVENTS, EDIT_EVENTS, EDIT_SPONSOR_NOTE,
    FILTER_EVENTS_BY_TYPE,
    FILTER_ORGANIZERS_BY_AZ,
    FILTER_ORGANIZERS_BY_DATE,
    FILTER_ORGANIZERS_BY_DEFAULT,
    FILTER_TITLE_BY_AZ,
    GET_EVENTS, GET_PENDING_SPONSORS,
    PUBLISH_EVENT,
    REJECT_EVENT, REMOVE_SPONSORS_LIST,
    SEARCH_EVENTS, SET_EVENT_STATUS,
    SUBMIT_EVENT,
    UNPUBLISH_EVENT,
} from './events.types';
import {
    APPROVE_REJECT_SPONSOR,
    GET_EVENT_SPONSORS,
    GET_EVENT_SPONSORS_FOR_EDIT
} from "../organizations/organizations.types";


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

export const getEvents = (Type) => {
    return {
        type: GET_EVENTS,
        payload: { Type },
    };
};

export const deleteEvent = (data) => {
    return {
        type: DELETE_EVENTS,
        payload: { data },
    };
};

//SearchPage Events

export const searchEvents = (name) => {
    return {
        type: SEARCH_EVENTS,
        payload: { name },
    };
};

/**Filters */

// Organizers

export const ByAlphabeticalOrganizers = (name, type) => {
    return {
        type: name === 'Organizer' ? FILTER_ORGANIZERS_BY_AZ : FILTER_TITLE_BY_AZ,
        payload: { type },
    };
};

export const ByAlphabeticalOrganizersDefault = () => {
    return {
        type: FILTER_ORGANIZERS_BY_DEFAULT,
    };
};

// By Date
export const ByDateEvents = (type) => {
    return {
        type: FILTER_ORGANIZERS_BY_DATE,
        payload: { type },
    };
};

//Events status

export const FilterByType = (role) => {
    return {
        type: FILTER_EVENTS_BY_TYPE,
        payload: { role },
    };
};

export const SubmitEvent = (eventId) => {
    return {
        type: SUBMIT_EVENT,
        payload: { eventId },
    };
};

export const ApproveEvent = (data) => {
    return {
        type: APPROVE_EVENT,
        payload: { data },
    };
};

export const DisapproveEvent = (data) => {
    return {
        type: REJECT_EVENT,
        payload: { data },
    };
};

export const UnpublishEvent = (data) => {
    return {
        type: UNPUBLISH_EVENT,
        payload: { data },
    };
};

export const PublishEvent = (data) => {
    return {
        type: PUBLISH_EVENT,
        payload: { data },
    };
};



export const setEventStatus = (info, id, type) =>{
    return{
        type:SET_EVENT_STATUS,
        payload:{ info, id, type  }
    }
}

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
