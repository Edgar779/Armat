import React from 'react';
import { paginationStyle } from './style';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationItem = ({ count, handleReturn, page, type }) => {
    const classes = paginationStyle();
    const handleChangePage = (val) => {
        handleReturn(val);
    };

    return (
        <div
            style={type === 'center' ? { justifyContent: 'center' } : { justifyContent: 'flex-end' }}
            className={classes.PaginationWrapper}>
            <Pagination onChange={(event, val) => handleChangePage(val, 'vvv')} page={page} count={count} color={'primary'} />
        </div>
    );
};
