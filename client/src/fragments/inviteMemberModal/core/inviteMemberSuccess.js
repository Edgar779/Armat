import { Picture } from 'components';
import { Box, Button, Typography } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { inviteMemberSuccess } from './constants';
import { welcomeStyles } from './style';
import { Colors } from 'utils';

export const InviteMemberSuccess = ({ selfClose }) => {
    const parsedEmail = localStorage.getItem('inviteEmail');
    const classes = welcomeStyles();
    const button = {
        background: Colors.ThemeGreen,
        borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });

    return (
        <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
            <div>
                <div className={classes.pictureBox}>
                    <Picture image={inviteMemberSuccess.image} classNameWrapper={classes.picture} />
                </div>
                <Typography color="primary" variant="h4" display="block">
                    <Box textAlign="center" className={classes.inviteMemberSuccessTitle}>
                        YAY!

                        <br /> INVITATION SUCCESS
                    </Box>
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Typography variant="body1" style={{ color: Colors.ThemeLightGray }} display="block">
                        {`Invitation has successfully been sent to`}
                    </Typography>

                    <span className={classes.inviteEmail}>{parsedEmail}</span>
                </Box>
                <Box className={classes.inviteMemberSuccessButton}>
                    <Button onClick={selfClose} className={globalClasses.button}>
                        {inviteMemberSuccess.button}
                    </Button>
                </Box>
            </div>
        </Box>
    );
};
