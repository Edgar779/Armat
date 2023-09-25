import { POST_MAIL, REMOVE_ERROR, SUBSCRIBE_NEWS } from './mailer.types';

export const postMail = (data) => {
    return {
        type: POST_MAIL,
        payload: data,
    };
};
export const subscribeNews = (data) => {
    return {
        type: SUBSCRIBE_NEWS,
        payload: data,
    };
};

export const removeError = () => {
    return {
        type: REMOVE_ERROR,
    };
};
