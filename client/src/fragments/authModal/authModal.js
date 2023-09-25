import { memo, useState } from 'react';
import { Box, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from 'fragments/inviteMemberModal/core/style';
import { SignIn, SignUp, ForgotPassword, CheckEmail, ResetPassword, SuccessResetPassword, Welcome } from './core';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from 'store/app/app.action';
import { screens } from './core/constants';

export const AuthModal = memo(({ status, close }) => {
    let classes = useStyles();
    let appDispatch = useDispatch();
    let [activeScreen, setActiveScreen] = useState({
        type: screens.signIn,
        props: {},
    });

    let selectScreen = (type, props = {}) => {
        appDispatch(clearError());
        setActiveScreen({ type, props });
    };

    const { httpOnError, httpOnLoad, httpOnSuccess } = useSelector((state) => ({
        httpOnSuccess: state.httpOnSuccess,
        httpOnError: state.httpOnError,
        httpOnLoad: state.httpOnLoad,
    }));

    let open = {
        signIn: () => selectScreen(screens.signIn),
        signUp: () => selectScreen(screens.signUp),
        forgotPass: () => selectScreen(screens.forgotPass),
        checkEmail: () => selectScreen(screens.checkEmail),
        resetPass: () => selectScreen(screens.resetPass),
        successResetPass: () => selectScreen(screens.successResetPass),
        welcome: () => selectScreen(screens.welcome),
    };

    let selfClose = () => {
        close();
        setTimeout(() => selectScreen(screens.signIn), 100);
    };

    return (
        <Dialog
            className={
                activeScreen.type === screens.signIn
                    ? classes.dialogSignIn
                    : activeScreen.type === screens.signUp
                    ? classes.dialogSignUp
                    : activeScreen.type === screens.successResetPass
                    ? classes.dialogInviteSuccess
                    : activeScreen.type === screens.welcome
                    ? classes.dialogSignIn
                    : activeScreen.type === screens.forgotPass
                    ? classes.dialogSignIn
                    : classes.dialog
            }
            open={status}>
            {!activeScreen.props.notCloseBtn ? (
                <IconButton aria-label="close" className={classes.closeIcon} onClick={selfClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
            <Box>
                {activeScreen.type === screens.signIn && <SignIn {...activeScreen.props} open={open} close={close} />}
                {activeScreen.type === screens.signUp && (
                    <SignUp success={httpOnSuccess} load={httpOnLoad} err={httpOnError} {...activeScreen.props} open={open} close={close} />
                )}
                {activeScreen.type === screens.forgotPass && (
                    <ForgotPassword success={httpOnSuccess} load={httpOnLoad} err={httpOnError} {...activeScreen.props} open={open} />
                )}
                {activeScreen.type === screens.checkEmail && <CheckEmail {...activeScreen.props} open={open} close={selfClose} />}
                {activeScreen.type === screens.resetPass && <ResetPassword {...activeScreen.props} open={open} close={close} />}
                {activeScreen.type === screens.successResetPass && <SuccessResetPassword {...activeScreen.props} open={open} />}
                {activeScreen.type === screens.welcome && <Welcome {...activeScreen.props} close={close} />}
            </Box>
        </Dialog>
    );
});
