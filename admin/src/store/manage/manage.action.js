/**Tags and Categories actions */

import { CREATE_CATEGORIES, CREATE_TAG, DELETE_CATEGORIES, DELETE_TAG, GET_CATEGORIES, GET_TAG } from './manage.types';

export const CreateTag = (data) => {
    return {
        type: CREATE_TAG,
        payload: { data },
    };
};

export const GetTags = () => {
    return {
        type: GET_TAG,
    };
};

export const DeleteTags = (data) => {
    return {
        type: DELETE_TAG,
        payload: { data },
    };
};

export const CreateCategories = (data) => {
    return {
        type: CREATE_CATEGORIES,
        payload: { data },
    };
};

export const GetCategories = () => {
    return {
        type: GET_CATEGORIES,
    };
};

export const DeleteCategories = (data) => {
    return {
        type: DELETE_CATEGORIES,
        payload: { data },
    };
};
