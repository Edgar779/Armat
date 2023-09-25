import { call, put, takeLatest } from "redux-saga/effects";
import { httpRequestsOnErrorsActions } from "store/http_requests_on_errors";
import { httpRequestsOnLoadActions } from "store/http_requests_on_load";
import {
  CHANGE_TICKET_STATUS,
  CREATE_TICKET,
  EDIT_TICKET,
  GET_SOLD_TICKETS,
  GET_SOLD_TICKETS_INFORMATION,
  GET_SOLD_TICKETS_INFORMATION_SUCCESS,
  GET_SOLD_TICKETS_SUCCESS,
  GET_TICKET_BY_ID,
  GET_TICKET_BY_ID_SUCCESS,
  GET_TICKETS,
  GET_TICKETS_SUCCESS
} from "./tickets.type";
import { ticketService } from "./tickets.service";
import { httpRequestsOnSuccessActions } from "../http_requests_on_success";

/** Tickets */

function* createTicket({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(ticketService.createTicketService, payload?.body);
    yield put({
      type: GET_TICKETS,
      payload: { params: payload?.params, load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* editTicket({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(ticketService.editTicketService, payload?.id, payload?.body);
    yield put({
      type: GET_TICKET_BY_ID,
      payload: { id: payload?.id, load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getTickets({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(ticketService.getTicketsListService, payload?.params);
    yield put({
      type: GET_TICKETS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getTicketById({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(ticketService.getTicketByIdService, payload?.id);
    yield put({
      type: GET_TICKET_BY_ID_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getSoldTicket({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(ticketService.getSoldTicketService, payload?.id, payload?.params);
    yield put({
      type: GET_SOLD_TICKETS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getSoldTicketInfo({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(ticketService.getSoldTicketInfoService, payload?.id);
    yield put({
      type: GET_SOLD_TICKETS_INFORMATION_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* changeTicketStatus({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(ticketService.changeTicketStatusService, payload?.id);
    yield put({
      type: GET_SOLD_TICKETS_INFORMATION,
      payload: { id: payload?.id, load: "noLoad" }
    });
    yield put({
      type: GET_SOLD_TICKETS,
      payload: { id: payload?.ticketId, load: "noLoad" }
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
  } catch (err) {
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

/** End */

export const watchTickets = function* watchTicketsAuth() {
  /** Member */
  yield takeLatest(CREATE_TICKET, createTicket);
  yield takeLatest(EDIT_TICKET, editTicket);
  yield takeLatest(GET_TICKETS, getTickets);
  yield takeLatest(GET_TICKET_BY_ID, getTicketById);
  yield takeLatest(GET_SOLD_TICKETS_INFORMATION, getSoldTicketInfo);
  yield takeLatest(GET_SOLD_TICKETS, getSoldTicket);
  yield takeLatest(CHANGE_TICKET_STATUS, changeTicketStatus);
  /** End */
};
