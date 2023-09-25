import React from 'react';
import { MinLoader } from '../loader';
import { FilterAndSort } from './styles';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export const SortByDate = ({ ByDate, DateLoader, DefaultDate, FilterDate }) => {
    const classes = FilterAndSort();
    return (
        <>
            {DateLoader === false ? (
                ByDate === true ? (
                    <ArrowDownward className={classes.ArrowDownwardStyle} onClick={FilterDate} />
                ) : (
                    <ArrowUpward className={classes.ArrowDownwardStyle} onClick={DefaultDate} />
                )
            ) : (
                <MinLoader style={{ margin: '5px 0 0 10px' }} />
            )}
        </>
    );
};
