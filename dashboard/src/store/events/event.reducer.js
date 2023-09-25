import {
  GET_EVENTS_SUCCESS,
  GET_EVENT_TAGS_SUCCESS,
  GET_EVENT_CATEGORIES_SUCCESS,
  GET_EVENT_BY_ID_SUCCESS, GET_EVENT_RSVP_SUCCESS, GET_EVENT_RSVP, GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS
} from "./event.type";

const initialState = {
  eventsList: null,
  eventById: null,
  eventCategories: [],
  eventTags: [],
  eventRsvp: null
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {

    /** Events */
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        eventsList: action.payload
      };

    case GET_EVENT_BY_ID_SUCCESS:
      return {
        ...state,
        eventById: action.payload
      };
    /** End */

    /** Events Tags, Categories */
    case GET_EVENT_CATEGORIES_SUCCESS:
      return {
        ...state,
        eventCategories: action.payload
      };

    case GET_EVENT_TAGS_SUCCESS:
      return {
        ...state,
        eventTags: action.payload
      };
    /** End */

    /** Rsvp */

    case GET_EVENT_RSVP_SUCCESS:
      return {
        ...state,
        eventRsvp: action.payload
      };

    case GET_EVENT_RSVP:
      return {
        ...state,
        eventRsvp: null
      };
    /** End */

    /** Sponsors */

    case GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS:
      return {
        ...state,
        eventSponsor: action.payload,
      };

    /** End */
    default:
      return state;
  }
};
