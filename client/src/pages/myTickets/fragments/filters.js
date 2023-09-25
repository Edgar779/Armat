import React from 'react';
import { useDispatch } from 'react-redux';
import { DateRangePicker } from 'react-date-range';
import { myTicketsStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import { ticketActions } from 'store';
import { dateFilterStyles } from '../../../fragments/eventsFragments/eventFilters/core/styles';
import { PageTitle } from 'components';

export const Filters = ({ buttonsTab }) => {
    const customClasses = myTicketsStyles();
    const classes = dateFilterStyles();
    const dispatch = useDispatch();
    const [selectedDay, setSelectedStartDay] = React.useState('');
    const [selectedEndDay, setSelectedEndDay] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleDateChange = (date) => {
        setState([date.selection]);
        setSelectedStartDay(date.selection.startDate);
        setSelectedEndDay(date.selection.endDate);

        const filterDate = {
            time: buttonsTab,
        };
        date?.selection?.endDate ? (filterDate.endDate = date?.selection?.endDate) : delete filterDate.endDate;
        date?.selection?.startDate ? (filterDate.startDate = date?.selection?.startDate) : delete filterDate.startDate;
        dispatch(ticketActions.getMyTickets(filterDate, 'noLoad'));
    };

    const handleResetDate = () => {
        setSelectedStartDay('');
        setSelectedEndDay('');
        const filterDate = {
            time: buttonsTab,
        };
        dispatch(ticketActions.getMyTickets(filterDate, 'noLoad'));
    };

    const convert = (str) => {
        let date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join('/');
    };

    return (
        <div className={customClasses.ticketFilters}>
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
                                    {
                                        selectedEndDay ? convert(selectedEndDay) : 'End'
                                        // selectedEndDay !== selectedDay ? convert(selectedEndDay) : 'End'
                                    }
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
                                className={classes.dateFilterCont}
                                onChange={(ev) => handleDateChange(ev)}
                                open={false}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                        ) : null}
                    </Box>
                </Box>
            </>
        </div>
    );
};
