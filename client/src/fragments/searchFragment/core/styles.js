import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const searchStyle = makeStyles((theme) => ({
    GridCardWrapper: {
        '@media (min-width: 320px)': {
            // marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            // marginTop: '30px',
            marginRight: '24px',
        },
        '@media (min-width: 1240px)': {
            // height: '646px',
            // overflow: 'auto',
            width: '50%',
            // marginTop: '30px',
            marginRight: '24px',
        },
        '@media (min-width: 1920px)': {
            // marginTop: '40px',
        },
    },
    mapButton: {
        border: 'none',
        width: '88px',
        height: '40px',
        borderRadius: '20px',
        boxShadow: '0px 0px 12px #0052E01A',
        background: Colors.ThemeGreen,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: '600',
        marginRight:'16px',
    },

    footerWrapper: {
        height: '100px',
        padding: '30px',
        boxShadow: '0px 0px 12px #0052E01A',
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: '999',
    },

    swipeHeader: {
        height: '98px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '20px 20px 0px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '16px 0 0 0',
        alignItems: 'center',
    },
    backButton: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        margin: '0 0 15px 0',
    },
    openedSwipe: {
        borderRadius: '20px 20px 0px 0px',
    },
    line: {
        width: '40px',
        height: '4px',
        background: Colors.ThemeGreen,
        borderRadius: '6px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '16px',
        lineHeight: '30px',
        color: Colors.ThemeGreen,
    },

    leftBorderStyle: {
        borderRadius: '0px 4px 4px 0px',
        height: '84px',
        marginTop: '8px',
        position: 'absolute',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
        '@media (min-width: 1919px)': {
            display: 'block',
        },
    },

    toolTip: {
        width: '100%',
        background: Colors.ThemeGreen,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '16px',
    },

    gridImgStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    mobileBottomBorderStyle: {
        '@media (min-width: 320px)': {
            display: 'block',
            marginLeft: '16px',
            width: '93%',
            borderRadius: '4px 4px 0px 0px',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
        '@media (min-width: 1920px)': {
            display: 'none',
        },
    },

    gridInfoContent: {
        display: 'flex',
        cursor: 'pointer',
    },

    gridInfoContentNoCursor: {
        display: 'flex',
    },

    fullDate: {
        fontSize: '14px',
        lineHeight: '19px',
        color: Colors.ThemeBlack,
    },

    eventTitle: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeBlack,

        '@media (min-width: 320px)': {
            marginTop: '8px',
        },
        '@media (min-width: 768px)': {
            marginTop: '17px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '17px',
        },
    },
    eventAddress: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '19px',
        color: Colors.ThemeBlack,
        marginTop: '6px',
        marginRight: '16px',
    },

    editCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '@media (min-width: 320px)': {
            marginTop: '14px',
        },
        '@media (min-width: 768px)': {
            marginTop: '18px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '18px',
        },
    },
    editIconCont: {
        backgroundColor: '#387DFF1A',
        padding: '5px',
        display: 'flex',
        borderRadius: '4px',
        marginRight: '6px',
        width: '24px',
        height: '24px',
    },
    deleteCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIconCont: {
        cursor: 'pointer',
        backgroundColor: '#F073791A',
        padding: '5px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '6px',
        width: '24px',
        height: '24px',
    },
    deleteEditText: {
        fontSize: '12px',
        lineHeight: '17px',
        color: '#545F7E',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
    },

    gridCardCont: {
        marginBottom: '24px',
        width: '100%',
        borderRadius: '6px',
        display: 'flex',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '99%',
        },
    },
    gridImgCont: {
        objectFit: 'cover',
        borderRadius: '6px',

        '@media (min-width: 320px)': {
            margin: '8px 8px 0px 16px',
            width: '68px',
            height: '68px',
        },
        '@media (min-width: 768px)': {
            width: '84px',
            height: '84px',
        },
        '@media (min-width: 1240px)': {
            width: '84px',
            height: '84px',
            margin: '16px 16px 10px 16px',
        },
        '@media (min-width: 1920px)': {
            width: '84px',
            height: '84px',
        },
    },

    cardCont: {
        width: '285px',
        height: '239px',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '6px',
        marginBottom: '30px',
        overflow: 'hidden',

        'MuiBox-root': {
            margin: 0,
        },
    },
    imgCont: {
        height: '70%',
        width: '100%',
        overflow: 'hidden',
    },
    infoCont: {
        margin: '8px',
        width: '221px',
        height: '96px',
        background: '#FAFAFA',
        borderRadius: '6px',
        padding: '8px 16px',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
        },
    },
    itemsWrapper: {
        display: 'flex',
        // alignItems: 'center',
        marginBottom: '6px',
    },
    infoContMobile: {
        margin: '8px',
        width: '93%',
        height: '31px',
        marginLeft: '16px',
        background: '#FAFAFA',
        borderRadius: '6px',
        padding: '6px',

        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
    },
    dateCont: {
        width: '20%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
    },
    day: {
        backgroundColor: '#387DFF1A',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        fontSize: '16px',
        fontWeight: '600',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
    },
    month: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: '#387DFF1A',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',

        fontSize: '14px',
    },
    descCont: {
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
    },

    // title: {
    //     width: '100%',
    //     height: '50%',
    //     fontWeight: '600',
    //     fontSize: '16px',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'start',
    //     justifyContent: 'center',
    // },
    adress: {
        width: '100%',
        height: '50%',
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    optCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        '@media (min-width: 320px)': {
            marginRight: '4px',
        },
        '@media (min-width: 768px)': {
            marginRight: '8px',
        },
        '@media (min-width: 1240px)': {
            marginRight: '8px',
        },
        '@media (min-width: 1920px)': {
            marginRight: '8px',
        },
    },

    badge: {
        '& img': {
            '@media (min-width: 320px)': {
                width: '32px',
                height: '32px',
            },
            '@media (min-width: 768px)': {
                width: '50px',
                height: '50px',
            },
            '@media (min-width: 1240px)': {
                width: '50px',
                height: '50px',
            },
            '@media (min-width: 1920px)': {
                width: '50px',
                height: '50px',
            },
        },
        position: 'absolute',
        '@media (min-width: 320px)': {
            marginTop: '-8px',
            marginLeft: '8px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-19px',
            marginLeft: '16px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '-15px',
            marginLeft: '-15px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '-15px',
            marginLeft: '-15px',
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
            fontSize: '24px',
        },
    },
}));
