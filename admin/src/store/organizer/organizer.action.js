/**Tags and Categories actions */

import {
    CREATE_ORGANIZATION_CATEGORY,
    DELETE_ORGANIZATION_CATEGORY,
    EDIT_ORGANIZATION_CATEGORY,
    GET_ORGANIZATION_CATEGORY, GET_ORGANIZATION_CATEGORY_BY_ID,

} from './organizer.types';

export const createOrgCat = (data) => {
    return {
        type: CREATE_ORGANIZATION_CATEGORY,
        payload: {data},
    };
};

export const editOrgCat = (data, id) => {
    return {
        type: EDIT_ORGANIZATION_CATEGORY,
        payload: {data, id}
    };
};

export const deleteOrgCat = (id) => {
    return {
        type: DELETE_ORGANIZATION_CATEGORY,
        payload: id,
    };
};

export const getOrgCat = () => {
    return {
        type: GET_ORGANIZATION_CATEGORY,
    };
};

export const getOrgCatById = (id) => {
    return {
        type: GET_ORGANIZATION_CATEGORY_BY_ID,
        payload: id
    };
};

