import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { authActions } from 'store';
import { Loader } from 'components';

export const SocialLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const getUser = useCallback(() => {
        const token = router.query.token;
        if (token) {
            dispatch(authActions.socialSignin(token));
            router.push('/');
        } else {
            router.push('/');
        }
    });

    useEffect(() => {
        getUser();
    }, [router.query.token]);

    return <Loader />;
};

export default SocialLogin;
