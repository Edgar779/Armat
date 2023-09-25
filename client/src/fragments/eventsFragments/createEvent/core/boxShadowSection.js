import { Icon } from 'components';
import React from 'react';
import { CreateEventStyle } from './styles';
import { Colors } from 'utils';

export const BoxShadowSection = ({ content, img, title, text, edit }) => {
    const classes = CreateEventStyle();
    return (
        <div style={edit ? {} : { boxShadow: '0px 0px 6px #0000001A', marginBottom: '70px' }} className={classes.paper}>
            <div className={classes.basicInfo}>
                <Icon name={img} color={Colors.ThemeGreen} style={{ marginRight: '19px' }} width={'28px'} height={'27px'} />
                <p>{title}</p>
            </div>
            <p className={classes.basicInfoText}>{text}</p>
            {content}
        </div>
    );
};
