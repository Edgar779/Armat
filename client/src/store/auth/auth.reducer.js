import {
    CLEAR_USER_INFO,
    DELETE_ACCOUNT_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    INVITE_MEMBER_SUCCESS,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    SEARCH_FILTER,
    SEARCH_SUCCESS,
} from './auth.types';
import { FORGOT_PASSWORD_ERROR } from './auth.types';
import {
    SIGNUP_USER_ERROR,
    SIGNUP_USER_SUCCESS,
    SIGNIN_USER_ERROR,
    SIGNIN_USER_SUCCESS,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
    CHECK_USER_SUCCESS,
    CHECK_USER_ERROR,
} from './auth.types';
import { paginate } from '../../../../admin/src/utils/pagination';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    userInfo: '',
    role: null,
    accountDeleted: null,
    searchedData: [],
    searchedDataReserve: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.auth.token,
                userInfo: action.payload,
                isAuthenticated: true,
            };

        case CLEAR_USER_INFO:
            return {
                ...state,
                accessToken: '',
                userInfo: '',
                accountDeleted: true,
            };

        case SIGNUP_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case SIGNIN_USER_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.auth.token,
                isAuthenticated: true,
            };

        case SIGNIN_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case LOGOUT_USER_SUCCESS:
            return { ...state, accessToken: '', isAuthenticated: false };

        case LOGOUT_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case CHECK_USER_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                isAuthenticated: true,
            };

        case CHECK_USER_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };
        case CHANGE_PASSWORD_SUCCESS:
            return { ...state, accessToken: action.payload.accessToken };

        case CHANGE_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case FORGOT_PASSWORD_SUCCESS:
            return { ...state };

        case FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload.message,
            };

        case RESET_PASSWORD_SUCCESS:
            return { ...state };

        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                //error: action.payload.message,
            };

        case DELETE_ACCOUNT_SUCCESS:
            return { ...state, accessToken: '', isAuthenticated: false };

        case SEARCH_SUCCESS:
            return {
                ...state,
                searchedDataReserve: action.payload,
                searchedData: paginate(action.payload, 10),
            };

        case SEARCH_FILTER:
            return {
                ...state,
                searchedData: state.searchedDataReserve.sort((a, b) => a.title.localeCompare(b.title)),
            };

        default:
            return state;
    }
};
