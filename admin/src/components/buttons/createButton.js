import React from 'react';
import { ButtonsStyle } from './styles';
import Button from '@material-ui/core/Button';

export const CreateButton = ({ ButtonText, handleClick, width }) => {
    const classes = ButtonsStyle();

    return (
        <div   className={classes.CreateEventButton}>
            <Button  style={width ? {width:width} : {} } onClick={handleClick}>
                <span className={classes.CreateEventButtonPlus}>+</span>
                {ButtonText}
            </Button>
        </div>
    );
};
