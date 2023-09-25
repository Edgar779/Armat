import axios from 'axios';
import router from 'next/router';
import { API_BASE } from 'store';

export const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
        config.url = `${process.env.NEXT_PUBLIC_APP_NAME}${config.url}`;
        // config.url = `${API_BASE}${config.url}`;
        if (config.auth) {
            const token = localStorage.getItem('access-token');
            if (!token) {
                // router.push('/');
                throw new Error('token not found');
            }
            config.headers = {
                ...config.headers,
                'access-token': `${token}`,
            };
        }
        return config;
    });

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error && error.response && error.response.status && error.response.status && error.response.status === 401) {
                // localStorage.removeItem('access-token');
                // localStorage.removeItem('userInfo');
                // router.push('/');
            }
            throw new Object({
                data: error?.response?.data,
                status: error?.response?.status,
            });
        }
    );
};
