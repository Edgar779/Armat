import { SUBSCRIBE_SUCCESS } from './subscription.types';

const initialState = {
    subscribe: [],
};

export const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
};
