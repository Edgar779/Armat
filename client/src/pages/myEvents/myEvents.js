import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { NoResult, PageTitle, Loader, OrangeButton, SimpleModal } from 'components';
import { useStyles } from './styles';
import { Events, EventFilters } from 'fragments';
import { ViewNav } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { EventsActions } from 'store';
import { Scroll } from 'utils';
import useWindowDimensions from '../../utils/width';
import { ModalContext } from 'contexts';

export const MyEvents = ({ pageType, showAddress }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const scrollPos = Scroll();
    const width = useWindowDimensions();
    const [view, setView] = useState('Listing/Grid');
    const [searchValue, setSearchValue] = useState('');
    const [clearSelectedDate, setClearSelectedDate] = useState(false);
    const [day, setDay] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const [filterModal, setFilterModal] = useState(false);

    const { events, eventsListLoader } = useSelector((state) => ({
        events: state.event.events,
        eventsListLoader: state.event.eventsListLoader,
    }));

    useEffect(() => {
        dispatch(EventsActions.getEvents(pageType));
        dispatch(EventsActions.singleEventRemove());
    }, []);

    const handleChangeCalendarDay = (day) => {
        setDay(day);
    };

    const handleGetSearchValue = (ev) => {
        setSearchValue(ev);
    };

    const handleTryAgain = () => {
        dispatch(EventsActions.searchEvents(''));
        dispatch(EventsActions.getEvents(pageType));
        setSearchValue('');
    };

    const handleFilterEvents = (name) => {
        // console.log(name,'name')
        // const events = reserveEvents.filter((el) => el.creatorName === name)
        // console.log(events,'events')
        // setFilteredEvents ([...filteredEvents, events])
        // setFilteredEvents(filteredEvents.concat(events))
        // setFilteredEvents(filteredEvents => [...filteredEvents, events])
    };

    const defaultFilters = () => {};

    const title =
        pageType === 'subscriptions'
            ? 'My Subscriptions'
            : pageType === 'pastEvents'
            ? 'Past Events'
            : pageType === 'upcomingEvents'
            ? 'Upcoming Events'
            : 'My Events';

    const handleChangeFilterModal = () => {
        setFilterModal(!filterModal);
    };

    // const handleCreate = () => {
    //     if (token) {
    //         window.location.replace('/createEvent');
    //     } else {
    //         openModal.auth();
    //     }
    // };

    return (
        <Grid
            container
            item
            className={
                width.width < 1279 ? classes.wrapContainerScrolled : scrollPos > 10 ? classes.wrapContainer : classes.wrapContainerScrolled
            }
            direction="column"
            lg={12}
            md={12}
            sm={12}
            xs={12}>
            {eventsListLoader === true ? (
                <Loader text={'noText'} />
            ) : (
                <>
                    {pageType !== 'pastEvents' && events !== 'noResult' ? (
                        <Grid container item className={showAddress === true ? classes.navContOpened : classes.navCont}>
                            <ViewNav handleChange={defaultFilters} setView={setView} view={view} />
                        </Grid>
                    ) : (
                        ''
                    )}
                    <Grid container item className={classes.container} direction="column" lg={12} md={12} sm={12} xs={12}>
                        <div
                            style={!events.length ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } : {}}
                            className={pageType === 'pastEvents' ? classes.headerContPast : classes.headerCont}>
                            <div className={classes.titleButton}>
                                <PageTitle title={title} style={classes.header} />
                            </div>
                            {/*{pageType !== 'pastEvents' && !events.length ? (*/}
                            {/*    <div>*/}
                            {/*        <OrangeButton*/}
                            {/*            width={width.width < 768 ? '106px' : '160px'}*/}
                            {/*            height={'48px'}*/}
                            {/*            buttonText={`Create event`}*/}
                            {/*            handleClick={handleCreate}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*) : (*/}
                            {/*    ''*/}
                            {/*)}*/}
                        </div>
                        {events === 'noResult' && <NoResult events={events} handleCLic={handleTryAgain} />}

                        {!events.length ? (
                            <Box className={events === 'noResult' ? classes.noResultBoxFromBack : classes.noResultBox}>
                                <NoResult events={events} handleCLic={handleTryAgain} />
                            </Box>
                        ) : (
                            <Box
                                className={'containerUpcoming'}
                                style={!events.length ? { display: 'flex', justifyContent: 'center' } : { display: 'flex' }}>
                                <>
                                    {
                                        <>
                                            <Box>
                                                {events !== 'noResult' && (
                                                    <>
                                                        <div className={'mobile'}>
                                                            <SimpleModal
                                                                start="start"
                                                                openDefault={filterModal}
                                                                handleOpenClose={handleChangeFilterModal}
                                                                content={
                                                                    <EventFilters
                                                                        handleChangeFilterModal={handleChangeFilterModal}
                                                                        filterModal={filterModal}
                                                                        handleDefault={defaultFilters}
                                                                        events={events}
                                                                        handleFilterEvents={handleFilterEvents}
                                                                        pageType={pageType}
                                                                        handleChangeCalendarDay={handleChangeCalendarDay}
                                                                        setInfo={() => setClearSelectedDate(false)}
                                                                        clearSelectedDate={clearSelectedDate}
                                                                        view={view}
                                                                    />
                                                                }
                                                            />
                                                        </div>

                                                        <div className={'desktop'}>
                                                            <EventFilters
                                                                handleChangeFilterModal={handleChangeFilterModal}
                                                                filterModal={filterModal}
                                                                handleDefault={defaultFilters}
                                                                events={events}
                                                                handleFilterEvents={handleFilterEvents}
                                                                pageType={pageType}
                                                                handleChangeCalendarDay={handleChangeCalendarDay}
                                                                setInfo={() => setClearSelectedDate(false)}
                                                                clearSelectedDate={clearSelectedDate}
                                                                view={view}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            </Box>

                                            {events !== 'noResult' && (
                                                <Box className={classes.containerCont}>
                                                    <Events
                                                        handleChangeFilterModal={handleChangeFilterModal}
                                                        filteredEvents={filteredEvents}
                                                        searchValue={searchValue}
                                                        handleGetSearchValue={handleGetSearchValue}
                                                        pageType={pageType}
                                                        day={day}
                                                        handleClearSelectedDate={() => setClearSelectedDate(true)}
                                                        setView={setView}
                                                        view={view}
                                                    />
                                                </Box>
                                            )}
                                        </>
                                    }
                                </>
                            </Box>
                        )}
                    </Grid>
                </>
            )}
        </Grid>
    );
};
