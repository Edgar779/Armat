import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const calendarFilterStyles = makeStyles((theme) => ({
    dateFilterContCalendar: {
        position: 'absolute',
        zIndex: 999,
        '& .rdrDefinedRangesWrapper': {
            display: 'none',
        },
        '& .rdrWeekDay': {
            color: '#545F7E',
            fontSize: '12px',
            fontWeight: '600',
        },
        '& .rdrDayNumber span': {
            color: '#545F7E',
            fontSize: '14px',
        },
        '& .rdrEndEdge': {
            color: '#49B776 !important',
        },
        '& .rdrDayToday .rdrDayNumber span:after': {
            background: 'transparent !important',
        },
        '& .rdrCalendarWrapper.rdrDateRangeWrapper': {
            width: '258px',
            marginLeft: '-15px',
            zIndex: 999,
            backgroundColor: '#FFFFFF',
            color: Colors.ThemeBlack,
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            '@media (min-width: 320px)': {
                width: '290px',
            },
            '@media (min-width: 768px)': {
                width: '247px',
            },
            '@media (min-width: 1240px)': {
                width: '247px',
            },
            '@media (min-width: 1920px)': {
                width: '272px',
            },
        },
        '& .rdrMonthAndYearWrapper': {
            height: '0px',
            '&select': {
                color: Colors.ThemeBlack,
            },
        },
        '& .rdrDateDisplayWrapper': {
            display: 'none',
        },
        '& .rdrMonthAndYearPickers': {
            display: 'none',
        },
        '& .rdrMonthName': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: Colors.ThemeBlack,
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.8px',
            marginLeft: '-8px',
        },
        '& .rdrNextPrevButton': {
            marginTop: '50px',
            backgroundColor: '#FFFFFF',
            color: '#545F7E',
        },

        '& .rdrPprevButton i': {
            position: 'absolute',
            right: '40px',
            borderWidth: '10px 8px 10px 8px',
            outline: 'none',
            top: 25,
        },
        '& .rdrNextButton  i': {
            borderWidth: '10px 4px 10px 8px',
        },
    },

    calendarCont: {
        width: '100%',
        minHeight: '230px',
        '& .MuiPickersStaticWrapper-staticWrapperRoot': {
            padding: 0,
            margin: 0,
            '& .MuiPickersBasePicker-container': {
                '& .MuiToolbar-root': {
                    display: 'none',
                },
                '& .MuiPickersBasePicker-pickerView': {
                    marginLeft: '-16%',
                },
            },
        },
        '& .MuiPickersCalendarHeader-dayLabel': {
            width: '35px',
            margin: '0',
        },
        '& .MuiPickersDay-day': {
            width: '35px',
            height: '35px',
            margin: '0',
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
            width: '276px',
            marginLeft: '30px',
            '& button': {
                '&:first-child': {
                    marginLeft: '64%',
                },

                '&:nth-child(2)': {
                    marginRight: '10%',
                },
            },
        },
        '& .MuiPickersCalendarHeader-transitionContainer': {
            marginLeft: '-85%',
            '& .MuiTypography-body1': {
                color: Colors.ThemeGreen,
                fontSize: '16px',
                fontWeight: '600',
            },
        },
    },

    calendarWrapper: {
        width: '100%',
    },
}));

export const categoryFilterStyles = makeStyles((theme) => ({
    multipleSelectCategories: {
        '& .MuiInputLabel-outlined': {
            fontSize: '14px',
            lineHeight: '19px',
            color: '#545F7E80',
        },
    },

    categCont: {
        width: '100%',
        minHeight: '78px',
        marginBottom: '40px',
    },
    headerCont: {
        width: '100%',
        paddingBottom: '16px',
    },
    header: {
        color: Colors.ThemeBlack,
        fontSize: '16px',
        fontWeight: '600',
        '& .MuiTypography-root': {
            color: Colors.ThemeBlack,
            fontSize: '16px',
            fontWeight: '600',
        },
    },
    textField: {
        '& .MuiAutocomplete-root': {
            width: '100%',
            '&:focus': {
                border: 'none',
            },
        },

        '& .MuiAutocomplete-hasClearIcon': {
            width: '100%',
        },
        '& .MuiInput-root': {
            borderRadius: '6px',
            border: '1px solid #DDE3F0',
            width: '100%',
            marginTop: 0,
        },
        '& .MuiFormControl-root': {
            borderRadius: '6px',
            width: '100%',
            marginTop: 0,
        },

        '& .MuiFormLabel-root': {
            color: '#545F7E80',
            fontSize: '14px',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiInputLabel-filled': {
            color: '#545F7E80',
            marginTop: '-7px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            display: 'none',
        },
        '& .MuiInputBase-formControl': {
            margin: '0',
            padding: '0px 5px 0px 5px',
            textDecoration: 'none',
            '&:hover': {
                border: '1px solid #387DFF',
            },
            '&:focus': {
                border: '2px solid #387DFF',
            },
        },
        '& .MuiInputBase-root': {},
        '& .MuiOutlinedInput-root': {
            '&:hover': {
                borderColor: '#387DFF',
            },
        },
        '& .MuiSelect-select': {
            '&:focus': { backgroundColor: 'transparent' },
            '&:hover:before': {
                borderBottom: 'none',
            },
            marginTop: '0',
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
        },
        '& .MuiInput-formControl': {
            margin: 0,
            marginTop: 0,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #DDE3F0',
            '&:hover': {
                border: '1px solid #DDE3F0',
            },
        },
    },

    typeCont: {
        width: '100%',
        height: '114px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
    },
    headerContRadio: {
        width: '100%',
        paddingBottom: '10px',
    },
    headerRadio: {
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
    },
    radioCont: {
        width: '100%',
        height: '100%',
        '& .MuiFormControl-root': {
            width: '100%',
            height: '100%',
        },
        '& .MuiFormGroup-root': {
            marginLeft: '4%',
        },
        '& .MuiFormControlLabel-root': {
            paddingBottom: '10px',
        },
        '& .MuiRadio-colorSecondary': {
            color: Colors.ThemeGreen,
        },
        '& .MuiTypography-root': {
            color: '#222222CC',
            marginLeft: '16px',
            fontSize: '14px',
            lineHeight: '19px',
        },
        '& .MuiButtonBase-root': {
            padding: 0,
        },
        '& svg.MuiSvgIcon-root.PrivateRadioButtonIcon': {
            width: '24px',
            height: '24px',
            padding: '10px',
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: Colors.ThemeGreen,
        },
    },
}));

export const dateFilterStyles = makeStyles((theme) => ({
    backDrop: {
        top: 0,
        right: 0,
        background: 'transparent',
        width: '100%',
        height: '100vh',
        position: 'fixed',
    },
    dateCont: {
        width: '100%',
        height: '90px',
        marginBottom: '40px',
    },
    startAndEndDate: {
        display: 'flex',
        width: '100%',
        height: '80%',
        cursor: 'pointer',
    },
    startDateCont: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    endDateCont: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    toCont: {
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toText: {
        fontSize: '16px',
        color: '#222222',
    },
    label: {
        width: '100%',
        height: '60%',
        borderBottom: '0.5px solid #545F7E80',
    },
    labelText: {
        fontSize: '14px',
        color: '#222222CC',
    },
    date: {
        width: '100%',
        height: '40%',
        marginTop: '10px',
    },
    dateText: {
        fontSize: '10px',
        color: '#222222CC',
    },
    headerCont: {
        width: '100%',
        paddingBottom: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cleareDates: {
        fontSize: '12px',
        fontWeight: '600',
        color: ' #F07379',
        cursor: 'pointer',
    },
    header: {
        color: Colors.ThemeBlack,
        fontSize: '16px',
        fontWeight: '600',
    },

    dateFilterCont: {
        position: 'absolute',
        zIndex: 999,

        '& .rdrEndEdge': {
            color: '#49B776 !important',
        },
        '& .rdrDayToday .rdrDayNumber span:after': {
            background: 'transparent !important',
        },
        '& .rdrWeekDay': {
            color: '#545F7E',
            fontSize: '12px',
            fontWeight: '600',
        },
        '& .rdrDayNumber span': {
            color: '#545F7E',
            fontSize: '14px',
        },
        '& .rdrDefinedRangesWrapper': {
            display: 'none',
        },
        '& .rdrCalendarWrapper.rdrDateRangeWrapper': {
            zIndex: 999,
            backgroundColor: '#FFFFFF',
            color: Colors.ThemeBlack,
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 12px #0052E01A',
            borderRadius: '6px',
        },
        '& .rdrMonthAndYearWrapper': {
            height: '0px',
            '&select': {
                color: Colors.ThemeBlack,
            },
        },
        '& .rdrDateDisplayWrapper': {
            display: 'none',
        },
        '& .rdrMonthAndYearPickers': {
            display: 'none',
        },
        '& .rdrMonthName': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: Colors.ThemeBlack,
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.8px',
        },
        '& .rdrNextPrevButton': {
            marginTop: '50px',
            backgroundColor: '#FFFFFF',
            color: '#545F7E',
        },
        '& .rdrPprevButton i': {
            borderWidth: '10px 8px 10px 8px',
        },
        '& .rdrNextButton  i': {
            borderWidth: '10px 4px 10px 8px',
        },
    },
    dateFilterContMobile: {
        position: 'absolute',
        zIndex: 999,

        '& .rdrEndEdge': {
            color: '#49B776 !important',
        },
        '& .rdrDayToday .rdrDayNumber span:after': {
            background: 'transparent !important',
        },
        '& .rdrWeekDay': {
            color: '#545F7E',
            fontSize: '12px',
            fontWeight: '600',
        },
        '& .rdrDayNumber span': {
            color: '#545F7E',
            fontSize: '14px',
        },
        '@media (min-width: 320px)': {
            left: '-16px',
            marginTop: '-2px',
            '& .rdrMonth': {
                width: '292px',
            },
        },
        '@media (min-width: 768px)': {
            left: '2px',
            marginTop: '-2px',
            '& .rdrMonth': {
                width: '292px',
            },
        },
        '@media (min-width: 1280px)': {
            left: '2px',
            marginTop: '-2px',
            '& .rdrMonth': {
                width: '292px',
            },
        },

        '& .rdrDefinedRangesWrapper': {
            display: 'none',
        },
        '& .rdrCalendarWrapper.rdrDateRangeWrapper': {
            zIndex: 999,
            backgroundColor: '#FFFFFF',
            color: Colors.ThemeBlack,
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 12px #0052E01A',
            borderRadius: '6px',
        },
        '& .rdrMonthAndYearWrapper': {
            height: '0px',
            '&select': {
                color: Colors.ThemeBlack,
            },
        },
        '& .rdrDateDisplayWrapper': {
            display: 'none',
        },
        '& .rdrMonthAndYearPickers': {
            display: 'none',
        },
        '& .rdrMonthName': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: Colors.ThemeBlack,
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.8px',
        },
        '& .rdrNextPrevButton': {
            marginTop: '50px',
            backgroundColor: '#FFFFFF',
            color: '#545F7E',
        },
        '& .rdrPprevButton i': {
            borderWidth: '10px 8px 10px 8px',
        },
        '& .rdrNextButton  i': {
            borderWidth: '10px 4px 10px 8px',
        },
    },
}));

export const orgFilterStyles = makeStyles((theme) => ({
    orgCont: {
        width: '100%',
    },
    headerCont: {
        width: '100%',
        paddingBottom: '16px',
    },
    header: {
        color: Colors.ThemeBlack,
        fontSize: '16px',
        fontWeight: 'bold',
    },
    checkCont: {
        width: '100%',
        height: '110px',
        overflow: 'auto',
        '& .MuiFormControl-root': {
            width: '100%',
            height: '110px',
        },
        '& .MuiFormGroup-root': {
            marginLeft: '8px',
        },
        '& .MuiFormControlLabel-root': {
            paddingBottom: '10px',
        },
        '& .MuiRadio-colorSecondary': {
            color: Colors.ThemeGreen,
        },
        '& .MuiButtonBase-root': {
            padding: 0,
        },
        '& svg.MuiSvgIcon-root.PrivateRadioButtonIcon': {
            width: '24px',
            height: '24px',
            padding: '10px',
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: Colors.ThemeGreen,
        },
        '& .MuiIconButton-label': {
            color: Colors.ThemeGreen,
        },
        '& .MuiTypography-root': {
            color: '#222222CC',
            marginLeft: '16px',
            fontSize: '14px',
            lineHeight: '14px',
        },
    },
    seeMore: {
        fontSize: '14px',
        color: Colors.ThemeBlack,
        cursor: 'pointer',
        fontWeight: '600',
    },
}));

export const timeFilterStyles = makeStyles((theme) => ({
    backDrop: {
        top: 0,
        right: 0,
        background: 'transparent',
        width: '100%',
        height: '100vh',
        position: 'fixed',
    },
    dateCont: {
        width: '100%',
        marginTop: '105px',
        height: '90px',
        marginBottom: '40px',
    },
    timeFilter: {
        '& .MuiIconButton-root': {
            padding: 0,
        },
    },
    startAndEndDate: {
        display: 'flex',
        width: '100%',
        height: '80%',
    },
    startDateCont: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    endDateCont: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    toCont: {
        margin: '0 15px 0 5px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toText: {
        fontSize: '16px',
        color: '#222222',
    },
    label: {
        width: '100%',
        height: '60%',
    },
    labelText: {
        fontSize: '10px',
        color: '#222222CC',
    },
    date: {
        width: '100%',
        height: '40%',
        marginTop: '10px',
    },
    dateText: {
        fontSize: '14px',
        color: '#222222CC',
    },
    headerCont: {
        width: '100%',
        paddingBottom: '16px',
    },
    header: {
        color: Colors.ThemeBlack,
        fontSize: '16px',
        fontWeight: '600',
    },
    timeFilterCont: {
        zIndex: 1,
        '& .MuiToolbar-root': {
            display: 'none',
        },
        '& .MuiPickersClock-container': {
            width: '250px',
            height: '200px',
        },
    },
}));

export const typeFilterStyles = makeStyles((theme) => ({
    typeCont: {
        width: '100%',
        height: '114px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
    },
    headerCont: {
        width: '100%',
        paddingBottom: '10px',
    },
    header: {
        color: '#387DFF',
        fontWeight: 'bold',
    },
    radioCont: {
        width: '100%',
        height: '100%',
        '& .MuiFormControl-root': {
            width: '100%',
            height: '100%',
        },
        '& .MuiFormGroup-root': {
            marginLeft: '4%',
        },
        '& .MuiFormControlLabel-root': {
            paddingBottom: '10px',
        },
        '& .MuiRadio-colorSecondary': {
            color: '#387DFF',
        },
        '& .MuiTypography-root': {
            color: '#545F7E',
            marginLeft: '16px',
            fontSize: '14px',
            lineHeight: '19px',
        },
        '& .MuiButtonBase-root': {
            padding: 0,
        },
        '& svg.MuiSvgIcon-root.PrivateRadioButtonIcon': {
            width: '24px',
            height: '24px',
            padding: '10px',
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: '#387DFF',
        },
    },
}));
