import { spawn } from 'redux-saga/effects';
import { watchAuth } from '../auth';
import { watchProfile } from '../profile';
import { watchManage } from '../manage';
import { watchMyProfile } from '../myProfile';
import { watchEvents } from '../events';
import { watchSubscribe } from '../subscription';
import { watchMailer } from '../mailer';
import { watchNotifications } from '../notifications';
import { watchOrg } from '../organizations';
import { watchTickets } from '../tickets';
import { paymentsTickets } from '../payments';

/** Combined Sagas */
export const appSaga = function* startForman() {
    yield spawn(watchAuth);
    yield spawn(watchProfile);
    yield spawn(watchManage);
    yield spawn(watchMyProfile);
    yield spawn(watchEvents);
    yield spawn(watchSubscribe);
    yield spawn(watchNotifications);
    yield spawn(watchMailer);
    yield spawn(watchOrg);
    yield spawn(watchTickets);
    yield spawn(paymentsTickets);
};
