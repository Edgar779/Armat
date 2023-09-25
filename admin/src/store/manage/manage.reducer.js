/**Tags and Categories reducer */

import { CREATE_CATEGORIES, CREATE_TAG, DELETE_CATEGORIES, DELETE_TAG, GET_CATEGORIES_SUCCESS, GET_TAGS_SUCCESS } from './manage.types';

const initialState = {
    tags: [],
    categories: [],
    CategoriesLoading: false,
    TagsLoading: false,
};

export const manageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TAG:
            return {
                ...state,
                TagsLoading: true,
            };

        case GET_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.payload,
                TagsLoading: false,
            };

        case CREATE_CATEGORIES:
            return {
                ...state,
                CategoriesLoading: true,
            };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                CategoriesLoading: false,
            };

        case DELETE_TAG:
            return {
                ...state,
                TagsLoading: true,
            };

        case DELETE_CATEGORIES:
            return {
                ...state,
                CategoriesLoading: true,
            };

        default:
            return state;
    }
};
