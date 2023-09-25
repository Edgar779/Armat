import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles(() => ({
    CalendarSearchStyle: {
        width: '100%',
        '@media (min-width: 320px)': {
            margin: '30px 0 40px 0',
        },
        '@media (min-width: 768px)': {
            margin: '30px 0 70px 0',
        },
        '@media (min-width: 1240px)': {
            margin: 0,
        },
        '@media (min-width: 1920px)': {
            margin: 0,
        },
    },

    titleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        maxWidth: '1440px',
        margin: '0 auto',
    },

    noResultBoxFromBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
    },
    noResultBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 0,
        // '@media (min-width: 320px)': {
        //     padding: '0 16px 0px 16px',
        // },
        // '@media (min-width: 768px)': {
        //     padding: '0 40px 0px 40px',
        // },
        // '@media (min-width: 1240px)': {
        //     padding: '0 242px 0 242px',
        // },
        // '@media (min-width: 1919px)': {
        //     padding: '0 530px 0 530px',
        // },
    },
    wrapContainer: {
        width: '100%',
        marginTop: '70px',
        backgroundColor: '#F4F4F4',
        transition: 'margin 0.25s ease-out',
    },

    wrapContainerScrolled: {
        width: '100%',
        marginTop: '105px',
        backgroundColor: '#F4F4F4',
        transition: 'margin 0.25s ease-out',
    },
    container: {
        width: '100%',
        marginBottom: '100px',
        // paddingLeft: '238px',
        // paddingRight: '238px',
        // [theme.breakpoints.down ('lg')]: {
        //   padding: '50px 42px 100px 42px'
        // },
        // [theme.breakpoints.down ('md')]: {
        //   paddingLeft: '48px',
        //   paddingRight: '48px',
        // },
        // [theme.breakpoints.down ('sm')]: {
        //   paddingLeft: '40px',
        //   paddingRight: '40px',
        // },
        // [theme.breakpoints.down ('xs')]: {
        //   paddingLeft: '16px',
        //   paddingRight: '16px',
        // },
    },
    navCont: {
        width: '100%',
        boxShadow: '0px 4px 8px #0000000F',
        margin: 0,
        position: 'fixed',
        background: 'white',
        zIndex: 1004,

        '@media (min-width: 320px)': {
            padding: '12px 16px 0px 16px',
            marginTop: '-2px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-43px',
            padding: '20px 40px 0px 40px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '0',
            padding: '24px 242px 0 242px',
        },
        '@media (min-width: 1919px)': {
            padding: '24px   530px 0 530px',
        },

        transitionDuration: '3s, 5s',
    },
    navContOpened: {
        width: '100%',
        boxShadow: '0px 4px 8px #0000000F',
        margin: 0,
        position: 'fixed',
        background: 'white',
        zIndex: 1004,

        transitionDuration: '3s, 5s',

        '@media (min-width: 320px)': {
            padding: '54px 16px 0px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '24px 40px 0px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '24px 242px 0 242px',
        },
        '@media (min-width: 1919px)': {
            padding: '24px   530px 0 530px',
        },
    },
    headerCont: {
        width: 'auto',
        marginBottom: '30px',
        display: 'flex',
        // alignItems: 'flex-start',
        // justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            margin: '100px 16px 30px 16px',
            // flexDirection: 'column',
            // display: 'flow-root',
        },
        '@media (min-width: 768px)': {
            margin: '120px 42px 30px 42px',
            // flexDirection: 'column',
            // display: 'flow-root',
        },
        '@media (min-width: 1240px)': {
            margin: '120px 42px 30px 42px',
            // flexDirection: 'row',
            // display: 'flex',
        },
        '@media (min-width: 1920px)': {
            margin: '140px 238px 40px 238px',
            // flexDirection: 'row',
            // display: 'flex',
        },
    },
    headerContPast: {
        width: 'auto',
        marginBottom: '30px',
        display: 'flex',
        // alignItems: 'flex-start',
        // justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            margin: '30px 16px 30px 16px',
            // flexDirection: 'column',
            // display: 'flow-root',
        },
        '@media (min-width: 768px)': {
            margin: '50px 42px 30px 42px',
            // flexDirection: 'column',
            // display: 'flow-root',
        },
        '@media (min-width: 1240px)': {
            margin: '50px 42px 30px 42px',
            // flexDirection: 'row',
            // display: 'flex',
        },
        '@media (min-width: 1920px)': {
            margin: '70px 238px 40px 238px',
            // flexDirection: 'row',
            // display: 'flex',
        },
    },
    header: {
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

    containerCont: {
        width: '100%',
        '@media (min-width: 320px)': {
            margin: 0,
            // maxWidth:'400px'
        },
        '@media (min-width: 768px)': {
            margin: 0,
            // maxWidth:'700px'
        },
        '@media (min-width: 1240px)': {
            marginLeft: '36px',
            // maxWidth: '900px',
        },
        '@media (min-width: 1920px)': {
            // maxWidth: '1000px',
        },
    },

    pagesCont: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    containerpaddings: {
        width: '100%',
        backgroundColor: '#F4F4F4',

        '@media (min-width: 320px)': {
            padding: '130px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '100px 40px',
        },
        '@media (min-width: 1280px)': {
            padding: '133px 48px',
        },
        '@media (min-width: 1920px)': {
            padding: '145px 238px',
        },
    },
}));
