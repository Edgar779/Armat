import { CLEAR_ERROR } from '.';
import { STOP_LOADING } from '.';
import { CHANGE_ID, OPEN_OR_CLOSE_NOTES, START_LOADING } from './app.types';

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    };
};

export const stopLoading = () => {
    return {
        type: STOP_LOADING,
    };
};

export const startLoading = () => {
    return {
        type: START_LOADING,
    };
};

export const openOrCloseNotes = () => {
    return {
        type: OPEN_OR_CLOSE_NOTES,
    };
};

export const changeId = (id) => {
    return {
        type: CHANGE_ID,
        payload: { id },
    };
};
