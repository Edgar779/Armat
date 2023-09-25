export { subscribeReducer } from './subscription.reducer';
export { watchSubscribe } from './subscription.saga';
export { SUBSCRIBE, SUBSCRIBE_SUCCESS } from './subscription.types';
import { subscribe, unsubscribe } from './subscription.action';

export const SubscribeActions = {
    subscribe,
    unsubscribe,
};
