import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';

export const SimpleModal = ({ status, openDefault, handleOpenClose, content, backdropCustom, addButton, start }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpenOrClose = () => {
        if (handleOpenClose) {
            handleOpenClose();
        } else {
            setOpen(false);
        }
    };

    const body = <div>{content}</div>;

    return (
        <div>
            <Modal
                open={openDefault}
                onClose={handleOpenOrClose}
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={backdropCustom === true ? 'my-profile' : ''}
                style={{
                    display: 'flex',
                    justifyContent: start ? 'flex-start' : 'center',
                    alignItems: 'center',
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                {body}
            </Modal>
        </div>
    );
};
