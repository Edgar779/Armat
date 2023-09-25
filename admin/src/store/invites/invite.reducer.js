/**Invites reducer */

import {
    MAKE_MEMBER_INVITE_SUCCESS,
    MEMBER_INVITE,
    MEMBER_INVITE_FAIL,
    MEMBER_INVITE_SUCCESS,
    ORGANIZER_INVITE,
    ORGANIZER_INVITE_SUCCESS,
    REMOVE_STATUS,
} from './invite.types';

const initialState = {
    message: null,
    errMessage: null,
    isLoading: false,
};

export const inviteReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMBER_INVITE:
            return {
                ...state,
                isLoading: true,
            };

        case MEMBER_INVITE_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isLoading: false,
            };

        case MAKE_MEMBER_INVITE_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isLoading: false,
            };

        case MEMBER_INVITE_FAIL:
            return {
                ...state,
                errMessage: action.payload,
                isLoading: false,
            };

        case ORGANIZER_INVITE:
            return {
                ...state,
                isLoading: true,
            };

        case ORGANIZER_INVITE_SUCCESS:
            return {
                ...state,
                message: action.payload,
            };

        case REMOVE_STATUS:
            return {
                ...state,
                message: '',
                errMessage: '',
            };

        default:
            return state;
    }
};
