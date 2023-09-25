import { Picture, TryAgain } from 'components';
import { image, warningStyle } from './core';
import React, { useContext } from 'react';
import { ModalContext } from 'contexts';

export const AppleSigninErr = () => {
    const classes = warningStyle();
    let { openModal } = useContext(ModalContext);

    return (
        <div className={classes.warningWrapper}>
            <div className={classes.imageSection}>
                <Picture image={image} />
            </div>

            <div className={classes.textSection}>
                <p>Our records show that Apple sign in was used for an account that does not exist anymore.</p>
                <span>Please sign in to you Apple account, disconnect Armat from this apple ID and try again.</span>
            </div>

            <div className={classes.buttonSection}>
                <TryAgain small={true} handleCLic={openModal.auth} text={'Try Again'} />
            </div>
        </div>
    );
};
