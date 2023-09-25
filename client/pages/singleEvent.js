import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SingleEvent } from 'pages';
import { appActions, EventsActions, ticketActions } from 'store';

const SingleEventPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));

    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    useEffect(() => {
        if (router.query.eventid) {
            dispatch(appActions.changeId(router.query.eventid));
            dispatch(EventsActions.GetSingleEvent(router.query.eventid));
            dispatch(EventsActions.getEventSponsorsForEdit(router.query.eventid));
            dispatch(ticketActions.getEventTickets(router.query.eventid));

            if (token) {
                dispatch(EventsActions.getCurrentRsvp(router.query.eventid));
            }
        }
    }, [router.query.eventid]);

    useEffect(() => {
        if (token) {
            dispatch(EventsActions.getSubscribes());
        }
    }, [token]);

    return <SingleEvent />;
};

export default SingleEventPage;
