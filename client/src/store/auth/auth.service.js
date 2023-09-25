import axios from 'axios';

export const authService = {
    signUp: (body) => axios.post('/users', body),

    signIn: (body) => axios.post('/auth/signin', body),

    socialSignin: (token) => localStorage.setItem('access-token', token),

    checkUser: () => axios.get('/users/myProfile', { auth: true }),

    logOut: () => axios.get('/auth/logout', { auth: true }),

    forgotPassword: (data) => axios.get(`/auth/forgotPassword/${data.email}`),

    changePassword: (data) => axios.post('/auth/changePassword', data.data.body, { auth: true }),

    resetPassword: async (data) => {
        // ToDO
        // try {
        //     const endpoint = `${path}/resetPassword`;
        //     const res = await Axios.post(endpoint, data.password, {
        //         headers: { 'reset-token': data.resetToken, 'Content-Type': 'application/json' },
        //     });
        //     return res;
        // } catch (err) {}
    },

    //

    deleteAccount: (id) => axios.delete(`/users/${id}`, { auth: true }),

    inviteMember: (data) => axios.patch(`/auth/invite/${data?.email}`, null, { auth: true }),

    // inviteMember: (data) => axios.patch('/auth/setRole', data, { auth: true }),

    search: (search) => axios.post('/search', null, { params: { ...search } }),
};
