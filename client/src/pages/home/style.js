import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    homeCont: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            padding: '120px 0px 30px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '100px 40px 113px 40px',
        },
        '@media (min-width: 1279px)': {
            padding: '40px 0 0 0',
        },
        '@media (min-width: 1919px)': {
            padding: '40px 0 0 220px',
        },
    },
    homeContNoPaddingTop: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            padding: '0 16px',
        },
        '@media (min-width: 768px)': {
            padding: '0 40px 0 40px',
        },
        '@media (min-width: 1279px)': {
            padding: '0 42px 0 42px',
        },
        '@media (min-width: 1919px)': {
            padding: '0 16px 0 238px',
        },
    },
    homeContPaddingTop: {
        display: 'flex',
        flexDirection: 'column',
        background: '#FCFCFC',
        '@media (min-width: 320px)': {
            padding: '30px 16px 30px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '100px 40px 120px 40px',
        },
        '@media (min-width: 1279px)': {
            padding: '120px 42px 200px 42px',
        },
        '@media (min-width: 1919px)': {
            padding: '150px 238px 300px 238px',
        },
    },
    homeContForNotes: {
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            width: '100%',
            height: 'auto',
            minHeight: '100vh',
        },
    },
}));
