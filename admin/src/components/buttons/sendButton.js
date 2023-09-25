import React from 'react';
import { ButtonsStyle } from './styles';
import Button from '@material-ui/core/Button';

export const SendButton = ({ buttonText, handleCLick, style }) => {
    const classes = ButtonsStyle();

    return (
        <div style={{ ...style }} className={classes.SendButtonStyle}>
            <Button onClick={handleCLick}>{buttonText}</Button>
        </div>
    );
};
