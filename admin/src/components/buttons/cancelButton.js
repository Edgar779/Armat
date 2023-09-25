import React from 'react';
import { ButtonsStyle } from './styles';
import Button from '@material-ui/core/Button';

export const CancelButton = ({ handleClick, text, style }) => {
    const classes = ButtonsStyle();

    return (
        <div className={classes.CancelButtonBox}>
            <Button style={{ ...style }} onClick={handleClick}>
                {text}
            </Button>
        </div>
    );
};
