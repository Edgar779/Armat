/**Events types */

// For Get Events
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_SUCCESS_NO_RESULT = 'GET_EVENTS_SUCCESS_NO_RESULT';
export const GET_SUBSCRIBES = 'GET_SUBSCRIBES';
export const GET_SUBSCRIBES_SUCCESS = 'GET_SUBSCRIBES_SUCCESS';

// For Create Events
export const CREATE_EVENTS = 'CREATE_EVENTS';
export const EDIT_EVENTS = 'EDIT_EVENTS';
export const CREATE_EVENTS_SUCCESS = 'CREATE_EVENTS_SUCCESS';
export const CREATE_EVENTS_SUCCESS_CLEAR = 'CREATE_EVENTS_SUCCESS_CLEAR';

// For Delete Event
export const DELETE_EVENTS = 'DELETE_EVENTS';

// For SearchPage Events

export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const SEARCH_EVENTS_FOR_MAP = 'SEARCH_EVENTS_FOR_MAP';
export const SEARCH_EVENTS_FOR_SUBSCRIPTIONS = 'SEARCH_EVENTS_FOR_SUBSCRIPTIONS';
export const SEARCH_EVENTS_FOR_MAP_SELECT = 'SEARCH_EVENTS_FOR_MAP_SELECT';
export const SEARCH_EVENTS_FOR_CALENDAR = 'SEARCH_EVENTS_FOR_CALENDAR';
export const SEARCH_BY_CATEGORIES = 'SEARCH_BY_CATEGORIES';
export const SEARCH_BY_CATEGORIES_CALENDAR = 'SEARCH_BY_CATEGORIES_CALENDAR';
export const SEARCH_BY_CATEGORIES_MAP = 'SEARCH_BY_CATEGORIES_MAP';

//For Filter Events
export const FILTER_ORGANIZERS_BY_DATE = 'FILTER_ORGANIZERS_BY_DATE';
export const FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY = 'FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY';
export const FILTER_ORGANIZERS_BY_DATE_SUCCESS = 'FILTER_ORGANIZERS_BY_DATE_SUCCESS';
export const FILTER_ORGANIZERS_BY_AZ = 'FILTER_ORGANIZERS_BY_AZ';
export const FILTER_ORGANIZERS_BY_DEFAULT = 'FILTER_ORGANIZERS_BY_DEFAULT';
export const FILTER_ORGANIZERS_BY_AZ_SUCCESS = 'FILTER_ORGANIZERS_BY_AZ_SUCCESS';
export const FILTER_TITLE_BY_AZ = 'FILTER_TITLE_BY_AZ';
export const FILTER_TITLE_BY_ZA = 'FILTER_TITLE_BY_ZA';
export const FILTER_EVENTS_BY_START_END_DATE = 'FILTER_EVENTS_BY_START_END_DATE';
export const FILTER_CALENDAR_EVENTS_BY_START_END_DATE = 'FILTER_CALENDAR_EVENTS_BY_START_END_DATE';
export const FILTER_CALENDAR_DATE_BY_TIME = 'FILTER_CALENDAR_DATE_BY_TIME';

export const FILTER_EVENTS_BY_LOCATION_TYPE = 'FILTER_EVENTS_BY_LOCATION_TYPE';

//Events status

export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const SUBMIT_EVENT_SUCCESS = 'SUBMIT_EVENT_SUCCESS';
export const SUBMIT_EVENT_ERROR = 'SUBMIT_EVENT_ERROR';
export const UNPUBLISH_EVENT = 'UNPUBLISH_EVENT';
export const PUBLISH_EVENT = 'PUBLISH_EVENT';

export const PUBLIC_EVENT = 'PUBLI_EVENT';
export const CLEAR_EVENT_STATUS = 'CLEAR_EVENT_STATUS';

//Public Event types
export const GET_PUBLIC_EVENTS = 'GET_PUBLIC_EVENTS';
export const GET_PUBLIC_EVENTS_SUCCESS = 'GET_PUBLIC_EVENTS_SUCCESS';

//

//Single event types
export const GET_SINGLE_EVENT = 'GET_SINGLE_EVENT';
export const GET_SINGLE_EVENT_SUCCESS = 'GET_SINGLE_EVENT_SUCCESS';
export const SINGLE_EVENT_REMOVE = 'SINGLE_EVENT_REMOVE';

//subscribe event

export const SUBSCRIBE_EVENT = 'SUBSCRIBE_EVENT';
export const SUBSCRIBE_EVENT_SUCCESS = 'SUBSCRIBE_EVENT_SUCCESS';
export const UNSUBSCRIBE_EVENT_SUCCESS = 'UNSUBSCRIBE_EVENT_SUCCESS';
export const UNSUBSCRIBE_EVENT = 'UNSUBSCRIBE_EVENT';

//Event Status
export const SET_EVENT_STATUS = 'SET_EVENT_STATUS';
export const SET_EVENT_STATUS_SUCCESS = 'SET_EVENT_STATUS_SUCCESS';

//Event Sponsor
export const REMOVE_SPONSORS_LIST = 'REMOVE_SPONSORS_LIST';
export const GET_PENDING_SPONSORS = 'GET_PENDING_SPONSORS';
export const GET_PENDING_SPONSORS_SUCCESS = 'GET_PENDING_SPONSORS_SUCCESS';

export const GET_EVENT_SPONSORS = 'GET_EVENT_SPONSORS';
export const GET_EVENT_SPONSORS_SUCCESS = 'GET_EVENT_SPONSORS_SUCCESS';

export const GET_EVENT_SPONSORS_FOR_EDIT = 'GET_EVENT_SPONSORS_FOR_EDIT';
export const GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS = 'GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS';

export const APPROVE_REJECT_SPONSOR = 'APPROVE_REJECT_SPONSOR';

export const EDIT_SPONSOR_NOTE = 'EDIT_SPONSOR_NOTE';

// Rsvp
export const CREATE_RSVP = 'CREATE_RSVP';
export const EDIT_RSVP = 'EDIT_RSVP';

export const GET_CURRENT_RSVP = 'GET_CURRENT_RSVP';
export const GET_CURRENT_RSVP_SUCCESS = 'GET_CURRENT_RSVP_SUCCESS';