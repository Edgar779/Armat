import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { EventsActions } from 'store';
import { DateRangePicker } from 'react-date-range';
import { PageTitle } from 'components';
import { dateFilterStyles } from './styles';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const DateFilter = ({ info, setInfo, filterType, pageType }) => {
    const classes = dateFilterStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [selectedDay, setSelectedStartDay] = React.useState('');
    const [selectedEndDay, setSelectedEndDay] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : '');
    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const convert = (str) => {
        let date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join('/');
    };

    const handleDateChange = (date) => {
        setInfo();
        setState([date.selection]);
        setSelectedStartDay(date.selection.startDate);
        setSelectedEndDay(date.selection.endDate);

        const filterDate = {
            start_date: date.selection.startDate,
            end_date: date.selection.endDate,
        };

        const type = filterType === 'Map' ? 'Calendar' : '';
        dispatch(EventsActions.filterByStartEndDate(filterDate, type));
    };

    useEffect(
        (info) => {
            if (selectedDay) {
                setSelectedStartDay('');
                setSelectedEndDay('');
            }
        },
        [info]
    );

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        return () => {
            window.addEventListener('resize', handleResize);
        };
    });

    const handleResetDate = () => {
        setSelectedStartDay('');
        setSelectedEndDay('');
        dispatch(EventsActions.getEvents(pageType, 'noLoad'));
        dispatch(EventsActions.singleEventRemove());
    };
    return (
        <>
            {show === true && <Box className={classes.backDrop} onClick={() => setShow(!show)} />}
            <Box className={classes.dateCont}>
                <Box className={classes.headerCont}>
                    <PageTitle title="Date Range" style={classes.header} />
                    <p onClick={handleResetDate} className={classes.cleareDates}>
                        Clear dates
                    </p>
                </Box>
                <Box className={classes.startAndEndDate}>
                    <Box className={classes.startDateCont} onClick={() => setShow(true)}>
                        <Box className={classes.label}>
                            <Typography className={classes.labelText}>{selectedDay ? convert(selectedDay) : 'Start'}</Typography>
                        </Box>
                        <Box className={classes.date}>
                            <Typography className={classes.dateText}>{'mm/dd/yyyy'}</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.toCont}>
                        <Typography className={classes.toText}>to</Typography>
                    </Box>
                    <Box className={classes.endDateCont} onClick={() => setShow(true)}>
                        <Box className={classes.label}>
                            <Typography className={classes.labelText}>
                                {selectedEndDay !== selectedDay ? convert(selectedEndDay) : 'End'}
                            </Typography>
                        </Box>
                        <Box className={classes.date}>
                            <Typography className={classes.dateText}>{'mm/dd/yyyy'}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.dateFilterCont}>
                    {show ? (
                        <DateRangePicker
                            color={'#49B776'}
                            className={width < 1280 ? classes.dateFilterContMobile : classes.dateFilterCont}
                            onChange={(ev) => handleDateChange(ev)}
                            open={open}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={width < 1280 ? 1 : 2}
                            ranges={state}
                            direction="horizontal"
                        />
                    ) : null}
                </Box>
            </Box>
        </>
    );
};

export default DateFilter;
