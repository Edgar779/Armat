/**Tags and Categories saga */

import {call, put, takeLatest} from 'redux-saga/effects';
import {authService} from './organizations.service';
import {
    ACCEPT_OR_REJECT_EDIT,
    APPROVE_CLAIMS, APPROVE_REJECT_SPONSOR,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    EDIT_ORGANIZATION,
    GET_CLAIMS,
    GET_CLAIMS_SUCCESS,
    GET_EDITS,
    GET_EDITS_SUCCESS,
    GET_EVENT_SPONSORS,
    GET_EVENT_SPONSORS_FOR_EDIT, GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS, GET_EVENT_SPONSORS_SUCCESS,
    GET_ORGANIZATION,
    GET_ORGANIZATION_BY_ID,
    GET_ORGANIZATION_BY_ID_ORG,
    GET_ORGANIZATION_BY_ID_SUCCESS,
    GET_ORGANIZATION_SUCCESS,
    GET_PENDING_SPONSORS, GET_PENDING_SPONSORS_SUCCESS,
    REJECT_CLAIMS,
    REMOVE_MANAGER,
    SET_STATUS,
} from './organizations.types';
import {httpRequestsOnLoadActions} from '../http_requests_on_load';
import {httpRequestsOnSuccessActions} from "../http_requests_on_success";
import {httpRequestsOnErrorsActions} from "../http_requests_on_errors";

function* crateOrg({payload, type}) {

    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.crateOrgService, payload.data);
        window.location.replace(`/admin/organization/${res.data.id}`)
        yield put({
            type: GET_ORGANIZATION,
            payload: {'type': res.data.type}
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* editOrg({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        yield call(authService.editOrgService, payload);
        window.location.replace(`/admin/organization/${payload.id}`)
        if (payload.type === "byId") {
            yield put({
                type: GET_ORGANIZATION_BY_ID,
                payload: payload.id
            })
        }
        yield put({
            type: GET_ORGANIZATION,
            payload: {'type': payload.data.type}
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnErrorsActions.appendError(type));
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* deleteOrg({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.deleteOrgService, payload.id);
        yield put({
            type: GET_ORGANIZATION,
            payload: {'type': payload.type}
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        yield put(httpRequestsOnSuccessActions.appendSuccess(type))
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getOrg({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        if(payload?.myOrgs === true ){
            const res = yield call (authService.getMyOrgs, payload);
            yield put({
                type: GET_ORGANIZATION_SUCCESS,
                payload: res.data
            })
        }else {
            const res = yield call(payload.type === 'ALL' ? authService.getAllOrgService : authService.getOrgService, payload);
            yield put({
                type: GET_ORGANIZATION_SUCCESS,
                payload: res.data
            })
        }
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
        // yield put(httpRequestsOnErrorsActions.appendError(type));
    }
}

function* getOrgById({payload, type}) {
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

function* getOrgByIdOrg({payload, type}) {

    try {
        const res = yield call(authService.getOrgByIdService, payload);
        yield put({
            type: GET_ORGANIZATION_BY_ID_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
    }
}

/**Claims types */
function* getClaims({payload, type}) {
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

function* approveClaims({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.approveClaimService, payload.id);
        yield put({
            type: GET_ORGANIZATION_BY_ID,
            payload: payload.orgId
        })
        yield put({
            type: GET_CLAIMS,
            payload: payload.orgId
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* rejectClaims({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.rejectClaimService, payload.id);
        yield put({
            type: GET_ORGANIZATION_BY_ID,
            payload: payload.orgId
        })
        yield put({
            type: GET_CLAIMS,
            payload: payload.orgId
        })
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Edits types */
function* getEdits({payload, type}) {
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
    if(payload.info.action === 'REJECT'){
        yield put(httpRequestsOnLoadActions.appendLoading('REJECT'))
    }else{
        yield put(httpRequestsOnLoadActions.appendLoading('APPROVE'))
    }
    try {
        yield call(authService.acceptOrRejectService, payload.info);
        yield put({
            type: GET_ORGANIZATION_BY_ID_ORG,
            payload: payload.info.orgId,
        });
        yield put({
            type: GET_EDITS,
            payload: payload.info.orgId,
        });
        if(payload.info.action === 'REJECT'){
            yield put(httpRequestsOnLoadActions.removeLoading('REJECT'))
        }else{
            yield put(httpRequestsOnLoadActions.removeLoading('APPROVE'))
        }
    } catch (err) {
        if(payload.info.action === 'REJECT'){
            yield put(httpRequestsOnLoadActions.removeLoading('REJECT'))
        }else{
            yield put(httpRequestsOnLoadActions.removeLoading('APPROVE'))
        }
    }
}

/**Status */
function* setStatus({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.setStatusService, payload.info.status, payload.info.info);

        if (payload.type && payload.type === 'byId') {
            yield put({
                type: GET_ORGANIZATION_BY_ID,
                payload: payload.info.info
            })
        } else {
            yield put({
                type: GET_ORGANIZATION,
                payload: {'type': payload.info.type}
            })
        }

        yield put(httpRequestsOnSuccessActions.appendSuccess(type))
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Manager */
function* removeManager({payload, type}) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.removeManagerService, payload.id);

        yield put({
            type: GET_ORGANIZATION_BY_ID_ORG,
            payload: payload.id
        })
        yield put({
            type: GET_CLAIMS,
            payload: payload.id
        })
        yield put(httpRequestsOnSuccessActions.appendSuccess(type))
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

/**Sponsoring */
function* getPendingSponsors({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const res = yield call(authService.getPendingSponsorsService, payload);
        yield put({
            type: GET_PENDING_SPONSORS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getEventSponsors({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(authService.getEventSponsorsService, payload);
        yield put({
            type: GET_EVENT_SPONSORS_SUCCESS,
            payload: info.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* getEventSponsorsEdit({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(authService.getEventSponsorsEdService, payload);
        yield put({
            type: GET_EVENT_SPONSORS_FOR_EDIT_SUCCESS,
            payload: info.data,
        });
        yield put(httpRequestsOnSuccessActions.appendSuccess(type))
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}

function* approveOrRejectSponsor({ payload, type }) {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
    try {
        const info = yield call(authService.approveOrRejectSponsorService, payload);
        yield put({
            type: GET_PENDING_SPONSORS,
            payload: payload.statusInfo.orgId,
        });
        yield put({
            type: GET_EVENT_SPONSORS,
            payload: payload.statusInfo.orgId,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(type));
    }
}


export const watchOrg = function* watchOrgSaga() {

    yield takeLatest(CREATE_ORGANIZATION, crateOrg);
    yield takeLatest(EDIT_ORGANIZATION, editOrg);
    yield takeLatest(DELETE_ORGANIZATION, deleteOrg);

    yield takeLatest(GET_ORGANIZATION, getOrg);
    yield takeLatest(GET_ORGANIZATION_BY_ID, getOrgById);
    yield takeLatest(GET_ORGANIZATION_BY_ID_ORG, getOrgByIdOrg);

    /**Claims types */
    yield takeLatest(GET_CLAIMS, getClaims);
    yield takeLatest(APPROVE_CLAIMS, approveClaims);
    yield takeLatest(REJECT_CLAIMS, rejectClaims);

    /**Edits types */
    yield takeLatest(GET_EDITS, getEdits);
    yield takeLatest(ACCEPT_OR_REJECT_EDIT, acceptOrReject);

    /**Status */
    yield takeLatest(SET_STATUS, setStatus);

    /**Manager */
    yield takeLatest(REMOVE_MANAGER, removeManager);

    /**Sponsoring */
    yield takeLatest(GET_PENDING_SPONSORS, getPendingSponsors);
    yield takeLatest(GET_EVENT_SPONSORS, getEventSponsors);
    yield takeLatest(GET_EVENT_SPONSORS_FOR_EDIT, getEventSponsorsEdit);
    yield takeLatest(APPROVE_REJECT_SPONSOR, approveOrRejectSponsor);

};
