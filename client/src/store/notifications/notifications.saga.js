import { call, put, takeLatest } from '@redux-saga/core/effects';
import { notificationsService } from './notifications.service';
import {
    GET_NOTIFICATIONS,
    GET_NOTIFICATIONS_SUCCESS,
    MARK_READ_NOTIFICATION,
    MARK_READ_NOTIFICATIONS,
    NOTIFICATIONS_SWITCHER,
    REMOVE_NOTIFICATION, REMOVE_NOTIFICATION_SUCCESS,
} from './notifications.types';
import {httpRequestsOnLoadActions} from "../http_requests_on_load";

function* getNotifications(action) {
    yield put(httpRequestsOnLoadActions.appendLoading(action.type));
    try {
        const res = yield call(notificationsService.getNotifications, action.payload.data);
        yield put({
            type: GET_NOTIFICATIONS_SUCCESS,
            payload: res.data,
        });
        yield put(httpRequestsOnLoadActions.removeLoading(action.type));
    } catch (err) {
        yield put(httpRequestsOnLoadActions.removeLoading(action.type));
    }
}

function* markReadNotifications(action) {
    try {
        const res = yield call(notificationsService.markReadNotifications);

        // yield put({
        //     type: MARK_READ_NOTIFICATIONS_SUCCESS,
        //     payload: res.data,
        // });
        yield put({
            type: GET_NOTIFICATIONS,
            payload: { data: action.payload.data },
        });
    } catch (err) {}
}

function* removeNotification(action) {
    try {
        const res = yield call(notificationsService.removeNote, action.payload.id);

        yield put({
            type: GET_NOTIFICATIONS,
            payload: { data: action.payload.data },
        });
        yield put({
            type: REMOVE_NOTIFICATION_SUCCESS,
        });
    } catch (err) {}
}

function* markReadNotification(action) {
    try {
        const res = yield call(notificationsService.markReadNotification, action.payload.notificationId);

        // yield put({
        //     type: MARK_READ_NOTIFICATION,
        //     payload: res.data,
        // });
    } catch (err) {
        console.log('somethingWentWrong');
    }
}
function* notificationSwitcher() {
    try {
        const res = yield call(notificationsService.notificationsSwitcher);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const watchNotifications = function* watchNotes() {
    yield takeLatest(GET_NOTIFICATIONS, getNotifications);
    yield takeLatest(REMOVE_NOTIFICATION, removeNotification);
    yield takeLatest(MARK_READ_NOTIFICATIONS, markReadNotifications);
    yield takeLatest(MARK_READ_NOTIFICATION, markReadNotification);
    yield takeLatest(NOTIFICATIONS_SWITCHER, notificationSwitcher);
};
