/**All Combined Sagas */
import { fork } from 'redux-saga/effects';
import { watchAuth } from '../auth';
import { watchUsers } from '../users';
import { watchEvents } from '../events';
import { watchManage } from '../manage';
import { watchInvite } from '../invites';
import { watchProfile } from '../profile';
import {watchOrgCat} from "../organizer";
import {watchOrg} from "../organizations";

export const appSaga = function* startForman() {
    yield fork(watchAuth);
    yield fork(watchUsers);
    yield fork(watchEvents);
    yield fork(watchManage);
    yield fork(watchInvite);
    yield fork(watchProfile);
    yield fork(watchOrgCat);
    yield fork(watchOrg);
};
