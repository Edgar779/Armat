import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const warningStyle = makeStyles((theme) => ({
    warningWrapper: {
        background: '#F4F4F4',
        textAlign: 'center',
        '@media (min-width: 320px)': {
            padding: '70px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '100px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '100px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '100px 240px',
        },
    },
    imageSection: {
        width: '100%',
        '@media (min-width: 320px)': {
            height: '100px',
            maxWidth: '100px',
            margin: '150px auto 30px auto',
        },
        '@media (min-width: 768px)': {
            margin: '130px auto 30px auto',
            height: '150px',
            maxWidth: '150px',
        },
        '@media (min-width: 1240px)': {
            margin: '70px auto 30px auto',
            maxWidth: '150px',
            height: '150px',
        },
        '@media (min-width: 1920px)': {
            margin: '130px auto 30px auto',
            maxWidth: '172px',
            height: '172px',
        },
    },

    textSection: {
        '& p': {
            color: Colors.ThemeBlack,

            fontWeight: 'bold',

            '@media (min-width: 320px)': {
                margin: '40px 0 32px 0',
                fontSize: '18px',
            },
            '@media (min-width: 768px)': {
                margin: '50px 0 32px 0',
                fontSize: '30px',
            },
            '@media (min-width: 1240px)': {
                margin: '50px 0 32px 0',
                fontSize: '30px',
            },
            '@media (min-width: 1920px)': {
                margin: '60px 0 32px 0',
                fontSize: '30px',
            },
        },
        '& span': {
            color: Colors.ThemeLightGray,
            '@media (min-width: 320px)': {
                fontSize: '14px',
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
    },
    buttonSection: {
        '@media (min-width: 320px)': {
            margin: '40px 0 100px 0',
        },
        '@media (min-width: 768px)': {
            margin: '68px 0 100px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '68px 0 100px 0',
        },
        '@media (min-width: 1920px)': {
            margin: '80px 0 100px 0',
        },
    },
}));
