import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './auth.service';
import {
    CHANGE_PASSWORD,
    SIGNUP_USER,
    SIGNIN_USER,
    SIGNUP_USER_SUCCESS,
    // CHECK_USER_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    CHECK_USER,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    SIGNIN_USER_SUCCESS,
    SOCIAL_SIGNIN,
    INVITE_MEMBER,
    INVITE_MEMBER_SUCCESS,
    CLEAR_USER_INFO,
    SEARCH,
    SEARCH_SUCCESS,
} from './auth.types';
import { START_LOADING, STOP_LOADING, SET_ERROR } from '../app';

import { SET_USER_SUCCESS } from '../profile/profile.types';
import { GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUCCESS } from '../notifications/notifications.types';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';

const data = { pageSize: 6, page: 1 };

function* signUp({ type, payload }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.signUp, payload?.user);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        localStorage.setItem('access-token', res.data.token);
        const user = yield call(authService.checkUser);
        localStorage.setItem('userInfo', JSON.stringify(user.data));
        window.location.replace(payload?.path ? payload.path : '/');
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data.message));
    }
}

function* signIn({ type, payload }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.signIn, payload?.user);
        localStorage.setItem('access-token', res.data.token);
        const user = yield call(authService.checkUser);
        localStorage.setItem('userInfo', JSON.stringify(user.data));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put({
            type: GET_NOTIFICATIONS,
            payload: { data: { pageSize: 6, page: 1 } },
        });

        window.location.replace(payload?.path ? payload.path : '/');
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data && err.data.message));
    }
}

/** Used by the social login page, when it tries to auth the user based on the url token */
function* socialSignin(data) {
    try {
        yield call(authService.socialSignin, data.payload);
        yield put({
            type: CHECK_USER,
        });
        window.location.replace('/');
    } catch (err) {
        yield put({ type: SET_ERROR, payload: err.response.data.message });
    }
}

function* logOut() {
    try {
        yield call(authService.logOut);
        yield put({ type: LOGOUT_USER_SUCCESS });
        localStorage.removeItem('access-token');
        localStorage.removeItem('userInfo');
        yield put({ type: CLEAR_USER_INFO });
    } catch (err) {
        localStorage.removeItem('access-token');
        localStorage.removeItem('userInfo');
        yield put({ type: SET_ERROR, payload: err });
    }
}

function* checkUser() {
    try {
        const res = yield call(authService.checkUser);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        yield put({ type: SIGNUP_USER_SUCCESS, payload: res.data });
        // yield put({ type: SIGNIN_USER_SUCCESS, payload: res.data });
        // yield put({ type: SET_USER_SUCCESS, payload: res.data });
    } catch (err) {
        // localStorage.removeItem('userInfo');
        // localStorage.removeItem('role');
        // yield put({ type: CLEAR_USER_INFO });
    }
}

function* changePassword(payload) {
    try {
        yield put({ type: START_LOADING });
        const res = yield call(authService.changePassword, payload);
        yield put({ type: CHANGE_PASSWORD, payload: res.data });
        yield put({ type: STOP_LOADING });
    } catch (err) {
        yield put({ type: SET_ERROR, payload: err });
    }
}

function* forgotPassword({ type, payload }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.forgotPassword, payload);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type, 'not exist'));
    }
}

function* resetPassword(payload) {
    yield put({ type: START_LOADING });
    try {
        const res = yield call(authService.resetPassword, payload.payload);
        yield put({ type: RESET_PASSWORD_SUCCESS, payload: res.data });
        yield put({ type: STOP_LOADING });
    } catch (err) {
        yield put({ type: SET_ERROR, payload: err.message });
        yield put({ type: STOP_LOADING });
    }
}

function* deleteAccount({ type, payload }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.deleteAccount, payload.id);
        localStorage.removeItem('access-token');
        localStorage.removeItem('userInfo');
        yield put(httpRequestsOnLoadActions.appendLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.appendLoading(type));
        yield put({ type: SET_ERROR, payload: err });
    }
}

function* inviteMember({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.inviteMember, payload);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data.message));
    }
}

function* searchEventAndOrgs({ payload, type }) {
    if (payload.load !== 'noLoad') {
        yield put(httpRequestsOnLoadActions.appendLoading(type));
    }
    try {
        const res = yield call(authService.search, payload.name);
        yield put({
            type: SEARCH_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const watchAuth = function* watchUserAuth() {
    yield takeLatest(SIGNUP_USER, signUp);
    yield takeLatest(SIGNIN_USER, signIn);
    yield takeLatest(SOCIAL_SIGNIN, socialSignin);
    yield takeLatest(LOGOUT_USER, logOut);

    yield takeLatest(CHECK_USER, checkUser);
    yield takeLatest(CHANGE_PASSWORD, changePassword);
    yield takeLatest(FORGOT_PASSWORD, forgotPassword);
    yield takeLatest(RESET_PASSWORD, resetPassword);
    yield takeLatest(DELETE_ACCOUNT, deleteAccount);
    yield takeLatest(INVITE_MEMBER, inviteMember);

    yield takeLatest(SEARCH, searchEventAndOrgs);
};
