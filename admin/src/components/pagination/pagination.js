import React, { useState } from 'react';
import { paginationStyle } from './style';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationItem = ({ count, handleReturn, page }) => {
    const classes = paginationStyle();
    const handleChangePage = (val) => {
        handleReturn(val);
    };

    // const Page = page === 0 ? 1 : page
    return (
        <div className={classes.PaginationWrapper}>
            <Pagination
                onChange={(event, val) => handleChangePage(val, 'vvv')}
                page={page}
                count={count}
                color={'primary'}
                // variant="outlined"
                // shape="rounded"
            />
        </div>
    );
};
