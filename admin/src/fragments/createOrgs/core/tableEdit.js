import React from 'react';
import { Images } from 'theme';
import IconButton from '@material-ui/core/IconButton';

export const TableEdit = ({ handleClick }) => {
    return (
        <IconButton style={{marginLeft:'6px'}} onClick={handleClick} aria-label="delete">
            <img src={Images.edit} alt="Delete" />
        </IconButton>
    );
};
