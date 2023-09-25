import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { Logo, Picture } from 'components';
import { image, successResetPassword } from './constants';
import { successResetPassStyles } from './style';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';
import { Colors } from 'utils';

export const SuccessResetPassword = ({ open }) => {
    const button = {
        background: Colors.ThemeGreen,
        borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });
    let router = useRouter();

    useEffect(() => {
        if (router.route === '/resetPassword') {
            setTimeout(() => {
                router.push('/');
            }, 0);
        }
    }, []);
    const classes = successResetPassStyles();
    const customStyles = forgotPasswordStyles();

    return (
        <Box className={customStyles.modalWrap}>
            <div className={customStyles.rightPanelImgSignIn}>
                <Logo classes={customStyles} />
                <div>
                    <Picture image={image} classNameWrapper={customStyles.pictureSignin} />
                </div>
            </div>

            <Box className={customStyles.contentPaddings}>
                <div className={customStyles.content}>
                    <div className={customStyles.root}>
                        <Typography className={customStyles.forgotTitleStyleCheck} variant="h4" display="block">
                            {successResetPassword.title}
                        </Typography>
                        <p>{successResetPassword.body}</p>

                        <div className={classes.pictureBox}>
                            <Picture image={successResetPassword.image} classNameWrapper={classes.picture} />
                        </div>
                        <Button
                            style={{ borderRadius: '24px', padding: 0, fontSize: '16px', background: Colors.ThemeGreen }}
                            className={globalClasses.button}
                            onClick={() => open.signIn()}>
                            {successResetPassword.button}
                        </Button>
                    </div>
                </div>
            </Box>
        </Box>
    );
};
