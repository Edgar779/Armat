import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import { appReducer, appSaga } from './app';
import { createWrapper } from 'next-redux-wrapper';

export const reduxWrapper = () => {
    const makeStore = () => {
        const sagaMiddleWare = createSagaMiddleWare();
        const middleware = [sagaMiddleWare];
        const store = createStore(appReducer, composeWithDevTools(applyMiddleware(...middleware)));
        store.sagaTask = sagaMiddleWare.run(appSaga);
        return store;
    };
    return createWrapper(makeStore, { debug: true });
};
