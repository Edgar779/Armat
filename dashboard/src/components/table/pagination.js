import React from 'react';
import { Pagination } from '@mui/material';

export const PaginationItem = ({ count, handleReturn, page, listName }) => {
    const limitCountNumber = 10;

    const handleChangePage = (val) => {
        handleReturn(val);
    };

    return (
        <div className="pagination-wrapper">
            <div className="pagination-description">
                <p>{` Total  ${listName}  :  ${count} `}</p>
            </div>
            <Pagination
                onChange={(event, val) => handleChangePage(val, 'vvv')}
                page={page}
                count={count && Math.ceil(count / limitCountNumber)}
            />
        </div>
    );
};
