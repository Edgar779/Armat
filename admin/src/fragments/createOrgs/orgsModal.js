import React from 'react';

import { Backdrop, Fade, Modal } from '@material-ui/core';
import { CloseButton } from 'components';
import {CreateEventStyle} from "./core";
import {CreateOrgsInputs} from "./core/createOrgsInputs";
import {useSelector} from "react-redux";

export const OrgsModal = ({ open, handleClose, EventTitle, eventInfo, type }) => {
    const classes = CreateEventStyle();
    const { orgCategories } = useSelector((state) => ({
        orgCategories: state.orgCategories.orgCategories,
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
                <div  style={{height:'90vh'}} className={classes.paper}>
                    <CloseButton handleClick={handleClose} />
                    <div className={classes.modalBody}>
                        <p className={classes.titleStyle}>{eventInfo ? 'Edit Organization' : 'Create an Organization'}</p>
                        <div>
                            <CreateOrgsInputs  type={type} orgCategories={orgCategories} eventInfo={eventInfo} handleClose={handleClose} />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
