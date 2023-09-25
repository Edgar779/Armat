import { memo, useState } from 'react';
import { Box, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './core/style';
import { InviteMember, InviteMemberSuccess, InviteMemberError } from './core';
import { useDispatch } from 'react-redux';
import { clearError } from 'store/app/app.action';
import { screens } from './core/constants';

export const InviteMemberModal = memo(({ status, close }) => {
    let classes = useStyles();
    let appDispatch = useDispatch();
    let [activeScreen, setActiveScreen] = useState({
        type: screens.inviteMember,
        props: {},
    });

    let selectScreen = (type, props = {}) => {
        appDispatch(clearError());
        setActiveScreen({ type, props });
    };
    let open = {
        inviteMember: () => selectScreen(screens.inviteMember),
        inviteMemberSuccess: () => selectScreen(screens.inviteMemberSuccess),
        inviteMemberError: () => selectScreen(screens.inviteMemberError),
    };

    let selfClose = () => {
        setTimeout(() => selectScreen(screens.inviteMember), 100);
        localStorage.removeItem('inviteEmail');
        close();
    };

    return (
        <Dialog className={activeScreen.type === screens.inviteMember ? classes.dialog : classes.dialogInviteSuccess} open={status}>
            {!activeScreen.props.notCloseBtn ? (
                <IconButton aria-label="close" className={classes.closeIcon} onClick={selfClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
            <Box>
                {activeScreen.type === screens.inviteMember && <InviteMember {...activeScreen.props} open={open} close={close} />}

                {activeScreen.type === screens.inviteMemberSuccess && (
                    <InviteMemberSuccess {...activeScreen.props} open={open} selfClose={selfClose} />
                )}

                {activeScreen.type === screens.inviteMemberError && (
                    <InviteMemberError {...activeScreen.props} open={open} close={close} selfClose={selfClose} />
                )}
            </Box>
        </Dialog>
    );
});
