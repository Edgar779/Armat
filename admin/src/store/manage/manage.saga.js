/**Tags and Categories saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './manage.service';
import {
    CREATE_CATEGORIES,
    CREATE_TAG,
    DELETE_CATEGORIES,
    DELETE_TAG,
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_TAG,
    GET_TAGS_SUCCESS,
} from './manage.types';
import { GetCategories, GetTags } from './manage.action';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import {httpRequestsOnSuccessActions} from "../http_requests_on_success";
import {httpRequestsOnErrorsActions} from "../http_requests_on_errors";

// Tags

function* createTags({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.CreateTags, payload.data);
        yield put(GetTags());
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError('TAG'));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getTags({type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.GetTags);
        yield put({
            type: GET_TAGS_SUCCESS,
            payload: res.data.reverse(),
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* delTags(action) {
    yield put(httpRequestsOnLoadActions.appendLoading('GET_TAG'));
    try {
        const res = yield call(authService.DeleteTags, action.payload.data);
        yield put(httpRequestsOnLoadActions.removeLoading('GET_TAG'));
        yield put({
            type:GET_TAG
        })
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading('GET_TAG'));
    }
}

// Categories

function* createCategories({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.CreateCategory, payload.data);
        yield put(GetCategories());
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnErrorsActions.appendError(type));
    }
}

function* getCategories({ type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.GetCategories);
        yield put({
            type: GET_CATEGORIES_SUCCESS,
            payload: res.data.reverse(),
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* delCategories(action) {
    yield put(httpRequestsOnLoadActions.appendLoading('GET_CATEGORIES'));
    try {
        const res = yield call(authService.DelCategories, action.payload.data);
        yield put(httpRequestsOnLoadActions.removeLoading('GET_CATEGORIES'));
        yield put({
            type:GET_CATEGORIES
        })
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading('GET_CATEGORIES'));
    }
}

export const watchManage = function* watchManage() {
    // Tags
    yield takeLatest(CREATE_TAG, createTags);
    yield takeLatest(GET_TAG, getTags);
    yield takeLatest(DELETE_TAG, delTags);
    // Categories
    yield takeLatest(CREATE_CATEGORIES, createCategories);
    yield takeLatest(GET_CATEGORIES, getCategories);
    yield takeLatest(DELETE_CATEGORIES, delCategories);
};
