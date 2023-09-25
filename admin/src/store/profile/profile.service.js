/**Profile service */

import axios from 'axios';

export const authService = {
    getProfile: () => axios.get(`/users/myProfile`, {auth:true }),

    editProfile: (data) => axios.patch(`/users`,data, {auth:true }),

    editPassword: (data) => axios.post(`/auth/changePassword`, {password: data.password, newPassword: data.newPassword, confirmation: data.confirmation,}, {auth:true },),

    updateAvatar: (data) => {
        const endpoint = `/users/avatar`;
        const res = axios.patch(endpoint,

            data.payload.body,

            {auth:true });
        return res;
    },
};
