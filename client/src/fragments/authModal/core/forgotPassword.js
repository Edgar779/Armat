import { forgotPassword, image } from './constants';
import { Box, Typography } from '@material-ui/core';
import { ForgotPassForm, Logo, Picture } from 'components';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';

export const ForgotPassword = ({ open, close, success, load, err }) => {
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
                    <div className={classes.root}>
                        <p className={classes.forgotTitleStyle}>{forgotPassword.title}</p>
                        <Box mt={2} mb={{ xs: 3.75, lg: 5 }}>
                            <Typography variant="body1" color="textSecondary" display="block">
                                {forgotPassword.body}
                            </Typography>
                        </Box>
                        <ForgotPassForm
                            success={success}
                            load={load}
                            err={err}
                            open={open}
                            close={close}
                            classes={classes}
                            forgotPassword={forgotPassword}
                        />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default ForgotPassword;
