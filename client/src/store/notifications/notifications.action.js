import {
    GET_NOTIFICATIONS,
    MARK_READ_NOTIFICATION,
    MARK_READ_NOTIFICATIONS,
    NOTIFICATIONS_SWITCHER,
    REMOVE_NOTIFICATION,
} from './notifications.types';

export const getNotifications = (data) => {
    return {
        type: GET_NOTIFICATIONS,
        payload: { data },
    };
};

export const markReadNotifications = (data) => {
    return {
        type: MARK_READ_NOTIFICATIONS,
        payload: { data },
    };
};

export const removeNotification = (id, data) => {
    return {
        type: REMOVE_NOTIFICATION,
        payload: { id, data },
    };
};

export const markReadNotification = ({ notificationId }) => {
    return {
        type: MARK_READ_NOTIFICATION,
        payload: { notificationId },
    };
};

export const notificationsSwitcher = () => {
    return {
        type: NOTIFICATIONS_SWITCHER,
    };
};
