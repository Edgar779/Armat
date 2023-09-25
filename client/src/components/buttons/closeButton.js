import React from 'react';
import { ButtonsStyle } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { Colors } from '../../utils';

export const CloseButton = ({ handleClick, type, background, style, color}) => {
    const classes = ButtonsStyle();

    return (
        <div className={classes.CloseButtonContent}>
            <button
                style={background ? { background } : { ...style }}
                className={type === 'info' ? classes.CloseInfoButton : classes.CloseButton}
                onClick={handleClick}>
                <CloseIcon style={{ color: color ? color : type === 'info' ? 'white' : Colors.ThemeGreen }} />
            </button>
        </div>
    );
};
