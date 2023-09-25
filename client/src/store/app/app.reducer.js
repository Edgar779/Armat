import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { profileReducer } from '../profile';
import { manageReducer } from '../manage';
import { STOP_LOADING, START_LOADING, SET_ERROR, CLEAR_ERROR, OPEN_OR_CLOSE_NOTES, CHANGE_ID } from './app.types';
import { myProfileReducer } from '../myProfile';
import { eventsReducer } from '../events';
import { notificationsReducer } from '../notifications';
import { mailerReducer } from '../mailer';
import { httpRequestsOnLoadReducer } from '../http_requests_on_load';
import { httpRequestsOnSuccessReducer } from '../http_requests_on_success';
import { httpRequestsOnErrorsReducer } from '../http_requests_on_errors';
import { organizationsReducer } from '../organizations';
import { ticketsReducer } from '../tickets';
import { paymentsReducer } from '../payments';

const initialState = {
    isLoading: false,
    error: true,
    isOpen: false,
    singlePageId: '',
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                //...state,
                isLoading: true,
                error: false,
            };
        case STOP_LOADING:
            return {
                isLoading: false,
                error: false,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: false,
            };
        case OPEN_OR_CLOSE_NOTES:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case CHANGE_ID:
            return {
                ...state,
                singlePageId: action.payload,
            };
        default:
            return state;
    }
};

export const appReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    global: globalReducer,
    manage: manageReducer,
    myProfileInfo: myProfileReducer,
    event: eventsReducer,
    notifications: notificationsReducer,
    mailer: mailerReducer,
    orgs: organizationsReducer,
    tickets: ticketsReducer,
    payments: paymentsReducer,

    httpOnLoad: httpRequestsOnLoadReducer,
    httpOnSuccess: httpRequestsOnSuccessReducer,
    httpOnError: httpRequestsOnErrorsReducer,
});
