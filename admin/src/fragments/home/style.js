import { makeStyles } from '@material-ui/core/styles';
import HomeBack from 'assets/images/home.png';

export const homePageStyle = makeStyles(() => ({
    homeTittleUl: {
        marginTop: '20px',
    },

    homeTittle: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '30px',
        letterSpacing: '0',
        color: '#545F7E',
    },

    homeLinks: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '14px',
    },

    homeLinksText: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        letterSpacing: '0',
        color: '#545F7E',
    },

    homeLinksRoute: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '0',
        color: '#387DFF',
        textDecoration: 'none',
        marginLeft: '3px',
    },

    homeTittleIcon: {
        marginRight: '10px',
        width: '18px',
        height: '18px',
    },

    homeInfo: {
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '45px',
        textAlign: 'center',
        letterSpacing: '0',
        color: '#387DFF',
        marginBottom: '20px',
        marginTop: '-20px',
        '& .MuiTypography-body1': {
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '45px',
            textAlign: 'center',
            letterSpacing: '0',
            color: '#387DFF',
            marginTop: '60px',
        },
    },

    homeBackground: {
        height: '80vh',
        backgroundImage: `url(${HomeBack})`,
        backgroundSize: '80vh',
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
        backgroundPosition: 'center',
    },
    homeBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        '@media (min-width: 1581px)': {
            marginTop: '-135px',
        },
    },

    homeImg: {
        width: '400px',
        margin: '40px auto 0',
        '@media (min-width: 1281px)': {
            width: '600px',
        },
    },
}));
