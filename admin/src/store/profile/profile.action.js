/**Profile actions */

import { EDIT_PASSWORD, EDIT_PROFILE, GET_PROFILE, REMOVE_ERROR, REMOVE_SUCCESS, UPDATE_AVATAR } from './profile.types';

export const MyProfileInfo = () => {
    return {
        type: GET_PROFILE,
    };
};

export const editProfile = (data) => {
    return {
        type: EDIT_PROFILE,
        payload: { data },
    };
};

export const EditPassword = (data) => {
    return {
        type: EDIT_PASSWORD,
        payload: { data },
    };
};

export const RemoveError = () => {
    return {
        type: REMOVE_ERROR,
    };
};

export const RemoveSuccess = () => {
    return {
        type: REMOVE_SUCCESS,
    };
};

export const updateAvatar = (data) => {
    return {
        type: UPDATE_AVATAR,
        payload: data,
    };
};
