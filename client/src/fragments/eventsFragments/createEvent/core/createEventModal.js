import React, { useEffect } from 'react';
import { CreateEventStyle } from './styles';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import { CloseButton } from 'components';
import { CreateEventInputs } from '../createEventInputs';
import { manageActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';

export const CreateEventModal = ({ handleClose, eventInfo, type }) => {
    const classes = CreateEventStyle();
    const dispatch = useDispatch();

    const { organizationsReserve, eventSponsor, pendingSponsors } = useSelector((state) => ({
        organizationsReserve: state.orgs.organizationsReserve,
        eventSponsor: state.event.eventSponsor,
        pendingSponsors: state.event.pendingSponsors,
    }));

    useEffect(() => {
        dispatch(manageActions.GetTags());
        dispatch(manageActions.GetCategories());
    }, []);

    return (
        <div style={{ width: '100%' }}>
            {eventInfo ? (
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={!!eventInfo}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}>
                    <Fade in={!!eventInfo}>
                        <div className={classes.modalPaper}>
                            <CloseButton handleClick={handleClose} />
                            <CreateEventInputs
                                eventSponsor={eventSponsor}
                                organizationsReserve={organizationsReserve}
                                eventInfo={eventInfo}
                                handleCloseEdit={handleClose}
                                type={type}
                                edit={true}
                            />
                        </div>
                    </Fade>
                </Modal>
            ) : (
                <CreateEventInputs eventSponsor={eventSponsor} handleClose={handleClose} organizationsReserve={organizationsReserve} />
            )}
        </div>
    );
};
