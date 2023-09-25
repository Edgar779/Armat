import { Box } from '@material-ui/core';
import { Description, EventSponsor, Location, Tags } from './core';
import { useStyles } from './style';
import React from 'react';

export const SingleEventInfo = ({ data, locationBoolean, eventSponsor }) => {
    const classes = useStyles();

    return (
        <Box className={locationBoolean === true ? classes.infoCont : classes.infoContBottom}>
            <Box className={locationBoolean === false ? classes.firstContRow : classes.firstCont}>
                <Description classes={classes} data={data} />
                {data && data.tags && data.tags.length && <Tags locationBoolean={locationBoolean} classes={classes} data={data} />}

                {locationBoolean === true ? (
                    eventSponsor && eventSponsor.length ? (
                        <Box className={classes.sponsors}>
                            <EventSponsor classes={classes} eventSponsor={eventSponsor} />
                        </Box>
                    ) : (
                        ''
                    )
                ) : (
                    ''
                )}
            </Box>

            {locationBoolean === false ? (
                eventSponsor && eventSponsor.length ? (
                    <Box className={classes.sponsors}>
                        <EventSponsor classes={classes} eventSponsor={eventSponsor} />
                    </Box>
                ) : (
                    ''
                )
            ) : (
                ''
            )}

            <Box className={classes.secCont}>
                {locationBoolean && (
                    <Box>
                        <Location classes={classes} data={data} />
                    </Box>
                )}
            </Box>
        </Box>
    );
};
