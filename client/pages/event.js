import { SingleEvent } from 'pages';
import { appActions, EventsActions } from 'store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EventPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));

    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    useEffect(() => {
        dispatch(appActions.changeId(router.query.eventid));
        dispatch(EventsActions.getSubscribes());
    }, []);

    useEffect(() => {
        if (router.query.eventid) {
            dispatch(EventsActions.GetSingleEvent(router.query.eventid));
        }
    }, []);

    useEffect(() => {
        if (!token) {
            window.location.replace('/');
        }
    }, []);

    return <SingleEvent />;
};

export default EventPage;
