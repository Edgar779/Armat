/**Users service */
import axios from 'axios';

export const authService = {
    getUser: () => axios.get(`/users`, { auth: true }),

    getUserByToken: () => axios.get(`/users/myProfile`, { auth: true }),

    getUserByID: (id) => {
        // const res = axios.get(`${path}/users`, { headers: { accessToken: token } });
        // return res;
    },

    delUserByID: (id) => axios.delete(`/users/${id}`, { auth: true }),
};
