import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    close: {
        width: '30px',
        height: '30px',
        position: 'absolute',
        right: '14px',
        top: '14px',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        backgroundColor: '#387DFF1A',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: '#387DFF33',
        },
    },
}));
