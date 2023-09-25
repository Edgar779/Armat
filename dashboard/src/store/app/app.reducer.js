import { combineReducers } from 'redux';
import { httpRequestsOnLoadReducer } from '../http_requests_on_load';
import { httpRequestsOnSuccessReducer } from '../http_requests_on_success';
import { httpRequestsOnErrorsReducer } from '../http_requests_on_errors';

import { membersReducer } from '../members';
import { eventReducer } from '../events';
import { organizationReducer } from 'store/organizations';
import { ticketReducer } from "../tickets";

export const appReducer = combineReducers({
    members: membersReducer,
    organizations: organizationReducer,
    events: eventReducer,
    tickets: ticketReducer,
    httpOnLoad: httpRequestsOnLoadReducer,
    httpOnSuccess: httpRequestsOnSuccessReducer,
    httpOnError: httpRequestsOnErrorsReducer,
});