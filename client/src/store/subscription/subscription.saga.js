import { call, put, takeLatest } from '@redux-saga/core/effects';
import { SET_ERROR, START_LOADING, STOP_LOADING } from '../app';
import { subscribeService } from './subscription.service';
import { SUBSCRIBE, SUBSCRIBE_SUCCESS, UNSUBSCRIBE } from './subscription.types';
import { EventsActions } from "../events";

function* subscribe(payload) {
    yield put({ type: START_LOADING });
    try {
        const res = yield call(subscribeService.subscribe, payload.payload);
        yield put({ type: SUBSCRIBE_SUCCESS, payload: res.data });
        yield put({ type: STOP_LOADING });
    } catch (err) {
        yield put({ type: STOP_LOADING });
        yield put({ type: SET_ERROR, payload: err.response.data.message });
    }
}

function* unsubscribe(payload) {
    try {
        const res = yield call(subscribeService.unsubscribe, payload.payload);
        yield put({ type: SUBSCRIBE_SUCCESS, payload: res.data });
        yield put(EventsActions.getEvents());
        // yield put(EventsActions.getEvents('subscriptions'))


    } catch (err) {
    }
}

export const watchSubscribe = function* watchUserAuth() {
    yield takeLatest(SUBSCRIBE, subscribe);
    yield takeLatest(UNSUBSCRIBE, unsubscribe);
};
