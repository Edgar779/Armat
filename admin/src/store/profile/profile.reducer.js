/**Profile reducer */

import {
    EDIT_PASSWORD_FAIL,
    EDIT_PASSWORD_SUCCESS,
    EDIT_PROFILE,
    EDIT_PROFILE_FAIL,
    EDIT_PROFILE_SUCCESS, GET_PROFILE_SUCCESS,
    REMOVE_ERROR,
    REMOVE_SUCCESS,
    UPDATE_AVATAR,
    UPDATE_AVATAR_SUCCESS,
} from './profile.types';

const initialState = {
    profileEdited: null,
    editProfileFail: null,
    passwordChanged: null,
    passwordChangedFail: null,
    MyProfile: null,
    avatarImg: null,

};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case EDIT_PROFILE_SUCCESS:
        //     return {
        //         ...state,
        //         profileEdited: action.payload,
        //         MyProfile: action.payload,
        //         avatarImg: action.payload,
        //     };

        // case EDIT_PROFILE_FAIL:
        //     return {
        //         ...state,
        //         editProfileFail: action.payload,
        //     };
        //
        // case EDIT_PROFILE:
        //     return {
        //         ...state,
        //         // editProfileLoader: true,
        //     };
        //
        // case EDIT_PASSWORD_SUCCESS:
        //     return {
        //         ...state,
        //         passwordChanged: action.payload,
        //     };
        //
        // case EDIT_PASSWORD_FAIL:
        //     return {
        //         ...state,
        //         passwordChangedFail: action.payload,
        //     };

        case REMOVE_ERROR:
            return {
                ...state,
                passwordChangedFail: '',
                editProfileFail: '',
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                MyProfile: action.payload,
            };

        case REMOVE_SUCCESS:
            return {
                ...state,
                passwordChanged: '',
                editProfileLoader: null,
            };

        case UPDATE_AVATAR:
            return {
                ...state,
                avatarImg: null,
            };

        case UPDATE_AVATAR_SUCCESS:
            return {
                ...state,
                MyProfile: action.payload,
                avatarImg: action.payload.avatarUrl,
            };

        default:
            return state;
    }
};
