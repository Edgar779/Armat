import {
    GET_MEMBERS,
    INVITE_MEMBER,
    EDIT_ROLE,
    DELETE_MEMBERS,
    GET_TAGS,
    CREATE_TAG,
    EDIT_TAG,
    DELETE_TAG,
    ADD_TAG_TO_MEMBER,
    REMOVE_TAG_FROM_MEMBER,
    CREATE_USER_LIST,
    ASSIGN_USERS_TO_LIST,
    GET_USER_GROUP_LIST,
    GET_GROUP_LIST_BY_ID,
    DUPLICATE_LIST,
    GET_ALL_MEMBERS,
    ASSIGN_USERS_TO_GROUP_LIST,
    DELETE_GROUPED_LIST,
    UNASSIGN_USERS_TO_GROUP_LIST, REMOVE_GROUP_LIST_BY_ID
} from "./member.type";



/** Member */

export const inviteMember = (body) => {
    return{
        type: INVITE_MEMBER,
        payload: { body }
    }
}

export const changeRole = (body, params, type, listId) => {
    return{
        type: EDIT_ROLE,
        payload: { body, params, type, listId }
    }
}

export const getMembersList = ( params, load) => {
    return {
        type: GET_MEMBERS,
        payload: { params, load },
    };
};

export const getAllMembers = ( ) => {
    return {
        type: GET_ALL_MEMBERS,
    };
};

export const deleteMembers = ( params ) => {
    return {
        type: DELETE_MEMBERS,
        payload: { params  },
    };
};


/** End */


/** Tags */

export const getTags = (  ) => {
    return {
        type: GET_TAGS,
    };
};

export const createTag = ( body ) => {
    return {
        type: CREATE_TAG,
        payload: { body }
    };
};

export const editTag = ( body, pushInfo ) => {
    return {
        type: EDIT_TAG,
        payload: { body, pushInfo }
    };
};

export const deleteTag = ( id, pushInfo ) => {
    return {
        type: DELETE_TAG,
        payload: { id, pushInfo }
    };
};

export const addTagToMember = ( userId, tagId, pushInfo ) => {
    return {
        type: ADD_TAG_TO_MEMBER,
        payload: { userId, tagId, pushInfo  }
    };
};

export const removeTagFromMember = ( userId, tagId, pushInfo ) => {
    return {
        type: REMOVE_TAG_FROM_MEMBER,
        payload: { userId, tagId, pushInfo  }
    };
};

/** End */

/** User Group List */

export const createUserList = ( body ) => {
    return {
        type: CREATE_USER_LIST,
        payload: { body }
    };
};

export const assignUsersToList = ( listId, body ) => {
    return {
        type: ASSIGN_USERS_TO_LIST,
        payload: { listId, body }
    };
};

export const getUserGroupList = (  ) => {
    return {
        type: GET_USER_GROUP_LIST,
    };
};

export const getUserGroupById = ( listId, params, load ) => {
    return {
        type: GET_GROUP_LIST_BY_ID,
        payload: { listId, params, load }
    };
};

export const removeUserGroupById = ( ) => {
    return {
        type: REMOVE_GROUP_LIST_BY_ID,
    };
};

export const duplicateList = ( body ) => {
    return {
        type: DUPLICATE_LIST,
        payload: { body }
    };
};

export const assignUserToGroupList = ( id, body ) => {
    return {
        type: ASSIGN_USERS_TO_GROUP_LIST,
        payload: { id, body }
    };
};

export const unassignUserToGroupList = ( id, body ) => {
    return {
        type: UNASSIGN_USERS_TO_GROUP_LIST,
        payload: { id, body }
    };
};

export const deleteGroupList = ( id ) => {
    return {
        type: DELETE_GROUPED_LIST,
        payload: { id }
    };
};


/** End */