import React from 'react';
import { screensStyle } from './styles';
import { TableCell, TableRow } from '@material-ui/core';

export const NoInfo = ({ text }) => {
    const classes = screensStyle();
    return (
        <TableRow style={{ border: 'none' }}>
            <TableCell style={{ border: 'none' }}>
                <div className={classes.noInfoScreen}>
                    <p>{text}</p>
                </div>
            </TableCell>
        </TableRow>
    );
};
