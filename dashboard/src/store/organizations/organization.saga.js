import { call, put, takeLatest } from "redux-saga/effects";
import { authService } from "./organization.service";
import {
  GET_ORG_BY_USER,
  GET_ORG_BY_USER_SUCCESS,
  GET_CURRENT_ORG,
  GET_ORG_CATEGORIES,
  GET_ORG_CATEGORIES_SUCCESS,
  CREATE_ORGANIZATION,
  GET_ORGANIZATION_BY_ID,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  EDIT_ORGANIZATION, EDIT_ORGANIZATION_SOCIALS, GET_ORGANIZATION_SOCIALS_SUCCESS, GET_ORGANIZATION_SOCIALS
} from "./organization.type";
import { httpRequestsOnErrorsActions } from "store/http_requests_on_errors";
import { httpRequestsOnLoadActions } from "store/http_requests_on_load";
import { httpRequestsOnSuccessActions } from "store/http_requests_on_success";

/** My Organizations */

function* getOrganizationsByUser({ type, payload }) {
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const admin = JSON.parse(localStorage.getItem('userInfo'));
    const userOrganizations = admin?.orgs?.length && admin?.orgs?.filter((i) => i?.userType && i?.userType !== 'ORGMEMBER')
    const res = yield call(authService.getOrganizationsByUserService);

    yield put({
      type: GET_ORG_BY_USER_SUCCESS,
      payload: res?.data
    });

    if(admin?.auth?.role === "ADMIN"){
      const localId = localStorage.getItem("orgId");
      if (!localId) {
        localStorage.setItem("orgId", res?.data?.[0]?.id);
      }
      const currentId = localId ? localId : res?.data?.[0]?.id;
      const currentUser = res?.data?.find((i) => i?.id === currentId);
      yield put({
        type: GET_CURRENT_ORG,
        payload: currentUser
      });
    }else {
      if (res?.data?.length && userOrganizations?.length) {
        const localId = localStorage.getItem("orgId");
        if (!localId) {
          localStorage.setItem("orgId", userOrganizations?.[0]?.org);
        }
        const currentId = localId ? localId : userOrganizations?.[0]?.org;
        const currentUser = res?.data?.find((i) => i?.id === currentId);
        yield put({
          type: GET_CURRENT_ORG,
          payload: currentUser
        });
      }
    }
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* createOrganization({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    yield call(authService.createOrganizationService, payload?.body);
    yield put({
      type: GET_ORG_BY_USER,
      payload: { load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));

  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* editOrganization({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    yield call(authService.editOrganizationService, payload?.id, payload?.body);
    yield put({
      type: GET_ORGANIZATION_BY_ID,
      payload: { load: "noLoad", id: payload?.id }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));

  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getOrgById({ type, payload }) {
  if(payload?.load !== 'noLoad') {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(authService.getOrgByIdService );
    yield put({
      type: GET_ORGANIZATION_BY_ID_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));

  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* editOrganizationSocial({ type, payload }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    yield call(authService.editOrganizationSocialService, payload?.body);
    yield put({
      type: GET_ORGANIZATION_SOCIALS,
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));

  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* getOrganizationSocial({ type }) {
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnErrorsActions.removeError(type));
  try {
    const res = yield call(authService.getOrganizationSocialService);
    yield put({
      type: GET_ORGANIZATION_SOCIALS_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));

  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}



/** End */

/** Organization Categories */

function* getOrgCategories({ type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(authService.getOrgCategoriesService);
    yield put({
      type: GET_ORG_CATEGORIES_SUCCESS,
      payload: res?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

/** End */

export const watchOrganization = function* watchOrganizationAuth() {
  /** My Organizations */
  yield takeLatest(GET_ORG_BY_USER, getOrganizationsByUser);
  yield takeLatest(GET_ORGANIZATION_BY_ID, getOrgById);
  yield takeLatest(CREATE_ORGANIZATION, createOrganization);
  yield takeLatest(EDIT_ORGANIZATION, editOrganization);
  yield takeLatest(EDIT_ORGANIZATION_SOCIALS, editOrganizationSocial);
  yield takeLatest(GET_ORGANIZATION_SOCIALS, getOrganizationSocial);
  /** End */

  /** Organization Categories */
  yield takeLatest(GET_ORG_CATEGORIES, getOrgCategories);
  /** End */
};
