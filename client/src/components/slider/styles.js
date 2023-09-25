import { makeStyles } from '@material-ui/core';

export const carouselStyle = makeStyles({
    carouselWrapper: {
        margin: '40px 0',
    },

    leftButton: {
        width: '40px',
        height: '40px',
        background: '#49B776 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #387DFF33',
        borderRadius: '24px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },

    sliderWrapper: {
        display: 'flex',
        width: '100%',
        '& .slider-list': {
            marginBottom: '25px!important',
        },
    },

    cards: {
        '@media (min-width: 320px)': {
            marginRight: '16px',
        },
        '@media (min-width: 768px)': {
            marginRight: '16px',
        },
        '@media (min-width: 1240px)': {
            marginRight: '19px',
        },
        '@media (min-width: 1920px)': {
            marginRight: '20px',
        },
    },

    cardCont: {
        boxShadow: '0px 8px 12px #0052E01A',
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
            width: '285px',
            height: '257px',
            margin: '10px',
        },
        '@media (min-width: 768px)': {
            width: '336px',
            height: '257px',
            margin: '10px',
        },
        '@media (min-width: 1000px)': {
            width: '285px',
            height: '239px',
        },
        '@media (min-width: 1240px)': {
            width: '285px',
            height: '239px',
        },
        '@media (min-width: 1920px)': {
            width: '315px',
            height: '257px',
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
        background: '#387DFF1A 0% 0% no-repeat padding-box',
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
        color: '#545F7E',
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
        color: '#545F7E',
    },
    eventAddress: {
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '17px',
        color: '#545F7E',
        marginTop: '6px',
    },

    fullDate: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '19px',
        letterSpacing: '0px',
        color: '#545F7E',
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
        color: '#545F7E',
    },
    desc: {
        width: '100%',
        height: '50%',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        color: '#545F7E',
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
        backgroundColor: '#387DFF1A',
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
    eventColumns: {
        display: 'flex',
        flexFlow: 'row wrap',
        '@media (min-width: 320px)': {
            justifyContent: 'center',
        },
        '@media (min-width: 768px)': {
            justifyContent: 'center',
        },
        '@media (min-width: 1240px)': {
            justifyContent: 'flex-start',
        },
        '@media (min-width: 1920px)': {
            justifyContent: 'flex-start',
        },
    },
});
