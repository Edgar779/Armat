import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MyTickets } from 'pages';

const MyTicketsPage = () => {
    const { accessToken } = useSelector((state) => ({
        userInfo: state.auth.userInfo,
        accessToken: state.auth.accessToken,
    }));
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    useEffect(() => {
        if (!token) {
            window.location.replace('/');
        }
    }, []);

    return <MyTickets />;
};

export default MyTicketsPage;
