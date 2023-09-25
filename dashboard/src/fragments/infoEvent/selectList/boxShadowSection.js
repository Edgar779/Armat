import React from 'react';
import { CreateEventStyle } from './styles';

export const BoxShadowSection = ({ content, img, title, text, edit }) => {
    const classes = CreateEventStyle();
    return (
        <div style={edit ? {} : { boxShadow: '0px 0px 6px #0000001A', marginBottom: '70px' }} className={'paper-section '}>
            <div className={classes.basicInfo}>
                <p>{title}</p>
            </div>
            <p className={classes.basicInfoText}>{text}</p>
            {content}
        </div>
    );
};
