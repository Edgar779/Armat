import React from 'react';
import { titleStyle } from './styles';

export const Title = ({ text }) => {
    const classes = titleStyle();
    return (
        <React.Fragment>
            <h4 className={text === 'Armat' ? classes.ArmatTittle : classes.tittle}>{text}</h4>
        </React.Fragment>
    );
};
