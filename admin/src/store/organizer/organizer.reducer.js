/**Tags and Categories reducer */

import {
    GET_ORGANIZATION_CATEGORY_SUCCESS,
} from './organizer.types';

const initialState = {
   orgCategories:[]
};

export const organizerReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORGANIZATION_CATEGORY_SUCCESS:
            return {
                ...state,
                orgCategories: action.payload,
            };


        default:
            return state;
    }
};
