import React from 'react';
import { ButtonsStyle } from './styles';
import AddIcon from '@material-ui/icons/Add';

export const AddButton = ({ text, handleClick }) => {
    const classes = ButtonsStyle();
    return (
        <button onClick={handleClick} className={classes.AddButton}>
            <span className={classes.AddButtonIcon}>
                <AddIcon style={{ color: 'white', marginRight: '8px' }} />
            </span>
            <span className={classes.AddButtonText}>{text}</span>
        </button>
    );
};
