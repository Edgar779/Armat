import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const homeHeaderStyles = makeStyles((theme) => ({
    homeHeaderCont: {
        display: 'flex',
        flexDirection: 'row-reverse',

        '@media (min-width: 1280px)': {
            fontSize: '0 16px',
        },

        [theme.breakpoints.down('xl')]: {
            width: '100%',
            height: '900px',
            flexDirection: 'row-reverse',
            maxHeight: '900px',
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            height: '790px',
            flexDirection: 'row-reverse',
            maxHeight: '790px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '550px',
            flexDirection: 'row-reverse',
            maxHeight: '550px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            height: '800px',
            maxHeight: '1005px',
        },

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            flexDirection: 'column',
            height: '515px',
            maxHeight: '710px',
        },

        '& img': {
            marginTop: 0,
        },
    },
    content: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 0 70px 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
            padding: '0',
        },
    },
    innerContent: {
        marginTop: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        },
    },
    homeTitle: {
        display: 'flex',
        flexDirection: 'row',
        color: Colors.ThemeBlack,
        fontWeight: '800',

        '@media (min-width: 320px)': {
            lineHeight: '45px',
            fontSize: '30px',
            marginTop: '10px',
        },
        '@media (min-width: 768px)': {
            lineHeight: '75px',
            fontSize: '50px',
        },
        '@media (min-width: 1240px)': {
            lineHeight: '75px',
            fontSize: '42px',
            marginTop: '10px',
        },
        '@media (min-width: 1920px)': {
            lineHeight: '75px',
            fontSize: '50px',
            marginTop: '10px',
        },
    },

    titleCont: {
        height: '45%',
        display: 'flex',
        flexDirection: 'row',
        width: '700px',
        [theme.breakpoints.down('md')]: {
            width: '700px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '98%',
            height: 'auto',
            marginTop: 80,
        },
        [theme.breakpoints.down('xs')]: {
            width: '98%',
            height: 'auto',
        },
    },
    title: {
        fontSize: '50px',
        color: '#387DFF',
        fontWeight: '800',

        [theme.breakpoints.down('sm')]: {
            fontSize: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
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
            width: '463px',
            margin: '30px 0',
        },
        '@media (min-width: 1920px)': {
            margin: '40px 0',
            width: '537px',
        },
    },
    descriptionContInner: {
        borderLeft: `4px solid ${Colors.ThemeGreen}`,
    },
    description: {
        lineHeight: '24px',
        color: Colors.ThemeLightGray,
        fontSize: '16px',
        marginLeft: '16px',
        '@media (max-width: 767px)': {
            fontSize: '14px',
            lineHeight: '21px',
            marginLeft: '8px',
        },
    },
    imageCont: {
        width: '58%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
        },
    },
}));
