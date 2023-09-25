import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../utils';

export const availabilityStyles = makeStyles(() => ({
    availableHours: {
        width: '100%',
        padding: '16px',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    availableHoursHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 10,
    },
    availableHoursBlock: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        overflow: 'hidden',
        height: 'auto',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        paddingLeft: 10,
    },
    noItems: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B5C6880',
        margin: '0 auto',
    },
    availableHoursTitle: {
        color: '#4B5C68',
        fontSize: 18,
        fontWeight: 'bold',
    },
    availableHoursBox: {
        display: 'flex',
        width: '100%',
        borderRadius: 4,
        marginBottom: 15,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        padding: '13px 24px',
    },
    availableHoursBoxHeader: {
        width: '70px',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    availableHoursBoxBody: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        gap: '8px',
    },
    availableHoursBoxBodyInfo: {
        color: '#222222CC',
        fontSize: 16,
    },
    AddAvailabilityScheduel: {
        width: '634px',
        padding: '40px',
        borderRadius: '8px',
        backgroundColor: 'white',
        position: 'relative',
        '@media (max-width: 1400px)': {
            width: '618px',
            padding: '32px',
        },
    },

    availableHoursDayName: {
        color: '#347AF0',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 16,
    },
}));

export const modalsStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        background: '#FFFFFF',
        borderRadius: '10px',

        '@media (min-width: 320px)': {
            width: '343px',
            height: '386px',
        },
        '@media (min-width: 768px)': {
            width: '606px',
            height: '469px',
        },
        '@media (min-width: 1240px)': {
            width: '606px',
            height: '469px',
        },
        '@media (min-width: 1920px)': {
            width: '626px',
            height: '559px',
        },
    },

    paperPadding: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        '@media (min-width: 320px)': {
            padding: '0 14px 0 14px',
        },
        '@media (min-width: 768px)': {
            padding: '0 40px 0 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '0 50px 0 50px',
        },
        '@media (min-width: 1920px)': {
            padding: '0 50px 0 50px',
        },
    },
    paperButtons: {
        display: 'flex',

        '@media (min-width: 320px)': {
            margin: '30px 14px 0 14px',
        },
        '@media (min-width: 768px)': {
            margin: '30px 40px 0 40px',
        },
        '@media (min-width: 1240px)': {
            margin: '30px 50px 0 50px',
        },
        '@media (min-width: 1920px)': {
            margin: '40px 50px 0 50px',
        },
    },
    closeButton: {
        justifyContent: 'flex-end',
    },

    UnsubscribeEventModalTitle: {
        fontSize: '28px',
        margin: ' 20px 0 16px 0',
        fontWeight: 'bold',
        color: 'black',

        '@media (min-width: 320px)': {
            fontSize: '17px',
        },
        '@media (min-width: 768px)': {
            fontSize: '28px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '28px',
            marginTop: '40px',
        },
    },

    UnsubscribeEventModalDes: {
        fontSize: '16px',
        color: Colors.theme.lightGunmetal,

        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
        },
    },

    image: {
        width: '200px',
        height: '200px',
        '@media (min-width: 320px)': {
            width: '150px',
            height: '150px',
        },
        '@media (min-width: 768px)': {
            width: '200px',
            height: '200px',
        },
        '@media (min-width: 1240px)': {
            width: '200px',
            height: '200px',
            marginTop: '-10px',
        },
        '@media (min-width: 1920px)': {
            width: '250px',
            height: '250px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },

    rather: {
        height: '48px',
        width: '100%',
        background: Colors.theme.main,
        borderRadius: '24px',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: '600',
        color: '#FFFFFF',

        '@media (min-width: 320px)': {
            height: '42px',
        },
        '@media (min-width: 768px)': {
            height: '48px',
        },
        '@media (min-width: 1240px)': {
            height: '48px',
        },
        '@media (min-width: 1920px)': {
            height: '48px',
        },
        '&:hover': {
            background: '#FFFFFF1A 0% 0% no-repeat padding-box',
        },
    },

    unsubscribe: {
        borderRadius: '24px',
        marginLeft: '15px',
        height: '48px',
        width: '100%',
        background: '#7B7B7B1A',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: '600',
        color: Colors.theme.lightGunmetal,
    },

    availableScheduleWrapper: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: '8px',
        borderRadius: 8,
    },
    availableScheduleTitle: {
        fontSize: 32,
        color: '#4B5C68',
        fontWeight: 'bold',
        lineHeight: '48px',
        marginBottom: 20,
    },
    closeBtn: {
        position: 'absolute',
        right: 3,
        top: 11,
    },
    timeRow: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        padding: '16px 24px',
        borderRadius: 8,
        display: 'flex',
        // marginRight: "16px",

        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'row',
        },

        '&:not(:last-child)': {
            marginBottom: 16,
        },
    },
    timeRowWrapper: {
        display: 'flex',
        '@media (min-width: 320px)': {
            marginTop: '16px',
        },
        '@media (min-width: 768px)': {
            marginTop: 0,
        },
    },
    scrollable: {
        maxWidth: '800px',
        width: 'auto',
        // display: 'grid',
        // gridTemplateColumns: '1fr 1fr',
        // maxHeight: '100%',
        padding: '2px',
        overflow: 'hidden',
        overflowY: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        // '@media (min-width: 320px)': {
        //     gridTemplateColumns: '1fr',
        // },
        // '@media (min-width: 1240px)': {
        //     gridTemplateColumns: '1fr 1fr',
        // },
    },
    dayName: {
        fontSize: 16,
        color: Colors.theme.main,
        lineHeight: '20px',
        textTransform: 'uppercase',
        marginRight: 16,
        fontWeight: 'bold',
        maxWidth: 40,
        width: '100%',
    },
    addTime: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& img': {},
        '& span': {
            fontSize: '16px',
            color: '#22222299',
            lineHeight: '19px',
            marginLeft: '10px',
        },
    },
    times: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
    },
    moreHoursBtn: {
        fontSize: 14,
        color: Colors.theme.main,
        lineHeight: '20px',
        cursor: 'pointer',
        marginTop: 8,
        display: 'inline-block',
    },
    timeInputStyle: {
        border: `1px solid #49B776`,
        borderRadius: 8,
        padding: '2px 5px',
        '& .MuiInputBase-root::before': {
            content: 'revert!important',
        },
        '& .MuiInputBase-root::after': {
            content: 'revert!important',
        },
        '& .Mui-disabled': {
            color: '#4B5C6880',
        },
    },
    smallLine: {
        margin: '0 5px',
        color: Colors.theme.main,
    },
    customCheckbox: {
        color: Colors.theme.main,
        padding: 0,
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#49B776 !important',
        },
        '&.Mui-checked': {
            backgroundColor: 'white',
            color: Colors.theme.main,
        },
        '& .MuiSvgIcon-root': {
            width: 24,
            height: 24,
        },
    },
    notAvailableText: {
        fontSize: 14,
        color: '#222222',
        fontWeight: 400,
        lineHeight: '20px',
        paddingLeft: 6,
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 420px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },
    infoModalWrapper: {
        width: '645px',
        padding: '32px',
        borderRadius: '8px',
        backgroundColor: 'white',
        position: 'relative',
    },

    removeTimeBtn: {
        color: '#FE7070',
        fontSize: 14,
        cursor: 'pointer',
        marginLeft: '8px',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },

    removeTimeBtnMobile: {
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

    closeCheckbox: {
        marginLeft: '24px',
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            right: '60px',
            marginLeft: '10px',
            marginBottom: '5px',
        },
        '@media (min-width: 768px)': {
            marginTop: '0',
            position: 'relative',
            right: '0',
            marginBottom: 0,
            marginLeft: '24px',
        },
    },
    hoursOf: {
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '27px',
        color: '#222222',
        marginBottom: '24px',
    },
}));
