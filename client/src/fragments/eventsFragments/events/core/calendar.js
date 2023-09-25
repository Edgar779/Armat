import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { calendarStyles } from './styles';
require('react-big-calendar/lib/css/react-big-calendar.css');
import { Popup } from './popup';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { Backdrop, Fade, FormControl, InputLabel, MenuItem, Modal, Select } from '@material-ui/core';
import { FilterButton } from 'components';
import moment from 'moment';
import { Colors } from 'utils';
import { multiConverter } from '../../../../utils/dateConverter';

moment.locale('es-es', {
    week: {
        dow: 1,
    },
});

export const MyCalendar = ({ data, day, handleEditEvent, pageType, handleOpenModal }) => {
    const classes = calendarStyles();
    const [calendarView, setCalendarView] = React.useState('month');
    const [getSize, setGetSize] = React.useState({ x: 0, y: 0 });
    const [date, setDate] = React.useState('');
    // const [open, setOpen] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    // const router = useRouter();
    // const userType = checkUser();

    // const handleClick = () => {
    //     router.push('/createEvent');
    // };
    // const id = open ? 'simple-popover' : undefined;

    const weekDay = (weekDay) => new Date(weekDay).toLocaleString('en-us', { weekday: 'short' });

    const events = data.map((i, j) => ({
        allDay: i.allDay,
        id: i.eventId,
        title:
            i.allDay === true
                ? 'All Day'
                : calendarView === 'day'
                ? i.title
                : calendarView === 'week'
                ? i.title
                : multiConverter(i.startDate, i.startTime, i.timezoneOffset, 'hh A') +
                  '-' +
                  multiConverter(i.endDate, i.endTime, i.timezoneOffset, 'hh A'),
        start: moment(multiConverter(i.startDate, i.startTime, i.timezoneOffset, 'llll')).toDate(),
        end: moment(multiConverter(i.endDate, i.endTime, i.timezoneOffset, 'llll')).toDate(),
        color:
            weekDay(i.startDate) === 'Sun'
                ? '#EAF2FF'
                : weekDay(i.startDate) === 'Mon'
                ? '#EDEFF2'
                : weekDay(i.startDate) === 'Tue'
                ? '#EDFCF0'
                : weekDay(i.startDate) === 'Wed'
                ? '#FCF2E9'
                : weekDay(i.startDate) === 'Thu'
                ? '#FEF1F1'
                : weekDay(i.startDate) === 'Fri'
                ? '#F1F0FD'
                : weekDay(i.startDate) === 'Sat'
                ? '#FFF9E5'
                : '',
        borderColor:
            weekDay(i.startDate) === 'Sun'
                ? '#387DFF'
                : weekDay(i.startDate) === 'Mon'
                ? '#545F7E'
                : weekDay(i.startDate) === 'Tue'
                ? '#4FDC6F'
                : weekDay(i.startDate) === 'Wed'
                ? '#DF8127'
                : weekDay(i.startDate) === 'Thu'
                ? '#F07379'
                : weekDay(i.startDate) === 'Fri'
                ? '#766DE8'
                : weekDay(i.startDate) === 'Sat'
                ? '#F7C606'
                : '',
    }));

    const localizer = momentLocalizer(moment);

    const CustomToolbar = (toolbar) => {
        const goToBack = () => {
            if (toolbar.view === 'day') {
                toolbar.date.setDate(toolbar.date.getDate() - 1);
                toolbar.onNavigate('next');
            } else if (toolbar.view === 'week') {
                toolbar.date.setDate(toolbar.date.getDate() - 7);
                toolbar.onNavigate('next');
            } else {
                toolbar.date.setMonth(toolbar.date.getMonth() - 1);
                toolbar.onNavigate('next');
            }
        };

        const goToNext = () => {
            if (toolbar.view === 'day') {
                toolbar.date.setDate(toolbar.date.getDate() + 1);
                toolbar.onNavigate('next');
            } else if (toolbar.view === 'week') {
                toolbar.date.setDate(toolbar.date.getDate() + 7);
                toolbar.onNavigate('next');
            } else {
                toolbar.date.setMonth(toolbar.date.getMonth() + 1);
                toolbar.onNavigate('next');
            }
        };

        const goToDayView = () => {
            toolbar.onView('day');
            setCalendarView('day');
        };
        const goToWeekView = () => {
            toolbar.onView('week');
            setCalendarView('week');
        };
        const goToMonthView = () => {
            toolbar.onView('month');
            setCalendarView('month');
        };

        const handleChange = () => {};

        const handleOpenFilterModal = () => {
            handleOpenModal && handleOpenModal();
            // dispatch(.openFilterModal());
        };

        return (
            <div className={classes.selectButtonsLabel}>
                <div className={classes.calendarNextPrewButtons}>
                    <div className={classes.dateStyle}>
                        <span> {toolbar.label}</span>
                    </div>

                    <div style={{ marginLeft: '10px', marginTop: '7px' }}>
                        <NavigateBefore style={{ color: Colors.ThemeBlack, cursor: 'pointer' }} onClick={() => goToBack()} />
                        <NavigateNext style={{ color: Colors.ThemeBlack, cursor: 'pointer' }} onClick={() => goToNext()} />
                    </div>
                </div>

                <div className={classes.mobileCalendarView} style={{ display: 'flex', justifyContent: 'space-bewteen' }}>
                    <div style={{ marginRight: '16px' }}>
                        <FilterButton handleOpenModal={handleOpenFilterModal} />
                    </div>

                    <div className={classes.mobileCalendarView}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">
                                {calendarView === 'month' ? 'Month' : calendarView === 'week' ? 'Week' : 'Day'}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChange}
                                label={'Week'}
                                placeholder={'Week'}>
                                <MenuItem onClick={() => goToMonthView()} className={classes.sortByStyle} value={'Month'}>
                                    Month
                                </MenuItem>
                                <MenuItem onClick={() => goToWeekView()} className={classes.sortByStyle} value={'Week'}>
                                    Week
                                </MenuItem>
                                <MenuItem onClick={() => goToDayView()} className={classes.sortByStyle} value={'Day'}>
                                    Day
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className={classes.calendarButtonsView}>
                    <button
                        className={calendarView === 'day' ? classes.viewActiveButtonStyle : classes.viewButtonStyle}
                        type="button"
                        onClick={() => goToDayView()}>
                        Day
                    </button>
                    <button
                        className={calendarView === 'week' ? classes.viewActiveButtonStyle : classes.viewButtonStyle}
                        type="button"
                        onClick={() => goToWeekView()}>
                        Week
                    </button>
                    <button
                        className={calendarView === 'month' ? classes.viewActiveButtonStyle : classes.viewButtonStyle}
                        type="button"
                        onClick={() => goToMonthView()}>
                        Month
                    </button>
                </div>
            </div>
        );
    };

    const openModal = (event) => {
        setDate(data.filter((el) => el.eventId === event.id));
        setModal(true);
    };
    const handleClose = () => {
        setDate('');
        setModal(false);
    };

    return (
        <div className={classes.calendarContWrapper}>
            <Calendar
                formats={{
                    dayFormat: `dd`,
                }}
                resourceAccessor={(resource) => {
                    return resource.capacity > 4 ? 0.3 : 0.1;
                }}
                components={{
                    toolbar: CustomToolbar,
                }}
                popup={true}
                toolbar={true}
                events={events}
                eventPropGetter={(events) => ({
                    style: {
                        background: events.color,
                        borderLeft: `3.5px solid ${events.borderColor}`,
                        color: '#545F7E',
                        borderRadius: '0 6px 6px 0',
                    },
                })}
                views={{ day: true, week: true, month: true }}
                localizer={localizer}
                onSelectEvent={openModal}
                startAccessor="start"
                endAccessor="end"
                className={classes.calendarCont}
                style={{
                    height: '806px',
                    marginBottom: '25px',
                }}
            />

            {/*{userType === false ? (*/}
            {/*    <HtmlTooltip title={<Box>You can't create event</Box>} placement="top-end">*/}
            {/*        <button className={classes.button} aria-describedby={id}>*/}
            {/*            <AddIcon className={classes.addButtonIcon} m={1} />*/}
            {/*        </button>*/}
            {/*    </HtmlTooltip>*/}
            {/*) : (*/}
            {/*    <button className={classes.button} onClick={handleClick} aria-describedby={id}>*/}
            {/*        <AddIcon className={classes.addButtonIcon} m={1} />*/}
            {/*    </button>*/}
            {/*)}*/}

            {modal ? (
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={'calendar-modal'}
                    open={true}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}>
                    <Fade in={true}>
                        <Popup
                            pageType={pageType}
                            handleEditEvent={handleEditEvent}
                            handleClickClose={handleClose}
                            data={date[0]}
                            open={modal}
                            getSize={getSize}
                        />
                    </Fade>
                </Modal>
            ) : null}

            {/*<Modal open={this.state.isAddModalOpen} toggle={this.toggleAddModal}>*/}
            {/*    // whatever is displayed when you click the calendar*/}
            {/*</Modal>*/}
        </div>
    );
};

export default MyCalendar;
