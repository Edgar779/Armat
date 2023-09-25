/**Events reducer */

import {
    DELETE_EVENTS,
    FILTER_CALENDAR_EVENTS_BY_START_END_DATE,
    FILTER_EVENTS_BY_LOCATION_TYPE,
    FILTER_EVENTS_BY_START_END_DATE,
    FILTER_ORGANIZERS_BY_AZ,
    FILTER_ORGANIZERS_BY_AZ_SUCCESS,
    FILTER_ORGANIZERS_BY_DATE,
    FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY,
    FILTER_ORGANIZERS_BY_DATE_SUCCESS,
    FILTER_ORGANIZERS_BY_DEFAULT,
    FILTER_TITLE_BY_AZ,
    FILTER_TITLE_BY_ZA,
    GET_EVENTS,
    GET_EVENTS_SUCCESS,
    SEARCH_BY_CATEGORIES,
    GET_PUBLIC_EVENTS_SUCCESS,
    GET_SINGLE_EVENT_SUCCESS,
    SEARCH_EVENTS,
    SEARCH_EVENTS_FOR_CALENDAR,
    SEARCH_EVENTS_FOR_MAP,
    SEARCH_EVENTS_FOR_MAP_SELECT,
    SUBSCRIBE_EVENT_SUCCESS,
    SEARCH_BY_CATEGORIES_CALENDAR,
    UNSUBSCRIBE_EVENT_SUCCESS,
    SEARCH_EVENTS_FOR_SUBSCRIPTIONS,
    GET_EVENTS_SUCCESS_NO_RESULT,
    GET_SUBSCRIBES_SUCCESS,
    SUBMIT_EVENT_SUCCESS,
    SUBMIT_EVENT_ERROR,
    CLEAR_EVENT_STATUS,
    FILTER_CALENDAR_DATE_BY_TIME,
    SINGLE_EVENT_REMOVE,
    GET_PENDING_SPONSORS_SUCCESS,
    GET_EVENT_SPONSORS_SUCCESS,
    GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
    REMOVE_SPONSORS_LIST,
    GET_CURRENT_RSVP_SUCCESS,
    GET_CURRENT_RSVP,
} from './events.types';
import { paginate } from 'theme';
import { dateConverter, multiConverter } from '../../utils/dateConverter';
import moment from 'moment';

const initialState = {
    events: [],
    myEvents: [],
    reserveEvents: [],
    eventsListLoader: false,
    eventsByID: [],
    dateLoader: false,
    filterLoader: false,
    filterTitleLoader: false,
    reserveEventsForMap: [],
    reserveEventsListForMap: [],
    searchedEvents: [],
    zToAEvents: '',
    publicEvents: [],
    singleEvent: null,
    reserveEventsFiltered: null,
    searchEvent: false,
    subscribed: false,
    mySubscribes: [],
    eventStatus: '',
    eventStatusError: '',

    eventsCategory: [],
    created: null,

    pendingSponsors: [],
    sponsors: [],
    eventSponsor: [],

    eventRsvp: null,
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                eventsListLoader: action.payload.load !== 'noLoad',
            };

        case DELETE_EVENTS:
            return {
                ...state,
                eventsListLoader: true,
            };

        case GET_PUBLIC_EVENTS_SUCCESS:
            return { ...state, publicEvents: action.payload };

        case GET_SINGLE_EVENT_SUCCESS:
            return { ...state, singleEvent: action.payload };

        case SINGLE_EVENT_REMOVE:
            return {
                ...state,
                singleEvent: null,
            };

        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                eventsListLoader: false,
                reserveEventsFiltered: action.payload,
                events: paginate(action.payload, 9),
                reserveEvents: action.payload,
                physical: action.payload.filter((i) => (i.locationType === 'PHYSICAL' ? state.eventsByID.push(i) : '')),
            };

        case GET_SUBSCRIBES_SUCCESS:
            return {
                ...state,
                mySubscribes: action.payload,
                reserveEventsFiltered: action.payload,
                events: paginate(action.payload, 9),
                reserveEvents: action.payload,
                eventsListLoader: false,
            };

        case GET_EVENTS_SUCCESS_NO_RESULT:
            return {
                ...state,
                events: 'noResult',
                eventsListLoader: false,
            };
        // SEARCH EVENTS

        case SEARCH_EVENTS: {
            const filterItems = (query) => {
                return state.reserveEvents.filter((el) => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return {
                ...state,
                searchEvent: true,
                events: paginate(filterItems(action.payload.name), 9),
            };
        }

        case SEARCH_EVENTS_FOR_CALENDAR: {
            const filterItems = (query) => {
                return state.reserveEvents.filter((el) => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return {
                ...state,
                reserveEventsFiltered: filterItems(action.payload.name),
            };
        }

        case SEARCH_EVENTS_FOR_SUBSCRIPTIONS: {
            const filterItems = (query) => {
                return state.reserveEvents.filter((el) => el?.creator?.fullName === action?.payload?.name);
            };
            // && events.slice(el, 1)
            return {
                ...state,
                searchEvent: true,
                events: paginate(filterItems(action.payload.name), 9),
                reserveEventsFiltered: filterItems(action.payload.name),
            };
        }

        case SEARCH_EVENTS_FOR_MAP: {
            const filterItems = (query) => {
                return state.reserveEvents.filter((el) => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return {
                ...state,
                reserveEventsForMap: paginate(filterItems(action.payload.name), 10),
            };
        }

        case SEARCH_EVENTS_FOR_MAP_SELECT: {
            const filterItems = (query) => {
                return state.reserveEvents.filter((el) => el.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
            };
            return {
                ...state,
                searchedEvents: filterItems(action.payload.name),
            };
        }

        case SEARCH_BY_CATEGORIES: {
            const filterItems = (query) => {
                state.reserveEvents.filter(
                    (el) =>
                        el.categories &&
                        el.categories.filter((i) =>
                            query.filter((q) => {
                                i === q ? state.eventsCategory.push(el) : '';
                            })
                        )
                );
                return state.eventsCategory.filter((v, k, a) => a.findIndex((t) => t.eventId === v.eventId) === k);
            };

            return {
                ...state,
                events: paginate(filterItems(action.payload.cat), 10),
                eventsCategory: [],
            };
        }

        case SEARCH_BY_CATEGORIES_CALENDAR: {
            const filterItems = (query) => {
                state.reserveEvents.filter(
                    (el) =>
                        el.categories &&
                        el.categories.filter((i) =>
                            query.filter((q) => {
                                i === q ? state.eventsCategory.push(el) : '';
                            })
                        )
                );
                return state.eventsCategory.filter((v, k, a) => a.findIndex((t) => t.eventId === v.eventId) === k);
            };

            return {
                ...state,
                reserveEventsFiltered: filterItems(action.payload.cat),
                eventsCategory: [],
            };
        }

        //

        // FILTERS BY DATE

        case FILTER_ORGANIZERS_BY_DATE:
            return {
                ...state,
                dateLoader: true,
                events: paginate(
                    state.reserveEvents.sort((a, b) => a.startDate.localeCompare(b.startDate)),
                    9
                ),
            };
        case FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY:
            return {
                ...state,
                dateLoader: true,
                events: paginate(
                    state.reserveEvents.sort((a, b) => b.startDate.localeCompare(a.startDate)),
                    9
                ),
            };

        case FILTER_ORGANIZERS_BY_DATE_SUCCESS:
            return {
                ...state,
                dateLoader: false,
                reserveEvents: action.payload,
            };

        case FILTER_EVENTS_BY_START_END_DATE:
            return {
                ...state,
                dateLoader: true,
                events: paginate(
                    state.reserveEvents.filter((item) => {
                        return (
                            dateConverter(item, 'L') >= moment(action.payload.date.start_date).format('L') &&
                            dateConverter(item, 'L') <=
                                moment(
                                    action.payload.date.end_date === action.payload.date.start_date
                                        ? '12/31/2099'
                                        : action.payload.date.end_date
                                ).format('L')
                        );
                    }),
                    9
                ),
            };

        case FILTER_CALENDAR_EVENTS_BY_START_END_DATE:
            return {
                ...state,
                reserveEventsFiltered: state.reserveEvents.filter((item) => {
                    return (
                        dateConverter(item, 'L') >= moment(action.payload.date.start_date).format('L') &&
                        dateConverter(item, 'L') <=
                            moment(
                                action.payload.date.end_date === action.payload.date.start_date
                                    ? '12/31/2099'
                                    : action.payload.date.end_date
                            ).format('L')
                    );
                }),
            };

        case FILTER_CALENDAR_DATE_BY_TIME:
            return {
                ...state,
                reserveEventsFiltered: state.reserveEvents.filter((item) => {
                    return item.startTime >= action.payload.start_date && item.endTime <= action.payload.end_date ? item : '';
                }),
            };

        // FILTERS BY NAME

        case FILTER_ORGANIZERS_BY_AZ:
            return {
                ...state,
                filterLoader: true,
                events: paginate(
                    state.reserveEvents.sort((a, b) => a.creatorName.localeCompare(b.creatorName)),
                    9
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
                events: paginate(state.reserveEvents, 9),
                reserveEventsFiltered: state.reserveEvents,
            };

        case FILTER_TITLE_BY_AZ:
            return {
                ...state,
                filterTitleLoader: true,
                events: paginate(
                    state.reserveEvents.sort((a, b) => a.title.localeCompare(b.title)),
                    9
                ),
            };
        case FILTER_TITLE_BY_ZA:
            return {
                ...state,
                filterTitleLoader: true,
                zToAEvents: state.reserveEvents.sort((a, b) => a.title.localeCompare(b.title)),
            };

        //

        case FILTER_EVENTS_BY_LOCATION_TYPE:
            return {
                ...state,
                events: paginate(
                    state.reserveEvents.filter((i) => i.locationType === action.payload.locationType),
                    9
                ),
                reserveEventsForMap: state.reserveEvents.filter((i) => i.locationType === action.payload.locationType),
                reserveEventsFiltered: state.reserveEvents.filter((i) => i.locationType === action.payload.locationType),
            };

        //subscribe event
        case SUBSCRIBE_EVENT_SUCCESS:
            return {
                ...state,
                subscribed: true,
            };
        case UNSUBSCRIBE_EVENT_SUCCESS:
            return {
                ...state,
                subscribed: false,
            };

        case SUBMIT_EVENT_SUCCESS:
            return {
                ...state,
                eventStatus:
                    action.payload === 'PUBLISHED'
                        ? 'Your Event is published'
                        : action.payload === 'UNPUBLISHED'
                        ? 'Your Event is unpublished'
                        : '',
                eventStatusType: action.payload,
            };
        case SUBMIT_EVENT_ERROR:
            return {
                ...state,
                eventStatusError: action.payload,
            };

        case CLEAR_EVENT_STATUS:
            return {
                ...state,
                eventStatusError: '',
                eventStatus: '',
            };

        case GET_PENDING_SPONSORS_SUCCESS:
            return {
                ...state,
                pendingSponsors: action.payload,
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

        case GET_CURRENT_RSVP_SUCCESS:
            return {
                ...state,
                eventRsvp: action.payload,
            };

        // case GET_CURRENT_RSVP:
        //     return {
        //         ...state,
        //         eventRsvp: null,
        //     };

        default:
            return state;
    }
};
