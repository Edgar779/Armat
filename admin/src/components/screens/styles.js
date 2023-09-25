import { makeStyles } from '@material-ui/core/styles';

export const screensStyle = makeStyles(() => ({
    noInfoScreen: {
        width: '100%',
        height: '100vh',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',

        '& p': {
            marginTop: '15%',
            fontSize: '36px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: '#387DFF80',
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

    nameEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'100px',
        textTransform:'uppercase',
        "@media (min-width: 1919px)": {
            width:'150px',
        },
    },

    addressEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'200px',
        "@media (min-width: 1919px)": {
            width:'250px',
        },
    } ,

    desc:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'200px',
        "@media (min-width: 1919px)": {
            width:'250px',
        },
    } ,

    id:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'50px',
        "@media (min-width: 1919px)": {
            width:'50px',
        },
    } ,

    emailEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'150px',
        "@media (min-width: 1919px)": {
            width:'200px',
        },
    },


}));
