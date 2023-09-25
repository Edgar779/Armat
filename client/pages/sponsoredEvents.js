import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Sponsored } from '../src/pages/myEvents/sponsored';
import { EventsActions } from 'store';

const SponsoredEvents = () => {
    const router = useRouter();
    const dispatch = useDispatch();


    useEffect(() => {
        if (router.query.orgid) {
            dispatch(EventsActions.getPendingSponsors(router.query.orgid));
            dispatch(EventsActions.getEventSponsors(router.query.orgid));
        }
    }, [router.query.orgid]);

    return <Sponsored />;
};

export default SponsoredEvents;
