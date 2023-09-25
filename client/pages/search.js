import { authActions } from 'store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchPage } from 'pages';

const Search = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (router.query) {
            const searchBody = {};
            if (router.query.searchText) searchBody.searchField = router.query.searchText;
            if (router.query.search) searchBody.searchField = router.query.search;
            if (router.query.lat) searchBody.lat = router.query.lat;
            if (router.query.lng) searchBody.lng = router.query.lng;
            if (router.query.zoom) searchBody.zoom = 50000;
            dispatch(authActions.search(searchBody));
        }
    }, [router.query]);

    return <SearchPage />;
};

export default Search;
