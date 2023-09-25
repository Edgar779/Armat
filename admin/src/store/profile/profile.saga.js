/**Profile saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
    EDIT_PASSWORD,
    EDIT_PASSWORD_FAIL,
    EDIT_PASSWORD_SUCCESS,
    EDIT_PROFILE,
    EDIT_PROFILE_FAIL,
    EDIT_PROFILE_SUCCESS,
    GET_PROFILE, GET_PROFILE_SUCCESS,
    UPDATE_AVATAR,
    UPDATE_AVATAR_SUCCESS,
} from './profile.types';
import { authService } from './profile.service';
import { EditProfileActions } from './index';
import {httpRequestsOnLoadActions} from "../http_requests_on_load";
import {httpRequestsOnErrorsActions,} from '../http_requests_on_errors';
import {httpRequestsOnSuccessActions,} from '../http_requests_on_success';

function* sendEditProfile({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type))
    try {
        const res = yield call(authService.editProfile, payload.data);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put({
        //     type: EDIT_PROFILE_SUCCESS,
        //     payload: res.data,
        // });
        yield put(EditProfileActions.MyProfileInfo());
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put({
        //     type: EDIT_PROFILE_FAIL,
        //     payload: err.data.message,
        // });
        // console.log(err);
    }
}

function* sendEditPassword({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.editPassword, payload.data);
        localStorage.setItem('access-token', res.data.accessToken)
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put({
            type: EDIT_PASSWORD_SUCCESS,
            payload: res.data,
        });

    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* updateAvatar(payload) {
    try {
        const res = yield call(authService.updateAvatar, payload);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        yield put({ type: UPDATE_AVATAR_SUCCESS, payload: res.data });
        // yield put (EditProfileActions.MyProfileInfo ())
    } catch (err) {}
}

function* getProfileInfo({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getProfile, payload);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put({ type: GET_PROFILE_SUCCESS, payload: res.data });
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // if (err.response.data.statusCode === 401) {
            // yield put(authActions.logOut());
        // }
    }
}

export const watchProfile = function* watchProfile() {
    yield takeLatest(GET_PROFILE, getProfileInfo);
    yield takeLatest(EDIT_PROFILE, sendEditProfile);
    yield takeLatest(EDIT_PASSWORD, sendEditPassword);
    yield takeLatest(UPDATE_AVATAR, updateAvatar);
};
