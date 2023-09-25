import React from 'react';
import { modalStyle } from './core/styles';
import { CloseButton, DeleteButton, CancelButton } from '../buttons';
import { Backdrop, Fade, Modal } from '@material-ui/core';

export const ModalPopup = ({ open, handleClose, modalText, modalTitle, user, handleDel, buttonText, bodyText, loading }) => {
    const classes = modalStyle();
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <CloseButton handleClick={handleClose} />
                        <div className={classes.modalBody}>
                            <h2>{`${modalTitle}`}</h2>
                            <p>
                                {`Are you sure you want to`}
                                <span className={'modalText'}>{modalText}</span>
                                <span className={'user'}>{user}</span>
                                {bodyText}
                            </p>
                            <div className={classes.modalButtons}>
                                <DeleteButton loader={loading} handleClick={handleDel} text={buttonText} />
                                <CancelButton handleClick={handleClose} text={'Cancel'} />
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
