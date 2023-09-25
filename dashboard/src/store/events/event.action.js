import {
  CREATE_EVENT,
  GET_EVENTS,
  GET_EVENT_TAGS,
  GET_EVENT_CATEGORIES,
  DELETE_EVENTS,
  GET_EVENT_BY_ID,
  CHANGE_EVENT_STATUS,
  GET_EVENT_RSVP,
  EDIT_EVENT,
  EDIT_NOTE,
  GET_EVENT_SPONSORS_FOR_EDIT,
  EDIT_EVENT_ACCESS,
  EDIT_EVENT_ACCESS_LIST
} from "./event.type";


/** Events */

export const getEvents = (params) => {
  return {
    type: GET_EVENTS,
    payload: { params }
  };
};

export const getEventById = (id) => {
  return {
    type: GET_EVENT_BY_ID,
    payload: { id }
  };
};

export const createEvent = (body, params) => {
  return {
    type: CREATE_EVENT,
    payload: { body, params }
  };
};

export const editEvent = (body, params, id) => {
  return {
    type: EDIT_EVENT,
    payload: { body, params, id }
  };
};

export const editEventAccess = ( id, status) => {
  return {
    type: EDIT_EVENT_ACCESS,
    payload: { id, status }
  };
};

export const editEventAccessList = ( id, list) => {
  return {
    type: EDIT_EVENT_ACCESS_LIST,
    payload: { id, list }
  };
};

export const deleteEvents = ( idList ) => {
  return {
    type: DELETE_EVENTS,
    payload: { idList }
  };
};

export const changeEventStatus = ( body, params ) => {
  return {
    type: CHANGE_EVENT_STATUS,
    payload: { body, params }
  };
};

/** End */


/** Events Tags, Categories */

export const getEventTags = () => {
  return {
    type: GET_EVENT_TAGS
  };
};

export const getEventCategories = () => {
  return {
    type: GET_EVENT_CATEGORIES
  };
};

/** End */

/** Rsvp */

export const getEventRsvp = ( eventId ) => {
  return {
    type: GET_EVENT_RSVP,
    payload: eventId
  };
};

/** End */

/** Note Actions */

export const getEventSponsorsForEdit = (evId) => {
  return {
    type: GET_EVENT_SPONSORS_FOR_EDIT,
    payload: evId,
  };
};

export const editNote = ( info, event ) => {
  return {
    type: EDIT_NOTE,
    payload: {info, event}
  };
};

/** End */