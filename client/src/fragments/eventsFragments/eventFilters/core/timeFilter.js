import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import 'date-fns';
import { PageTitle } from 'components';
import { timeFilterStyles } from './styles';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';

export const TimeFilter = ({}) => {
    const classes = timeFilterStyles();
    const dispatch = useDispatch();

    const handleDateChangeEnd = (time) => {
        const type = 'Calendar';
        const date = {
            start_date: `00:00`,
            end_date: time.target.value,
        };
        dispatch(EventsActions.filterByStartEndDateTime(date, type));
    };
    const handleDateChangeStart = (time) => {
        const type = 'Calendar';
        const date = {
            start_date: time.target.value,
            end_date: '23:59',
        };
        dispatch(EventsActions.filterByStartEndDateTime(date, type));
    };

    return (
        <>
            <Box className={classes.dateCont}>
                <Box className={classes.headerCont}>
                    <PageTitle title="Time Range" style={classes.header} />
                </Box>
                <Box className={classes.startAndEndDate}>
                    <Box className={classes.startDateCont}>
                        <Box className={classes.label}>
                            <TextField
                                id="time"
                                type="time"
                                onChange={(date) => handleDateChangeStart(date)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </Box>
                        <Box className={classes.date}>
                            <Typography className={classes.labelText}>Start</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.toCont}>
                        <Typography className={classes.toText}>to</Typography>
                    </Box>
                    <Box className={classes.endDateCont}>
                        <Box className={classes.label}>
                            <TextField
                                id="time"
                                type="time"
                                onChange={(date) => handleDateChangeEnd(date)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </Box>
                        <Box className={classes.date}>
                            <Typography className={classes.labelText}>{'End'}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default TimeFilter;
