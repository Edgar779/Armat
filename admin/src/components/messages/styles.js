import { makeStyles } from '@material-ui/core/styles';

export const errMessageStyle = makeStyles(() => ({
    errMessageContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '10px',
    },

    errMessageStyleText: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#F07379',
    },

    DoneMessage: {
        textAlign: 'center',
        zIndex: '99',
        width: '420px',
        height: '62px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01F',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 16px',
        position: 'fixed',
        bottom: '50px',

        '@media (min-width: 320px)': {
            right: 16,
        },
        '@media (min-width: 768px)': {
            right: 24,
        },
        '@media (min-width: 1280px)': {
            right: 24,
        },
        '@media (min-width: 1920px)': {
            right: 24,
        },

        '& p': {
            fontSize: '16px',
            lineHeight: '24px',
            color: '#252E48',
        },
    },
}));
