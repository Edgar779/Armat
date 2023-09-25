import { POST_MAIL_FAIL, POST_MAIL_SUCCESS, REMOVE_ERROR, SUBSCRIBE_NEWS_FAIL, SUBSCRIBE_NEWS_SUCCESS } from './mailer.types';

const initialState = {
    mails: [],
    screensErrorInfo: '',
};

export const mailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_MAIL_SUCCESS:
            return {
                ...state,
                screensInfo: 'contactSend',
            };
        case POST_MAIL_FAIL:
            return {
                ...state,
                screensErrorInfo: 'contactError',
            };
        case SUBSCRIBE_NEWS_SUCCESS:
            return {
                ...state,
                screensInfo: 'subscribedSuccess',
            };

        case SUBSCRIBE_NEWS_FAIL:
            return {
                ...state,
                screensErrorInfo: 'subscribeFail',
            };

        case REMOVE_ERROR:
            return {
                ...state,
                screensInfo: '',
            };
        default:
            return state;
    }
};
