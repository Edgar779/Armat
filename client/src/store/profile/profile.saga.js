import { call, put, takeLatest } from 'redux-saga/effects';
import { profileService } from './profile.service';
import {
    EDIT_MY_ORGANIZATION,
    EDIT_MY_ORGANIZATION_FAIL,
    EDIT_MY_ORGANIZATION_SUCCESS,
    EDIT_MY_PASSWORD,
    EDIT_MY_PASSWORD_FAIL,
    EDIT_MY_PASSWORD_SUCCESS,
    EDIT_MY_PROFILE,
    EDIT_MY_PROFILE_FAIL,
    EDIT_MY_PROFILE_SUCCESS,
    GET_MY_PROFILE,
    GET_MY_PROFILE_SUCCESS,
    UPDATE_MY_AVATAR_SUCCESS,
} from './profile.types';
import { authActions } from '../auth';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';

function* editOrganization({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(profileService.editProfile, payload.data);
        yield put({
            type: EDIT_MY_ORGANIZATION_SUCCESS,
            payload: res.data,
        });
        yield put({ type: GET_MY_PROFILE });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editProfile({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(profileService.editProfile, payload.data);
        yield put({
            type: EDIT_MY_PROFILE_SUCCESS,
            payload: res.data.user,
        });
        yield put({ type: GET_MY_PROFILE });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editPassword({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(profileService.editPassword, payload.data);
        yield put({
            type: EDIT_MY_PASSWORD_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err.data.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getProfileInfo({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(profileService.getProfile, payload);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        yield put({
            type: GET_MY_PROFILE_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        if (err.response.data.statusCode === 401) {
            yield put(authActions.logOut());
        }
    }
}

export function* watchProfile() {
    yield takeLatest(GET_MY_PROFILE, getProfileInfo);
    yield takeLatest(EDIT_MY_PROFILE, editProfile);
    yield takeLatest(EDIT_MY_PASSWORD, editPassword);
    yield takeLatest(EDIT_MY_ORGANIZATION, editOrganization);
}
