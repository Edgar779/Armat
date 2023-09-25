import { Box, Typography } from '@material-ui/core';
import { resetPassword, image, checkEmail } from './constants';
import { Logo, Picture, ResetPassForm } from 'components';
import { forgotPasswordStyles } from 'fragments/inviteMemberModal/core';

export const ResetPassword = ({ open, close }) => {
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
                        <p className={classes.forgotTitleStyleCheck}>{checkEmail.title}</p>
                        <Box mt={2} mb={{ xs: 3.75, lg: 5 }} style={{ width: '80%' }}>
                            <Typography variant="body1" color="textSecondary" display="block">
                                {resetPassword.body}
                            </Typography>
                        </Box>
                        <ResetPassForm open={open} close={close} classes={classes} resetPassword={resetPassword} />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default ResetPassword;
