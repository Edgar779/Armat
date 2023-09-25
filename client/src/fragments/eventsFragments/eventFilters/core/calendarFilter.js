import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { calendarFilterStyles } from './styles';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';
import { DateRangePicker } from 'react-date-range';
import { Box } from '@material-ui/core';

export const CalendarFilter = ({ handleChangeCalendarDay }) => {
    const classes = calendarFilterStyles();
    const dispatch = useDispatch();

    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleDateChange = (date) => {
        handleChangeCalendarDay(date.selection.startDate);
        setState([date.selection]);

        const filterDate = {
            start_date: date.selection.startDate,
            end_date: date.selection.endDate,
        };
        dispatch(EventsActions.filterByStartEndDate(filterDate, 'Calendar'));
    };

    return (
        <Box className={classes.calendarCont}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                    <DateRangePicker
                        className={classes.dateFilterContCalendar}
                        onChange={(ev) => handleDateChange(ev)}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        ranges={state}
                        direction="horizontal"
                    />
                </Box>
            </MuiPickersUtilsProvider>
        </Box>
    );
};

export default CalendarFilter;
