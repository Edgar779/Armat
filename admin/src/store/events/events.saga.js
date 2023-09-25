/**Events saga */

import { call, put, takeLatest } from "redux-saga/effects";
import { authService } from "./events.service";
import {
  APPROVE_EVENT, APPROVE_REJECT_SPONSOR,
  CREATE_EVENTS,
  DELETE_EVENTS, EDIT_EVENTS, EDIT_SPONSOR_NOTE,
  FILTER_EVENTS_BY_TYPE,
  FILTER_ORGANIZERS_BY_AZ,
  FILTER_ORGANIZERS_BY_AZ_SUCCESS,
  FILTER_ORGANIZERS_BY_DATE,
  FILTER_ORGANIZERS_BY_DATE_SUCCESS,
  FILTER_TITLE_BY_AZ,
  GET_EVENT_SPONSORS,
  GET_EVENT_SPONSORS_FOR_EDIT,
  GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
  GET_EVENT_SPONSORS_SUCCESS,
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_PENDING_SPONSORS,
  GET_PENDING_SPONSORS_SUCCESS,
  PUBLISH_EVENT,
  REJECT_EVENT,
  SET_EVENT_STATUS,
  SUBMIT_EVENT,
  UNPUBLISH_EVENT
} from "./events.types";
import { EventsActions } from "./index";
import { httpRequestsOnLoadActions } from "../http_requests_on_load";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";
import { httpRequestsOnErrorsActions } from "../http_requests_on_errors";


function* createEvents(action) {
  yield put(httpRequestsOnErrorsActions.removeError(action.type));
  yield put(httpRequestsOnLoadActions.appendLoading(action.type));
  try {
    yield call(authService.createEvents, action.payload.eventData);
    window.location.replace("/admin/myEvents");

    yield put(EventsActions.getEvents("MyEvents"));
    yield put(httpRequestsOnErrorsActions.removeError(action.type));
    yield put(httpRequestsOnLoadActions.removeLoading(action.type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(action.type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(action.type));
  }
}

function* editEvents({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(authService.editEventsService, payload.eventData, payload.id);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));

    yield put(EventsActions.getEvents("MyEvents"));
    yield put(httpRequestsOnErrorsActions.removeError(type));

    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put({ type: GET_EVENTS, payload: "MyEvents" });
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}


function* getEvents({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(authService.getEvents, payload.Type);
    if(payload?.Type === 'Events') {
      yield put({
        type: GET_EVENTS_SUCCESS,
        payload: res?.data?.events
      });
    }else{
      yield put({
        type: GET_EVENTS_SUCCESS,
        payload: res?.data?.reverse()
      });
    }
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteEvent(action) {
  try {
    const res = yield call(authService.DeleteEvent, action.payload.data);
    yield put(EventsActions.getEvents(action.payload.data.type));
  } catch (err) {
    yield put(EventsActions.getEvents(action.payload.data.type));
  }
}

function* defaultEvents(action) {
  try {
    const res = yield call(authService.getEvents, action.payload.type);
    yield put({
      type: FILTER_ORGANIZERS_BY_AZ_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
}

function* defaultEventsDate(action) {
  try {
    const res = yield call(authService.getEvents, action.payload.type);
    yield put({
      type: FILTER_ORGANIZERS_BY_DATE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
}

function* submitEvent(action) {
  try {
    const res = yield call(authService.SubmitEvent, action.payload.eventId);
  } catch (err) {
    console.log(err);
  }
}

function* approveEvent(action) {
  try {
    const res = yield call(authService.ApproveEvent, action.payload.data);
    yield put(EventsActions.getEvents("Events"));
  } catch (err) {
    console.log(err);
  }
}

function* rejectEvent(action) {
  try {
    const res = yield call(authService.RejectEvent, action.payload.data);
    yield put(EventsActions.getEvents(action.payload.data.type));
  } catch (err) {
    console.log(err);
  }
}

function* unpublishEvent(action) {
  try {
    const res = yield call(authService.UnpublishEvent, action.payload.data);
    yield put(EventsActions.getEvents(action.payload.data.type));
  } catch (err) {
    console.log(err);
  }
}

function* publishEvent(action) {
  try {
    const res = yield call(authService.PublishEvent, action.payload.data);
    yield put(EventsActions.getEvents(action.payload.data.type));
  } catch (err) {
    console.log(err);
  }
}


function* setStatus({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(authService.setStatusService, payload);
    yield put(EventsActions.getEvents(payload.type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));

  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}


function* getPendingSponsors({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(authService.getPendingSponsorsService, payload);
    yield put({
      type: GET_PENDING_SPONSORS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getEventSponsors({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const info = yield call(authService.getEventSponsorsService, payload);
    yield put({
      type: GET_EVENT_SPONSORS_SUCCESS,
      payload: info.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getEventSponsorsEdit({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const info = yield call(authService.getEventSponsorsEdService, payload);
    yield put({
      type: GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
      payload: info.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* approveOrRejectSponsor({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const info = yield call(authService.approveOrRejectSponsorService, payload);
    yield put({
      type: GET_PENDING_SPONSORS,
      payload: payload.statusInfo.orgId
    });
    yield put({
      type: GET_EVENT_SPONSORS,
      payload: payload.statusInfo.orgId
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
    yield call(authService.editSponsorsNoteService, payload.event, payload.info);
    yield put({
      type: GET_EVENT_SPONSORS_FOR_EDIT,
      payload: payload.event
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
  yield takeLatest(FILTER_EVENTS_BY_TYPE, defaultEvents);
  yield takeLatest(FILTER_ORGANIZERS_BY_DATE, defaultEventsDate);
  yield takeLatest(SUBMIT_EVENT, submitEvent);
  yield takeLatest(APPROVE_EVENT, approveEvent);
  yield takeLatest(REJECT_EVENT, rejectEvent);
  yield takeLatest(UNPUBLISH_EVENT, unpublishEvent);
  yield takeLatest(PUBLISH_EVENT, publishEvent);

  yield takeLatest(SET_EVENT_STATUS, setStatus);

  //Sponsors
  yield takeLatest(GET_PENDING_SPONSORS, getPendingSponsors);
  yield takeLatest(GET_EVENT_SPONSORS, getEventSponsors);
  yield takeLatest(GET_EVENT_SPONSORS_FOR_EDIT, getEventSponsorsEdit);
  yield takeLatest(APPROVE_REJECT_SPONSOR, approveOrRejectSponsor);
  yield takeLatest(EDIT_SPONSOR_NOTE, editNote);
};
