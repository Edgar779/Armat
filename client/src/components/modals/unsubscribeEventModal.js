import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Switcher } from '../buttons';
import { CloseButton, Icon, Picture } from 'components';
import { Box, Button } from '@material-ui/core';
import { image } from './constant';
import { useDispatch } from 'react-redux';
import { EventsActions } from 'store';
import { modalsStyles } from './style';
import { useGlobalStyles } from '../../theme/globalStyles';
import { Colors } from '../../utils';

export const UnsubscribeEventModal = ({ openInfo, data, disabled }) => {
    const classes = modalsStyles();
    const globalClasses = useGlobalStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(openInfo);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUnsubscribe = () => {
        const body = {
            eventId: data.eventId,
        };
        dispatch(EventsActions.unsubscribe(body));
        setOpen(false);
    };
    return (
        <div>
            <Switcher disabled={disabled} info={true} handleChangeSwitcher={handleOpen} />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openInfo ? openInfo : open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <CloseButton handleClick={() => setOpen(false)} />
                        <div className={classes.paperPadding}>
                            <Box className={classes.image}>
                                <Picture image={image} />
                            </Box>
                            <Box>
                                <p className={classes.UnsubscribeEventModalTitle}>Are you Sure About Unsubscribing?</p>
                                <p className={classes.UnsubscribeEventModalDes}>
                                    Once you unsubscribe from an event , it disappears from the list of your subscriptions
                                </p>
                            </Box>
                        </div>

                        <div className={classes.paperButtons}>
                            <Button
                                style={{ background: Colors.ThemeGreen, borderRadius: '24px' }}
                                className={globalClasses.button}
                                onClick={() => setOpen(false)}>
                                I'd Rather Stay
                            </Button>
                            <Button onClick={handleUnsubscribe} className={classes.unsubscribe}>
                                Unsubscribe
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
