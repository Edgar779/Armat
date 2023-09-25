/**Auth export index */

import { logIn, logOut, clearError, saveWindowLink } from './auth.action';
export { authReducer } from './auth.reducer';
export { watchAuth } from './auth.saga';
export { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT, CLEAR_ERROR, SAVE_LINK } from './auth.types';

export const authActions = {
    logIn,
    logOut,
    clearError,
    saveWindowLink,
};
