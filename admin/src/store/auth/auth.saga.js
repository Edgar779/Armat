/**Auth saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './auth.service';
import { LOG_IN, LOG_OUT } from './auth.types';
import {httpRequestsOnErrorsActions, httpRequestsOnLoadActions} from "store";

function* logIn({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {

        const res = yield call(authService.signIn, payload);
        if(res.data.role === 'ADMIN') {
           localStorage.setItem('access-token', res.data.token);
           const info = yield call(authService.getMyProfile, res.data.token);
           localStorage.setItem('userInfo', JSON.stringify(info.data));
            yield put(httpRequestsOnLoadActions.removeLoading(type));
            window.location.replace('admin/home/');
        }
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data.message))
    }
}

function* logOut() {
    try {
        const res = yield call(authService.logOut);
        localStorage.removeItem('access-token   ');
        localStorage.removeItem('userInfo');
        window.location.replace('admin/login');
    } catch (err) {
        // if (err.response.data.statusCode === 401) {
            localStorage.removeItem('access-token');
            localStorage.removeItem('userInfo');
            window.location.replace('admin/login');
        // }
    }
}

export const watchAuth = function* watchUserAuth() {
    yield takeLatest(LOG_IN, logIn);
    yield takeLatest(LOG_OUT, logOut);
};
