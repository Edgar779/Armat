import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { organizationActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { CreateOrganization } from 'pages';
import { FindLoad } from '../src/utils';
import { Loader } from '../src/components';

const EditOrganization = () => {
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));
    const router = useRouter();
    const dispatch = useDispatch();
    const loader = FindLoad('GET_SUGGEST_INFO');
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');
    const userInfo = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (router.query.orgId) {
            dispatch(organizationActions.suggestOrg(router.query.orgId));
        }
    }, [router]);

    useEffect(() => {
        if (!token) {
            window.location.replace('/');
        }
    }, []);

    return loader.length ? <Loader text={'noText'} /> : <CreateOrganization userInfo={userInfo} />;
};

export default EditOrganization;
