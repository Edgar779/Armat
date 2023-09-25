import {
    GET_NOTIFICATIONS_SUCCESS,
    MARK_READ_NOTIFICATION,
    REMOVE_NOTIFICATION,
    REMOVE_NOTIFICATION_SUCCESS,
    MARK_READ_NOTIFICATIONS_SUCCESS,
} from './notifications.types';

const initialState = {
    notifications: [],
    noteListLoader: false,
    removeNotification: false,
};

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.payload,
            };
        case MARK_READ_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
            };
        case MARK_READ_NOTIFICATION:
            return {
                ...state,
            };
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                removeNotification: action.payload.id,
            };
        case REMOVE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                removeNotification: false,
            };
        default:
            return state;
    }
};
