import axios from 'axios';

export const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
        config.url = `${process.env.REACT_APP_API_BASE}${config.url}`;
        // config.url = `https://armat.eachbase.com/api${config.url}`;

        if (config.auth) {
            const token = localStorage.getItem('access-token');

            if (!token) {
                // window.location.replace('/');
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
            if (error?.response?.status === 401) {
                // localStorage.removeItem('access-token');
                // localStorage.removeItem('user');
                // localStorage.removeItem('userType'  );
                // window.location.replace('/')
            }
            if (error?.response?.status === 403) {
            }
            if (error?.response?.status === 409) {
            }
            throw new Object({
                data: error?.response?.data,
                status: error?.response?.status,
            });
        }
    );
    // }
};
