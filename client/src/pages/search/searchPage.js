import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGlobalStyles } from 'theme';
import { SearchFragment } from 'fragments';
import { useRouter } from 'next/router';
import { Loader } from '../../components/loader/loader';
import { FindLoad } from 'utils';

export const SearchPage = () => {
    const { searchedData, searchedDataReserve } = useSelector((state) => ({
        searchedData: state.auth.searchedData,
        searchedDataReserve: state.auth.searchedDataReserve,
    }));
    const classes = useGlobalStyles();
    const router = useRouter();
    const loader = FindLoad('SEARCH');
    const [page, setPage] = useState(1);
    const [allList, setAllList] = useState([]);

    useEffect(() => {
        if (allList.length === 0) {
            setAllList(searchedDataReserve);
        }
    }, [searchedDataReserve]);

    return (
        <div className={classes.searchWrapper}>
            {loader.length ? (
                <Loader text={'noText'} />
            ) : (
                <SearchFragment
                    changePage={(e) => setPage(e)}
                    page={page}
                    date={searchedData[page - 1]}
                    allDate={searchedData}
                    router={router}
                    searchedDataReserve={allList}
                />
            )}
        </div>
    );
};
