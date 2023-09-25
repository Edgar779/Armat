import React, { useEffect, useState } from 'react';
import { EventsActions, myProfileActions } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { MyCalendar, SearchList, Cards, myEventsStyles } from './core';
import MapMobile from './core/map';
import { FilterButton, PaginationItem } from 'components';
import { CreateEventModal } from 'fragments';
import { paginate } from 'theme';

export const Events = ({
    view,
    handleClearSelectedDate,
    day,
    pageType,
    handleGetSearchValue,
    searchValue,
    filteredEvents,
    handleChangeFilterModal,
}) => {
    const classes = myEventsStyles();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pos, setPos] = useState('');
    const [value, setValue] = useState('');
    const [editEventInfo, setEditEventInfo] = useState('');
    const [show, setShow] = useState(false);

    const { events, zToAEvents, searchedEvents, reserveEvents, eventsListLoader, reserveEventsForMap, reserveEventsFiltered } = useSelector(
        (state) => ({
            events: state.event.events,
            zToAEvents: state.event.zToAEvents,
            reserveEvents: state.event.reserveEvents,
            reserveEventsFiltered: state.event.reserveEventsFiltered,
            reserveEventsForMap: state.event.reserveEventsForMap,
            eventsListLoader: state.event.eventsListLoader,
            searchedEvents: state.event.searchedEvents,
        })
    );

    const changePage = (number) => {
        setPage(number);
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (!pos) {
                    setPos(position.coords);
                }
            });
        }
    }, []);

    const handleSearchForMap = (val) => {
        setShow(false);
        setValue(val);
        if (value) {
            dispatch(EventsActions.searchTitleEventsForMap(value));
        }
    };

    const handleEditEvent = (ev) => {
        setEditEventInfo(ev);
    };

    const Searched = {
        latitude: searchedEvents.length && searchedEvents[0].address.latitude,
        longitude: searchedEvents.length && searchedEvents[0].address.langitude,
    };

    const reserve = zToAEvents ? paginate(zToAEvents.reverse(), 9) : null;
    const filterEvents = filteredEvents.length && paginate(filteredEvents, 9);

    return (
        <Box className={classes.containerCont}>
            <Box className={classes.eventsCont}>
                {editEventInfo && (
                    <CreateEventModal eventInfo={editEventInfo} handleClose={() => setEditEventInfo('')} EventTitle={'Edit an Event'} />
                )}
                {view === 'Listing/Grid' ? (
                    <div>
                        <>
                            <Cards
                                handleChangeFilterModal={handleChangeFilterModal}
                                searchValue={searchValue}
                                handleGetSearchValue={handleGetSearchValue}
                                pageType={pageType}
                                handleClearSelectedDate={handleClearSelectedDate}
                                handleEditEvent={handleEditEvent}
                                data={reserve !== null ? reserve[page - 1] : events[page - 1]}
                                Loader={eventsListLoader}
                            />
                            <PaginationItem page={page} handleReturn={(number) => changePage(number)} count={events.length} />
                        </>
                    </div>
                ) : null}
                {view === 'Calendar' ? (
                    <MyCalendar
                        handleOpenModal={handleChangeFilterModal}
                        pageType={pageType}
                        handleEditEvent={handleEditEvent}
                        findedDate={reserveEventsFiltered}
                        day={day}
                        view={view}
                        data={reserveEventsFiltered ? reserveEventsFiltered : reserveEvents}
                    />
                ) : null}
                {view === 'Map' ? (
                    <div className={classes.mapContentStyle}>
                        <div className={classes.mapSearchStyle}>
                            <div style={{ marginLeft: '12px' }}>
                                <FilterButton handleOpenModal={handleChangeFilterModal} />
                            </div>
                        </div>
                        {show === true ? (
                            <SearchList reserveEventsForMap={reserveEventsForMap[0]} handleSearchForMap={handleSearchForMap} />
                        ) : (
                            ''
                        )}
                        <MapMobile
                            events={reserveEventsFiltered ? reserveEventsFiltered : reserveEvents}
                            Searched={Searched}
                            pos={pos}
                            type={'events'}
                        />
                    </div>
                ) : null}
            </Box>
        </Box>
    );
};

export default Events;
