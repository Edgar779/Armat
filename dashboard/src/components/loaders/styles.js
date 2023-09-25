import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles(() => ({
    main: {
        width: '100%',
        height: '70vh',
        // backgroundColor: '#F4F4F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    loadBox: {
        width: '100px',
        height: '100px',
        marginBottom: '50px',
        position: 'relative',
    },
    loadLine: {
        width: '30px',
        height: '30px',
        border: `8px solid #49B776`,
        borderRadius: '15px',
        position: 'absolute',
        transition: '200ms ease-in-out',
        '&:nth-child(2)': {
            top: '0px',
            right: '0',
        },
        '&:nth-child(3)': {
            bottom: '0',
        },
    },
    text: {
        display: 'flex',
        fontSize: '36px',
        lineHeight: '49px',
        fontWeight: 'bold',
        color: "black",
    },
    dots: {
        width: '30px',
        position: 'relative',
    },
    dot: {
        width: '6px',
        height: '6px',
        position: 'absolute',
        transition: '200ms ease-in-out',
        '&:nth-child(1)': {
            left: 0,
        },
        '&:nth-child(2)': {
            left: '12px',
        },
        '&:nth-child(3)': {
            left: '24px',
        },
    },
}));
