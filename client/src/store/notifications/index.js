import {
    getNotifications,
    markReadNotification,
    removeNotification,
    markReadNotifications,
    notificationsSwitcher,
    // notificationsSwitcher,
} from './notifications.action';
export { notificationsReducer } from './notifications.reducer';
export { watchNotifications } from './notifications.saga';

export const notificationsActions = {
    getNotifications,
    removeNotification,
    markReadNotifications,
    markReadNotification,
    notificationsSwitcher,
};
