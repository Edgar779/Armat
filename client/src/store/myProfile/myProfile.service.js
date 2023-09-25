import axios from 'axios';

export const authService = {
    getMyProfileInfo: () => axios.get('/users/myProfile', { auth: true }),
};
