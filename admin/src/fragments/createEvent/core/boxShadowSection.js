import React from 'react';
import { CreateEventStyle } from './styles';

export const BoxShadowSection = ({ eventInfo, content, img, title, text }) => {
    const classes = CreateEventStyle();
    return (
        <div
            style={!eventInfo ? { boxShadow: '0px 0px 12px #0052E01A', marginBottom: '70px' } : { marginBottom: '70px' }}
            className={classes.paper}>
            <div className={classes.basicInfo}>
                <img src={img} alt="icon" style={{width:'21px', height:'23px'}}/>
                <p>{title}</p>
            </div>
            <p className={classes.basicInfoText}>{text}</p>
            {content}
        </div>
    );
};
