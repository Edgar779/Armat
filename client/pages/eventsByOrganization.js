import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { OrganizationEvents } from 'pages';
import { organizationActions } from 'store';

const EventsByOrganization = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (router.query.orgid) {
            dispatch(organizationActions.orgEvents(router.query.orgid));
            dispatch(organizationActions.getOrgById(router.query.orgid));
        }
    }, [router.query.orgid]);

    return <OrganizationEvents />;
};

export default EventsByOrganization;
