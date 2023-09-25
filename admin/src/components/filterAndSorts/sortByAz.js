import React from 'react';
import { FilterAndSort } from './styles';
import { Images } from 'theme';
import { MinLoader } from '../loader';

export const SortByAz = ({ ByAz, filterLoader, filterByAlphabetical, removeFilterByAlphabetical }) => {
    const classes = FilterAndSort();
    return (
        <React.Fragment>
            {filterLoader === false ? (
                <img
                    onClick={ByAz === false ? filterByAlphabetical : removeFilterByAlphabetical}
                    className={classes.AZFilter}
                    src={ByAz === false ? Images.AZFilter : Images.sortingFillZA}
                    alt={'AZFilter'}
                />
            ) : (
                <MinLoader />
            )}
        </React.Fragment>
    );
};
