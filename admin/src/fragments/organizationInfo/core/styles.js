import {makeStyles} from "@material-ui/core/styles";

export const organizationInfoStyles = makeStyles(() => ({
    infoWrapper: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        margin: '33px 0',
        padding: '32px',
    },

    breadWrapper: {
        display: 'flex',
        justifyContent: "space-between",
    },

    flaxAble: {
        display: 'flex',
    },

    imageGallery: {
        border: 'none',
        background: 'transparent',
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

    noInfo: {
        width: '100%',
        height: '50px',
        display: 'flex',
        marginTop:'60px',
        justifyContent: 'center',
        '& p': {
            fontSize: '36px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: '#387DFF80',
        },
    },

    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#387DFF',
    },

    nameDateWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    photosButton: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            width: '24px',
            height: '24px',
            marginRight: '8px',
        },
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#387DFF'
    },

    nameDate: {
        marginLeft: '24px',
    },

    sub: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#545F7E',
    },

    imageAndNameWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '45%',
    },

    imageAndName: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    businessImage: {
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        objectFit: 'cover',
    },

    businessInfoWrapper: {
        marginTop: '32px',
    },

    itemWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '13px',
        marginBottom: '16px',
        background: '#EAF2FF 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        '& p': {
            fontSize: '16px',
            fontWeight: '600',
            color: '#545F7E',
            lineHeight: '22px',
        },
        '& span': {
            fontSize: '18px',
            fontWeight: '600',
            color: '#387DFF;',
            lineHeight: '24px',
            marginLeft: '8px',
        },
    },

    whiteItem: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        padding: '13px 24px',
        marginTop: '16px',
        width: '100%',
        '& p': {
            fontSize: '16px',
            lineHeight: '24px',
            color: '#545F7E',
        },
    },

    ClaimsWrapper: {
        marginLeft: '40px',
        width: '52%',
    },

    claimsButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '43px',
        '& button': {
            border: 'none',
            background: 'transparent',
            outline: 'none',
            marginRight: '14px'
        },
        '& img': {
            width: '32px',
            height: '32px',
        }
    },

    closeButtonWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
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
    },

    managerWrapper: {
        height: '216px',
        background: '#EAF2FF 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        padding: '32px',
    },

    managerNameImageWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    managerNameImage: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#387DFF',
        },
        '& img': {
            marginRight: '26px',
            height: '60px',
            width: '60px',
            border: '1px solid white',
            borderRadius: '28px',
            objectFit:'cover',
        },
    },

    removeButton: {
        border: 'none',
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '600',
        color: '#F07379',
        '& img':{
            marginRight:'8px',
            height:'20px',
        },
        '& div':{
            marginRight:'8px',
            height:'20px',
        }
    },

    managerInfo:{
        display:'flex',
        alignItems:'center',
        marginTop:'20px',
        '& img':{
            marginRight:'8px',
        },
        '& p':{
            fontSize:'16px',
            fontWeight:'600',
            color:'#545F7E',
        }
    },

    itemSection:{
        marginTop: '27px'
    },

    link: {
        marginLeft: '8px',
        color: '#387DFF',
        fontSize: '18px',
        fontWeight: '600',
        textDecoration: 'underline',
        cursor: 'pointer',
    },

    rows: {
        '& p': {
            fontSize: '16px',
            color: '#545F7E',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            margin: '0 8px',
        },
    },
    lastRows: {
        '& p': {
            fontSize: '16px',
            color: '#545F7E',
            fontWeight: 'bold',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            display: 'none',
            marginLeft: '8px',
            marginRight: '8px',
        },
    },
    categoriesWrapper: {
        width: '100%',
        maxHeight: '200px',
        height: 'auto',
        overflow: 'auto',
        margin: '5px 0',
    },
    ellipsis: {
        textOverflow: 'ellipsis',
        display: 'flex',
        whiteSpace: 'nowrap',
        overflow: 'scroll',
        width: '100%',
    },
}))