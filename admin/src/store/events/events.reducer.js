/**Events reducer */

import {
  FILTER_EVENTS_BY_TYPE,
  FILTER_ORGANIZERS_BY_AZ,
  FILTER_ORGANIZERS_BY_AZ_SUCCESS,
  FILTER_ORGANIZERS_BY_DATE,
  FILTER_ORGANIZERS_BY_DATE_SUCCESS,
  FILTER_ORGANIZERS_BY_DEFAULT,
  FILTER_TITLE_BY_AZ, GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS, GET_EVENT_SPONSORS_SUCCESS,
  GET_EVENTS,
  GET_EVENTS_SUCCESS, GET_PENDING_SPONSORS_SUCCESS, REMOVE_SPONSORS_LIST,
  SEARCH_EVENTS,
} from './events.types';
import {paginate} from '../../utils/pagination';
import {FilterType} from "../../utils/filterType";
import {FILTER_USERS_BY_ROLE} from "../users/users.types";


const initialState = {
  events: [],
  myEvents: [],
  reserveEvents: [],
  eventsListLoader: false,
  eventsByID: [],
  dateLoader: false,
  filterLoader: false,
  filterTitleLoader: false,

  online: '',
  physical: '',


  disapproved:'',
  unpublished:'',
  publish:'',
  pending:'',

  pendingSponsors: [],
  sponsors: [],
  eventSponsor: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventsListLoader: true,
        events: [],
        reserveEvents: [],
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        eventsListLoader: false,
        events: paginate(action.payload, 10),
        reserveEvents: action.payload,
        online: FilterType(action.payload, 'VIRTUAL', 'event'),
        physical: FilterType(action.payload, 'PHYSICAL', 'event'),

        unpublished: FilterType(action.payload, 'UNPUBLISHED', 'eventStatus'),
        publish: FilterType(action.payload, 'PUBLISHED', 'eventStatus'),
        disapproved: FilterType(action.payload, 'REJECTED', 'eventStatus'),
        pending: FilterType(action.payload, 'PENDING', 'eventStatus'),


      };

    // SEARCH EVENTS

    case SEARCH_EVENTS: {
      const filterItems = (query) => {
        return state.reserveEvents.filter((el) => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
      };
      return {
        ...state,
        events: paginate(filterItems(action.payload.name), 10),
      };
    }

    //

    // FILTERS BY DATE

    case FILTER_ORGANIZERS_BY_DATE:
      return {
        ...state,
        dateLoader: true,
        events: paginate(
          state.reserveEvents.sort((a, b) => a.eventStartDate.localeCompare(b.eventStartDate)),
          10
        ),
      };

    case FILTER_ORGANIZERS_BY_DATE_SUCCESS:
      return {
        ...state,
        dateLoader: false,
        reserveEvents: action.payload,
      };
    //

    case FILTER_EVENTS_BY_TYPE: {
      return {
        ...state,
        events: paginate(
          state.reserveEvents.filter((i) => (i.locationType === action.payload.role)),
          10
        ),
      };
    }

    // FILTERS BY NAME
      case FILTER_USERS_BY_ROLE:
        return {
          ...state,
          events: paginate(
            state.reserveEvents.filter((i) => (i.status === action.payload.role )),
            10
          ),
        }


    case FILTER_ORGANIZERS_BY_AZ:
      return {
        ...state,
        filterLoader: true,
        events: paginate(
          state.reserveEvents.sort((a, b) => a.creator.fullName.localeCompare(b.creatorName)),
          10
        ),
      };

    case FILTER_ORGANIZERS_BY_AZ_SUCCESS:
      return {
        ...state,
        reserveEvents: action.payload,
        filterLoader: false,
        filterTitleLoader: false,
      };

    case FILTER_ORGANIZERS_BY_DEFAULT:
      return {
        ...state,
        events: paginate(state.reserveEvents, 10),
      };

    case FILTER_TITLE_BY_AZ:
      return {
        ...state,
        filterTitleLoader: true,
        events: paginate(
          state.reserveEvents.sort((a, b) => a.title.localeCompare(b.title)),
          10
        ),
      };

    //


    case GET_PENDING_SPONSORS_SUCCESS:
      return {
        ...state,
        eventSponsor: action.payload,
      };

    case REMOVE_SPONSORS_LIST:
      return {
        ...state,
        pendingSponsors: [],
        eventSponsor: [],
      };

    case GET_EVENT_SPONSORS_SUCCESS:
      return {
        ...state,
        sponsors: action.payload,
      };

    case GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS:
      return {
        ...state,
        eventSponsor: action.payload,
      };


    default:
      return state;
  }
};
