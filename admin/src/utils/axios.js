import axios from 'axios';
import { API_BASE } from 'store';

export const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
        config.url = `${API_BASE}${config.url}`;
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
            if (error.response.status && error.response.status === 401) {
                // localStorage.removeItem('access-token');
                // router.push('/');
            }
            throw new Object({
                data: error.response.data,
                status: error.response.status,
            });
        }
    );
};
