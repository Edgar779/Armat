import {
  GET_MEMBERS_SUCCESS,
  EDIT_ROLE_SUCCESS,
  GET_TAGS_SUCCESS,
  GET_USER_GROUP_LIST_SUCCESS,
  GET_GROUP_LIST_BY_ID_SUCCESS,
  GET_GROUP_LIST_ALL_USERS_BY_ID_SUCCESS,
  GET_ALL_MEMBERS_SUCCESS, REMOVE_GROUP_LIST_BY_ID
} from "./member.type";

const initialState = {
  membersList: null,
  allMembers: [],
  userGroupAllUsers: [],
  /** Tags */
  tagList: null,
  /** End */

  /** User Group List */
  userGroupList: [],
  userGroupById: [],
  /** End */
};

const returnNewList = (item, list) => {
  const newList = list?.orgUsers;
  newList?.find((i, j) => i?.id === item?.id && newList?.orgUsers[j].userType === item?.userType);
  return {
    count: list?.count,
    orgUsers: newList
  };
};

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Member */
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        membersList: action.payload
      };
    case GET_ALL_MEMBERS_SUCCESS:
      return {
        ...state,
        allMembers: action.payload
      };
    case EDIT_ROLE_SUCCESS:
      return {
        ...state,
        membersList: returnNewList(action.payload, state?.membersList)
      };
    /** End */

    /** Tags */
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        tagList: action.payload
      };
    /** End */

    /** User Group List */
    case GET_USER_GROUP_LIST_SUCCESS:
      return {
        ...state,
        userGroupList: action.payload
      };
    case GET_GROUP_LIST_BY_ID_SUCCESS:
      return {
        ...state,
        userGroupById: action.payload
      };
      case REMOVE_GROUP_LIST_BY_ID:
      return {
        ...state,
        userGroupById: []
      };
      case GET_GROUP_LIST_ALL_USERS_BY_ID_SUCCESS:
      return {
        ...state,
        userGroupAllUsers: action.payload
      };
    /** End */

    default:
      return state;
  }
};
