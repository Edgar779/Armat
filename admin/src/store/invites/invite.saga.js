/**Invites saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
    MAKE_MEMBER_INVITE,
    MAKE_MEMBER_INVITE_SUCCESS,
    MEMBER_INVITE,
    MEMBER_INVITE_FAIL,
    MEMBER_INVITE_SUCCESS,
    ORGANIZER_INVITE, SET_ROLE_INVITE,
} from './invite.types';
import { authService } from './invite.service';
import { userActions } from '../users';
import {httpRequestsOnLoadActions} from "../http_requests_on_load";
import {httpRequestsOnSuccessActions} from "../http_requests_on_success";

function* sendInviteMakeMember(action) {
    try {
        const res = yield call(authService.inviteMakeMember, action.payload.email);
        yield put({
            type: MAKE_MEMBER_INVITE_SUCCESS,
            payload: res.data.message,
        });
        yield put(userActions.getUsersList());
    } catch (err) {
        yield put({
            type: MEMBER_INVITE_FAIL,
            payload: err.response.data.message,
        });
    }
}

function* sendInviteMember(action) {
    try {
        const res = yield call(authService.inviteMember, action.payload.email);
        yield put({
            type: MEMBER_INVITE_SUCCESS,
            payload: res.data.message,
        });
        yield put(userActions.getUsersList());
    } catch (err) {
        yield put({
            type: MEMBER_INVITE_FAIL,
            payload: err.response.data.message,
        });
    }
}

function* sendInviteOrganizer(action) {
    try {
        const res = yield call(authService.inviteOrganizer, action.payload.email);
        yield put({
            type: MEMBER_INVITE_SUCCESS,
            payload: res.data.message,
        });
        yield put(userActions.getUsersList());
    } catch (err) {
        yield put({
            type: MEMBER_INVITE_FAIL,
            payload: err.response.data.message,
        });
    }
}



function* setRoleSaga({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.setRoleService, payload.info);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(userActions.getUsersList());
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const watchInvite = function* watchManage() {
    yield takeLatest(MAKE_MEMBER_INVITE, sendInviteMakeMember);
    yield takeLatest(MEMBER_INVITE, sendInviteMember);
    yield takeLatest(ORGANIZER_INVITE, sendInviteOrganizer);




    yield takeLatest(SET_ROLE_INVITE, setRoleSaga);
};
