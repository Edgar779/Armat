/**Users actions */

import {
    GET_USERS,
    GET_USERS_BY_ID,
    DELETE_USER_REQUEST,
    SEARCH_USER,
    FILTER_USERS_BY_AZ,
    FILTER_USERS_BY_DEFAULT,
    FILTER_USERS_BY_ROLE,
    GET_USERS_BY_TOKEN,
} from './users.types';

export const getUsersList = () => {
    return {
        type: GET_USERS,
    };
};

export const getUser = () => {
    return {
        type: GET_USERS_BY_TOKEN,
    };
};

export const getUsersById = (id) => {
    return {
        type: GET_USERS_BY_ID,
        payload: { id },
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETE_USER_REQUEST,
        payload: { id },
    };
};

export const searchUser = (name) => {
    return {
        type: SEARCH_USER,
        payload: { name },
    };
};

export const ByAlphabeticalUsers = () => {
    return {
        type: FILTER_USERS_BY_AZ,
    };
};

export const ByAlphabeticalUsersDefault = () => {
    return {
        type: FILTER_USERS_BY_DEFAULT,
    };
};

export const filterByRole = (role) => {
    return {
        type: FILTER_USERS_BY_ROLE,
        payload: { role },
    };
};
