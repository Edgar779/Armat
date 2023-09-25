/**Payment saga */
import { call, put, takeLatest } from 'redux-saga/effects';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';
import {
    ASSIGN_CARD,
    GET_CURRENT_CARD,
    GET_CURRENT_CARD_SUCCESS,
    GET_PAYMENT_INVOICES,
    GET_PAYMENT_INVOICES_SUCCESS,
} from './payments.types';
import { paymentService } from './payments.service';

function* assignCard({ type, payload }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(paymentService.assignCardService, payload?.params);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        // yield put({
        //     type: GET_EVENT_TICKETS_SUCCESS,
        //     payload: res.data,
        // });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getCurrentCard({ type }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(paymentService.getCurrentCardService);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put({
            type: GET_CURRENT_CARD_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getInvoices({ type }) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(paymentService.getInvoicesService);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put({
            type: GET_PAYMENT_INVOICES_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnErrorsActions.removeError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const paymentsTickets = function* watchUserAuth() {
    yield takeLatest(ASSIGN_CARD, assignCard);
    yield takeLatest(GET_CURRENT_CARD, getCurrentCard);
    yield takeLatest(GET_PAYMENT_INVOICES, getInvoices);
};
