import { CreateOrganization } from 'pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { organizationActions } from '../src/store';

const CreateOrganizations = () => {
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));
    const dispatch = useDispatch();
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');
    const userInfo = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!token) {
            window.location.replace('/');
        }
    }, []);

    useEffect(() => {
        dispatch(organizationActions.removeOrgById());
        dispatch(organizationActions.removeSuggestOrg());
    }, []);

    return <CreateOrganization userInfo={userInfo} />;
};

export default CreateOrganizations;
