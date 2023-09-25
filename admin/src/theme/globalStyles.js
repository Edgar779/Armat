import { makeStyles } from '@material-ui/core';
import { theme } from './theme';

export const useGlobalStyles = makeStyles({
    containerFluid: (props) => ({
        paddingLeft: props && props.xs && props.xs.px ? props.xs.px : theme.spacing(2),
        paddingRight: props && props.xs && props.xs.px ? props.xs.px : theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: props && props.sm && props.sm.px ? props.xs.px : '42px',
            paddingRight: props && props.sm && props.sm.px ? props.xs.px : '42px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: props && props.lg && props.lg.px ? props.xs.px : '92px',
            paddingRight: props && props.lg && props.lg.px ? props.xs.px : '92px',
        },
    }),
    button: (props) => ({
        color: '#fff',
        width: '100%',
        padding: '14.5px 32px',
        fontSize: '1rem',
        boxShadow: '0px 3px 16px #387DFF80 !important',
        lineHeight: 'initial',
        letterSpacing: '0',
        textTransform: 'capitalize',
        ...props.button,
        '& .MuiTouchRipple-root': {
            width: '100%',
            height: '100%',
            opacity: '0',
            position: 'absolute',
            transition: '0.3s',
            backgroundColor: '#FFFFFF1A',
        },
        '&:hover .MuiTouchRipple-root': {
            opacity: '1',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '12.7px 32px',
        },
    }),

    cancelButton: (props) => ({
        color: '#fff',
        width: '100%',
        padding: '14.5px 32px',
        fontSize: '1rem',
        // boxShadow: '0px 3px 16px #387DFF80 !important',
        lineHeight: 'initial',
        letterSpacing: '0',
        textTransform: 'capitalize',
        ...props.button,
        '& .MuiTouchRipple-root': {
            width: '100%',
            height: '100%',
            opacity: '0',
            position: 'absolute',
            transition: '0.3s',
            backgroundColor: '#387DFF1A 0% 0% no-repeat padding-box',
        },
        '&:hover .MuiTouchRipple-root': {
            opacity: '1',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '12.7px 32px',
        },
    }),

    lengthStyle: {
        display:'flex',
        alignItems:'center',
        '& span': {
            fontSize: '12px !important',
            color: '#545F7E80 !important',
            marginLeft:'4px !important',
        }
    }
});

export default useGlobalStyles;
