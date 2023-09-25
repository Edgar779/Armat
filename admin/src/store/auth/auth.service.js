/**Auth services */

import axios from 'axios';

const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

export const authService = {

    signIn: (body) => axios.post(`/auth/signin`, body),

    getMyProfile: ( ) => axios.get(`/users/myProfile`, { auth: true }),

    logOut: () => axios.get(`/auth/logout`, { auth: true }),
};
