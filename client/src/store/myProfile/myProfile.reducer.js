import { GET_MY_PROFILE_SUCCESS, OPEN_OR_CLOSE_FILTER_MODAL } from './myProfile.types';

const initialState = {
    myProfile: [],
    filterModal: false,
};

export const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_PROFILE_SUCCESS:
            return { ...state, myProfile: action.payload };

        case OPEN_OR_CLOSE_FILTER_MODAL:
            return {
                ...state,
                filterModal: !state.filterModal,
            };
        default:
            return state;
    }
};
