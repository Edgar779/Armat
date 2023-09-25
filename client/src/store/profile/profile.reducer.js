import {
    EDIT_PROFILE_ERROR,
    EDIT_PROFILE_SUCCESS,
    SET_USER_ERROR,
    SET_USER_SUCCESS,
    EDIT_PROFILE,
    EDIT_MY_PROFILE,
    EDIT_MY_PASSWORD_SUCCESS,
    EDIT_MY_PASSWORD_FAIL,
    EDIT_MY_PROFILE_FAIL,
    EDIT_MY_PROFILE_SUCCESS,
    REMOVE_ERROR,
    REMOVE_SUCCESS,
    EDIT_MY_ORGANIZATION_SUCCESS,
    EDIT_MY_ORGANIZATION_FAIL,
    EDIT_MY_ORGANIZATION, GET_MY_PROFILE_SUCCESS,
} from './profile.types';

const initialState = {
    avatarUrl: null,
    fullName: null,
    phoneNumber: null,
    email: null,
    id: null,
    role: null,
    // profileEdited: null,
    // editProfileFail: null,
    // passwordChanged: null,
    // passwordChangedFail: null,
    MyProfile: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
            };
        case EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                fullName: action.payload.user.fullName,
                phoneNumber: action.payload.user.phoneNumber,
                email: action.payload.user.email,
            };
        case EDIT_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };
        case SET_USER_SUCCESS:
            return {
                ...state,
                fullName: action.payload.user.fullName,
                phoneNumber: action.payload.user.phoneNumber,
                email: action.payload.user.email,
                id: action.payload.user.id,
                avatarUrl: action.payload.user.avatarUrl,
                role: action.payload.role,
            };
        case SET_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case EDIT_MY_PROFILE_SUCCESS:
            return {
                ...state,
                // profileEdited: action.payload,
                MyProfile: action.payload,
            };

        case EDIT_MY_PROFILE_FAIL:
            return {
                ...state,
                // editProfileFail: action.payload,
            };

        case EDIT_MY_ORGANIZATION_SUCCESS:
            return {
                ...state,
                // profileEdited: action.payload,
                MyProfile: action.payload,
            };

        case EDIT_MY_ORGANIZATION_FAIL:
            return {
                ...state,
                // editProfileFail: action.payload,
            };


        case GET_MY_PROFILE_SUCCESS:
            return {
                ...state,
                MyProfile: action.payload,
            };
        default:
            return state;
    }
};
