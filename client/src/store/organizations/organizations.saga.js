/**Tags and Categories saga */

import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from './organizations.service';
import {
    ACCEPT_OR_REJECT_EDIT,
    APPROVE_CLAIMS,
    CLAIMS,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    EDIT_ORGANIZATION,
    FOLLOW,
    GET_CLAIMS,
    GET_CLAIMS_SUCCESS,
    GET_EDITS,
    GET_EDITS_SUCCESS,
    GET_EVENTS_BY_ORGANIZATION,
    GET_EVENTS_BY_ORGANIZATION_SUCCESS,
    GET_FOLLOWS,
    GET_FOLLOWS_SUCCESS,
    GET_ORG_CATEGORIES,
    GET_ORG_CATEGORIES_SUCCESS,
    GET_ORGANIZATION,
    GET_ORGANIZATION_BY_CATEGORIES,
    GET_ORGANIZATION_BY_ID,
    GET_ORGANIZATION_BY_ID_SUCCESS,
    GET_ORGANIZATION_SUCCESS,
    GET_SUGGEST_INFO,
    REJECT_CLAIMS,
    SET_STATUS,
    UNFOLLOW,
} from './organizations.types';
import { httpRequestsOnLoadActions } from '../http_requests_on_load';
import { httpRequestsOnSuccessActions } from '../http_requests_on_success';
import { httpRequestsOnErrorsActions } from '../http_requests_on_errors';

function* crateOrg({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.crateOrgService, payload.data);
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editOrg({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.editOrgService, payload);
        if (payload.type === 'byId') {
            yield put({
                type: GET_ORGANIZATION_BY_ID,
                payload: payload.id,
            });
        }
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* deleteOrg({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.deleteOrgService, payload.id);
        yield put({
            type: GET_ORGANIZATION,
            payload: { type: payload.type },
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getOrg({ payload, type }) {
    if (!payload.noLoad) {
        yield put(httpRequestsOnLoadActions.appendLoading(type));
    } else {
        yield put(httpRequestsOnLoadActions.appendLoading('LOAD_SCREEN'));
    }
    try {
        const res = yield call(payload.type === 'ALL' ? authService.getAllOrgService : authService.getOrgService, payload);
        yield put({
            type: GET_ORGANIZATION_SUCCESS,
            payload: res.data.reverse(),
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnLoadActions.removeLoading('LOAD_SCREEN'));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnLoadActions.removeLoading('LOAD_SCREEN'));
    }
}

function* getOrgByCat({ payload }) {
    try {
        const res = yield call(authService.getOrgServiceByCat, payload);
        yield put({
            type: GET_ORGANIZATION_SUCCESS,
            payload: res.data,
        });
    } catch (err) {

    }
}

function* getOrgById({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgByIdService, payload);
        yield put({
            type: GET_ORGANIZATION_BY_ID_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Claims types */
function* getClaims({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getClaimsService, payload);
        yield put({
            type: GET_CLAIMS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* approveClaims({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.approveClaimService, payload.id);
        yield put({
            type: GET_CLAIMS,
            payload: payload.orgId,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* rejectClaims({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.rejectClaimService, payload.id);
        yield put({
            type: GET_CLAIMS,
            payload: payload.orgId,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Edits types */
function* getEdits({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getEditsService, payload);
        yield put({
            type: GET_EDITS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* acceptOrReject({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.acceptOrRejectService, payload.info);
        yield put({
            type: GET_EDITS,
            payload: payload.info.orgId,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Status */
function* setStatus({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.setStatusService, payload.info.status, payload.info.info);
        yield put({
            type: GET_ORGANIZATION,
            payload: { type: payload.info.type },
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Claim */
function* claim({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.claimService, payload);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Events */
function* getOrgEvents({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgEventsService, payload);
        yield put({
            type: GET_EVENTS_BY_ORGANIZATION_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Suggest */
function* suggestOrg({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgByIdService, payload);

        yield put({
            type: GET_ORGANIZATION_BY_ID_SUCCESS,
            payload: res.data,
        });

        // yield put({
        //     type: GET_SUGGEST_INFO_SUCCESS,
        //     payload: res.data,
        // });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Categories */
function* getOrgCategories({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getOrgCategoriesService, payload);
        yield put({
            type: GET_ORG_CATEGORIES_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Follows */
function* follow({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.followService, payload);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
        const res = yield call(authService.getFollowsService);
        yield put({
            type: GET_FOLLOWS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* unfollow({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.unfollowService, payload);
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));

        const res = yield call(authService.getFollowsService);
        yield put({
            type: GET_FOLLOWS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getFollows({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(payload.type === 'filter' ? authService.getFollowsServiceFilter : authService.getFollowsService);

        if (payload.type === 'filter') {
            yield put({
                type: GET_ORGANIZATION_SUCCESS,
                payload: res.data,
            });
        } else {
            yield put({
                type: GET_FOLLOWS_SUCCESS,
                payload: res.data,
            });
        }

        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

export const watchOrg = function* watchOrgSaga() {
    /**Organizations */
    yield takeLatest(CREATE_ORGANIZATION, crateOrg);
    yield takeLatest(EDIT_ORGANIZATION, editOrg);
    yield takeLatest(DELETE_ORGANIZATION, deleteOrg);

    yield takeLatest(GET_ORGANIZATION, getOrg);
    yield takeLatest(GET_ORGANIZATION_BY_ID, getOrgById);
    yield takeLatest(GET_ORGANIZATION_BY_CATEGORIES, getOrgByCat);

    /**Claims types */
    yield takeLatest(GET_CLAIMS, getClaims);
    yield takeLatest(APPROVE_CLAIMS, approveClaims);
    yield takeLatest(REJECT_CLAIMS, rejectClaims);

    /**Edits types */
    yield takeLatest(GET_EDITS, getEdits);
    yield takeLatest(ACCEPT_OR_REJECT_EDIT, acceptOrReject);

    /**Status */
    yield takeLatest(SET_STATUS, setStatus);

    /**Claim */
    yield takeLatest(CLAIMS, claim);

    /**Events */
    yield takeLatest(GET_EVENTS_BY_ORGANIZATION, getOrgEvents);

    /**Suggest */
    yield takeLatest(GET_SUGGEST_INFO, suggestOrg);

    /**Categories */
    yield takeLatest(GET_ORG_CATEGORIES, getOrgCategories);

    /**Follows */
    yield takeLatest(FOLLOW, follow);
    yield takeLatest(UNFOLLOW, unfollow);
    yield takeLatest(GET_FOLLOWS, getFollows);
};
