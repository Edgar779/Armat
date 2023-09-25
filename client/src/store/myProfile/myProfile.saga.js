import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './myProfile.service';
import { GET_MY_PROFILE, GET_MY_PROFILE_SUCCESS } from './myProfile.types';

function* myProfile() {
    try {
        const res = yield call(authService.getMyProfileInfo);
        yield put({
            type: GET_MY_PROFILE_SUCCESS,
            payload: res.data,
        });
        localStorage.setItem('userInfo', JSON.stringify(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const watchMyProfile = function* watchMyProfile() {
    yield takeLatest(GET_MY_PROFILE, myProfile);
};
