import React from 'react';
import {Backdrop, Fade, Modal} from '@material-ui/core';
import {modalStyle} from './core/styles';

export const SimpleModal = ({open, handleClick, children,}) => {
    const classes = modalStyle();
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open && open}
                onClose={handleClick}
                BackdropComponent={Backdrop}
                closeAfterTransition
                hideBackdrop={false}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div
                        // className={classes.PopoverUserInfo}
                    >
                        {/*<CloseButton handleClick={handleClick} type={'info'} />*/}
                        {children}
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
