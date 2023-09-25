import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles(() => ({
    termAndConditionsContent: {
        '& li': {
            listStyleType: 'disc !important',
            color: Colors.ThemeLightGray,
        },
        color: Colors.ThemeLightGray,
        background: '#FFFFFF 0% 0% no-repeat padding-box',

        '@media (min-width: 320px)': {
            margin: '24px 0',
            padding: '16px',
        },
        '@media (min-width: 768px)': {
            margin: '32px 0',
            padding: '32px',
        },
        '@media (min-width: 1240px)': {
            margin: '32px 0',
            padding: '32px',
        },
        '@media (min-width: 1920px)': {
            margin: '40px 0',
            padding: '48px',
        },
    },

    title: {
        fontSize: '20px',
        color: Colors.ThemeBlack,
    },
    titleSmall: {
        fontSize: '18px',
        color: Colors.ThemeBlack,
    },
    titleSmallBlack: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: Colors.ThemeBlack,
    },
    subtitleSmallBlack: {
        fontSize: '16px',
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: '16px',
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
    },
}));
