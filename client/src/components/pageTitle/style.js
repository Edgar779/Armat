import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles(() => ({
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },

    titleIcon: {
        background: '#49B776 0% 0% no-repeat padding-box',
        '@media (min-width: 320px)': {
            height: '19px',
            width: '10px',
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            width: '14px',
            height: '34px',
            marginRight: '16px',
        },
    },

    titleCont: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        margin: 0,
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
        },
    },
    PagesTitle: {
        margin: 0,
        color: Colors.ThemeBlack,
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
        },
    },

    inputTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: Colors.ThemeGreen,
        margin: '0 0 4px 24px',
    },
}));
