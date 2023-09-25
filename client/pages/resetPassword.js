import { ModalContext } from 'contexts';
import { Home } from 'pages';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const ResetPassword = () => {
    const { openModal } = useContext(ModalContext);
    let router = useRouter();

    useEffect(() => {
        if (router.route === '/resetPassword') {
            openModal.auth();
        }
    }, []);
    /* return token && auth.isAuthenticated ? <MyProfilePage /> : null; */
    return <Home />;
};

export default ResetPassword;
