import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const myTicketsStyles = makeStyles(() => ({
    ticketPageWrapper: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 12px #0052E01A',

        '@media (min-width: 320px)': {
            padding: '150px 0 100px 0',
        },
        '@media (min-width: 768px)': {
            padding: '150px 0 100px 0',
        },
        '@media (min-width: 1240px)': {
            padding: '150px 42px 100px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '150px 238px 100px 238px',
        },
    },
    ticketHeaderWrapper: {
        display: 'flex',
        width: '100%',
        padding: '0 16px',
        flexDirection: 'column',

        '@media (min-width: 767px)': {
            padding: '0 42px',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        '@media (min-width: 1279px)': {
            padding: 0,
        },
    },
    tabsWrapper: {
        borderRadius: '8px',
        background: '#FFF',
        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.10)',
        padding: '2px',
        height: '40px',
        width: '100%',
        display: 'flex',
        marginTop: '27px',
        '@media (min-width: 767px)': {
            width: '350px',
            marginTop: 0,
        },
        '& button': {
            cursor: 'pointer',
        },
    },
    activeButton: {
        borderRadius: '8px',
        background: Colors.ThemeGreen,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '36px',
        color: '#FFF',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '19px',
        border: 'none',
        '@media (min-width: 767px)': {
            width: '173px',
        },
    },
    passiveButton: {
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '36px',
        color: '#4B5C68',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '19px',
        border: 'none',
        '@media (min-width: 767px)': {
            width: '173px',
        },
    },
    ticketBodyWrapper: {
        marginTop: '40px',
        display: 'flex',
    },
    ticketFilters: {
        width: '350px',
        height: '710px',
        padding: '40px 16px',
        borderRadius: '8px',
        background: '#FFF',
        marginRight: '88px',
        display: 'none',
        '@media (min-width: 1279px)': {
            display: 'block',
        },
    },
    ticketCardWrapper: {
        borderRadius: '8px',
        background: '#FFF',
        width: '100%',
        padding: '16px',
        marginBottom: '16px',
        height: 'auto',
        minHeight: '230px',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        padding: '16px 0',
    },
    cardIconText: {
        display: 'flex',
        alignItems: 'flex-start',
        marginRight: '16px',
        width: '100%',
    },
    textWrapper: {
        marginLeft: '16px',
        width: '100%',
    },
    title: {
        color: '#222',
        fontSize: '22px',
        fontWeight: '700',
        marginBottom: '8px',
    },
    subTitle: {
        color: 'rgba(34, 34, 34, 0.80)',
        fontSize: '14px',
        fontWeight: 400,
    },
    downloadWrapper: {
        borderRadius: '8px',
        background: '#FFF',
        padding: '10px 16px',
        border: '1px solid #C4C4C4',
        cursor: 'pointer',
        display: 'none',
        '@media (min-width: 767px)': {
            display: 'block',
        },
    },
    cardBody: {
        padding: '8px 0',
        borderTop: '1px solid #F4F4F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    cardImage: {
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    dateAndTimeWrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    date: {
        textAlign: 'center',
        padding: '0 16px',
        borderRight: '1px solid #F4F4F4',
    },
    dateDay: {
        color: '#139B56',
        fontSize: '22px',
        fontWeight: '700',
        whiteSpace: 'nowrap',
    },
    year: {
        color: '#139B56',
        fontSize: '16px',
        fontWeight: '600',
    },
    timeAndLocation: {
        textAlign: 'start',
        marginLeft: '24px',
        width: '100%',
    },
    time: {
        color: '#139B56',
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '4px',
    },
    location: {
        color: '#767676',
        fontSize: '12px',
        fontWeight: '600',
        width: '100%',
    },
    qrCodeText: {
        padding: '16px',
        background: '#FAFAFA',
        borderRadius: '8px',
        display: 'none',
        '@media (min-width: 767px)': {
            display: 'block',
        },
    },
    dateRange: {
        color: '#000',
        fontSize: '16px',
        fontWeight: 600,
    },
    myTicketsWrapper: {
        maxHeight: '90vh',
        overflow: 'auto',
    },
    miTicketFilter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterButtonMobile: {
        display: 'flex',
        '@media (min-width: 767px)': {
            display: 'none',
        },
    },
    filterButtonTablete: {
        display: 'none',
        '@media (min-width: 767px)': {
            display: 'flex',
            width: '100%',
            padding: '0 42px',
            justifyContent: 'flex-end',
            marginTop: '30px',
        },
    },

    footerIconId: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '4px',
        '@media (min-width: 767px)': {
            display: 'none',
        },
    },
    qrCodeTextMobile: {
        padding: '12px 16px',
        background: '#FAFAFA',
        borderRadius: '8px',
    },
    downloadMobileWrapper: {
        borderRadius: '8px',
        background: '#FFF',
        padding: '10px 16px',
        border: '1px solid #C4C4C4',
        cursor: 'pointer',
    },
}));
