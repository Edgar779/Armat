import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const homeExploreEventsStyles = makeStyles((theme) => ({
    exploreCont: {
        height: 'auto',
        display: 'flex',
        width: '100%',
        '@media (min-width: 320px)': {
            margin: '70px 0',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            margin: '120px 0',
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            margin: '120px 0',
            flexDirection: 'column',
        },
        '@media (min-width: 1920px)': {
            margin: '150px 0',
            flexDirection: 'column',
        },
    },
    headerCont: {
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    titleCont: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: '36px',
        color: '#387DFF',
        fontWeight: 'bold',
        [theme.breakpoints.down('xl')]: {
            fontSize: '36px',
            color: '#387DFF',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
            color: '#387DFF',
            fontWeight: 'bold',
        },
    },
    titleIcon: {
        width: '22px',
        marginRight: '10px',
        background:
            'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
        [theme.breakpoints.down('xs')]: {
            height: '28px',
            width: '12px',
        },
    },

    descriptionCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            margin: '24px 0',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            margin: '30px 0',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '663px',
            margin: '30px 0',
        },
        '@media (min-width: 1920px)': {
            margin: '40px 0',
            width: '663px',
        },
    },

    exploreEventsCont: {
        width: '100%',
        display: 'flex',

        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            flexDirection: 'row',
        },
    },
    cont: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            width: '100%',
            paddingRight: '0',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            paddingRight: '30px',
        },
        '@media (min-width: 1240px)': {
            width: '45%',
            paddingRight: '30px',
        },
        '@media (min-width: 1920px)': {
            width: '45%',
            paddingRight: '30px',
        },
    },

    eventsCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',

        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '50px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '50px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '70px',
        },
    },

    cardCont: {
        width: '100%',
        background: '#FFFFFF',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        padding: '10px',
        minHeight: '100px',
        marginBottom: '20px',
        'MuiBox-root': {
            margin: 0,
        },
        '@media (min-width: 320px)': {
            marginBottom: '16px',
        },
    },

    eventImg: {
        borderRadius: '6px',
        objectFit: 'cover',
        overflow: 'hidden',

        '@media (min-width: 320px)': {
            width: '68px',
            height: '68px',
        },
        '@media (min-width: 768px)': {
            height: '84px',
            width: '84px',
        },
        '@media (min-width: 1240px)': {
            height: '84px',
            width: '84px',
        },
        '@media (min-width: 1920px)': {
            height: '84px',
            width: '84px',
        },
    },
    i: {
        height: 'auto',

        '@media (min-width: 320px)': {
            width: '100%',
            height: '300px',
            objectFit: 'cover',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            height: '614px',
            objectFit: 'cover',
        },
        '@media (min-width: 1240px)': {
            width: '50%',
            height: '526px',
            position: 'absolute',
            objectFit: 'cover',
        },
        '@media (min-width: 1920px)': {
            width: '50%',
            maxWidth: '940px',
            position: 'absolute',
            objectFit: 'cover',
            height: '700px',
        },
    },

    imgCont: {
        width: '55%',
        '@media (max-width: 1279px)': {
            width: '97%',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '960px',
    },
    infoCont: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'space-between',
        '@media (max-width: 767px)': {
            flexDirection: 'column',
        },
    },

    imgAndDescCont: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },

    descripCont: {
        [theme.breakpoints.down('xl')]: {
            width: '65%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 5px 5px 10px',
        },
        [theme.breakpoints.down('lg')]: {
            width: '65%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 5px 5px 10px',
        },
        [theme.breakpoints.down('md')]: {
            width: '65%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 5px 5px 10px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 5px 5px 10px',
        },
    },

    title1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        color: Colors.ThemeBlack,
        width: '100%',
        fontWeight: '600',
        fontSize: '16px',
    },
    descrip: {
        marginTop: '5px',
        height: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'flex-start',
        color: Colors.ThemeLightGray,
        overflow: 'auto',
        width: '100%',
        fontSize: '14px',
    },
    dateCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        borderRadius: '6px',

        '@media (min-width: 320px)': {
            width: '100%',
            padding: '6px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: '16px',
        },
        '@media (min-width: 768px)': {
            width: '136px',
            padding: '16px',
            marginTop: 0,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media (min-width: 1240px)': {
            width: '136px',
            padding: '16px',
            marginTop: 0,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '@media (min-width: 1920px)': {
            width: '192px',
            padding: '16px',
            marginTop: 0,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },

    fakeDateCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA ',
        borderRadius: '6px',

        '@media (min-width: 320px)': {
            width: '100%',
            padding: '6px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: '16px',
        },
        '@media (min-width: 768px)': {
            width: '136px',
            padding: '16px',
            marginTop: 0,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '@media (min-width: 1240px)': {
            width: '136px',
            padding: '16px',
            marginTop: 0,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '@media (min-width: 1920px)': {
            width: '192px',
            padding: '16px',
            marginTop: 0,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    dateIconCont: {
        display: 'flex',
        alignItems: 'center',
    },
    date: {
        height: '100%',
        fontSize: '14px',
        marginLeft: '10px',
        color: Colors.ThemeBlack,
    },
    eventButtonCont: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
    },
    eventText: {
        color: Colors.ThemeGreen,
        fontSize: '13px',
        fontWeight: 'bold',
    },
    options: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',

        '@media (min-width: 320px)': {
            margin: '24px 0 8px 0',
        },
        '@media (min-width: 768px)': {
            margin: '31px 0 15px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '51px 0 15px 0',
        },
        '@media (min-width: 1920px)': {
            margin: '71px 0 25px 0',
        },
    },
    optionCont: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '16px',
    },
    option: {
        color: '#252E48',

        '@media (min-width: 320px)': {
            marginLeft: '8px',
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            marginLeft: '14px',
            fontSize: '15px',
        },
        '@media (min-width: 1240px)': {
            marginLeft: '14px',
            fontSize: '16px',
        },
        '@media (min-width: 1920px)': {
            marginLeft: '14px',
            fontSize: '16px',
        },
    },
    exploreButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
