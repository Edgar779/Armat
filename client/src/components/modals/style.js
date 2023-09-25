import { makeStyles } from '@material-ui/core';
import { Backgrounds, Colors } from '../../utils';

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
        color: Colors.ThemeBlack,

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
        color: Colors.ThemeLightGray,

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
        background: Colors.ThemeGreen,
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
            background: Backgrounds.hoverGreen,
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
        color: Colors.ThemeLightGray,
    },

    availableScheduleWrapper: {
        width: '100%',
        backgroundColor: 'white',
        padding: '40px 0',
        borderRadius: 8,
        position: 'relative',
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
        marginRight: '16px',

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
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxHeight: '100%',
        padding: '10px',
        overflow: 'hidden',
        overflowY: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '@media (min-width: 320px)': {
            gridTemplateColumns: '1fr',
        },
        '@media (min-width: 1240px)': {
            gridTemplateColumns: '1fr 1fr',
        },
    },
    dayName: {
        fontSize: 16,
        color: Colors.ThemeGreen,
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
        color: Colors.ThemeGreen,
        lineHeight: '20px',
        cursor: 'pointer',
        marginTop: 8,
        display: 'inline-block',
    },
    timeInputStyle: {
        border: `0.5px solid #BEBEBE`,
        borderRadius: 8,
        padding: '1px 5px',
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
        color: Colors.ThemeGreen,
    },
    customCheckbox: {
        color: Colors.ThemeGreen,
        padding: 0,
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#49B776 !important',
        },
        '&.Mui-checked': {
            backgroundColor: 'white',
            color: Colors.ThemeGreen,
        },
        '& .MuiSvgIcon-root': {
            width: 24,
            height: 24,
        },
    },
    notAvailableText: {
        fontSize: 14,
        color: '#4B5C68',
        lineHeight: '20px',
        textTransform: 'capitalize',
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
        margin: '0 8px',
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
        marginLeft: '100px',
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
            marginLeft: '100px',
        },
    },
}));
