import { call, put, takeLatest } from "redux-saga/effects";
import { eventsService } from "./event.service";
import {
  GET_EVENTS,
  CREATE_EVENT,
  GET_EVENTS_SUCCESS,
  GET_EVENT_TAGS,
  GET_EVENT_TAGS_SUCCESS,
  GET_EVENT_CATEGORIES,
  GET_EVENT_CATEGORIES_SUCCESS,
  DELETE_EVENTS,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  CHANGE_EVENT_STATUS,
  GET_EVENT_RSVP,
  GET_EVENT_RSVP_SUCCESS,
  EDIT_EVENT,
  EDIT_NOTE,
  GET_EVENT_SPONSORS_FOR_EDIT, GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS, EDIT_EVENT_ACCESS, EDIT_EVENT_ACCESS_LIST
} from "./event.type";
import { httpRequestsOnErrorsActions } from "store/http_requests_on_errors";
import { httpRequestsOnLoadActions } from "store/http_requests_on_load";
import { httpRequestsOnSuccessActions } from "store/http_requests_on_success";

/** Events */

function* getEvents({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if(payload?.load !== 'noLoad') {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(eventsService.getEventsService, payload?.params);
    yield put({
      type: GET_EVENTS_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getEventById({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(eventsService.getEventByIdService, payload?.id);
    yield put({
      type: GET_EVENT_BY_ID_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* createEvent({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.createEventService, payload?.body);
    yield put({
      type: GET_EVENTS,
      payload: { params: payload?.params}
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* editEvent({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.editEventService, payload?.body, payload?.id);
    yield put({
      type: GET_EVENTS,
      payload: { params: payload?.params, load:'noLoad' }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* editEventAccess({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.editEventAccessService, payload?.id, payload?.status);
    // yield put({
    //   type: GET_EVENTS,
    //   payload: { params: payload?.params, load:'noLoad' }
    // });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* editEventAccessList({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.editEventAccessListService, payload?.id, payload?.list);
    // yield put({
    //   type: GET_EVENTS,
    //   payload: { params: payload?.params, load:'noLoad' }
    // });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* deleteEvents({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.deleteEventsService, payload?.idList);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* changeEventStatus({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(eventsService.changeEventStatusService, payload?.body);
    yield put({
      type:GET_EVENTS,
      payload: {params: payload?.params, load:'noLoad'}
    })
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
  }
}

/** End */


/** Events Tags, Categories */

function* getEventCategories({ type }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const res = yield call(eventsService.getEventCategoriesService);
    yield put({
      type: GET_EVENT_CATEGORIES_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getEventTags({ type }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const res = yield call(eventsService.getEventTagsService);
    yield put({
      type: GET_EVENT_TAGS_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

/** End */

/** Rsvp */

function* getRsvp({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const res = yield call(eventsService.getRsvpService, payload);
    yield put({
      type: GET_EVENT_RSVP_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

/** End */


/** Notes */

function* editNote({ type, payload }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    yield call(eventsService.editNoteService,  payload?.event, payload?.info);
    yield put({
      type: GET_EVENT_SPONSORS_FOR_EDIT,
      payload: payload.event,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getEventSponsorsEdit({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const info = yield call(eventsService.getEventSponsorsEdService, payload);
    yield put({
      type: GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
      payload: info.data,
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

/** End */

export const watchEvent = function* watchEventAuth() {
  /** Events */
  yield takeLatest(GET_EVENTS, getEvents);
  yield takeLatest(GET_EVENT_BY_ID, getEventById);
  yield takeLatest(CREATE_EVENT, createEvent);
  yield takeLatest(EDIT_EVENT, editEvent);
  yield takeLatest(EDIT_EVENT_ACCESS, editEventAccess);
  yield takeLatest(EDIT_EVENT_ACCESS_LIST, editEventAccessList);
  yield takeLatest(DELETE_EVENTS, deleteEvents);
  yield takeLatest(CHANGE_EVENT_STATUS, changeEventStatus);
  /** End */

  /** Events Tags, Categories */
  yield takeLatest(GET_EVENT_CATEGORIES, getEventCategories);
  yield takeLatest(GET_EVENT_TAGS, getEventTags);
  /** End */

  /** Rsvp */
  yield takeLatest(GET_EVENT_RSVP, getRsvp);
  /** End */

  /** Notes */
  yield takeLatest(GET_EVENT_SPONSORS_FOR_EDIT, getEventSponsorsEdit);
  yield takeLatest(EDIT_NOTE, editNote);
  /** End */
};
