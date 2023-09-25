/**Events page */

import React, { useEffect, useState } from 'react';
import { CreateEvent, Events } from 'fragments';
import { useDispatch } from 'react-redux';
import { EventsActions } from 'store';

export const EventsPage = ({}) => {
  const dispatch = useDispatch ();
  const [ open, setOpen ] = useState (false);
  const [ eventInfo, setEventInfo ] = useState ('');

  useEffect (() =>
      dispatch (EventsActions.getEvents ('Events')),
    []);

  const handleOpenClose = () => {
    setOpen ( !open);
  };

  const handleCloseInfoModal = () => {
    setEventInfo ('');
  };

  const handleGetEventValues = (ev) => {
    setEventInfo (ev);
  };


  return (
    <div>
      <CreateEvent
        eventInfo={ eventInfo }
        open={ open }
        handleClose={ eventInfo ? handleCloseInfoModal : handleOpenClose }
      />

      <Events
        handleGetEventValues={ handleGetEventValues }
        type={ 'Events' }
      />
    </div>
  );
};
