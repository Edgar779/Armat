import { GET_MY_PROFILE, OPEN_OR_CLOSE_FILTER_MODAL } from './myProfile.types';

export const getProfile = () => {
    return {
        type: GET_MY_PROFILE,
    };
};

export const openFilterModal = () => {
    return {
        type: OPEN_OR_CLOSE_FILTER_MODAL,
    };
};
