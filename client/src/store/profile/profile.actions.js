import {
    EDIT_PROFILE /* SET_USER */,
    SET_USER,
    EDIT_MY_PASSWORD,
    EDIT_MY_PROFILE,
    GET_MY_PROFILE,
    REMOVE_SUCCESS,
    REMOVE_ERROR,
    EDIT_MY_ORGANIZATION,
} from './profile.types';

// export const editProfile = (data) => {
//     return {
//         type: EDIT_PROFILE,
//         payload: data,
//     };
// };

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data,
    };
};

export const myProfileInfo = () => {
    return {
        type: GET_MY_PROFILE,
    };
};

export const editProfile = (data, info) => {
    return {
        type: info === 'organizer' ? EDIT_MY_ORGANIZATION : EDIT_MY_PROFILE,
        payload: { data },
    };
};

export const EditPassword = (data) => {
    return {
        type: EDIT_MY_PASSWORD,
        payload: { data },
    };
};

// export const RemoveErrors = () => {
//     return {
//         type: REMOVE_ERROR,
//     };
// };
//
// export const RemoveSuccess = () => {
//     return {
//         type: REMOVE_SUCCESS,
//     };
// };
