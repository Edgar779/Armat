import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles(() => ({
    viewNavCont: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    viewNavContItemGridListing: {
        borderRadius: '6px 6px 0px 0px',
        borderBottom: `6px solid ${Colors.ThemeGreen}`,

        '@media (min-width: 320px)': {
            width: '130px',
            position: 'absolute',
            marginLeft: '-15px',
            marginTop: '-5px',
        },
        '@media (min-width: 768px)': {
            width: '200px',
            marginLeft: '-31px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1240px)': {
            width: '200px',
            marginLeft: '-31px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1920px)': {
            width: '200px',
            marginLeft: '-31px',
            marginTop: '-5px',
            position: 'absolute',
        },
    },
    viewNavContItemGridCalendar: {
        borderRadius: '6px 6px 0px 0px',
        borderBottom: `6px solid ${Colors.ThemeGreen}`,

        '@media (min-width: 320px)': {
            width: '110px',
            position: 'absolute',
            marginLeft: '-15px',
            marginTop: '-5px',
        },
        '@media (min-width: 768px)': {
            width: '180px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1240px)': {
            width: '180px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1920px)': {
            width: '180px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
    },
    viewNavContItemGridMap: {
        borderRadius: '6px 6px 0px 0px',
        borderBottom: `6px solid ${Colors.ThemeGreen}`,

        '@media (min-width: 320px)': {
            width: '80px',
            position: 'absolute',
            marginLeft: '-15px',
            marginTop: '-5px',
        },
        '@media (min-width: 768px)': {
            width: '135px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1240px)': {
            width: '135px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
        '@media (min-width: 1920px)': {
            width: '135px',
            marginLeft: '-29px',
            marginTop: '-5px',
            position: 'absolute',
        },
    },

    viewNavTextActive: {
        color: Colors.ThemeGreen,
        fontSize: '18px',
        marginBottom: '10px',
        cursor: 'pointer',
        '@media (min-width: 320px)': {
            fontSize: '12px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '18px',
        },
    },
    viewNavText: {
        color: '#222222CC',
        fontSize: '18px',
        marginBottom: '10px',
        cursor: 'pointer',
        '@media (min-width: 320px)': {
            fontSize: '12px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '18px',
        },
    },
}));
