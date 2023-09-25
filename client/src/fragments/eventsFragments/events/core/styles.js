import { makeStyles } from '@material-ui/core';
import { Backgrounds, Colors } from 'utils';
import { Background } from '../../../home/homeHeader/core';

export const CalendarStyles = makeStyles(() => ({
    CalendarStyle: {
        '& .mbsc-windows.mbsc-calendar-header': {
            background: '#F5FAFE',
            paddingBottom: '35px',
            '& .mbsc-icon>svg': {
                color: '#387DFF',
            },
        },

        '& .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-title': {
            fontSize: '30px',
            fontWeight: '600',
            color: '#387DFF',
        },

        '& .Mobile': {
            right: '0',
            width: '109px',
            position: 'absolute',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',

            '& .MuiInputBase-root': {
                fontSize: '16px',
                lineHeight: '22px',
                color: '#387DFF',
                display: 'flex',
                padding: '0 24px',
            },
            '& .MuiSelect-select.MuiSelect-select': {
                paddingRight: '0',
            },
            '& .MuiSelect-icon': {
                color: '#387DFF',
                top: 'calc(50% - 11px)',
                right: '10px',
            },
            '@media (min-width: 320px)': {
                display: 'block',
            },
            '@media (min-width: 768px)': {
                display: 'block',
            },
            '@media (min-width: 1240px)': {
                display: 'none',
            },
        },

        '& .google-cal-header-picker': {
            right: '0',
            width: '255px',
            position: 'absolute',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            '@media (min-width: 320px)': {
                display: 'none',
            },
            '@media (min-width: 768px)': {
                display: 'none',
            },
            '@media (min-width: 1240px)': {
                display: 'block',
            },
        },
        '& .makeStyles-CalendarStyle-631 .mbsc-windows.mbsc-segmented': {
            width: '255px',
        },

        '& .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-selected': {
            width: '81px',
            height: '28px',
            background: '#387DFF 0% 0% no-repeat padding-box',
            borderRadius: '20px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#FFFFFF',
            outline: 'none',
        },

        '& .mbsc-windows.mbsc-segmented-button.mbsc-button': {
            background: 'none',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#222222',
            '& :hover': {
                background: '#387DFF1A 0% 0% no-repeat padding-box',
                borderRadius: '20px',
            },
        },

        '& .mbsc-windows.mbsc-calendar-slide': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '6px',
        },
        '& .mbsc-windows.mbsc-segmented': {
            padding: '6px',
        },

        '& .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day-text': {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginLeft: '-5px',
        },
        '& .mbsc-windows.mbsc-calendar-label-background': {
            borderRadius: '0px 6px 6px 0px',
            opacity: '0.7',
        },

        '& .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-ltr': {
            textAlign: 'center',
            padding: '12px',
            fontSize: '14px',
            lineHeight: '19px',
            fontWeight: '600',
            color: '#222222',
            textTransform: 'uppercase',
        },

        '& .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day-labels .mbsc-calendar-day-inner': {
            minHeight: '90px',
        },

        '& Desktop': {
            '@media (min-width: 320px)': {
                display: 'none',
            },
            '@media (min-width: 768px)': {
                display: 'none',
            },
            '@media (min-width: 1240px)': {
                display: 'block',
            },
        },

        '& Mobile': {
            '@media (min-width: 320px)': {
                display: 'block',
            },
            '@media (min-width: 768px)': {
                display: 'block',
            },
            '@media (min-width: 1240px)': {
                display: 'none',
            },
        },
    },
}));

export const myEventsStyles = makeStyles(() => ({
    containerCont: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflowX: 'hidden',
        height: '100%',
    },
    filterCont: {
        width: '30%',
        margin: 0,
    },
    eventsCont: {
        width: '100%',
    },

    mapSearchStyle: {
        margin: '0 0 30px 0',
        display: 'flex',
        '@media (min-width: 320px)': {
            margin: '0 16px 30px 16px',
        },
        '@media (min-width: 768px)': {
            margin: '0 42px 30px 42px',
        },
        '@media (min-width: 1240px)': {
            margin: '0 42px 0 0',
        },
    },

    mapContentStyle: {
        height: '100vh',
    },
}));

export const calendarStyles = makeStyles(() => ({
    dateStyle: {
        fontSize: '30px',
        lineHeight: '30px',
        fontWeight: '600',
        color: Colors.ThemeBlack,

        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
        },
    },

    selectButtonsLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '39px',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'row',
            alignItems: 'center',
        },
        '@media (min-width: 1280px)': {
            flexDirection: 'row',
            alignItems: 'center',
        },
        '@media (min-width: 1920px)': {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    calendarNextPrewButtons: {
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginBottom: '10px',
        },
        '@media (min-width: 768px)': {
            marginBottom: 0,
        },
        '@media (min-width: 1280px)': {
            marginBottom: 0,
        },
        '@media (min-width: 1920px)': {
            marginBottom: 0,
        },
    },
    calendarButtonsView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '255px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '20px',
        '& button': {
            cursor: 'pointer',
            width: '79px',
        },
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'flex',
        },
    },

    mobileCalendarView: {
        '@media (min-width: 320px)': {
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },

        '& .MuiFormControl-root': {
            width: '109px',
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            '&:after': {
                margin: 0,
            },
            '@media (min-width: 320px)': {
                width: '100px',
            },
            '@media (min-width: 1240px)': {
                width: '109px',
            },
        },

        '& .MuiFormLabel-root': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#387DFF',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        '& .MuiInputBase-root': {
            marginTop: 0,
            width: '100%',
            borderBottom: 'none',
        },
        '& .MuiInput-underline': {
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: 'none',
                marginTop: 0,
            },
            '&:hover:before': {
                borderBottom: 'none',
            },
        },

        '& .MuiInputLabel-root': {
            marginTop: '-11px',
            marginLeft: '10px',
        },

        '& .MuiInputLabel-root.Mui-focused': {
            display: 'none',
        },
        '& .MuiSelect-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiSvgIcon-root': {
            color: '#387DFF',
        },
    },

    viewButtonStyle: {
        margin: '0 8px',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#222222',
        background: 'none',
        border: 'none',
        outline: 'none',

        '&:hover': {
            height: '28px',
            width: '79px',
            margin: '0 8px',
            background: '#7B7B7B1A',
            borderRadius: '20px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#222222',
            border: 'none',
            outline: 'none',
        },
    },

    viewActiveButtonStyle: {
        margin: '0 8px',
        padding: '2px 16px',
        background: '#49B776',
        borderRadius: '20px',
        fontSize: '16px',
        lineHeight: '22px',
        color: 'white',
        border: 'none',
        outline: 'none',
    },

    calendarContWrapper: {
        position: 'relative',
        '@media (min-width: 320px)': {
            margin: '0 16px 30px 16px',
        },
        '@media (min-width: 768px)': {
            margin: '0 42px 30px 42px',
        },
        '@media (min-width: 1240px)': {
            margin: '0',
        },
        '& .makeStyles-calendarCont-337 .rbc-month-row': {
            minHeight: '110px',
        },
    },

    button: {
        width: '40px',
        height: '40px',
        border: 'none',
        fontSize: '26px',
        color: 'white',
        background: Colors.ThemeGreen,
        boxShadow: '0px 3px 16px #00000033',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '90%',
        right: '32px',
        zIndex: 10,
        '&:hover': {
            cursor: 'pointer',
        },
        '@media (min-width: 320px)': {
            width: '30px',
            height: '30px',
        },
        '@media (min-width: 768px)': {
            width: '40px',
            height: '40px',
        },
        '@media (min-width: 1240px)': {
            width: '40px',
            height: '40px',
        },
    },
    addButtonIcon: {
        fontSize: '29px',

        '@media (min-width: 320px)': {
            fontSize: '20px',
        },
        '@media (min-width: 768px)': {
            fontSize: '20px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '29px',
        },
    },
    calendarCont: {
        // '& .rbc-time-view .rbc-row': {
        //     '&.rbc-today': {
        //         // background: 'transparent',
        //         color: 'red',
        //         background: '#387DFF',
        //     },
        // },
        '& .rbc-month-view': {
            width: '100%',

            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '6px',
            padding: '16px',
            border: 'none',

            // '@media (min-width: 320px)': {
            //   height: '500px',
            // },
            // '@media (min-width: 768px)': {
            //   height: '640px',
            // },
            // '@media (min-width: 1240px)': {
            //   marginBottom:'25px',
            //   height: '806px',
            //   // height: '592px',
            // },
            // '@media (min-width: 1920px)': {
            //   height: '633px',
            // },
        },
        '& .rbc-time-view': {
            width: '100%',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '6px',
            padding: '16px',
            border: 'none',

            '@media (min-width: 320px)': {
                height: '500px',
            },
            '@media (min-width: 768px)': {
                height: '640px',
            },
            '@media (min-width: 1240px)': {
                height: '592px',
            },
            '@media (min-width: 1920px)': {
                height: '633px',
            },
            /* '&::-webkit-scrollbar': {
width: '0.4em',
},
'&::-webkit-scrollbar-track': {
'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
},
'&::-webkit-scrollbar-thumb': {
backgroundColor: 'rgba(0,0,0,.1)',
outline: '1px solid slategrey',
}, */
        },
        '& .rbc-toolbar': {
            '& span:first-child': {
                // display: 'none',
            },
            '& .rbc-toolbar-label': {
                color: '#387DFF',
                fontSize: '30px',

                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
            },
        },
        '& .rbc-btn-group > button:first-child:not(:last-child)': {
            // color: 'white',
            // background: '#FFFFFF 0% 0% no-repeat padding-box',
            // boxShadow: '0px 0px 6px #0000001A',
            // borderRadius: '20px',
            '& :active': {
                border: 'none',
                background: '#387DFF 0% 0% no-repeat padding-box',
                borderRadius: '20px',
                color: '#FFFFFF',
            },
            '&:focus': {
                border: 'none',
                background: '#387DFF 0% 0% no-repeat padding-box',
                borderRadius: '20px',
                color: '#FFFFFF',
            },
        },
        '& .rbc-btn-group': {
            width: '255px',
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& button': {
                borderRadius: '20px',
                border: 'none',
                '&:hover': {
                    border: 'none',
                    background: '#387DFF1A 0% 0% no-repeat padding-box',
                    borderRadius: '20px',
                },
                '&:active': {
                    border: 'none',
                    background: '#F07379',
                    color: '#FFFFFF',

                    '&:focus': {
                        border: 'none',
                        background: '#387DFF 0% 0% no-repeat padding-box',
                        borderRadius: '20px',
                        color: '#FFFFFF',
                    },
                },
                '&:focus': {
                    border: 'none',
                    background: '#387DFF 0% 0% no-repeat padding-box',
                    borderRadius: '20px',
                    color: '#FFFFFF',
                },
            },

            '& .rbc-active': {
                border: 'none',
                background: '#387DFF 0% 0% no-repeat padding-box',
                borderRadius: '20px',
                '&:focus': {
                    border: 'none',
                },
            },
        },
        '& .rbc-time-header.rbc-overflowing': {
            border: 'none',
        },
        '& .rbc-month-header': {
            height: '54px',
        },
        '& .rbc-time-header': {
            '& .rbc-time-header-content': {
                '& .rbc-allday-cell': {
                    // display: 'none',
                },
            },
            '& .rbc-header': {
                // border: 'none',
                display: 'flex',
                flexDirection: 'column',
            },
            // height: '54px',
            '& .rbc-day-bg': {
                // border: 'none',
            },
        },
        '& .rbc-header': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            borderBottom: '1px solid #DDD',
        },
        '& .rbc-month-row': {
            borderLeft: '1px solid #DDD',
            borderRight: '1px solid #DDD',
        },
        '& .rbc-overlay': {
            width: '250px',
            height: 'auto',
        },
        '& .rbc-date-cell.rbc-now': {
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeGreen,
        },

        '& .rbc-row-bg': {
            borderBottom: '1px solid #DDD',
            '& .rbc-off-range-bg': {
                backgroundColor: '#FFFFFF',

                '& .rbc-off-range': {},
            },
            '& .rbc-day-bg': {
                padding: '5px',
            },
        },

        '& .rbc-time-column': {
            '& .rbc-events-container': {
                display: 'flex',
                flexDirection: 'row',

                '& .rbc-event': {
                    backgroundColor: '#EAF2FF',
                    border: 'none',
                    borderLeft: '3.5px solid #387DFF',
                    borderRadius: '0 6px 6px 0',
                    color: '#222222',
                    fontSize: '14px',
                    '@media (max-width: 768px)': {
                        width: '100%',
                    },
                    width: '100%',
                    margin: '5px',
                },
            },
            '&:nth-child(2)': {
                '& .rbc-events-container': {
                    display: 'flex',
                    flexDirection: 'row',

                    '& .rbc-event': {
                        backgroundColor: '#EAF2FF',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #387DFF',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
            '&:nth-child(3)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#EDEFF2',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #222222',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        margin: '5px',
                        fontSize: '14px',
                    },
                },
            },
            '&:nth-child(4)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#EDFCF0',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #4FDC6F',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
            '&:nth-child(5)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#FCF2E9',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #DF8127',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
            '&:nth-child(6)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#FEF1F1',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #F07379',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
            '&:nth-child(7)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#F1F0FD',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #766DE8',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
            '&:nth-child(8)': {
                '& .rbc-events-container': {
                    '& .rbc-event': {
                        backgroundColor: '#FCF2E9',
                        border: 'none',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #F7C606',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                        margin: '5px',
                    },
                },
            },
        },

        '& .rbc-row-content': {
            '& .rbc-show-more': {
                backgroundColor: '#387DFF',
                borderRadius: '0 6px 6px 0',
                color: '#FFFFFF',
                fontSize: '14px',
                height: '23px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '& .rbc-event': {
                backgroundColor: '#EDEFF2',
                '@media (max-width: 768px)': {
                    width: '100%',
                },
                width: '100%',
                borderLeft: '3.5px solid #222222',
                borderRadius: '0 6px 6px 0',
                color: '#222222',
                fontSize: '14px',
            },
            '& .rbc-row': {
                '& .rbc-off-range': {
                    '& a': {
                        color: 'transparent',
                    },
                },

                '& .rbc-row-segment': {
                    '& .rbc-show-more': {
                        backgroundColor: '#387DFF',
                        borderRadius: '0 6px 6px 0',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        height: '23px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    padding: '3px',

                    '& .rbc-event': {
                        backgroundColor: '#EAF2FF',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                        width: '100%',
                        borderLeft: '3.5px solid #387DFF',
                        borderRadius: '0 6px 6px 0',
                        color: '#222222',
                        fontSize: '14px',
                    },

                    '&:first-child': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#EAF2FF',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(2)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#EDEFF2',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #222222',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(3)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#EDFCF0',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #4FDC6F',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(4)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#FCF2E9',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #DF8127',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(5)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#FEF1F1',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #F07379',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(6)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        '& .rbc-event': {
                            backgroundColor: '#F1F0FD',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #766DE8',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                    '&:nth-child(7)': {
                        '& .rbc-show-more': {
                            backgroundColor: '#387DFF',
                            borderRadius: '0 6px 6px 0',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },

                        '& .rbc-event': {
                            backgroundColor: '#FCF2E9',
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                            width: '100%',
                            borderLeft: '3.5px solid #F7C606',
                            borderRadius: '0 6px 6px 0',
                            color: '#222222',
                            fontSize: '14px',
                        },
                    },
                },
            },
        },
    },
    /* plusEventCont: {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}, */

    plus: {
        color: '#FFFFFF',
        fontSize: '30px',
        fontWeight: '600',
    },
    popover: {
        zIndex: 1060,
        display: 'block',

        width: '300px',
        height: '273px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 6px #0000001A',
    },
}));

export const cardsStyles = makeStyles(() => ({
    GridCardWrapper: {
        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '30px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '30px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '40px',
        },
    },

    cardsContSearchAnfFilterWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1050px',
        margin: '0 auto',
        '@media (min-width: 1280px)': {
            maxWidth: '1040px',
        },
        '@media (min-width: 1440px)': {
            maxWidth: '99%',
        },
        // '@media (min-width: 1919px)': {
        //     padding: '0 30px',
        // },
    },

    cardsWrapper: {
        '@media (min-width: 320px)': {
            paddingRight: '0',
        },
        '@media (min-width: 1240px)': {
            paddingRight: '24px',
        },
        '@media (min-width: 1920px)': {
            paddingRight: '0',
        },
    },

    cardsContSearchAnfFilter: {
        display: 'flex',
        marginRight: '16px',

        '@media (min-width: 320px)': {
            margin: '0 16px 30px 16px',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
            margin: '0 42px 30px 42px',
        },
        '@media (min-width: 1240px)': {
            margin: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        '@media (min-width: 1920px)': {
            margin: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        // '@media (min-width: 320px)': {
        //
        //   margin: 0
        // },
        // '@media (min-width: 768px)': {
        //   flexDirection: 'column',
        //   margin: 0
        // },
        // '@media (min-width: 1240px)': {
        //   flexDirection: 'row',
        // },
    },

    ListViewButtonWrapper: {
        '@media (min-width: 320px)': {
            display: 'flex',
            justifyContent: 'space-between',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
            justifyContent: 'space-between',
        },
        '@media (min-width: 1240px)': {
            display: 'flex',
        },
    },

    ListViewButtonWrapperMySub: {
        '@media (min-width: 320px)': {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        '@media (min-width: 1240px)': {
            display: 'flex',
        },
    },
    ListViewWrapperButtons: {
        display: 'flex',
        marginLeft: '10px',
        // '@media (min-width: 320px)': {
        //     marginTop: '30px',
        // },
        // '@media (min-width: 768px)': {
        //     marginTop: '30px',
        // },
        '@media (min-width: 1240px)': {
            margin: 0,
        },
    },

    ListCardWrapper: {
        display: 'flex',
        overflow: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // margin-top: 90px;
        // justify-content: center;


        '@media (min-width: 768px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(50%, 1fr))',
            padding: '0 40px',
        },
        '@media (min-width: 1000px)': {
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(33%, 1fr))',
        },
        '@media (min-width: 1240px)': {
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(33%, 1fr))',
        },
    },

    ListViewButton: {
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& svg': {
            height: '20px',
            width: '20px',
        },
        '@media (min-width: 320px)': {
            margin: 0,
        },
        '@media (min-width: 768px)': {
            margin: 0,
        },
        '@media (min-width: 1240px)': {
            marginLeft: '42px',
        },
    },
}));

export const gridCardStyles = makeStyles(() => ({
    leftBorderStyle: {
        borderRadius: '0px 4px 4px 0px',
        height: '84px',
        marginTop: '8px',
        position: 'absolute',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
        '@media (min-width: 1919px)': {
            display: 'block',
        },
    },

    toolTip: {
        width: '100%',
        background: '#387DFF',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '16px',
    },

    gridImgStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    mobileBottomBorderStyle: {
        '@media (min-width: 320px)': {
            display: 'block',
            marginLeft: '16px',
            width: '93%',
            borderRadius: '4px 4px 0px 0px',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
        '@media (min-width: 1920px)': {
            display: 'none',
        },
    },

    gridInfoContent: {
        display: 'flex',
        cursor: 'pointer',
    },

    gridInfoContentNoCursor: {
        display: 'flex',
    },

    fullDate: {
        fontSize: '14px',
        lineHeight: '19px',
        color: '#222222',
    },

    eventTitle: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#222222',

        '@media (min-width: 320px)': {
            marginTop: '8px',
        },
        '@media (min-width: 768px)': {
            marginTop: '17px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '17px',
        },
    },
    eventAddress: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '19px',
        color: '#222222',
        marginTop: '6px',
        marginRight: '16px',
    },

    editCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '@media (min-width: 320px)': {
            marginTop: '14px',
        },
        '@media (min-width: 768px)': {
            marginTop: '18px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '18px',
        },
    },
    editIconCont: {
        backgroundColor: '#387DFF1A',
        padding: '5px',
        display: 'flex',
        borderRadius: '4px',
        marginRight: '6px',
        width: '24px',
        height: '24px',
    },
    deleteCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIconCont: {
        cursor: 'pointer',
        backgroundColor: '#F073791A',
        padding: '5px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '6px',
        width: '24px',
        height: '24px',
    },
    deleteEditText: {
        fontSize: '12px',
        lineHeight: '17px',
        color: '#222222',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
    },

    gridCardCont: {
        marginBottom: '30px',
        width: '100%',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',

        // '@media (min-width: 320px)': {
        //     width: '100%',
        // },
        // '@media (min-width: 768px)': {
        //     width: '100%',
        //     // height: '100px',
        // },
        // '@media (min-width: 1240px)': {
        //     width: '100%',
        //     // height: '100px',
        // },
    },
    gridImgCont: {
        objectFit: 'cover',
        margin: '8px 8px 0px 16px',
        borderRadius: '6px',

        '@media (min-width: 320px)': {
            width: '68px',
            height: '68px',
        },
        '@media (min-width: 768px)': {
            margin: '8px 8px 0px 40px',
            width: '84px',
            height: '84px',
        },
        '@media (min-width: 1240px)': {
            width: '84px',
            height: '84px',
            margin: '8px 8px 0px 8px',
        },
        '@media (min-width: 1920px)': {
            width: '84px',
            height: '84px',
            margin: '8px 8px 0px 8px',
        },
    },

    cardCont: {
        width: '285px',
        height: '239px',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        marginBottom: '30px',
        overflow: 'hidden',

        'MuiBox-root': {
            margin: 0,
        },
    },
    imgCont: {
        height: '70%',
        width: '100%',
        overflow: 'hidden',
    },
    infoCont: {
        margin: '8px',
        width: '221px',
        height: '84px',
        background: '#FAFAFA',
        borderRadius: '6px',
        padding: '8px 16px',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
    },
    infoContMobile: {
        margin: '8px',
        width: '93%',
        height: 'auto',
        marginLeft: '16px',
        background: '#F5FAFE 0% 0% no-repeat padding-box',
        borderRadius: '6px',
        padding: '6px',

        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
    },
    dateCont: {
        width: '20%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
    },
    day: {
        backgroundColor: '#387DFF1A',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        fontSize: '16px',
        fontWeight: '600',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
    },
    month: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: '#387DFF1A',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',

        fontSize: '14px',
    },
    descCont: {
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
    },

    title: {
        width: '100%',
        height: '50%',
        fontWeight: '600',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    adress: {
        width: '100%',
        height: '50%',
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    optCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        '@media (min-width: 320px)': {
            marginRight: '4px',
        },
        '@media (min-width: 768px)': {
            marginRight: '8px',
        },
        '@media (min-width: 1240px)': {
            marginRight: '8px',
        },
        '@media (min-width: 1920px)': {
            marginRight: '8px',
        },
    },

    badge: {
        '& img': {
            '@media (min-width: 320px)': {
                width: '32px',
                height: '32px',
            },
            '@media (min-width: 768px)': {
                width: '50px',
                height: '50px',
            },
            '@media (min-width: 1240px)': {
                width: '50px',
                height: '50px',
            },
            '@media (min-width: 1920px)': {
                width: '50px',
                height: '50px',
            },
        },
        position: 'absolute',
        '@media (min-width: 320px)': {
            marginTop: '-8px',
            marginLeft: '8px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-19px',
            marginLeft: '16px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '-15px',
            marginLeft: '-15px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '-15px',
            marginLeft: '-15px',
        },
    },
}));

export const listCardStyles = makeStyles(() => ({
    cardCont: {
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        'MuiBox-root': {
            margin: 0,
        },

        '@media (min-width: 320px)': {
            width: '300px',
            height: '257px',
            margin: '10px',
        },
        '@media (min-width: 768px)': {
            width: '336px',
            margin: '10px',
        },
        '@media (min-width: 1000px)': {
            width: '285px',
        },
        '@media (min-width: 1240px)': {
            width: '285px',
        },
        '@media (min-width: 1920px)': {
            width: '315px',
        },
    },
    imgCont: {
        height: '162px',
        width: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        '& img': {
            objectFit: 'cover',
            objectPosition: 'top',
        },
    },
    infoCont: {
        padding: '8px',
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    dateCont: {
        width: '41px',
        height: '61px',
        background: '#FAFAFA',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '8px'
    },
    dateIconCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'start',
        width: '100%',
        height: '30%',
        fontSize: '14px',
        backgroundColor: '#387DFF1A',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        padding: '16px 20px 4px 20px',
    },
    date: {
        width: '90%',
        height: '100%',
        fontSize: '14px',
        marginLeft: '5px',
    },
    dateDay: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '22px',
        letterSpacing: '0px',
        color: '#222222',
    },
    adress: {
        width: '90%',
        height: '100%',
        fontSize: '14px',
        marginLeft: '5px',
    },
    descCont: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
    },
    eventTitle: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#222222',
    },
    eventAddress: {
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '17px',
        color: '#222222',
        marginTop: '6px',
    },

    fullDate: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '19px',
        letterSpacing: '0px',
        color: '#222222',
    },

    title: {
        width: '100%',
        height: '50%',
        fontWeight: '600',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        color: '#222222',
    },
    desc: {
        width: '100%',
        height: '50%',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        color: '#222222',
    },

    optCont: {
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: '-8px',
        justifyContent: 'space-evenly',
    },
    editCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: '6px',
        cursor: 'pointer',
    },
    editIconCont: {
        backgroundColor: '#49B7761A',
        padding: '5px',
        width: '24px',
        height: '24px',
        display: 'flex',
        borderRadius: '4px',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // marginRight: '5px',
    },
    deleteCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    deleteIconCont: {
        cursor: 'pointer',
        backgroundColor: '#F073791A',
        padding: '5px',
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5px',
    },
}));

export const filtersStyles = makeStyles(() => ({
    // calendarView: {
    //     '@media (min-width: 320px)': {
    //         marginTop: '-183px',
    //     },
    //     '@media (min-width: 768px)': {
    //         marginTop: '-183px',
    //     },
    //     '@media (min-width: 1240px)': {
    //         marginTop: '0',
    //     },
    // },
    patEventView: {
        top: 30,
        // '@media (min-width: 320px)': {
        //     marginTop: '0',
        // },
        // '@media (min-width: 768px)': {
        //     marginTop: '0',
        // },
        // '@media (min-width: 1240px)': {
        //     marginTop: '0',
        // },
        // '@media (min-width: 1920px)': {
        //     marginTop: '0',
        // },
    },
    // mapView: {
    //     '@media (min-width: 320px)': {
    //         marginTop: '-74px',
    //     },
    //     '@media (min-width: 768px)': {
    //         marginTop: '-74px',
    //     },
    //     '@media (min-width: 1240px)': {
    //         marginTop: '0',
    //     },
    // },
    // listingView: {
    //     '@media (min-width: 320px)': {
    //         marginTop: '-74px',
    //     },
    //     '@media (min-width: 768px)': {
    //         marginTop: '-74px',
    //     },
    //     '@media (min-width: 1240px)': {
    //         marginTop: '0',
    //     },
    // },

    filterContNoEvent: {
        width: '250px',
        maxHeight: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        opacity: 1,
        padding: '40px 16px 40px 16px',
        overflow: 'hidden',
        overflowX: 'hidden',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            padding: '30px 16px 30px 16px',
            margin: '0 0 0 42px',
            display: 'block',
            width: '250px',
        },
        '@media (min-width: 1920px)': {
            margin: 0,
            display: 'block',
            width: '276px',
        },
    },

    filterCont: {
        width: '250px',
        maxHeight: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        opacity: 1,
        padding: '40px 16px 40px 16px',
        overflow: 'hidden',
        overflowX: 'hidden',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            padding: '30px 16px 30px 16px',
            // margin: '0 0 0 42px',
            display: 'block',
            width: '250px',
        },
        '@media (min-width: 1920px)': {
            margin: '0',
            display: 'block',
            width: '276px',
        },
    },

    filterContMobile: {
        position: 'absolute',
        zIndex: 9,
        maxHeight: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '0px 10px 10px 0px',
        opacity: 1,
        padding: '40px 16px 40px 16px',
        overflow: 'auto',
        overflowX: 'hidden',
        top: '30px',
        height: '80%',
        '@media (min-width: 320px)': {
            display: 'block',
            padding: '20px 20px 30px 20px',
            width: '300px',
            position: 'absolute',
        },
        '@media (min-width: 768px)': {
            width: '500px',
            display: 'block',
            padding: '40px',
            position: 'absolute',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
        '@media (min-width: 1920px)': {
            display: 'none',
        },
    },

    filterContMobileButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',

        '& p': {
            fontSize: '18px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: Colors.ThemeBlack,
        },
        '& button': {
            margin: 0,
        },

        '@media (min-width: 320px)': {
            display: 'flex',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
        '@media (min-width: 1920px)': {
            display: 'none',
        },
    },
}));

export const paginationStyles = makeStyles(() => ({
    pagesCont: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        '& .MuiPagination-root': {
            '& li': {
                border: '0.5px solid #DDE3F0',
                borderRadius: '4px',
                margin: '3px',
            },
        },
        '& .Mui-selected': {
            backgroundColor: '#4FDC6F',
            color: '#FFFFFF',
        },
    },
}));

export const popupStyles = makeStyles(() => ({
    popupCont: {
        width: '300px',
        minHeight: '273px',
        maxHeight: '300px',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 6px #0000001A',
        zIndex: 20,
        position: 'absolute',
        inset: '0px auto auto 0px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '15px',
        margin: 'auto',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    small: {
        height: '35px',
        width: '35px',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '93%',
        transform: 'rotate(45deg)',
        marginLeft: '10%',
        left: 0,
        zIndex: 100,
        boxShadow: '8px 8px 12px #0052E01A',
    },
    buttonsCont: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        '& button': {
            cursor: 'pointer',
            marginLeft: '20px',
            borderRadius: '40px',
            width: '24px',
            height: '24px',
            background: '#2222221A 0% 0% no-repeat padding-box;',
            border: 'none',
            outline: 'none',
        },
    },
    deleteIconCont: {
        width: '24px',
        height: '24px',
        padding: '4px',
        marginRight: '8px',
        cursor: 'pointer',
    },
    editIconCont: {
        width: '24px',
        height: '24px',
        padding: '4px',
        cursor: 'pointer',
    },
    dataCont: {
        width: '100%',
        display: 'flex',
        marginTop: '10px',
    },
    imgCont: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            objectFit: 'cover',
            borderRadius: '8px',
        },
    },
    infoCont: {
        marginLeft: '12px',
        display: 'flex',
        flexDirection: 'column',
    },
    titleCont: {
        '& p': {
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            color: '#222222',
        },
    },
    dateCont: {
        fontSize: '14px',
        color: '#222222',
        width: '100%',
    },
    text: {
        fontSize: '14px',
        color: '#222222',

        '& p': {
            margin: 0,
        },
    },
    detailsCont: {
        marginTop: '16px',
    },
    dateMonth: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0px',
        color: '#222222',
    },
    typeCont: {
        display: 'flex',
        width: '100%',
        marginBottom: '10px',
        alignItems: 'center',
        '& p': {
            fontSize: '14px',
            color: Colors.ThemeBlack,
        },
    },

    moreCont: {
        '& button': {
            background: Colors.ThemeGreen,
            borderRadius: '24px',
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: '600',
            color: '#FFFFFF',
            width: '122px',
            height: '24px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
        },
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: '12px',
        position: 'absolute',
        right: '12px',
    },
    chip: {
        fontSize: '12px',
        color: Colors.ThemeGreen,
        background: '#F4F4F4',
        borderRadius: '12px',
        height: '22px',
    },
}));

export const searchBarStyles = makeStyles(() => ({
    searchCont: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
    },
    searchContButtonsAndSelect: {
        width: '35%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
    },
    searchBarCont: {
        marginRight: '80px',
        width: '65%',
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiFilledInput-input': {
            padding: '10px 12px 12px 10px',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiInputLabel-filled': {
            color: '#22222280',
            marginTop: '-7px',
        },
        '& .MuiFilledInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
        },
        '& .MuiInput-underline': {
            '&:hover:before': {
                borderBottom: 'none',
            },
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: 'none',
            },
            '&:hover': {
                borderBottom: 'none',
            },
        },
        '& .MuiInput-formControl': {
            margin: 0,
        },
        '& .MuiFilledInput-underline': {
            '&:before': {
                borderBottom: 0,
            },
            '&:after': {
                borderBottom: 0,
            },
        },
    },
    ListViewButton: {
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gridViewButton: {
        width: '40px',
        height: '40px',
        background: '#387DFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 16px #387DFF80',
        borderRadius: '6px',
        marginRight: '16px',
        padding: '10px',
    },
    listViewButton: {
        width: '40px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        marginRight: '40px',
        borderRadius: '6px',
        padding: '10px',
    },

    ////////////////////
    selectCont: {
        width: ' 183px',
    },
    selectField: {
        width: '100%',
        '& .MuiFormControl-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
            '&:after': {
                margin: 0,
            },
        },
        '& .MuiInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        '& .MuiInputBase-root': {
            marginTop: 0,
            width: '100%',
            borderBottom: 'none',
        },
        '& .MuiInput-underline': {
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: 'none',
                marginTop: 0,
            },
            '&:hover:before': {
                borderBottom: 'none',
            },
        },

        '& .MuiFormLabel-root': {
            color: '#22222280',
            fontSize: '14px',
        },
        '& .MuiInputLabel-root': {
            marginTop: '-8px',
            marginLeft: '10px',
        },

        '& .MuiInputLabel-root.Mui-focused': {
            display: 'none',
        },
        '& .MuiSelect-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiSvgIcon-root': {
            color: Colors.ThemeGreen,
        },
    },
}));

export const mapStyles = [
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] },
    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] },
    { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] },
    { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] },
    { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] },
    { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] },
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] },
    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] },
    { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] },
    { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] },
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] },
];

export const searchedListStyles = makeStyles(() => ({
    searchListWrapper: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        position: 'absolute',
        zIndex: '10',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5px',
        padding: '6px',

        '@media (min-width: 320px)': {
            width: '60%',
            marginLeft: '16px',
            marginTop: '-29px',
        },
        '@media (min-width: 768px)': {
            width: '79%',
            marginLeft: '42px',
        },
        '@media (min-width: 1240px)': {
            width: '35%',
            maxWidth: '490px',
            marginLeft: 0,
        },
    },

    searchListClickable: {
        cursor: 'pointer',
        padding: '9px 16px',
        '&:hover': {
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '6px',
        },
    },

    searchListText: {
        fontSize: '16px',
        lineHeight: '22px',
        color: '#222222',
    },
}));
