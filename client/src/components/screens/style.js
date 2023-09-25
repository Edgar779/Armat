import { makeStyles } from '@material-ui/core';
import { Colors } from '../../utils';

export const noResultStyle = makeStyles({
    noResultWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
    },
    noResultWrapperFirst: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            marginTop: '-45px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-25px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '-25px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '-5px',
        },
    },

    createButton: {
        marginTop: '30px',
        '@media (min-width: 1240px)': {
            marginTop: '40px',
        },
    },

    noResultTitle: {
        marginTop: '30px',
        textAlign: 'center',
        color: Colors.ThemeBlack,
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: '41px',
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
    },
    noResultTitleFirst: {
        textAlign: 'center',
        color: Colors.ThemeBlack,
        fontSize: '30px',
        lineHeight: '41px',
        fontWeight: 'bold',
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
            marginBottom: '70px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
            marginBottom: '100px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '100px',
            fontSize: '30px',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '120px',
            fontSize: '30px',
        },
    },
    noResultDescription: {
        marginTop: '16px',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '18px',
        lineHeight: '24px',
        color: ' #545F7E',
        '@media (min-width: 320px)': {
            fontSize: '14px',
            lineHeight: '19px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
    },
    image: {
        width: '200px',
        height: '200px',
        '@media (min-width: 320px)': {
            width: '284px',
            height: '180px',
        },
        '@media (min-width: 768px)': {
            width: '394px',
            height: '250px',
        },
        '@media (min-width: 1240px)': {
            width: '394px',
            height: '250px',
        },
        '@media (min-width: 1920px)': {
            width: '472px',
            height: '300px',
        },
    },

    toastWrapper: {
        display: 'flex',
        alignItems: 'center',

        '& img': {
            marginRight: '16px',
        },
        '& p': {
            fontSize: '16px',
        },
    },
    nameEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '100px',
        textTransform: 'uppercase',
        '@media (min-width: 1919px)': {
            width: '150px',
        },
    },

    addressEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '200px',
        color: '#222222CC !important',
        '@media (min-width: 1919px)': {
            width: '250px',
        },
    },

    organAddressEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '200px',
        color: '#222222CC !important',
        '@media (min-width: 1919px)': {
            width: '250px',
        },
    },

    searchAddressEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '50px',
        color: 'black',
        // '@media (min-width: 1919px)': {
        //     width: '300px',
        // },
    },
    emailEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '150px',
        '@media (min-width: 1919px)': {
            width: '200px',
        },
    },
    desc: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '200px',
        '@media (min-width: 1919px)': {
            width: '250px',
        },
    },

    id: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '50px',
        '@media (min-width: 1919px)': {
            width: '50px',
        },
    },
});
