import { makeStyles } from '@material-ui/core/styles';

export const textStyle = makeStyles(() => ({
    tableRowUserName: {
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#387DFF',
        width: '120px',
        cursor: 'pointer',
        marginLeft: '8px',
        '@media (min-width: 1240px)': {
            width: '120px',
        },
        '@media (min-width: 1920px)': {
            width: 'auto',
        },
    },

    tableRowGrayText: {
        fontSize: '16px',
        width: '120px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: '#545F7E',
        '@media (min-width: 1240px)': {
            width: '120px',
        },
        '@media (min-width: 1920px)': {
            width: 'auto',
        },

        '& .MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
            background: '#F073791A 0% 0% no-repeat padding-box',
            borderRadius: '4px',
        },

        '& .MuiIconButton-root': {
            padding: '0',
            marginLeft: '16px',
        },
    },
}));
