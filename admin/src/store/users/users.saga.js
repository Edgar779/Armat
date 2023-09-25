/**Users saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './users.service';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_BY_ID,
    GET_USERS_BY_ID_SUCCESS,
    DELETE_USER_REQUEST,
    FILTER_USERS_BY_AZ,
    FILTER_USERS_BY_AZ_SUCCESS,
    GET_USERS_BY_TOKEN,
    FILTER_USERS_BY_ROLE,
    FILTER_USERS_BY_ROLE_SUCCESS,
} from './users.types';
import { userActions } from './index';
import { logOut } from '../auth/auth.action';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';

function* getUsers({ type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getUser);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: res.data.reverse(),
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (e) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // if (e.response.data.statusCode === 422) {
        //     // yield put(logOut());
        // }
    }
}

function* getUsersList() {
    try {
        const res = yield call(authService.getUsersList);
        yield put({
            type: FILTER_USERS_BY_ROLE_SUCCESS,
            payload: res.data,
        });
    } catch (e) {}
}

function* getUserByToken() {
    try {
        const res = yield call(authService.getUserByToken);
    } catch (e) {}
}

function* getUsersById(action) {
    try {
        const res = yield call(authService.getUserByID, action.payload.id);
        yield put({
            type: GET_USERS_BY_ID_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}

function* delUsersById(action) {
    try {
        const res = yield call(authService.delUserByID, action.payload.id);
        yield put(userActions.getUsersList());
    } catch (err) {
        console.log(err);
    }
}

function* defaultUsers() {
    try {
        const res = yield call(authService.getUser);
        yield put({
            type: FILTER_USERS_BY_AZ_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}

export const watchUsers = function* watchUserAuth() {
    yield takeLatest(GET_USERS, getUsers);
    yield takeLatest(FILTER_USERS_BY_ROLE, getUsersList);
    yield takeLatest(GET_USERS_BY_TOKEN, getUserByToken);
    yield takeLatest(GET_USERS_BY_ID, getUsersById);
    yield takeLatest(DELETE_USER_REQUEST, delUsersById);
    yield takeLatest(FILTER_USERS_BY_AZ, defaultUsers);
};
