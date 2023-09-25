import React from 'react';
import { ButtonsStyle } from './styles';
import { Images } from 'theme';

export const DeleteSettingsButton = ({ handleCLick }) => {
    const classes = ButtonsStyle();
    return (
        <div className={classes.deleteCategoryAndTagsDeleteButton} onClick={handleCLick}>
            <button>
                <img src={Images.deleteTags} alt={'deleteTags'} />
            </button>
            <span> Delete </span>
        </div>
    );
};
