/**Tags and Categories actions */

import {
    ACCEPT_OR_REJECT_EDIT,
    APPROVE_CLAIMS, APPROVE_REJECT_SPONSOR,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    EDIT_ORGANIZATION, FILTER_ORG, FILTER_ORG_BY_STATUS, FILTER_ORG_DEFAULT,
    GET_CLAIMS, GET_EDITS, GET_EVENT_SPONSORS, GET_EVENT_SPONSORS_FOR_EDIT,
    GET_ORGANIZATION,
    GET_ORGANIZATION_BY_ID, GET_PENDING_SPONSORS,
    REJECT_CLAIMS, REMOVE_MANAGER, SEARCH_ORG, SET_STATUS,
} from './organizations.types';
import {SEARCH_EVENTS} from "../events/events.types";

export const createOrg = (data) => {
    return {
        type: CREATE_ORGANIZATION,
        payload: {data},
    };
};

export const editOrg = (data, id, type) => {
    return {
        type: EDIT_ORGANIZATION,
        payload: {data, id, type}
    };
};

export const deleteOrg = (id, type) => {
    return {
        type: DELETE_ORGANIZATION,
        payload: {id, type}
    };
};

export const getOrg = ( type, myOrgs ) => {
    return {
        type: GET_ORGANIZATION,
        payload: { type, myOrgs }
    };
};

export const getOrgById = (id) => {
    return {
        type: GET_ORGANIZATION_BY_ID,
        payload: id
    };
};

/**Claims types */

export const getClaims = (id) => {
    return {
        type: GET_CLAIMS,
        payload: id
    };
};

export const approveClaims = ( id, orgId ) =>{
    return{
        type: APPROVE_CLAIMS,
        payload: {id, orgId}
    }
}

export const rejectClaims = ( id, orgId ) =>{
    return{
        type: REJECT_CLAIMS,
        payload: {id, orgId}
    }
}

/**Edits types */

export const getEdits = ( id ) =>{
    return{
        type: GET_EDITS,
        payload: id
    }
}

export const acceptOrReject = (info) => {
    return {
        type: ACCEPT_OR_REJECT_EDIT,
        payload: { info },
    };
};

/**Status */
export const setStatus = ( info, type ) => {
    return{
        type: SET_STATUS,
        payload: { info, type }
    }
}

/**Manager */
export const removeManager = ( id ) => {
    return{
        type: REMOVE_MANAGER,
        payload: { id }
    }
}

/**Sponsoring */
export const getPendingSponsors = (orgId) => {
    return {
        type: GET_PENDING_SPONSORS,
        payload: orgId,
    };
};

export const getEventSponsors = (orgId) => {
    return {
        type: GET_EVENT_SPONSORS,
        payload: orgId,
    };
};

export const getEventSponsorsForEdit = (evId) => {
    return {
        type: GET_EVENT_SPONSORS_FOR_EDIT,
        payload: evId,
    };
};

export const approveOrRejectSponsor = (info) => {
    return {
        type: APPROVE_REJECT_SPONSOR,
        payload: info,
    };
};


/**SearchPage Filter*/

export const searchOrg = (name) => {
    return {
        type: SEARCH_ORG,
        payload: { name },
    };
};

export const aToZ = (name) => {
    return {
        type: FILTER_ORG,
        payload: { name },
    };
};

export const atoZDefault = ( ) =>{
    return{
        type:FILTER_ORG_DEFAULT
    }
}

export const filterOrgByStatus = ( status ) =>{
    return{
        type:FILTER_ORG_BY_STATUS,
        payload:{ status }
    }
}