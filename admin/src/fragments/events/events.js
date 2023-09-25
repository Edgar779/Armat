import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EventsTableHeadFragment, EventsTableBodyFragment, membersFragmentStyle} from './core';
import {TableContainer, Table, Paper} from '@material-ui/core';
import {SearchAndCreate} from 'fragments';
import {EventsActions} from 'store';
import {Loader, PaginationItem} from 'components';
import {FindLoad} from "utils";

export const Events = ({buttonText, handleCreate, handleClose, handleGetEventValues, type}) => {
    const {events, reserveEvents} = useSelector((state) => ({
        events: state.event.events,
        reserveEvents: state.event.reserveEvents,
    }));
    const classes = membersFragmentStyle();
    const [userId, setUserId] = useState(null);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const handleChange = (ev) => {
        setUserId(ev.target.value);
        dispatch(EventsActions.searchEvents(ev.target.value));
    };

    const ClearSearchInput = (ev) => {
        setUserId('');
        dispatch(EventsActions.searchEvents(''));
    };

    const EventsValues = (ev) => {
        dispatch(EventsActions.getEventSponsorsForEdit(ev.eventId))
        if (handleGetEventValues) {
            handleGetEventValues(ev);
        }
    };

    // const successSponsors = FindSuccess('GET_EVENT_SPONSORS_FOR_EDIT')

    // useEffect(() =>{
    //     if()
    //
    // }, [successSponsors])

    const changePage = (number) => {
        setPage(number);
    };

    const loader = FindLoad('GET_EVENTS')

    return (
        <div className={classes.membersTable}>
            <SearchAndCreate
                handleClearInput={ClearSearchInput}
                handleChangeSearch={handleChange}
                handleClose={handleClose}
                handleCreate={handleCreate}
                value={userId}
                buttonText={buttonText}
                placeholder={'SearchPage Events'}
                total={reserveEvents.length}
                type={type}
            />

            <div className={classes.membersTableWrapper}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <EventsTableHeadFragment type={type}/>
                        {!!loader.length ? (
                            <Loader/>

                        ) : (
                            <EventsTableBodyFragment
                                type={type}
                                handleCreate={EventsValues}
                                eventsData={events[page - 1]}
                            />
                        )}
                    </Table>

                    <PaginationItem page={page} handleReturn={(number) => changePage(number)} count={events.length}/>
                </TableContainer>
            </div>
        </div>
    );
};
