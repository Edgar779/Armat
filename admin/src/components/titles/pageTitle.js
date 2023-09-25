import React from 'react';
import { titleStyle } from './styles';

export const PageTitle = ({ title }) => {
    const classes = titleStyle();
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p className={classes.pageTitle}>{title}</p>
        </div>
    );
};
