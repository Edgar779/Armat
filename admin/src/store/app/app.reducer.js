/**All reducers combine */

import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { manageReducer } from '../manage';
import { usersReducer } from '../users';
import { eventsReducer } from '../events';
import { inviteReducer } from '../invites';
import { profileReducer } from '../profile';
import {organizerReducer} from "../organizer";
import {httpRequestsOnLoadReducer} from "../http_requests_on_load";
import {httpRequestsOnSuccessReducer} from "../http_requests_on_success";
import {httpRequestsOnErrorsReducer} from "../http_requests_on_errors";
import {organizationsReducer} from "../organizations";

const initialState = {
    isLoading: false,
    error: false,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const appReducer = combineReducers({
    auth: authReducer,
    global: globalReducer,
    user: usersReducer,
    event: eventsReducer,
    manage: manageReducer,
    invite: inviteReducer,
    profile: profileReducer,
    orgCategories: organizerReducer,
    orgs:organizationsReducer,


    httpOnLoad: httpRequestsOnLoadReducer,
    httpOnSuccess: httpRequestsOnSuccessReducer,
    httpOnError: httpRequestsOnErrorsReducer,
});
