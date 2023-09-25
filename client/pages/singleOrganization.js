import { organizationActions } from 'store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SingleOrganizationPage } from 'pages';

const SingleOrganization = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (router?.query?.orgid) {
            dispatch(organizationActions.getOrgById(router?.query?.orgid));
        }
    }, [router.query.orgid]);

    return <SingleOrganizationPage />;
};

export default SingleOrganization;
