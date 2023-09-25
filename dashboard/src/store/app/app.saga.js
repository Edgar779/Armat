/** Combined Sagas */

import { fork } from 'redux-saga/effects';
import { watchMember } from '../members';
import { watchEvent } from '../events';
import { watchTickets } from '../tickets';
import { watchOrganization } from 'store/organizations';

export const appSaga = function* startForman() {
    yield fork(watchMember);
    yield fork(watchEvent);
    yield fork(watchTickets);
    yield fork(watchOrganization);
};
