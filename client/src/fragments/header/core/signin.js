import React, { useContext } from 'react';
import { ModalContext } from 'contexts';
import { useStyles } from './styles';

export const Signin = () => {
    const classes = useStyles();
    let { openModal } = useContext(ModalContext);

    return (
        <div className={classes.list}>
            <div style={{ width: '100%' }} className={`${classes.listItem} ${classes.sign}`} onClick={openModal.auth}>
                <p style={{ fontWeight: '600' }}> Sign in</p>
            </div>
        </div>
    );
};
