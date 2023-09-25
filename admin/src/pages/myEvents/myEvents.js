/**My events page */

import React, { useEffect, useState } from 'react';
import { Events, CreateEvent } from 'fragments';
import { useDispatch } from 'react-redux';
import { EventsActions } from 'store';

export const MyEvents = ({}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [eventInfo, setEventInfo] = useState('');

    const handleOpenClose = () => {
        setOpen(!open);
    };
    const handleCloseInfoModal = () => {
        setEventInfo('');
    };

    useEffect(() =>
      dispatch(EventsActions.getEvents('MyEvents')),
      []);

    const handleGetEventValues = (ev) => {
        setEventInfo(ev);
    };

    return (
        <div>
            <CreateEvent
              eventInfo={eventInfo}
              open={open}
              handleClose={eventInfo ? handleCloseInfoModal : handleOpenClose}
            />

            <Events
                type={'MyEvents'}
                handleGetEventValues={handleGetEventValues}
                handleCreate={handleOpenClose}
                buttonText={'Create Events'}
            />
        </div>
    );
};
