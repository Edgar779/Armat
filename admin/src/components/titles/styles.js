import { makeStyles } from '@material-ui/core/styles';

export const titleStyle = makeStyles(() => ({
    tittle: {
        textAlign: 'left',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '27px',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: '1',
    },

    ArmatTittle: {
        textAlign: 'left',
        marginLeft: '30px',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '27px',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: '1',

        '@media (min-width: 1281px)': {
            marginLeft: '24px',
        },
    },

    pageTitle: {
        fontSize: '30px',
        lineHeight: '41px',
        fontWeight: 'bold',
        color: '#387DFF',
    },
}));
