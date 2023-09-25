import { makeStyles, Switch, withStyles } from '@material-ui/core';
import { Colors } from '../../../../utils';

export const useStyles = makeStyles((theme) => ({
    headerCont: {
        width: '100%',
    },

    imageGallery: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
    },

    navIcon: {
        color: 'gray',
        fontSize: '32px',

        '& :hover': {
            color: 'white',
        },

        '@media (min-width: 320px)': {
            fontSize: '28px',
            width: '28px',
            height: '28px',
        },
        '@media (min-width: 767px)': {
            fontSize: '32px',
            width: '32px',
            height: '32px',
        },
        '@media (min-width: 1239px)': {
            fontSize: '36px',
            width: '36px',
            height: '36px',
        },
    },

    showMoreImages: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '16px',
        position: 'absolute',
        padding: '4px 8px',
        top: '80px',
        zIndex: '99',
        border: 'none',
        cursor: 'pointer',
        left: '51%',
        background: '#49B776 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '24px',

        '& p': {
            marginLeft: '8px',
            color: 'white',
        },

        '@media (min-width: 320px)': {
            position: 'relative',
            top: '50px',
            left: '20px',
        },
        '@media (min-width: 767px)': {
            position: 'relative',
            top: '100px',
            left: '20px',
        },
        '@media (min-width: 1239px)': {
            left: '47%',
            position: 'absolute',
            top: '130px',
        },
        '@media (min-width: 1919px)': {
            top: '140px',
            left: '47%',
        },
    },

    imageCount: {
        width: '160px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#00000066 0% 0% no-repeat padding-box',
        borderRadius: '0px 0px 16px 16px',
        top: 0,
        position: 'absolute',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
    },

    carouselImage: {
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',

        '@media (min-width: 320px)': {
            width: '291px',
            height: '168px',
        },
        '@media (min-width: 768px)': {
            width: '608px',
            height: '350px',
        },
        '@media (min-width: 1240px)': {
            width: '700px',
            height: '400px',
        },
        '@media (min-width: 1919px)': {
            width: '1186px',
            height: '600px',
        },
    },

    showImageWrapper: {
        background: '#252E48',
        width: '100%',
        height: '100%',
        top: 0,
        position: 'fixed',
        zIndex: '9999',
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            padding: '50px 42px',
        },
        '@media (min-width: 768px)': {
            padding: '50px 80px',
        },
        '@media (min-width: 1240px)': {
            padding: '50px 207px',
        },
        '@media (min-width: 1919px)': {
            padding: '140px 267px',
        },
    },

    creatorAvatar: {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '40px',
        border: '2px solid white',
    },

    sliderWrapper: {
        '& button': {
            width: '32px !important',
        },
        '& button:first-of-type': {
            left: '0 !important',
        },
        '& button:nth-of-type(2)': {
            right: '0 !important',
        },
    },

    closeButtonWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
    },

    breadcrumbsCont: {
        height: '10%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '36px',
        },
        '@media (min-width: 1240px)': {
            position: 'absolute',
            right: '42px',
            marginTop: '-61px',
        },
        '@media (min-width: 1920px)': {
            position: 'absolute',
            right: '92px',
            marginTop: '-35px',
        },
    },

    editResubmit: {
        background: 'transparent',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        cursor: 'pointer',
    },
    editResubmitText: {
        color: Colors.ThemeGreen,
        fontSize: '16px',
        marginLeft: '8px',
    },

    organizerPublishUn: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        color: '545F7E',
        margin: 0,
        cursor: 'pointer',
    },

    publishEventText: {
        color: Colors.ThemeLightGray,

        '@media (min-width: 320px)': {
            marginRight: '4px',
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            marginRight: '8px',
            fontSize: '16px',
        },
        '@media (min-width: 1240px)': {
            marginRight: '8px',
            fontSize: '16px',
        },
        '@media (min-width: 1920px)': {
            marginRight: '8px',
            fontSize: '16px',
        },
    },

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
    genBackImg: {
        position: 'absolute',
        top: 75,
        right: 0,
        width: 250,
        height: 550,
        zIndex: 2,
        // position: 'absolute',
        // top: 75,
        // left: '73%',
        // width: 300,
        // height: 600,
        // [theme.breakpoints.up('xl')]: {
        //     left: '79%',
        // },
        // [theme.breakpoints.down('xl')]: {
        //     left: '76%',
        // },
        // [theme.breakpoints.down('md')]: {
        //     left: '68%',
        // },
    },
    buttonsStyle: {
        width: '160px',
        height: '48px',
        marginRight: '24px',
        marginBottom: '16px',
        color: '#222222',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0 0 0 16px',
        borderRadius: '8px',
        border: '1px solid #E1E1E1',
        background: '#FFF',

        '& svg': {
            marginRight: '8px',
            // filter: 'invert(11%) sepia(20%) saturate(18%) hue-rotate(320deg) brightness(107%) contrast(97%) !important',
        },

        '@media (max-width: 320px)': {
            marginRight: '12px',
        },

        '@media (max-width: 767px)': {
            marginRight: '24px',
            width: '140px',
            fontSize: '14px',
            position: 'absolute',
            marginLeft: 0,
            borderRadius: '32px',
        },
    },
    infoCardCont: {
        width: '100%',
        display: 'flex',
        marginTop: '36px',

        '@media (min-width: 320px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            margin: '30px auto',
            maxWidth: '1200px',
            height: '606px',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            display: 'flex',
            maxWidth: '1440px',
            flexDirection: 'row',
            margin: '40px auto',
            height: '706px',
        },
    },

    infoCardContSmall: {
        width: '100%',
        display: 'flex',
        marginTop: '36px',

        '@media (min-width: 320px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px 0 0 0',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            margin: '30px auto',
            maxWidth: '1200px',
            height: '400px',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            display: 'flex',
            maxWidth: '1440px',
            flexDirection: 'row',
            margin: '40px auto',
            height: '550px',
        },
    },

    buttonsSection: {
        display: 'flex',
        flexWrap: 'wrap',
        '@media (min-width: 320px)': {
            margin: '0 auto 20px auto',
            width: '400px',
            '& div': {
                flex: '50%',
                margin: '40px 0',
            },
        },
        '@media (min-width: 768px)': {
            margin: '30px auto',
            width: '600px',
            '& div': {
                flex: '33%',
                margin: ' 0',
            },
        },
        '@media (min-width: 1240px)': {
            margin: '410px 0',
            width: '600px',
            '& div': {
                flex: '33%',
                margin: ' 0',
            },
        },
        '@media (min-width: 1920px)': {
            margin: '540px 0',
            width: '600px',
            '& div': {
                flex: '33%',
                margin: ' 0',
            },
        },
    },

    infoCard: {
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        zIndex: 11,

        display: 'flex',
        flexDirection: 'row',

        '@media (min-width: 320px)': {
            height: 'auto',
            marginBottom: '30px',
            width: '100%',
            borderRadius: '16px',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            borderRadius: '16px',
        },
        '@media (min-width: 1240px)': {
            position: 'absolute',
            right: 0,
            top: '172px',
            width: '50%',
            borderRadius: '16px 0 0 16px',
        },
        '@media (min-width: 1920px)': {
            width: '55%',
            right: 0,
            top: '235px',
            borderRadius: '16px 0 0 16px',
        },
    },

    infoCont: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            padding: '24px 0 30px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '34px 0 32px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '34px 0 32px 32px',
        },
        '@media (min-width: 1920px)': {
            padding: '48px 0 48px 63px',
        },
    },
    titleCont: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
    },
    titleIcon: {
        width: '14px',
        height: 'auto',
        background: Colors.ThemeGreen,

        '@media (min-width: 320px)': {
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            marginRight: '16px',
        },
    },

    title: {
        fontSize: '26px',
        color: Colors.ThemeBlack,
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    orgCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        '@media (min-width: 320px)': {
            margin: '33px 0 0 0',
        },
        '@media (min-width: 768px)': {
            margin: '34px 0 0 0',
        },
        '@media (min-width: 1240px)': {
            margin: '30px 0 0 0',
        },
        '@media (min-width: 1920px)': {
            margin: '40px 0 0 0',
        },
    },
    avatar: {
        backgroundColor: 'white',
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginRight: '0',
        '@media (min-width: 320px)': {
            height: '28px',
            width: '28px',
        },
        '@media (min-width: 768px)': {
            height: '46px',
            width: '46px',
        },
        '@media (min-width: 1240px)': {
            height: '46px',
            width: '46px',
        },
        '@media (min-width: 1920px)': {
            height: '46px',
            width: '46px',
        },
    },
    org: {
        color: Colors.ThemeBlack,
        padding: 0,
        marginLeft: '12px',
        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
    },
    dataCont: {
        '@media (min-width: 320px)': {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            width: '450px',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    type: {
        margin: '30px 0 20px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media (min-width: 1920px)': {
            margin: '40px 0 20px 0',
        },
    },
    date: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: '4px',
        '@media (min-width: 320px)': {
            width: '18px',
            height: '18px',
        },
        '@media (min-width: 768px)': {
            width: '24px',
            height: '24px',
        },
        '@media (min-width: 1240px)': {
            width: '24px',
            height: '24px',
        },
        '@media (min-width: 1920px)': {
            width: '24px',
            height: '24px',
        },
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 8px 0 0',
        color: Colors.ThemeBlack,
        [theme.breakpoints.down('xl')]: {
            fontSize: '16px',
            color: Colors.ThemeBlack,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            color: Colors.ThemeBlack,
        },
    },
    subscribeButton: {
        width: '100%',
        '@media (min-width: 767px)': {
            width: '124px',
        },
    },
    buttonCont: {
        width: '100%',
        maxWidth: '300px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        '@media (min-width: 767px)': {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '30px',
            maxWidth: '100%',
        },
        '@media (min-width: 1920px)': {
            marginTop: '40px',
        },
    },
    backImgCont: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',

        '@media (min-width: 320px)': {
            width: '120px',
            height: '196px',
            right: 0,
            top: '100px',
        },
        '@media (min-width: 768px)': {
            width: '244px',
            height: '400px',
            right: 0,
            top: '31px',
        },
        '@media (min-width: 1280px)': {
            width: '270px',
            height: '400px',
            right: 0,
        },
        '@media (min-width: 1920px)': {
            width: '270px',
            height: '400px',
            right: 0,
        },
    },

    img: {
        backgroundSize: 'cover',
        height: 'auto',
        borderRadius: '16px',
        boxShadow: '8px 8px 6px #0000001A',
        marginTop: '180px',
        zIndex: 2,
        objectFit: 'cover',
        '@media (min-width: 320px)': {
            height: 'auto',
            width: 'auto',
            maxHeight: '220px',
            position: 'relative',
            margin: '0 auto',
            display: 'flex',
        },
        '@media (min-width: 768px)': {
            height: 'auto',
            maxHeight: '494px',
            width: 'auto',
            maxWidth: '100%',
            position: 'relative',
            margin: '40px auto 0 auto',
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            height: '460px',
            // top: '30px',
            // left: 0,
            position: 'absolute',
            width: '50%',
            top: '30px',
            left: '7%',
            zIndex: 9,
            // borderRadius: 0,
        },
        '@media (min-width: 1920px)': {
            height: '600px',
            width: '50%',
            top: '30px',
            left: '7%',
            position: 'absolute',
            zIndex: 9,
            // borderRadius: 0,
        },
    },
    imgNoImage: {
        backgroundSize: 'cover',
        height: 'auto',
        borderRadius: '16px',
        boxShadow: '8px 8px 6px #0000001A',
        marginTop: '180px',
        zIndex: 2,
        objectFit: 'cover',
        '@media (min-width: 320px)': {
            height: '300px',
            width: '300px',
            position: 'relative',
            margin: '0 auto',
            display: 'flex',
        },
        '@media (min-width: 768px)': {
            height: '494px',
            width: '494px',
            maxWidth: '100%',
            position: 'relative',
            margin: '40px auto 0 auto',
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            height: '460px',
            // top: '30px',
            // left: 0,
            position: 'absolute',
            width: '50%',
            top: '30px',
            left: '7%',
            zIndex: 9,
            // borderRadius: 0,
        },
        '@media (min-width: 1920px)': {
            height: '600px',
            width: '50%',
            top: '30px',
            left: '7%',
            position: 'absolute',
            zIndex: 9,
            // borderRadius: 0,
        },
    },

    noScrollImg: {
        backgroundSize: 'cover',
        height: 'auto',
        borderRadius: '16px',
        boxShadow: '0px 2px 8px #0000001a',
        marginTop: '180px',
        zIndex: 2,
        objectFit: 'cover',
        background: 'white',
        '@media (min-width: 320px)': {
            height: '240px',
            position: 'relative',
            margin: 0,
            width: '100%',
        },
        '@media (min-width: 768px)': {
            height: '494px',
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            margin: '40px 0 0 0',
        },
        '@media (min-width: 1240px)': {
            height: '460px',
            top: '30px',
            left: 0,
            position: 'absolute',
            width: '64%',
            zIndex: 9,
            borderRadius: '15px',
        },
        '@media (min-width: 1920px)': {
            height: '600px',
            width: '58%',
            top: '79px',
            left: 0,
            position: 'absolute',
            zIndex: 9,
            // borderRadius: 0,
        },
    },
    eventCardStatusCont: {
        marginTop: '200px',
        width: '100%',

        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '30px',
        },
        '@media (min-width: 1280px)': {
            marginTop: '150px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '150px',
        },
    },
    eventStatusCont: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '40px 24px 40px 24px',
    },
    eventStatusHeaderColumn: {
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    eventStatusHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'row',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            flexDirection: 'row',
        },
    },
    eventStatus: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventStatusIcon: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '16px',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '3px',
        },
    },
    eventStatusText: {
        fontSize: '18px',
        color: '#545F7E',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    statusIcon: { marginRight: '8px' },
    status: { margin: '0 0 0 8px' },
    eventSubmitButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginTop: '10px',
        },
        '@media (min-width: 768px)': {
            marginTop: 0,
        },
        '@media (min-width: 1240px)': {
            marginTop: 0,
        },
        '@media (min-width: 1920px)': {
            marginTop: 0,
        },
    },
    buttonText: {
        fontSize: '16px',
        color: '#387DFF',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    descCon: {},
    desc: {
        fontSize: '16px',
        color: '#545F7E',
        lineHeight: '24px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },

    imageBox: {
        height: '100%',
        position: 'absolute',
        right: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',

        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            width: '320px',
            height: '523px',
            top: '130px',
            display: 'block',
        },
        '@media (min-width: 1920px)': {
            width: '320px',
            height: '523px',
            top: '150px',
            display: 'block',
        },
    },
    cardGetDirection: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    rsvpButton: {
        width: '100%',
        height: '48px',
        background: 'white',
        borderRadius: '8px',
        padding: ' 24px',
        display: 'flex',
        alignItems: 'center',
        color: '#222222',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginTop: '16px',
        '& .MuiPopover-paper': {
            borderRadius: '8px',
        },
        '@media (min-width: 768px)': {
            marginLeft: '24px',
            marginTop: 0,
            width: '200px',
        },
    },
    rsvpActiveButton: {
        marginLeft: '24px',
        width: '100%',
        height: '48px',
        background: '#49B776',
        borderRadius: '8px',
        padding: ' 24px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginTop: '16px',
        '& .MuiPopover-paper': {
            borderRadius: '8px',
        },
        '@media (min-width: 768px)': {
            width: '200px',
            marginLeft: '24px',
            marginTop: 0,
        },
    },
    activeRsvpColors: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(350deg) brightness(105%) contrast(106%)',
        },
    },
    rsvpButtonWrapper: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },

    rsvpGreenButtonWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    rsvpButtonText: {
        fontSize: '16px',
        fontWeight: '600',
    },
    downArrowButton: {
        background: 'transparent',
        border: 'none',
        padding: 0,
        boxShadow: 'unset',
        minWidth: 'auto',
        cursor: 'pointer',
        marginTop: '4px',
    },
    downArrowButtonActive: {
        background: 'transparent',
        border: 'none',
        padding: 0,
        boxShadow: 'unset',
        minWidth: 'auto',
        cursor: 'pointer',
        marginTop: '4px',
        '& svg': {
            filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(350deg) brightness(105%) contrast(106%)',
        },
    },
    rsvTypesWrapper: {
        width: '300px',
        height: '160px',
        padding: '8px',
    },

    rsvTypesButton: {
        width: '100%',
        height: '48px',
        borderRadius: '8px',
        border: 'none',

        background: 'transparent',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 24px',
        },
        '& div:hover': {
            background: '#F4F4F4',
            width: '100%',
            height: '48px',
            borderRadius: '8px',
            padding: '12px 24px',
        },
    },
}));

export const AntSwitch = withStyles((theme) => ({
    root: {
        width: 44,
        height: 24,
        padding: 0,
        display: 'flex',
        marginTop: 0,
        marginLeft: '8px',
    },
    switchBase: {
        paddingTop: '2.2px',
        padding: 3,
        color: theme.palette.common.white,
        '&$checked': {
            transform: 'translateX(20px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: '#49B776',
                borderColor: '#49B776',
            },
        },
    },
    thumb: {
        width: 17,
        height: 17,
        marginTop: '1px',
        boxShadow: 'none',
    },
    track: {
        border: 'none',
        borderRadius: 24 / 2,
        opacity: 1,
        backgroundColor: theme.palette.grey[400],
    },
    checked: {},
}))(Switch);
