import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, image, socialMedia } from './constants';
import { SocialMedia } from './index';
import { TitleTypography } from './style';
import { Logo, Picture, SignInForm } from 'components';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';
import { Colors } from 'utils';

export const SignIn = ({ open, close }) => {
    let router = useRouter();

    useEffect(() => {
        if (router.query.resetToken) {
            setTimeout(() => {
                open.resetPass();
            }, 0);
        }
    }, [router.query.resetToken]);

    const classes = forgotPasswordStyles();

    return (
        <Box className={classes.modalWrap}>
            <div className={classes.rightPanelImgSignIn}>
                <div className={classes.logoStyle}>
                    <Logo classes={classes} />
                </div>
                <div>
                    <Picture image={image} classNameWrapper={classes.pictureSignin} />
                </div>
            </div>

            <Box className={classes.contentPaddings}>
                <div className={classes.content}>
                    <div className={classes.root}>
                        <TitleTypography variant="h4" display="block">
                            {signIn.title}
                        </TitleTypography>

                        <SignInForm open={open} close={close} classes={classes} signIn={signIn} />
                    </div>

                    <SocialMedia cla data={socialMedia} title={signIn.socialMedia} />

                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <Typography noWrap color="textSecondary">
                            Not a member ? &nbsp;
                        </Typography>
                        <Box
                            style={{ color: Colors.ThemeGreen }}
                            fontWeight="fontWeightBold"
                            className="cursorPointer"
                            onClick={() => open.signUp()}>
                            Sign Up
                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default SignIn;
