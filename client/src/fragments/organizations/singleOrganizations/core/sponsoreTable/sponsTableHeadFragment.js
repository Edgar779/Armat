import React from 'react';
import { suggestedStyle } from './style';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

export const SponsTableHeadFragment = ({ type }) => {
    const classes = suggestedStyle();

    return (
        <>
            <TableHead className={classes.tableHeadDesktop}>
                <TableRow>
                    <TableCell className={classes.TableHeadNumber}>Event Date</TableCell>
                    <TableCell className={classes.TableHeadNumber}>Requested by</TableCell>
                    <TableCell className={classes.TableHeadNumber}>Event Title</TableCell>
                    <TableCell className={classes}>Note</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>

            <TableHead className={classes.tableHeadMobile}>
                <TableRow>
                    <TableCell className={classes.TableHeadNumber}>Event Title</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
        </>
    );
};
