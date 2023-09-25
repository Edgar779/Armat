import axios from 'axios';

export const notificationsService = {
    getNotifications: async (data) => {
        let config = {
            headers: { 'access-token': localStorage.getItem('access-token') },
            params: data,
        };

        // let config = {
        //     headers: { 'access-token': localStorage.getItem('access-token') },
        //     params: data,
        // };
        const res = await axios.get(`/notifications`, config);
        return res;
    },

    markReadNotifications: async () => await axios.patch(`/notifications`, {}, { auth: true }),

    removeNote: (id) => axios.delete(`/notifications/${id}`, { auth: true }),

    markReadNotification: async (notificationId) => await axios.patch(`/notifications/${notificationId}`, {}, { auth: true }),

    notificationsSwitcher: () => axios.patch(`/users/toggleNotification`, {}, { auth: true }),
};
