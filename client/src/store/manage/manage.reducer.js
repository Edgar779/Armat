import { GET_CATEGORIES_SUCCESS, GET_PRO_SUCCESS, GET_TAGS_SUCCESS } from './manage.types';

const initialState = {
    tags: [],
    categories: [],
    CategoriesLoading: false,
    TagsLoading: false,
};

export const manageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TAGS_SUCCESS:
            return { ...state, tags: action.payload, TagsLoading: false };

        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, CategoriesLoading: false };

        default:
            return state;
    }
};
