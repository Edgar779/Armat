import { SUBSCRIBE, UNSUBSCRIBE } from './subscription.types';

export const subscribe = (data) => {
    return {
        type: SUBSCRIBE,
        payload: data,
    };
};
export const unsubscribe = (data) => {
    return {
        type: UNSUBSCRIBE,
        payload: data,
    };
};
