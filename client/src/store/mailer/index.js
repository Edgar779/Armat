export { mailerReducer } from './mailer.reducer';
export { watchMailer } from './mailer.saga';
export { POST_MAIL, POST_MAIL_SUCCESS } from './mailer.types';
import { postMail, removeError, subscribeNews } from './mailer.action';

export const MailerActions = {
    postMail,
    subscribeNews,
    removeError,
};
