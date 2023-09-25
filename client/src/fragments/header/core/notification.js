import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Backdrop, Badge } from '@material-ui/core';
import { useNoteStyles } from './styles';
import { Notifications } from './';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { appActions } from 'store/app';
import Modal from '@material-ui/core/Modal';
export const Notification = ({ notifications, userInfo }) => {
    const classes = useNoteStyles();

    const dispatch = useDispatch();

    const { app } = useSelector(
        (state) => ({
            app: state.global,
        }),
        shallowEqual
    );

    const notes = notifications.notifications.filter((n) => n.status === 'UNREAD');

    const [count, setCount] = useState(notes);
    useEffect(() => {
        if (count && count > 9) {
            setCount(`${9}+`);
        } else {
            setCount(notes);
        }
    }, [notifications.notifications]);

    return (
        <>
            {app.isOpen ? (
                <Badge color="error" className={classes.notificationBadge}>
                    <NotificationsIcon style={{ fontSize: '30px' }} onClick={() => dispatch(appActions.openOrCloseNotes())} />
                    {app.isOpen ? (
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={true}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}>
                            <Notifications userInfo={userInfo} notifications={notifications.notifications} />
                        </Modal>
                    ) : null}
                </Badge>
            ) : (
                <Badge color="error" badgeContent={notes.length} className={classes.notificationBadge}>
                    <NotificationsIcon style={{ fontSize: '30px' }} onClick={() => dispatch(appActions.openOrCloseNotes())} />
                    {app.isOpen ? (
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={true}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}>
                            <Notifications userInfo={userInfo} notifications={notifications.notifications} />
                        </Modal>
                    ) : null}
                </Badge>
            )}
        </>
    );
};

export default Notification;
