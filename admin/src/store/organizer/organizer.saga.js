/**Tags and Categories saga */

import {call, put, takeLatest} from 'redux-saga/effects';
import {authService} from './organizer.service';
import {
    CREATE_ORGANIZATION_CATEGORY,
    DELETE_ORGANIZATION_CATEGORY,
    EDIT_ORGANIZATION_CATEGORY,
    GET_ORGANIZATION_CATEGORY,
    GET_ORGANIZATION_CATEGORY_BY_ID,
    GET_ORGANIZATION_CATEGORY_SUCCESS,
} from './organizer.types';
import {httpRequestsOnLoadActions} from '../http_requests_on_load';
import {httpRequestsOnSuccessActions} from "../http_requests_on_success";
import {httpRequestsOnErrorsActions} from "../http_requests_on_errors";

function* crateOrgCat({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.crateOrgCatService, payload.data);
        yield put({
            type: GET_ORGANIZATION_CATEGORY
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editOrgCat({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.editOrgCatService, payload);
        yield put({
            type: GET_ORGANIZATION_CATEGORY
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* deleteOrgCat({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.deleteOrgCatService, payload);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put({
            type: GET_ORGANIZATION_CATEGORY
        })
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getOrgCat({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgCatService);
        yield put({
            type: GET_ORGANIZATION_CATEGORY_SUCCESS,
            payload: res.data
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put(httpRequestsOnErrorsActions.appendError(type));
    }
}

function* getOrgCatById({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgCatByIdService, payload);
        // yield put({
        //     type: GET_CATEGORIES_SUCCESS,
        //     payload: res.data.reverse(),
        // });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const watchOrgCat = function* watchOrgCatSaga() {

    yield takeLatest(CREATE_ORGANIZATION_CATEGORY, crateOrgCat);
    yield takeLatest(EDIT_ORGANIZATION_CATEGORY, editOrgCat);
    yield takeLatest(DELETE_ORGANIZATION_CATEGORY, deleteOrgCat);

    yield takeLatest(GET_ORGANIZATION_CATEGORY, getOrgCat);
    yield takeLatest(GET_ORGANIZATION_CATEGORY_BY_ID, getOrgCatById);
};
