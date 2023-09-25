/**Events saga */
import { call, put, takeLatest } from 'redux-saga/effects';
import { eventService } from './events.service';
import {
    CREATE_EVENTS,
    DELETE_EVENTS,
    FILTER_ORGANIZERS_BY_AZ,
    FILTER_ORGANIZERS_BY_AZ_SUCCESS,
    FILTER_ORGANIZERS_BY_DATE,
    FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY,
    FILTER_ORGANIZERS_BY_DATE_SUCCESS,
    FILTER_TITLE_BY_AZ,
    GET_EVENTS,
    GET_EVENTS_SUCCESS,
    GET_PUBLIC_EVENTS,
    GET_PUBLIC_EVENTS_SUCCESS,
    GET_SINGLE_EVENT,
    GET_SINGLE_EVENT_SUCCESS,
    PUBLISH_EVENT,
    SUBMIT_EVENT,
    UNPUBLISH_EVENT,
    SUBSCRIBE_EVENT_SUCCESS,
    SUBSCRIBE_EVENT,
    UNSUBSCRIBE_EVENT,
    GET_EVENTS_SUCCESS_NO_RESULT,
    GET_SUBSCRIBES,
    GET_SUBSCRIBES_SUCCESS,
    SUBMIT_EVENT_ERROR,
    SUBMIT_EVENT_SUCCESS,
    CREATE_EVENTS_SUCCESS,
    SET_EVENT_STATUS,
    EDIT_EVENTS,
    GET_PENDING_SPONSORS,
    GET_EVENT_SPONSORS,
    APPROVE_REJECT_SPONSOR,
    GET_PENDING_SPONSORS_SUCCESS,
    GET_EVENT_SPONSORS_SUCCESS,
    GET_EVENT_SPONSORS_FOR_EDIT,
    GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
    EDIT_SPONSOR_NOTE,
    CREATE_RSVP,
    EDIT_RSVP,
    GET_CURRENT_RSVP,
    GET_CURRENT_RSVP_SUCCESS,
} from './events.types';
import { EventsActions } from './index';
import { SET_ERROR } from '../app';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';
import { organizationActions } from '../organizations';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';
const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

function* createEvents({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(eventService.createEventsService, payload.eventData);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put({
            type: CREATE_EVENTS_SUCCESS,
            payload: 'MyEvents',
        });
        yield put({ type: GET_EVENTS, payload: 'MyEvents' });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put({ type: GET_EVENTS, payload: 'MyEvents' });
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editEvents({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(eventService.editEventsService, payload.eventData, payload.id);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        if (payload.type === 'byOrgId') {
            yield put(organizationActions.orgEvents(payload.orgId));
        } else {
            yield put({
                type: CREATE_EVENTS_SUCCESS,
                payload: 'MyEvents',
            });
        }
        yield put({ type: GET_EVENTS, payload: 'MyEvents' });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put({ type: GET_EVENTS, payload: 'MyEvents' });
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getEvents(action) {
    try {
        const res = yield call(eventService.getEvents, action.payload);
        if (res && res.data.length === 0) {
            yield put({
                type: GET_EVENTS_SUCCESS_NO_RESULT,
            });
        } else {
            yield put({
                type: GET_EVENTS_SUCCESS,
                payload: res.data.reverse(),
            });
        }
    } catch (err) {
        if (err && err.data && err.data.statusCode === 404) {
            yield put({
                type: GET_EVENTS_SUCCESS_NO_RESULT,
            });
        } else {
            yield put({
                type: GET_EVENTS_SUCCESS,
                payload: [],
            });
        }
    }
}

function* deleteEvent(action) {
    try {
        yield call(eventService.DeleteEvent, action.payload.data);
        if (action.payload.type === 'byCreator') {
            yield put(organizationActions.orgEvents(action.payload.orgId));
        }
        yield put(EventsActions.getEvents());
    } catch (err) {
        yield put(EventsActions.getEvents());
    }
}

function* defaultEvents() {
    try {
        const res = yield call(eventService.getEvents);
        yield put({
            type: FILTER_ORGANIZERS_BY_AZ_SUCCESS,
            payload: res.data,
        });
    } catch (err) {}
}

function* defaultEventsDate() {
    try {
        const res = yield call(eventService.getEvents);
        yield put({
            type: FILTER_ORGANIZERS_BY_DATE_SUCCESS,
            payload: res.data,
        });
    } catch (err) {}
}

function* submitEvent(action) {
    try {
        yield call(eventService.submitEvent, action.payload.eventId);
        yield put({ type: SUBMIT_EVENT_SUCCESS, payload: 'PUBLISHED' });
        yield put({ type: GET_SINGLE_EVENT, payload: action.payload.eventId });
    } catch (err) {
        yield put({ type: SUBMIT_EVENT_ERROR, payload: err.response.data.message });
    }
}

function* unpublishEvent(action) {
    try {
        yield call(eventService.UnpublishEvent, action.payload.data);
        yield put(EventsActions.getEvents(action.payload.data.type));
        yield put({ type: SUBMIT_EVENT_SUCCESS, payload: 'UNPUBLISHED' });
        yield put({ type: GET_EVENTS, payload: 'MyEvents' });
    } catch (err) {
        yield put({ type: SUBMIT_EVENT_ERROR, payload: err.response.data.message });
    }
}

function* publishEvent(action) {
    try {
        yield call(eventService.PublishEvent, action.payload.eventId);
        yield put({ type: SUBMIT_EVENT_SUCCESS, payload: 'PUBLISHED' });
    } catch (err) {
        yield put({ type: SUBMIT_EVENT_ERROR, payload: err.response.data.message });
    }
}

function* getPublicEvents() {
    try {
        const res = yield call(eventService.GetPublicEvents);
        if (res.data.length) {
            yield put({
                type: GET_PUBLIC_EVENTS_SUCCESS,
                payload: res.data,
            });
        } else {
            yield put({
                type: GET_PUBLIC_EVENTS_SUCCESS,
                payload: 'NoPublic',
            });
        }
    } catch (err) {}
}

function* getSingleEvent(action) {
    try {
        const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

        if (token) {
            const res = yield call(eventService.GetSingleEvent, action.payload.id);
            yield put({
                type: GET_SINGLE_EVENT_SUCCESS,
                payload: res.data,
            });
        } else {
            const res = yield call(eventService.GetSingleEventPublic, action.payload.id);
            yield put({
                type: GET_SINGLE_EVENT_SUCCESS,
                payload: res.data,
            });
        }
    } catch (err) {}
}

function* subscribeEvent({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(eventService.SubscribeEvent, payload);
        yield put({ type: SUBSCRIBE_EVENT_SUCCESS, payload: res.data });
        yield put(EventsActions.getEvents('subscriptions'));
        yield put(EventsActions.getSubscribes());
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put({ type: SET_ERROR, payload: err.response.data.message });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        if (err.response.status === 409) {
            yield put(EventsActions.getEvents('subscriptions'));
            yield put(EventsActions.getSubscribes());
        }
    }
}

function* unsubscribe({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(eventService.unsubscribe, payload);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(EventsActions.getSubscribes());
        // yield put({ type: GET_EVENTS, payload: 'subscriptions' });
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        if (err.response.status === 409) {
            yield put(EventsActions.getSubscribes());
            // yield put({ type: GET_EVENTS, payload: 'subscriptions' });
        }
    }
}

function* getMySubscribes(payload) {
    try {
        const res = yield call(eventService.getSubscribes, payload.payload);
        yield put({
            type: GET_SUBSCRIBES_SUCCESS,
            payload: res.data,
        });
    } catch (err) {}
}

function* setEventStatus({ payload, type }) {
    yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    try {
        yield call(eventService.setEventStatusSaga, payload);
        const info = yield call(eventService.GetSingleEvent, payload.id);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put({
            type: GET_SINGLE_EVENT_SUCCESS,
            payload: info.data,
        });
    } catch (err) {
        yield put(httpRequestsOnSuccessActions.removeSuccess(type));
    }
}

function* getPendingSponsors({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(eventService.getPendingSponsorsService, payload);
        yield put({
            type: GET_PENDING_SPONSORS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getEventSponsors({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(eventService.getEventSponsorsService, payload);
        yield put({
            type: GET_EVENT_SPONSORS_SUCCESS,
            payload: info.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getEventSponsorsEdit({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(eventService.getEventSponsorsEdService, payload);
        yield put({
            type: GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
            payload: info.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* approveOrRejectSponsor({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(eventService.approveOrRejectSponsorService, payload);
        yield put({
            type: GET_PENDING_SPONSORS,
            payload: payload.statusInfo.orgId,
        });
        yield put({
            type: GET_EVENT_SPONSORS,
            payload: payload.statusInfo.orgId,
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editNote({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(eventService.editSponsorsNoteService, payload.event, payload.info);
        yield put({
            type: GET_EVENT_SPONSORS_FOR_EDIT,
            payload: payload.event,
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

// Rsvp
function* createRsvp({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(eventService.createRsvpService, payload?.id, payload?.type);
        yield put({
            type: GET_CURRENT_RSVP,
            payload: { id: payload?.id },
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editRsvp({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(eventService.editRsvpService, payload?.id, payload?.type);
        yield put({
            type: GET_CURRENT_RSVP,
            payload: { id: payload?.eventId },
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getCurrentRsvp({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(eventService.getCurrentRsvpService, payload?.id);
        yield put({
            type: GET_CURRENT_RSVP_SUCCESS,
            payload: res?.data,
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const watchEvents = function* watchUserAuth() {
    yield takeLatest(CREATE_EVENTS, createEvents);
    yield takeLatest(EDIT_EVENTS, editEvents);
    yield takeLatest(GET_EVENTS, getEvents);
    yield takeLatest(DELETE_EVENTS, deleteEvent);
    yield takeLatest(FILTER_ORGANIZERS_BY_AZ, defaultEvents);
    yield takeLatest(FILTER_TITLE_BY_AZ, defaultEvents);
    yield takeLatest(FILTER_ORGANIZERS_BY_DATE, defaultEventsDate);
    yield takeLatest(FILTER_ORGANIZERS_BY_DATE_LATE_TO_EARLY, defaultEventsDate);
    yield takeLatest(SUBMIT_EVENT, submitEvent);
    yield takeLatest(UNPUBLISH_EVENT, unpublishEvent);
    yield takeLatest(PUBLISH_EVENT, publishEvent);
    yield takeLatest(GET_PUBLIC_EVENTS, getPublicEvents);
    yield takeLatest(GET_SINGLE_EVENT, getSingleEvent);

    yield takeLatest(SUBSCRIBE_EVENT, subscribeEvent);
    yield takeLatest(UNSUBSCRIBE_EVENT, unsubscribe);

    yield takeLatest(GET_SUBSCRIBES, getMySubscribes);

    yield takeLatest(SET_EVENT_STATUS, setEventStatus);

    //Sponsors
    yield takeLatest(GET_PENDING_SPONSORS, getPendingSponsors);
    yield takeLatest(GET_EVENT_SPONSORS, getEventSponsors);
    yield takeLatest(GET_EVENT_SPONSORS_FOR_EDIT, getEventSponsorsEdit);
    yield takeLatest(APPROVE_REJECT_SPONSOR, approveOrRejectSponsor);
    yield takeLatest(EDIT_SPONSOR_NOTE, editNote);

    // Rsvp
    yield takeLatest(CREATE_RSVP, createRsvp);
    yield takeLatest(EDIT_RSVP, editRsvp);
    yield takeLatest(GET_CURRENT_RSVP, getCurrentRsvp);
};
