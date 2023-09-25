import React from 'react';
import { ButtonsStyle } from './styles';
import CloseIcon from '@material-ui/icons/Close';

export const CloseButton = ({ handleClick, type }) => {
    const classes = ButtonsStyle();

    return (
        <div className={classes.CloseButtonContent}>
            <button className={type === 'info' ? classes.CloseInfoButton : classes.CloseButton} onClick={handleClick}>
                <CloseIcon style={{ color: type === 'info' ? 'white' : '#387DFF' }} />
            </button>
        </div>
    );
};
