import { makeStyles } from '@material-ui/core';
import { theme } from './theme';
import { Backgrounds, Colors } from '../utils';

export const useGlobalStyles = makeStyles({
    passiveBreadcrumbs: {
        cursor: 'pointer',
        fontWeight: '600',
        color: '#252E4880',
        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '14px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '18px',
        },
    },
    activeBreadcrumbs: {
        fontWeight: '600',
        color: '#252E48',
        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '14px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '18px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '18px',
        },
    },

    headerTitle: {
        fontSize: '36px',
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '36px',
        },
    },

    mobile: {
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
    },
    desktop: {
        '@media (min-width: 320px)': {
            display: 'none!important',
        },
        '@media (min-width: 1240px)': {
            display: 'block!important',
        },
    },
    tableteSearch: {
        '@media (min-width: 320px)': {
            display: 'none!important',
        },
        '@media (min-width: 768px)': {
            display: 'block!important',
        },
    },
    desktopM: {
        '@media (min-width: 320px)': {
            display: 'block!important',
        },
        '@media (min-width: 768px)': {
            display: 'none!important',
        },
    },
    containerFluid: (props) => ({
        paddingLeft: props && props.xs && props.xs.px ? props.xs.px : theme.spacing(2),
        paddingRight: props && props.xs && props.xs.px ? props.xs.px : theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: props && props.sm && props.sm.px ? props.xs.px : '42px',
            paddingRight: props && props.sm && props.sm.px ? props.xs.px : '42px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: props && props.lg && props.lg.px ? props.xs.px : '42px',
            paddingRight: props && props.lg && props.lg.px ? props.xs.px : '42px',
        },
        [theme.breakpoints.up('xl')]: {
            paddingLeft: props && props.xl && props.xl.px ? props.xs.px : '92px',
            paddingRight: props && props.xl && props.xl.px ? props.xs.px : '92px',
        },
    }),

    button: (props) => ({
        color: '#fff',
        width: '100%',
        padding: 0,
        lineHeight: 'initial',
        letterSpacing: '0',
        fontSize: '16px',
        height: '48px',
        boxShadow: '0px 0px 6px #0000001A',
        '& :hover': {
            boxShadow: '0px 0px 6px #0000001A',
            background: Backgrounds.hoverGreen,
            color: '#fff',
            width: '100%',
            borderRadius: '24px',
            padding: 0,
            lineHeight: 'initial',
            letterSpacing: '0',
            fontSize: '16px',
            height: '42px',
            '@media (max-width: 768px)': {
                height: '42px',
            },
            '& svg': {
                width: 'auto',
                height: 'auto',
                margin: '10px',
                padding: '0',
            },
        },
        ...props.button,

        '@media (max-width: 768px)': {
            height: '42px',
        },
        '& .MuiTouchRipple-root': {
            width: '100%',
            height: '100%',
            opacity: '0',
            position: 'absolute',
            transition: '0.3s',
        },
        '& .MuiButton-text': {
            padding: 0,
            fontSize: '16px',
        },
    }),
    buttonOrange: (props) => ({
        color: '#fff',
        padding: 0,
        lineHeight: 'initial',
        letterSpacing: '0',
        fontSize: '16px',
        boxShadow: '0px 3px 16px #387DFF80',
        height: '48px',
        width: '100%',
        whiteSpace: 'nowrap',
        '@media (max-width: 767px)': {
            width: '162px',
            height: '36px',
        },
        '& :hover': {
            background: Colors.lightGreen,
            color: '#fff',
            width: '100%',
            borderRadius: '24px',
            padding: 0,
            lineHeight: 'initial',
            letterSpacing: '0',
            fontSize: '16px',
            height: '48px',
            '@media (max-width: 768px)': {
                height: '42px',
            },
        },
        ...props.button,

        '@media (max-width: 768px)': {
            height: '42px',
        },
        '& .MuiTouchRipple-root': {
            width: '100%',
            height: '100%',
            opacity: '0',
            position: 'absolute',
            transition: '0.3s',
        },
        '& .MuiButton-text': {
            padding: 0,
            fontSize: '16px',
        },
    }),

    buttonGreen: (props) => ({
        color: '#fff',
        padding: 0,
        lineHeight: 'initial',
        letterSpacing: '0',
        fontSize: '16px',
        boxShadow: '0px 3px 16px #387DFF80',
        height: '40px',
        width: '100%',
        whiteSpace: 'nowrap',
        '@media (max-width: 767px)': {
            width: '162px',
            height: '36px',
        },
        '& :hover': {
            background: Colors.lightGreen,
            color: '#fff',
            width: '100%',
            borderRadius: '24px',
            padding: 0,
            lineHeight: 'initial',
            letterSpacing: '0',
            fontSize: '16px',
            height: '40px',
            '@media (max-width: 768px)': {
                height: '42px',
            },
        },
        ...props.button,

        '@media (max-width: 768px)': {
            height: '42px',
        },
        '& .MuiTouchRipple-root': {
            width: '100%',
            height: '100%',
            opacity: '0',
            position: 'absolute',
            transition: '0.3s',
        },
        '& .MuiButton-text': {
            padding: 0,
            fontSize: '16px',
        },
    }),

    cancelButton: (props) => ({
        color: '#fff',
        width: '100%',
        padding: '14.5px 32px',
        fontSize: '1rem',
        lineHeight: 'initial',
        letterSpacing: '0',
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

    singleEventCont: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 12px #0052E01A',

        '@media (min-width: 320px)': {
            padding: '150px 16px 100px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '150px 40px 100px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '150px 42px 100px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '150px 238px 100px 238px',
        },
    },
    searchWrapper: {
        background: '#F4F4F4 0% 0% no-repeat padding-box',

        '@media (min-width: 320px)': {
            padding: '150px 16px 100px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '150px 40px 100px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '150px 42px 100px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '150px 92px 100px 92px',
        },
    },
    singleOrg: {
        padding: '0 !important',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01A',
        paddingBottom: '100px',
        '@media (min-width: 320px)': {
            margin: '161px 0 0',
        },
        '@media (min-width: 768px)': {
            margin: '161px 0 0',
        },
        '@media (min-width: 1240px)': {
            margin: '70px 0 0',
        },
        '@media (min-width: 1920px)': {
            margin: '70px 0 0',
        },
    },
    singleOrgScrolled: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        transition: 'margin 0.25s ease-out',

        '@media (min-width: 320px)': {
            margin: '115px 0 0',
        },
        '@media (min-width: 768px)': {
            margin: '75px 0 0',
        },
        '@media (min-width: 1240px)': {
            margin: '120px 0 0',
        },
        '@media (min-width: 1920px)': {
            margin: '120px 0 0',
        },
    },

    container: {
        width: '100%',
        backgroundColor: '#F4F4F4',

        '@media (min-width: 320px)': {
            padding: '180px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '200px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '155px 48px',
        },
        '@media (min-width: 1920px)': {
            padding: '180px 238px',
        },
    },
});

export default useGlobalStyles;
