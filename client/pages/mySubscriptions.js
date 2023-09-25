import { MyEvents } from 'pages';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MyEventsPage = () => {
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));

    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    useEffect(() => {
        if (!token) {
            window.location.replace('/');
        }
    }, []);

    return <MyEvents pageType={'subscriptions'} />;
};

export default MyEventsPage;
