import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    picture: {
        width: '100%',
        height: '100%',

        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
    },

    pictureFooter: {
        width: '100%',
        height: '100%',

        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        '& img': {
            width: 'auto',
            height: '100%',
            position: 'absolute',
            top: '-1px',
            left: 0,
        },
    },
});
