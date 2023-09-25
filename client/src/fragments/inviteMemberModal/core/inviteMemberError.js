import { Picture } from 'components';
import { Box, Button, Typography } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { inviteMemberError } from './constants';
import { welcomeStyles } from './style';
import { appActions } from 'store';
import { useDispatch } from 'react-redux';

export const InviteMemberError = ({ open }) => {
    const dispatch = useDispatch();
    const parsedEmail = localStorage.getItem('inviteEmail');
    const classes = welcomeStyles();

    const button = {
        background: '#49B776',
        borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });

    return (
        <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
            <div>
                <div className={classes.pictureBox}>
                    <Picture image={inviteMemberError.image} classNameWrapper={classes.picture} />
                </div>
                <Typography color="primary" variant="h4" display="block">
                    <Box textAlign="center" className={classes.inviteMemberSuccessTitle}>
                        OOPS! <br /> INVITATION FAILURE
                    </Box>
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Typography variant="body1" color="textSecondary" display="block">
                        Sorry, we were unable to send invite to <br />
                        <span className={classes.inviteEmail}>{parsedEmail}</span>. Please try again.
                    </Typography>
                </Box>
                <Box className={classes.inviteMemberSuccessButton}>
                    <Button
                        className={globalClasses.button}
                        onClick={() => {
                            dispatch(appActions.clearError());

                            open.inviteMember();
                        }}>
                        {inviteMemberError.button}
                    </Button>
                </Box>
            </div>
        </Box>
    );
};
