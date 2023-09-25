import React from 'react';
import { CreateEventStyle, CreateEventInputs } from './index';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import { CloseButton } from 'components';
import {useSelector} from "react-redux";

export const CreateEventModal = ({ open, handleClose, EventTitle, eventInfo }) => {
    const classes = CreateEventStyle();

    const { organizationsReserve, eventSponsor, pendingSponsors } = useSelector((state) => ({
        organizationsReserve: state.orgs.organizationsReserve,
        eventSponsor: state.event.eventSponsor,
        pendingSponsors: state.event.pendingSponsors,
    }));

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={eventInfo ? true : open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={eventInfo ? true : open}>
                <div className={classes.paper}>
                    <CloseButton handleClick={handleClose} />
                    <div className={classes.modalBody}>
                        <p className={classes.titleStyle}>{eventInfo ? 'Event Information' : EventTitle}</p>
                        <div>
                            <CreateEventInputs
                                eventSponsor={eventSponsor}
                                organizationsReserve={organizationsReserve}
                                eventInfo={eventInfo}
                                handleCloseEdit={handleClose}
                                handleClose={handleClose}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
