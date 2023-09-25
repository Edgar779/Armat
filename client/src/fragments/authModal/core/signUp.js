import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import { signUp, image, socialMedia, signIn } from './constants';
import { SocialMedia } from '.';
import { TitleTypographySignUp } from './style';
import { Logo, Picture, SignUpForm } from 'components';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';
import { Colors } from '../../../utils';

export const SignUp = ({ open, load, err }) => {
    const classes = forgotPasswordStyles();
    return (
        <Box className={classes.modalWrap}>
            <div className={classes.rightPanelImgSignUp}>
                <div>
                    <Logo classes={classes} />
                </div>
                <div>
                    <Picture image={image} classNameWrapper={classes.pictureSignin} />
                </div>
            </div>

            <Box className={classes.contentPaddingsSignUp}>
                <div className={classes.content}>
                    <div className={classes.root}>
                        <TitleTypographySignUp variant="h4" display="block">
                            {signUp.title}
                        </TitleTypographySignUp>
                        <SignUpForm load={load} err={err} classes={classes} open={open} signUp={signUp} />
                    </div>
                    <SocialMedia data={socialMedia} title={signUp.socialMedia} />

                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <Typography noWrap color="textSecondary">
                            {signIn.otherText}&nbsp;
                        </Typography>
                        <Box
                            style={{ color: Colors.ThemeGreen }}
                            fontWeight="fontWeightBold"
                            className="cursorPointer"
                            onClick={() => open.signIn()}>
                            Sign In
                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default SignUp;
