/**Events saga */
import { call, put, takeLatest } from 'redux-saga/effects';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';
import {
    BUY_TICKET,
    BUY_TICKET_NO_TOKEN,
    GET_EVENT_TICKETS,
    GET_EVENT_TICKETS_SUCCESS,
    GET_MY_TICKETS,
    GET_MY_TICKETS_SUCCESS,
} from './tickets.types';
import { ticketService } from './tickets.service';
import { GET_CURRENT_RSVP } from '../events/events.types';
const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

function* getEventTickets({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        if (token) {
            const res = yield call(ticketService.getEventTicketService, payload?.eventId);
            yield put({
                type: GET_EVENT_TICKETS_SUCCESS,
                payload: res.data,
            });
        } else {
            const res = yield call(ticketService.getEventPublicTicketService, payload?.eventId);
            yield put({
                type: GET_EVENT_TICKETS_SUCCESS,
                payload: res.data,
            });
        }
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* myTickets({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    if (payload?.load !== 'noLoad') {
        yield put(httpRequestsOnLoadActions.appendLoading(type));
    }
    try {
        const res = yield call(ticketService.myTicketsService, payload?.params);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put({
            type: GET_MY_TICKETS_SUCCESS,
            payload: res.data.reverse(),
        });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* buyTicket({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(ticketService.buyTicketService, payload?.params);
        yield put({
            type: GET_CURRENT_RSVP,
            payload: { id: payload?.eventId },
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* buyTicketByToken({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError('BUY_TICKET'));
    yield put(httpRequestsOnLoadActions.appendLoading('BUY_TICKET'));
    try {
        yield call(ticketService.buyTicketByTokenService, payload?.params);
        yield put(httpRequestsOnSuccessActions.appendSuccess('BUY_TICKET'));
        yield put(httpRequestsOnErrorsActions.removeError('BUY_TICKET'));
        yield put(httpRequestsOnLoadActions.removeLoading('BUY_TICKET'));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError('BUY_TICKET', err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading('BUY_TICKET'));
    }
}

export const watchTickets = function* watchUserAuth() {
    yield takeLatest(GET_EVENT_TICKETS, getEventTickets);
    yield takeLatest(GET_MY_TICKETS, myTickets);
    yield takeLatest(BUY_TICKET, buyTicket);
    yield takeLatest(BUY_TICKET_NO_TOKEN, buyTicketByToken);
};
