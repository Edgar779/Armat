import React from 'react';
import { settingsStyle } from './style';
import { AddButton } from 'components';

export const ManageHead = ({ handleClick, Name, buttonText }) => {
    const classes = settingsStyle();
    return (
        <div className={classes.head}>
            {Name}
            <AddButton handleClick={handleClick} text={buttonText} />
        </div>
    );
};
