import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';
import { SingleEventHeader, SingleEventInfo } from 'fragments';
import { Loader } from 'components';
import { ShowImages } from '../../fragments/singleEvent/singleEventHeader/core/showImages';

export const SingleEvent = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const classes = useStyles();
    const info = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));

    const { singleEvent, eventSponsor } = useSelector(
        (state) => ({
            singleEvent: state.event.singleEvent,
            eventSponsor: state.event.eventSponsor,
        }),
        shallowEqual
    );

    const locationBoolean = singleEvent && !!(singleEvent.address && singleEvent.address.lat);
    const handleOpenClose = () => {
        setOpen(!open);
    };

    return (
        <Box className={classes.singleEventCont}>
            {open === true ? (
                <ShowImages handleClick={handleOpenClose} images={singleEvent && singleEvent.images && singleEvent.images} />
            ) : singleEvent ? (
                <>
                    <SingleEventHeader
                        handleClick={handleOpenClose}
                        userInfo={info}
                        locationBoolean={locationBoolean}
                        id={router.query.eventid}
                        data={singleEvent}
                    />
                    <SingleEventInfo userInfo={info} locationBoolean={locationBoolean} data={singleEvent} eventSponsor={eventSponsor} />
                </>
            ) : (
                <Loader text={'noText'} />
            )}
        </Box>
    );
};
