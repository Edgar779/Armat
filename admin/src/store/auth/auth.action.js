/**Auth actions */

import { LOG_IN, LOG_OUT, SAVE_LINK } from './auth.types';
import { CLEAR_ERROR } from '../app';

export const logIn = (user) => {
    return {
        type: LOG_IN,
        payload: user,
    };
};

export const logOut = () => {
    return {
        type: LOG_OUT,
    };
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    };
};

export const saveWindowLink = (link) => {
    return {
        type: SAVE_LINK,
        payload: { link },
    };
};
