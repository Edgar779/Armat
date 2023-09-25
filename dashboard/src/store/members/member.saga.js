import { call, put, takeLatest } from "redux-saga/effects";
import { membersService } from "./member.service";
import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  DELETE_TAG,
  INVITE_MEMBER,
  EDIT_ROLE,
  DELETE_MEMBERS,
  GET_TAGS,
  GET_TAGS_SUCCESS,
  CREATE_TAG,
  EDIT_TAG,
  ADD_TAG_TO_MEMBER,
  REMOVE_TAG_FROM_MEMBER,
  CREATE_USER_LIST,
  ASSIGN_USERS_TO_LIST,
  GET_USER_GROUP_LIST,
  GET_USER_GROUP_LIST_SUCCESS,
  GET_GROUP_LIST_BY_ID,
  GET_GROUP_LIST_BY_ID_SUCCESS,
  DUPLICATE_LIST,
  GET_ALL_MEMBERS,
  GET_GROUP_LIST_ALL_USERS_BY_ID_SUCCESS,
  GET_ALL_MEMBERS_SUCCESS,
  ASSIGN_USERS_TO_GROUP_LIST,
  DELETE_GROUPED_LIST,
  UNASSIGN_USERS_TO_GROUP_LIST,
} from "./member.type";
import { httpRequestsOnErrorsActions } from "store/http_requests_on_errors";
import { httpRequestsOnLoadActions } from "store/http_requests_on_load";
import { httpRequestsOnSuccessActions } from "store/http_requests_on_success";

/** Member */

function* inviteMember({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(membersService.inviteMemberService, payload?.body);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  }
}

function* changeRole({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  try {
    yield call(membersService.editRoleService, payload?.body);

    if(payload?.type === 'memberList'){
      yield put({
        type: GET_GROUP_LIST_BY_ID,
        payload: { listId: payload?.listId, params:{ ...payload?.params }, load:'noLoad' }
      });
    }else{
      yield put({
        type: GET_MEMBERS,
        payload: { params:{ ...payload?.params }, load:'noLoad' }
      });
    }
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
  } catch (err) {
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnSuccessActions.removeSuccess("MINI_LOAD"));
  }
}


function* getMembersList({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if (payload?.load !== "noLoad") {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(membersService.getMembersListService, payload?.params);
    yield put({
      type: GET_MEMBERS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* getAllMembers({ payload, type }) {
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(membersService.getMembersListService, payload?.params);
    yield put({
      type: GET_ALL_MEMBERS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));

  }
}

function* deleteMembers({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.deleteMembersService, payload?.params);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

/** End */

/** Tags */

function* getTags({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(membersService.getTagsService);
    yield put({
      type: GET_TAGS_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* createTag({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.createTagService, payload?.body);
    yield put({
      type: GET_TAGS
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* editTag({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.editTagService, payload?.body);
    yield put({
      type: GET_TAGS
    });
    yield put({
      type: GET_MEMBERS,
      payload: { params: payload?.pushInfo, load: "noLoad" }
    });
    yield put(httpRequestsOnErrorsActions.removeError(type));
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* deleteTag({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.deleteTagService, payload?.id);
    yield put({
      type: GET_TAGS
    });
    yield put({
      type: GET_MEMBERS,
      payload: { params: payload?.pushInfo, load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* addTagToMember({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.addTagToMemberService, payload?.userId, payload?.tagId);
    yield put({
      type: GET_MEMBERS,
      payload: { params: payload?.pushInfo, load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* removeTagFromMember({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.removeTagFromMemberService, payload?.userId, payload?.tagId);
    yield put({
      type: GET_MEMBERS,
      payload: { params: payload?.pushInfo, load: "noLoad" }
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

/** End */


/** User Group List */

function* createUserList({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.createUserListService, payload?.body);
    yield put({
      type: GET_USER_GROUP_LIST
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type));
  }
}

function* assignUsersToList({ payload, type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.assignUsersToListService, payload?.listId, payload?.body);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* getUserGroupList({ type }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    const res = yield call(membersService.getUserGroupListService);
    yield put({
      type: GET_USER_GROUP_LIST_SUCCESS,
      payload: res.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* getUserGroupById({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  if(payload?.load !== 'noLoad') {
    yield put(httpRequestsOnLoadActions.appendLoading(type));
  }
  try {
    const res = yield call(membersService.getUserGroupByIdService, payload?.listId, payload?.params);
    yield put({
      type: GET_GROUP_LIST_BY_ID_SUCCESS,
      payload: res.data
    });
    const allRes = yield call(membersService.getUserGroupByIdService, payload?.listId);
    yield put({
      type: GET_GROUP_LIST_ALL_USERS_BY_ID_SUCCESS,
      payload: allRes?.data
    });
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* duplicateList({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.duplicateGroupListService, payload?.body);
    yield put({
      type: GET_USER_GROUP_LIST
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* assignUserToGroupList({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.assignUserToGroupListService, payload?.id, payload?.body);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* unassignUserToGroupList({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.unassignUserToGroupListService, payload?.id, payload?.body);
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

function* deleteGroupList({ type, payload }) {
  yield put(httpRequestsOnErrorsActions.removeError(type));
  yield put(httpRequestsOnSuccessActions.removeSuccess(type));
  yield put(httpRequestsOnLoadActions.appendLoading(type));
  try {
    yield call(membersService.deleteGroupListService, payload?.id);
    yield put({
      type: GET_USER_GROUP_LIST
    });
    yield put(httpRequestsOnSuccessActions.appendSuccess(type));
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.removeError(type));
  } catch (err) {
    yield put(httpRequestsOnLoadActions.removeLoading(type));
    yield put(httpRequestsOnErrorsActions.appendError(type, err?.data?.message));
  }
}

/** End */

export const watchMember = function* watchMemberAuth() {
  /** Member */
  yield takeLatest(INVITE_MEMBER, inviteMember);
  yield takeLatest(EDIT_ROLE, changeRole);
  yield takeLatest(GET_MEMBERS, getMembersList);
  yield takeLatest(GET_ALL_MEMBERS, getAllMembers);
  yield takeLatest(DELETE_MEMBERS, deleteMembers);
  /** End */

  /** Tags  */
  yield takeLatest(GET_TAGS, getTags);
  yield takeLatest(CREATE_TAG, createTag);
  yield takeLatest(EDIT_TAG, editTag);
  yield takeLatest(DELETE_TAG, deleteTag);
  yield takeLatest(ADD_TAG_TO_MEMBER, addTagToMember);
  yield takeLatest(REMOVE_TAG_FROM_MEMBER, removeTagFromMember);
  /** End */

  /** User Group List */
  yield takeLatest(CREATE_USER_LIST, createUserList);
  yield takeLatest(ASSIGN_USERS_TO_LIST, assignUsersToList);
  yield takeLatest(GET_USER_GROUP_LIST, getUserGroupList);
  yield takeLatest(GET_GROUP_LIST_BY_ID, getUserGroupById);
  yield takeLatest(DUPLICATE_LIST, duplicateList);
  yield takeLatest(ASSIGN_USERS_TO_GROUP_LIST, assignUserToGroupList);
  yield takeLatest(UNASSIGN_USERS_TO_GROUP_LIST, unassignUserToGroupList);
  yield takeLatest(DELETE_GROUPED_LIST, deleteGroupList);
  /** End */
};
