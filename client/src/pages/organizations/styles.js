import { makeStyles } from '@material-ui/core';
import { Colors } from '../../utils';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: '1920px',
        margin: '0 auto',
        backgroundColor: '#F4F4F4',

        '@media (min-width: 320px)': {
            padding: '180px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '200px 40px',
        },
        '@media (min-width: 1280px)': {
            padding: '155px 48px',
        },
        '@media (min-width: 1920px)': {
            padding: '180px 238px',
        },
    },
    contContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            marginBottom: '30px',
        },
        '@media (min-width: 768px)': {
            marginBottom: '30px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '30px',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '40px',
        },
    },
    contHeaderText: {
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '30px',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '36px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '36px',
        },
    },
    organizationInfo: {
        color: '#252E48',
        fontSize: '14px',
        marginTop: '16px',
    },
}));
