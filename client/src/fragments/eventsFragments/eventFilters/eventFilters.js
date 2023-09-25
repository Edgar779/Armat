import { Box, Typography } from '@material-ui/core';
import { TimeFilter, OrgFilter, CalendarFilter, CategoryFilter, DateFilter } from './core';
import { filtersStyles } from '../events/core/styles';
import { EventsActions, manageActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CloseButton } from 'components';
import SubscribeOrganizers from './core/subscribeOrganizers';

export const EventFilters = ({
    view,
    clearSelectedDate,
    setInfo,
    handleChangeCalendarDay,
    pageType,
    handleFilterEvents,
    events,
    filterModal,
    handleChangeFilterModal,
}) => {
    const dispatch = useDispatch();
    const classes = filtersStyles();

    const { reserveEvents, mySubscribes } = useSelector((state) => ({
        filterModal: state.myProfileInfo.filterModal,
        reserveEvents: state.event.reserveEvents,
        mySubscribes: state.event.mySubscribes,
    }));

    useEffect(() => dispatch(manageActions.GetCategories()), []);
    useEffect(() => {
        if (pageType === 'subscriptions') {
            dispatch(EventsActions.getSubscribes());
        }
    }, []);

    let creators = reserveEvents.length && reserveEvents.map((i) => i?.creator?.fullName);
    let subscriptions = mySubscribes.length && mySubscribes.map((i) => i?.creator?.fullName);

    return (
        <Box className={classes.patEventView}>
            <Box
                className={
                    filterModal === true ? classes.filterContMobile : !events.length ? classes.filterContNoEvent : classes.filterCont
                }>
                <Box className={classes.filterContMobileButtons}>
                    <Typography>Filters</Typography>
                    <CloseButton handleClick={handleChangeFilterModal} />
                </Box>
                {view === 'Calendar' ? <CalendarFilter handleChangeCalendarDay={handleChangeCalendarDay} /> : null}
                {view === 'Calendar' ? (
                    <TimeFilter filterType={view} />
                ) : (
                    <DateFilter setInfo={setInfo} info={clearSelectedDate} filterType={view} pageType={pageType}/>
                )}

                <CategoryFilter pageType={pageType} view={view} />

                {pageType === 'subscriptions' && <SubscribeOrganizers handleFilterEvents={handleFilterEvents} creators={subscriptions} />}
                {pageType === 'upcomingEvents' && <OrgFilter handleFilterEvents={handleFilterEvents} creators={creators} />}
            </Box>
        </Box>
    );
};

export default EventFilters;
