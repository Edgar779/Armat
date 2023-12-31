export { appReducer } from './app.reducer';
export { appSaga } from './app.saga';
export { SET_ERROR, START_LOADING, STOP_LOADING, CLEAR_ERROR } from './app.types';
import { openOrCloseNotes, changeId, clearError } from './app.action';
export const appActions = { openOrCloseNotes, changeId, clearError };
