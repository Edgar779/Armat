import React from 'react';
import { ButtonsStyle } from './styles';
import { Images } from 'theme';
import IconButton from '@material-ui/core/IconButton';

export const TableDeleteButton = ({ handleClick }) => {
    const classes = ButtonsStyle();
    return (
        <IconButton className={classes.deleteButton} onClick={handleClick} aria-label="delete">
            <img src={Images.Delete} alt="Delete" />
        </IconButton>
    );
};
