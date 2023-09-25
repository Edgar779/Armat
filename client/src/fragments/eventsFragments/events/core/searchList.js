import { searchedListStyles } from './styles';

export const SearchList = ({ reserveEventsForMap, handleSearchForMap }) => {
    const classes = searchedListStyles();
    return (
        <div className={classes.searchListWrapper}>
            {reserveEventsForMap && reserveEventsForMap.length ? (
                reserveEventsForMap.map((i,j) => (
                    <div key={j} onClick={() => handleSearchForMap(i.title)} className={classes.searchListClickable}>
                        <span className={classes.searchListText}>{i.title}</span>
                    </div>
                ))
            ) : (
                <span className={classes.searchListText}>No Event</span>
            )}
        </div>
    );
};
