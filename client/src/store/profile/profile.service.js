import axios from 'axios';

export const profileService = {
    editOrganizationService: (data) => axios.patch('/users/organizerInfo', data.data, { auth: true }),

    getProfile: () => axios.get(`/users/myProfile`, { auth: true }, {}),

    editProfile: (data) => axios.patch(`/users`, data, { auth: true }),

    editPassword: (data) =>
        axios.post(
            `/auth/changePassword`,
            {
                password: data.password,
                newPassword: data.newPassword,
                confirmation: data.confirmation,
            },
            { auth: true }
        ),
};
