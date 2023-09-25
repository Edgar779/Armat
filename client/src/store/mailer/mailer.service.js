import axios from 'axios';

export const mailerService = {
    postMail: (body) => axios.post('/mailer/contactForm', body),

    newsLetterService: (body) => axios.post('/newsletter/subscribe', body),
};
