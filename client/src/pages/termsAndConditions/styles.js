import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    content: {
        background:'#F5FAFE',
        '@media (min-width: 320px)': {
            padding: '100px 16px 30px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '120px 40px 30px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '120px 42px 30px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '140px 238px 30px 238px',
        },
    },
}));
