import { initAxiosInterceptors, Theme } from 'theme';
import { Header, Footer, AppWrapper } from 'fragments';
import '../public/assets/styles/styles.scss';
import { authActions, reduxWrapper } from 'store';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Toast } from 'components';
import { ToastFail, ToastSuccess } from '../src/utils';
import { httpRequestsOnSuccessActions } from '../src/store';
import { useRouter } from 'next/router';
import { ContextProvider } from '../src/contexts';

initAxiosInterceptors();
function MyApp({ Component, pageProps }) {
    const dispatch = useDispatch();
    const route = useRouter();

    const { httpOnError, httpOnSuccess } = useSelector((state) => ({
        httpOnLoad: state.httpOnLoad,
        httpOnError: state.httpOnError,
        httpOnSuccess: state.httpOnSuccess,
    }));

    useEffect(() => {
        dispatch(authActions.checkUser());
    }, []);

    const success = httpOnSuccess.length && httpOnSuccess[0].type;
    const error = httpOnError.length && httpOnError[0].type;
    const toastSuccess = ToastSuccess(success);
    const toastFail = ToastFail(error);
    const token = typeof window !== 'undefined' && localStorage.getItem('access-token');

    useEffect(() => {
        if (toastSuccess) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess(success));
        }
    }, [toastSuccess]);

    useEffect(() => {
        if (toastFail) {
            // dispatch(httpRequestsOnErrorsActions.removeError(error));
        }
    }, [toastFail]);

    const [showAddress, setShowAddress] = useState(false);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Head>
            <AppWrapper>
                <Theme>
                    <ContextProvider>
                        <Header token={token} onOpen={(bool) => setShowAddress(bool)} />

                        <Component {...pageProps} showAddress={showAddress} />

                        {route.pathname !== '/search' && <Footer />}
                    </ContextProvider>
                </Theme>
            </AppWrapper>

            <Toast
                type={toastSuccess ? 'success' : toastFail ? 'error' : ''}
                text={toastSuccess ? toastSuccess : toastFail ? toastFail : ''}
                info={toastSuccess ? !!toastSuccess : toastFail ? !!toastFail : ''}
            />
        </>
    );
}

export default reduxWrapper().withRedux(MyApp);
