import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { BlueButton, Logo, Picture } from 'components';
import { checkEmail, image } from './constants';
import { checkEmailStyles } from './style';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';

export const CheckEmail = ({ close }) => {
    const classes2 = checkEmailStyles();
    const classes = forgotPasswordStyles();

    return (
        <Box className={classes.modalWrap}>
            <div className={classes.rightPanelImgSignIn}>
                <Logo classes={classes} />
                <div>
                    <Picture image={image} classNameWrapper={classes.pictureSignin} />
                </div>
            </div>

            <Box className={classes.contentPaddings}>
                <div className={classes.content}>
                    <div className={classes2.innerContent}>
                        <p className={classes.forgotTitleStyleCheck}>{checkEmail.title}</p>
                        <Box mt={2}>
                            <Typography variant="body1" color="textSecondary" display="block">
                                {checkEmail.body}
                            </Typography>
                        </Box>
                        <div className={classes2.pictureBox}>
                            <Picture image={checkEmail.image} classNameWrapper={classes2.picture} />
                        </div>
                        <BlueButton handleCLick={() => close()} text="Close" />
                    </div>
                </div>
            </Box>
        </Box>
    );
};
