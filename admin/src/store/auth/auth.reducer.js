/**Auth reducer */

import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, CLEAR_ERROR, SAVE_LINK } from './auth.types';

const initialState = {
    userToken: null,
    loginErr: null,
    loader: null,
    saveLink: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LINK:
            return {
                ...state,
                saveLink: action.payload.link,
            };
        case LOG_IN:
            return { ...state, loader: true };

        case LOG_IN_SUCCESS:
            return {
                ...state,
                userToken: action.payload,
            };

        case LOG_IN_FAIL:
            return { ...state, loginErr: action.payload, loader: false };

        case CLEAR_ERROR:
            return { ...state, loginErr: [] };

        default:
            return state;
    }
};
