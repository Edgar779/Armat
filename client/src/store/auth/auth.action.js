import {
    CHANGE_PASSWORD,
    SIGNUP_USER,
    SIGNIN_USER,
    FORGOT_PASSWORD,
    LOGOUT_USER,
    RESET_PASSWORD,
    CHECK_USER,
    DELETE_ACCOUNT,
    SOCIAL_SIGNIN,
    INVITE_MEMBER,
    SEARCH, SEARCH_FILTER,
} from './auth.types';

export const signUp = (user, path) => {
    return {
        type: SIGNUP_USER,
        payload: { user, path },
    };
};

export const signIn = (user, path) => {
    return {
        type: SIGNIN_USER,
        payload: { user, path },
    };
};

export const checkUser = (accessToken) => {
    return {
        type: CHECK_USER,
        payload: accessToken,
    };
};

export const socialSignin = (token) => {
    return {
        type: SOCIAL_SIGNIN,
        payload: token,
    };
};

export const logOut = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const changePassword = (accessToken) => {
    return {
        type: CHANGE_PASSWORD,
        payload: accessToken,
    };
};

export const forgotPassword = (data) => {
    return {
        type: FORGOT_PASSWORD,
        payload: data,
    };
};

export const resetPassword = (data) => {
    return {
        type: RESET_PASSWORD,
        payload: data,
    };
};

export const deleteAccount = (id) => {
    return {
        type: DELETE_ACCOUNT,
        payload: { id },
    };
};

export const inviteMember = (data) => {
    return {
        type: INVITE_MEMBER,
        payload: data,
    };
};

export const search = (name, load) => {
    return {
        type: SEARCH,
        payload: { name, load },
    };
};

export const searchFilter = (name) => {
    return {
        type: SEARCH_FILTER,
        payload: { name },
    };
};
