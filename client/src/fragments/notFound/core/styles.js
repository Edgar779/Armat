import { makeStyles } from '@material-ui/core';

export const notFoundStyle = makeStyles((theme) => ({
    notFoundWrapper: {
        padding: '16px',
    },
    notFoundImg: {
        width: '100%',

        '@media (min-width: 320px)': {
            height: '350px',
            maxWidth: '350px',
            margin: '150px auto 30px auto',
        },
        '@media (min-width: 768px)': {
            margin: '130px auto 30px auto',
            height: '500px',
            maxWidth: '500px',
        },
        '@media (min-width: 1240px)': {
            margin: '120px auto 30px auto',
            maxWidth: '600px',
            height: '600px',
        },
        '@media (min-width: 1920px)': {
            margin: '130px auto 30px auto',
            maxWidth: '750px',
            height: '700px',
        },
    },
}));
