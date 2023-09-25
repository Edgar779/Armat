import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './manage.service';
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_PRO, GET_PRO_SUCCESS, GET_TAG, GET_TAGS_SUCCESS } from './manage.types';

//Saga For get Tags
function* getTags() {
    try {
        const res = yield call(authService.GetTags);
        yield put({
            type: GET_TAGS_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}

//Saga For get Categories
function* getCategories() {
    try {
        const res = yield call(authService.GetCategories);

        yield put({
            type: GET_CATEGORIES_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
}

export const watchManage = function* watchManager() {
    //Saga For get Tags
    yield takeLatest(GET_TAG, getTags);
    //Saga For get  Categories
    yield takeLatest(GET_CATEGORIES, getCategories);
};
