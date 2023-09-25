import { makeStyles } from '@material-ui/core';
import { Colors } from '../../theme';

export const useStyles = makeStyles((theme) => ({
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },

    titleIcon: {
        background:
            'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',

        '@media (min-width: 320px)': {
            height: '19px',
            width: '12px',
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            width: '22px',
            height: '44px',
            marginRight: '16px',
        },
        '@media (min-width: 1280px)': {
            width: '22px',
            height: '44px',
            marginRight: '16px',
        },
        '@media (min-width: 1920px)': {
            width: '22px',
            height: '44px',
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
        color: '#387DFF',
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '17px',
        },
        '@media (min-width: 768px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1280px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '36px',
        },
    },
    PagesTitle: {
        margin: 0,
        color: '#387DFF',
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1280px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '36px',
        },
    },

    inputTitle: {
        fontSize: '14px',
        fontWeight: 600,
        height:'24px',
        color: '#387DFF',
        margin: '0 0 0 24px',
    },
}));
