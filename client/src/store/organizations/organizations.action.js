/**Tags and Categories actions */

import {
    ACCEPT_OR_REJECT_EDIT,
    APPROVE_CLAIMS,
    CLAIMS,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    EDIT_ORGANIZATION,
    FOLLOW,
    GET_CLAIMS,
    GET_EDITS,
    GET_EVENTS_BY_ORGANIZATION,
    GET_FOLLOWS,
    GET_ORG_CATEGORIES,
    GET_ORGANIZATION,
    GET_ORGANIZATION_BY_CATEGORIES,
    GET_ORGANIZATION_BY_ID,
    GET_SUGGEST_INFO,
    REJECT_CLAIMS,
    REMOVE_ORG_BY_ID,
    REMOVE_ORGANIZATION_BY_ID,
    REMOVE_SUGGEST_INFO,
    SET_STATUS,
    UNFOLLOW,
} from './organizations.types';

export const createOrg = (data) => {
    return {
        type: CREATE_ORGANIZATION,
        payload: { data },
    };
};

export const editOrg = (data, id, type) => {
    return {
        type: EDIT_ORGANIZATION,
        payload: { data, id, type },
    };
};

export const deleteOrg = (id, type) => {
    return {
        type: DELETE_ORGANIZATION,
        payload: { id, type },
    };
};

export const getOrg = (type, status, noLoad) => {
    return {
        type: GET_ORGANIZATION,
        payload: { type, status, noLoad },
    };
};

export const getOrgByCategories = (info) => {
    return {
        type: GET_ORGANIZATION_BY_CATEGORIES,
        payload: { info },
    };
};

export const getOrgById = (id) => {
    return {
        type: GET_ORGANIZATION_BY_ID,
        payload: id,
    };
};

export const removeOrgById = () => {
    return {
        type: REMOVE_ORGANIZATION_BY_ID,
    };
};

/**Claims types */

export const getClaims = (id) => {
    return {
        type: GET_CLAIMS,
        payload: id,
    };
};

export const approveClaims = (id, orgId) => {
    return {
        type: APPROVE_CLAIMS,
        payload: { id, orgId },
    };
};

export const rejectClaims = (id, orgId) => {
    return {
        type: REJECT_CLAIMS,
        payload: { id, orgId },
    };
};

/**Edits types */

export const getEdits = (id) => {
    return {
        type: GET_EDITS,
        payload: id,
    };
};

export const acceptOrReject = (info) => {
    return {
        type: ACCEPT_OR_REJECT_EDIT,
        payload: { info },
    };
};

/**Status */
export const setStatus = (info) => {
    return {
        type: SET_STATUS,
        payload: { info },
    };
};

/**Claim */
export const claim = (id) => {
    return {
        type: CLAIMS,
        payload: id,
    };
};

/**Events */
export const orgEvents = (id) => {
    return {
        type: GET_EVENTS_BY_ORGANIZATION,
        payload: id,
    };
};

/**Suggest */
export const suggestOrg = (id) => {
    return {
        type: GET_SUGGEST_INFO,
        payload: id,
    };
};

export const removeSuggestOrg = () => {
    return {
        type: REMOVE_SUGGEST_INFO,
    };
};

export const removeById = () => {
    return {
        type: REMOVE_ORG_BY_ID,
    };
};

/**Categories */
export const getOrgCategories = () => {
    return {
        type: GET_ORG_CATEGORIES,
    };
};

/**Follow */
export const getFollows = (type) => {
    return {
        type: GET_FOLLOWS,
        payload: { type },
    };
};

export const follow = (info) => {
    return {
        type: FOLLOW,
        payload: info,
    };
};

export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        payload: id,
    };
};
