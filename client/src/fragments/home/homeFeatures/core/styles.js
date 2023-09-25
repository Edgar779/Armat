import { makeStyles } from '@material-ui/core';
import { Colors } from '../../../../utils';

export const HomeFeaturesStyles = makeStyles((theme) => ({
    featuresCont: {
        // paddingRight: '42px',

        '@media (min-width: 320px)': {
            padding: '0',
            marginTop: '0',
        },
        '@media (min-width: 768px)': {
            padding: '0',
            marginTop: '0',
        },
        '@media (min-width: 1240px)': {
            // margin: '0 42px',
        },
        '@media (min-width: 1920px)': {
            // margin: '0 146px 0 0',
            maxWidth: '1444px',
            width: '100%',
        },
    },

    featureTitle: {
        '@media (min-width: 320px)': {
            margin: '40px 0 30px 0',
        },
        '@media (min-width: 768px)': {
            margin: '120px 0 50px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '120px 0 50px 0',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '150px 0 70px 0',
        },
    },

    headerCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            marginBottom: '30px',
        },
        '@media (min-width: 768px)': {
            marginBottom: '50px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '50px',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '70px',
        },
    },
    header: {
        fontSize: '36px',
        color: '#387DFF',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    headerIcon: {
        width: '22px',
        height: '44px',
        marginRight: '16px',
        background:
            'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',

        [theme.breakpoints.down('xs')]: {
            height: '19px',
            width: '12px',
            marginRight: '8px',
        },
    },
    cardsCont: {
        paddingBottom: '5px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
        width: '100%',
        '@media (min-width: 320px)': {},
        '@media (min-width: 768px)': {},
        '@media (min-width: 1240px)': {
            maxWidth: '1280px',
            margin: '0 auto',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '100%',
            margin: '0 auto',
        },

        [theme.breakpoints.up('xl')]: {
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-between',
        },
    },
    card: {
        width: '350px',
        height: '290px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001F',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        [theme.breakpoints.down('xl')]: {
            width: '400px',
            height: '344px',
            minWidth: '450px',
        },
        [theme.breakpoints.down('lg')]: {
            width: '347px',
            height: '300px',
            minWidth: '347px',
            marginRight: '70px',
        },
        [theme.breakpoints.down('md')]: {
            width: '350px',
            height: '300px',
            minWidth: '350px',
            marginRight: '4%',
        },
    },
    cardHeader: {
        height: '40%',
    },
    cardDesc: {
        height: '60%',
        padding: '24px',
        [theme.breakpoints.down('xl')]: {
            paddingTop: '36px',
        },
        [theme.breakpoints.down('lg')]: {
            paddingTop: '16px',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '16px',
        },
        '@media (max-width: 1919px)': {
            padding: '16px',
        },
    },
    title: {
        fontSize: '18px',
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
        marginTop: '15px',
        '@media (max-width: 1279px)': {
            marginTop: '10px',
        },
    },
    cardDescText: {
        paddingTop: '16px',
        [theme.breakpoints.down('xl')]: {
            paddingTop: '36px',
        },
        [theme.breakpoints.down('lg')]: {
            paddingTop: '16px',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '16px',
        },
    },
    text: {
        fontSize: '16px',
        color: Colors.ThemeLightGray,
        fontWeight: 'regular',
    },
    img: {
        width: '140px',
        height: '140px',
        [theme.breakpoints.down('xl')]: {
            width: '170px',
            height: '170px',

            marginTop: '-155px',
            marginLeft: '247px',
        },
        [theme.breakpoints.down('lg')]: {
            width: '140px',
            height: '140px',

            marginTop: '-120px',
            marginLeft: '194px',
        },
        [theme.breakpoints.down('md')]: {
            width: '140px',
            height: '140px',

            marginTop: '-120px',
            marginLeft: '194px',
        },
    },
    back2Img: {
        [theme.breakpoints.down('xl')]: {
            marginTop: '-180px',
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: '-140px',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '-140px',
        },
    },
}));
