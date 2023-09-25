import { call, put, takeLatest } from '@redux-saga/core/effects';
import { SET_ERROR, START_LOADING, STOP_LOADING } from '../app';
import { mailerService } from './mailer.service';
import { POST_MAIL, POST_MAIL_FAIL, POST_MAIL_SUCCESS, SUBSCRIBE_NEWS, SUBSCRIBE_NEWS_FAIL, SUBSCRIBE_NEWS_SUCCESS } from './mailer.types';

function* PostMail(payload) {
    yield put({ type: START_LOADING });
    try {
        const res = yield call(mailerService.postMail, payload.payload);
        yield put({ type: POST_MAIL_SUCCESS, payload: res.data });
        yield put({ type: STOP_LOADING });
    } catch (err) {
        yield put({ type: STOP_LOADING });
        yield put({ type: POST_MAIL_FAIL });
        yield put({ type: SET_ERROR, payload: err.response.data.message });
    }
}
function* subscribeNews(payload) {
    yield put({ type: START_LOADING });
    try {
        const res = yield call(mailerService.newsLetterService, payload.payload);
        yield put({ type: SUBSCRIBE_NEWS_SUCCESS, payload: res.data });
        yield put({ type: STOP_LOADING });
    } catch (err) {
        yield put({ type: SUBSCRIBE_NEWS_FAIL });
        yield put({ type: STOP_LOADING });
        yield put({ type: SET_ERROR });
    }
}

export const watchMailer = function* watchUserAuth() {
    yield takeLatest(POST_MAIL, PostMail);
    yield takeLatest(SUBSCRIBE_NEWS, subscribeNews);
};
