import { makeStyles } from '@material-ui/core';
import { Colors } from '../../../utils';

export const useStyles = makeStyles((theme) => ({
    infoCont: {
        '@media (min-width: 320px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            marginTop: '70px',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            marginTop: '70px',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '120px',
            paddingBottom: '120px',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '120px',
            paddingBottom: 0,
        },
    },

    getDirection: {
        display: 'flex',
        alignItems: 'center',
        '& a': {
            fontSize: '18px',
            fontWeight: '600',
            color: Colors.ThemeGreen,
            display: 'flex',
            alignItems: 'center',
            '@media (min-width: 320px)': {
                fontSize: '16px',
            },
            '@media (min-width: 768px)': {
                fontSize: '18px',
            },
        },
    },

    sponsors: {
        margin: '40px 0',
    },

    sponsorsWrapper: {
        maxHeight: '300px',
        height: 'auto',
        overflow: 'auto',
        marginTop: '20px',
        width: '100%',
        maxWidth: '647px',
    },

    sponsorItem: {
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '4px',
        marginBottom: '8px',
        '& p': {
            marginLeft: '9px',
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeBlack,
        },
    },

    between: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    sponsorImage: {
        width: '32px',
        height: '32px',
        borderRadius: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
    },

    infoContBottom: {
        '@media (min-width: 320px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            marginTop: '70px',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            marginTop: '70px',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '150px',
            paddingBottom: '120px',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '150px',
            paddingBottom: '120px',
        },
    },
    firstCont: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    firstContRow: {
        width: '100%',
        display: 'flex',

        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        '@media (min-width: 1920px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
    },

    descriptionCont: {
        height: 'auto',
    },
    titleCont: {
        // height: '30%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '30px',
    },
    titleIcon: {
        width: '14px',
        height: '34px',
        marginRight: '10px',
        background: Colors.ThemeGreen,
        [theme.breakpoints.down('xs')]: {
            height: '28px',
            width: '12px',
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
    descCont: {
        height: '70%',
        width: '100%',
        overflow: 'auto',
    },
    desc: {
        margin: 0,
        fontSize: '16px',
        color: Colors.ThemeLightGray,
    },

    tagsContRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0,

        '@media (min-width: 320px)': {
            margin: '70px 0 64px 0',
        },
        '@media (min-width: 768px)': {
            margin: '120px 0 113px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '50px 0 0 0',
        },
        '@media (min-width: 1920px)': {
            margin: '50px 0 0 0',
        },
    },

    tagsContRowNoLocation: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0,

        '@media (min-width: 320px)': {
            margin: '70px 0 64px 0',
        },
        '@media (min-width: 768px)': {
            margin: '120px 0 113px 0',
        },
        '@media (min-width: 1240px)': {
            margin: 0,

            width: '40%',
        },
        '@media (min-width: 1920px)': {
            margin: 0,

            width: '40%',
        },
    },
    chipsCont: {
        width: '100%',
        display: 'flex',
        color: Colors.ThemeLightGray,
        flexWrap: 'wrap',
    },
    titleCont1: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
    },
    chip: {
        padding: '7px 20px',
        color: Colors.ThemeBlack,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        boxShadow: '0px 2px 8px #0000001a',
        '@media (min-width: 320px)': {
            margin: '0 8px 8px 0',
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            margin: '0 16px 8px 0',
            fontSize: '16px',
        },
    },
    secCont: {
        marginBottom: '40px',
        '@media (min-width: 320px)': {
            width: '100%',
            padding: 0,
        },
        '@media (min-width: 768px)': {
            width: '100%',
            padding: 0,
        },
        '@media (min-width: 1240px)': {
            left: 0,
            marginLeft: '20%',
            width: '60%',
            height: '100%',
        },
        '@media (min-width: 1920px)': {
            marginLeft: '16%',
            width: '60%',
            height: '100%',
        },
    },
    locationCont: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            marginBottom: '70px',
        },
        '@media (min-width: 768px)': {
            marginBottom: '70px',
            marginTop: '50px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '120px',
            marginTop: 0,
        },
        '@media (min-width: 1920px)': {
            marginBottom: '120px',
            marginTop: 0,
        },
    },
    locTitleCont: {
        alignItems: 'center',
        // height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
    },
    mapCont: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'transparent',
        minHeight: '200px',
        borderRadius: '16px',
    },
    map: {},
    adressCont: {
        margin: '30px 0',
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
    },
    titleCont2: {
        width: '100%',
        height: '50%',
        marginBottom: '6px',
        color: Colors.ThemeBlack,
    },
    title1: {
        color: Colors.ThemeBlack,
        fontSize: '24px',
        margin: 0,
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    adress: {
        width: '60%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        '@media (min-width: 320px)': {
            width: '100%',
            marginBottom: '10px',
        },
        '@media (min-width: 1280px)': {
            width: '60%',
            marginBottom: '0',
        },
    },
    loc: {
        margin: 0,
        fontSize: '16px',
        color: Colors.ThemeLightGray,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    addressAndDirection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        '@media (min-width: 1280px)': {
            maxWidth: '477px',
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '635px',
        },
    },
}));

export const mapStyles = [
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] },
    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] },
    { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] },
    { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] },
    { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] },
    { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] },
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] },
    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] },
    { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] },
    { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] },
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] },
];
