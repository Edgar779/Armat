import React from 'react';
import { SponsTableHeadFragment } from './sponsTableHeadFragment';
import { SponsTableBodyFragment } from './sponsTableBodyFragment';
import { Paper, Table, TableContainer } from '@material-ui/core';
import { suggestedStyle } from './style';

export const SponsoreTable = ({ info }) => {
    const classes = suggestedStyle();
    return (
        <TableContainer style={{ boxShadow: 'none' }} component={Paper}>
            {info && info?.length ? (
                <Table
                    stickyHeader
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                >
                    <SponsTableHeadFragment />

                    {info &&
                        info?.length &&
                        info.map((i, k) => (
                            <React.Fragment key={k}>
                                <SponsTableBodyFragment info={i} />
                            </React.Fragment>
                        ))}
                </Table>
            ) : (
                ''
            )}
        </TableContainer>
    );
};
