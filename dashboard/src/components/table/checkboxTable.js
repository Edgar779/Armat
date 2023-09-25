import React, { useState, useEffect, Fragment } from 'react';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

export const CheckboxTable = (index, i) => {
    /**
     * Hooks.
     */

    return (
        <Fragment>
            <Checkbox
                {...label}
                defaultChecked
                style={{padding: 0}}
                // checked={index === i.id ? true : false}
            />
        </Fragment>
    );
};
