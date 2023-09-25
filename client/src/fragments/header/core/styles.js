import { MenuItem, Menu, makeStyles, withStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const useStyles = makeStyles((theme) => ({
    header: {
        background: Colors.ThemeWhite,
        boxShadow: '0px 2px 8px #0000001A',
        zIndex: 1006,
        justifyContent: 'center',
        alignItems: 'center',

        height: '120px',
        position: 'fixed',

        '@media (min-width: 320px)': {
            height: 'auto',
            justifyContent: 'flex-start',
        },
        '@media (min-width: 768px)': {
            height: 'auto',
            justifyContent: 'flex-start',
        },
        '@media (min-width: 1280px)': {
            height: '120px',
            transition: 'height 0.25s ease',
            // transition: 'height 0.25s ease-out',
            justifyContent: 'center',
        },
    },
    headerScrolled: {
        background: Colors.ThemeWhite,
        boxShadow: '0px 2px 8px #0000001A',
        zIndex: 1006,
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height 0.25s ease-out',
        height: '80px',
        position: 'fixed',
        '@media (min-width: 320px)': {
            height: 'auto',
            justifyContent: 'flex-start',
        },
        '@media (min-width: 768px)': {
            height: 'auto',
            justifyContent: 'flex-start',
        },
        '@media (min-width: 1280px)': {
            height: '80px',
            transition: 'height 0.25s ease',
            // transition: 'height 0.25s ease-out',
            justifyContent: 'center',
        },
    },
    logoCont: {
        width: '6%',
        [theme.breakpoints.down('sm')]: {
            width: '10%',
        },
    },
    rightPanel: {
        display: 'flex',
        alignItems: 'center',
    },
    navbar: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapper: {
        width: '100%',
        padding: '16px 0',
    },

    button: {
        borderRadius: '18px',
        width: '170px',
        borderColor: '#fff',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
        '& span': {
            margin: 0,
        },
    },
    list: {
        width: '100%',
        padding: 0,
        margin: 0,
        marginRight: '20px',
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 320px)': {
            marginRight: 0,
        },
        '@media (min-width: 1280px)': {
            marginRight: '20px',
        },
        // [theme.breakpoints.down('xs')]: {
        //     order: 2,
        // },
    },
    listMobile: {
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.down('xs')]: {
            order: 2,
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-end',
        },
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        cursor: 'pointer',
        color: Colors.ThemeBlack,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    notification: {
        '@media (min-width: 320px)': {
            marginRight: '20px',
        },
        '@media (min-width: 768px)': {
            marginRight: '20px',
        },
        '@media (min-width: 1240px)': {
            marginRight: '40px',
        },
        '@media (min-width: 1920px)': {
            marginRight: '40px',
        },
    },
    divider: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            display: 'block',
            order: 1,
            transform: 'translateX(-16px)',
            margin: '16px 0',
            backgroundColor: '#707070',
        },
    },
    sign: {
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        },
    },
    image: {
        position: 'relative !important',
    },
    menuAndCreate: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export const useMenuStyles = makeStyles((theme) => ({
    link: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: Colors.ThemeBlack,
        textDecoration: 'none',
    },
    activeLink: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: Colors.ThemeBlack,
        textDecoration: 'none',
    },

    dropDown: {
        width: 'auto',
        maxWidth: 220,
    },

    listItem: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '30px',
        cursor: 'pointer',
        color: Colors.ThemeBlack,
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    desktopModalMenu: {
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': { display: 'none' },
        '@media (min-width: 1240px)': { display: 'block' },
        '@media (min-width: 1920px)': { display: 'block' },
    },
    mobileModalMenu: {
        margin: '8px 0 0 8px',
        '@media (min-width: 320px)': { display: 'block' },
        '@media (min-width: 768px)': { display: 'block' },
        '@media (min-width: 1240px)': { display: 'none' },
        '@media (min-width: 1920px)': { display: 'none' },
    },
}));

export const useNavStyles = makeStyles((theme) => ({
    navigationItems: {
        display: ' flex',
        flexDirection: 'row',
        justifyContent: 'center',

        '@media (min-width: 320px)': {},
        '@media (min-width: 768px)': {},
        '@media (min-width: 1240px)': {},
        '@media (min-width: 1920px)': {
            marginRight: '270px',
        },
    },
    searchedCard: {
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        cursor: 'pointer',
        '& img': {
            width: '30px',
            height: '30px',
            marginRight: '16px',
            objectFit: 'cover',
        },
        '& p': {
            fontSize: '14px',
            fontWeight: '600',
            color: '#C5C8D3',
        },
        '& span': {
            fontSize: '14px',
            fontWeight: '600!important',
            color: Colors.ThemeBlack,
        },
    },
    cont: {
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        cursor: 'pointer',
    },
    text: {
        paddingLeft: '20px',
        paddingRight: '20px',
        color: '#FFFFFF',
        fontSize: '16px',
        margin: 0,
        marginTop: '26px',
        marginBottom: '16px',
    },
    underLine: {
        width: '100%',
        height: '6px',
        background:
            'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
        borderRadius: '6px 6px 0px 0px',
    },
    noUnderLine: {
        width: '100%',
        height: '6px',
    },
    searchWrapper: {
        maxWidth: '851px',
        width: '851px',
        height: '48px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 1280px)': {
            width: '700px',
        },
        '@media (min-width: 1920px)': {
            width: '851px',
        },
    },
    backDrop: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        background: 'transparent',
        left: 0,
        top: 0,
    },
    wrappedNavigation: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        position: 'relative',
        zIndex: '999',
        '@media (min-width: 768px)': {
            width: '380px',
            marginLeft: '35px',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            marginLeft: '35px',
        },
    },
    find: {
        display: 'flex',
        alignItems: 'center',
        width: '41%',
        height: '36px',
        borderRight: `2px solid ${Colors.ThemeGreen}`,
        marginLeft: '16px',
    },
    searchInput: {
        width: '100%',
        height: '36px',
        border: 'none',
    },
    etCurrent: {
        display: 'flex',
        fontSize: '16px',
        fontWeight: '600',
        color: ' #387DFF',
        border: 'none',
        background: 'transparent',
        '& p': {
            marginLeft: '16px',
        },
    },
    showWrapper: {
        height: 'auto',
        top: '-178px',
        width: '356px',
        background: 'white',
        borderRadius: '6px',
        marginTop: '246px',
        position: 'fixed',
        padding: '15px 16px',
        marginLeft: '-16px',
        boxShadow: '0px 2px 6px #0000001A',
        '@media (min-width: 1280px)': {
            width: '300px',
        },
        '@media (min-width: 1920px)': {
            width: '356px',
        },
    },

    showWrapperBody: {
        height: 'auto',
        maxHeight: '300px',
        overflow: 'auto',
        marginBottom: '10px',
    },

    showWrapperMobileShow: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '6px',
        marginLeft: '-75px',
        position: 'absolute',
        zIndex: '9999',
        width: '356px',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px 16px',
        boxShadow: '0px 2px 6px #0000001A',
        top: '56px',
        '@media (min-width: 320px)': {
            position: 'fixed',
            width: '100%',
            maxWidth: '100%',
            top: '150px',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            borderRadius: '0 0 6px 6px',
        },
        '@media (min-width: 768px)': {
            top: '120px',
        },
        '@media (min-width: 1279px)': {
            position: 'absolute',
            width: '356px',
            top: '56px',
            marginLeft: '-75px',
            borderRadius: '6px',
        },
    },

    noMatch: {
        fontSize: '16px',
        fontWeight: '600',
        color: Colors.ThemeBlack,
    },
    showWrapperMobile: {
        height: 'auto',
        width: '100%',
        background: 'white',
        borderRadius: '6px',
        marginTop: '105px',
        position: 'absolute',
        padding: '15px 16px',
    },
    menuLinks: {
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        cursor: 'pointer',
        '& p': {
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeBlack,
            marginLeft: '16px',
        },
    },
    address: {
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        marginLeft: '10px',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#222222CC',
        marginRight: '16px',
    },

    searchButton: {
        width: '99px',
        height: '44px',
        background: Colors.ThemeGreen,
        borderRadius: '8px',
        border: 'none',
        marginRight: '2px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',

        '& p': {
            marginLeft: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
    },

    mobileAddressSearch: {
        minWidth: '32px',
        width: 'auto',
        height: '24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marginRight: '10px',
    },
    mobileAddressSearchButton: {
        background: Colors.ThemeGreen,
        minWidth: '32px',
        width: 'auto',
        height: '30px',
        border: 'none',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchMobileWrapper: {
        padding: '0 2px 0 18px ',
        width: '100%',
        maxWidth: '380px',
        height: '34px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        '& input': {
            width: '100%',
            border: 'none',
        },
        '@media (min-width: 320px)': {
            marginTop: '10px',
        },
        '@media (min-width: 768px)': {
            marginTop: 0,
            marginBottom: '10px',
        },
    },

    mobileSearchingWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        // marginTop:'10px',
    },

    linkStyle: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: Colors.ThemeBlack,
        marginRight: '40px',
        cursor: 'pointer',
    },
}));

export const useNoteStyles = makeStyles(() => ({
    notificationBadge: {
        '& .MuiBadge-badge': {
            border: '0.5px solid white',
            width: '15px',
            height: '19px',
        },
    },

    modal: {
        '& .MuiBackdrop-root': {
            background: 'transparent !important',
        },
    },
}));

export const StyledMenu = withStyles({
    paper: {
        '@media (max-width: 960px)': {
            background: '#F07379',
            marginLeft: '93px',
            boxShadow: '0px 2px 6px #0000001A',
            borderRadius: 0,
            width: 250,
        },
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '6px',
        width: 240,
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
export const StyledMenuMobile = withStyles({
    paper: {
        '@media (max-width: 960px)': {
            background: 'transparent',
            marginLeft: '93px',
            boxShadow: '0px 0px 0px #0052E01A',
            borderRadius: 0,
            width: 250,
        },
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '6px',
        width: 240,
        position: 'relative',
    },
})((props) => (
    <Menu
        elevation={0}
        style={{ position: 'relative' }}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export const StyledMenuItem = withStyles((theme) => ({
    root: {
        '& .MuiTouchRipple-root:hover': {
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '10px',
        },
        '& .MuiMenuItem-root': {
            padding: '6px',
        },
        '& .MuiMenu-list': {
            padding: '6px',
            borderRadius: '10px',
        },
    },
}))(MenuItem);

export const useNoteContStyles = makeStyles((theme) => ({
    notificationsCont: {
        overflow: 'hidden',
        '@media (min-width: 320px)': {
            zIndex: 9,
            top: 0,
            height: '100vh',
            width: '100%',
            opacity: '1',
            position: 'fixed',
            borderRadius: 0,
        },
        '@media (min-width: 768px)': {
            zIndex: 9,
            top: 0,
            height: '100vh',
            width: '100%',
            opacity: '1',
            position: 'fixed',
            borderRadius: 0,
        },
        '@media (min-width: 1240px)': {
            width: '500px',
            maxHeight: '500px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            borderRadius: '16px',
            opacity: 1,
            position: 'absolute',
            top: 76,
            right: 200,
        },
        '@media (min-width: 1920px)': {
            width: '500px',
            maxHeight: '700px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            borderRadius: '16px',
            opacity: 1,
            position: 'absolute',
            top: 76,
            right: 240,
        },
        [theme.breakpoints.down('xl')]: {},

        [theme.breakpoints.down('sm')]: {},
    },
    header: {
        height: '97px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px 0 24px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            padding: 16,
        },
    },
    headerText: {
        color: Colors.ThemeBlack,
        fontSize: '30px',
        margin: 0,
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    headerText1: {
        border: 'none',
        background: 'none',
        outline: 'none',
        color: Colors.ThemeBlack,
        fontSize: '16px',
        margin: 0,
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    notificationItemCont: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: '0 0 20px 0',

        '@media (min-width: 320px)': {
            maxHeight: '100vh',
            height: '100vh',
        },
        '@media (min-width: 768px)': {
            maxHeight: '100vh',
            height: '100vh',
        },
        '@media (min-width: 1240px)': {
            maxHeight: '100%',
            height: '400px',
        },
        '@media (min-width: 1920px)': {
            maxHeight: '100vh',
            height: '600px',
        },
    },
    noNotesCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xl')]: {
            width: '500px',
            maxHeight: '700px',
            height: '600px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            borderRadius: '16px',
            opacity: 1,
            position: 'absolute',
            top: 54,
            left: -443,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '72px',
            width: '100%',
            height: '100vh',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            opacity: 1,
            position: 'inherit',
            borderRadius: 0,
        },
    },
    noNotes: {
        margin: 0,
        fontSize: 30,
        color: '#49B77680',
        fontWeight: 'bold',
        marginTop: '70px',
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
        },
    },
    backdrop: {
        width: '100%',
        position: 'fixed',
        height: '100vh',
        top: 0,
        left: 0,
        '@media (min-width: 320px)': {
            background: 'white',
        },
        '@media (min-width: 768px)': {
            background: 'white',
        },
        '@media (min-width: 1240px)': {
            background: 'transparent',
        },
        '@media (min-width: 1920px)': {
            background: 'transparent',
        },
    },
    closeNotificationButton: {
        right: '24px',
        position: 'absolute',
        top: '15px',
        background: 'none',
        border: 'none',
        outline: 'none',
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
        },
        '@media (min-width: 1920px)': {
            display: 'none',
        },
    },
    noNotificationBody: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        maxHeight: '600px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            maxHeight: '100%',
        },
        '@media (min-width: 768px)': {
            maxHeight: '100%',
        },
        '@media (min-width: 1240px)': {
            maxHeight: '600px',
        },
        '@media (min-width: 1920px)': {
            maxHeight: '600px',
        },
    },
    infinitiScrollStyle: {
        margin: '0 auto',
        display: 'flex',
        padding: '20px',
    },
}));

export const useNoteItemStyle = makeStyles((theme) => ({
    NotificationItem: {
        padding: '16px 24px',
        borderBottom: '0.5px solid #252E484D',
        display: 'flex',
        flexDirection: 'row',
    },
    iconCont: {
        marginRight: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageCont: {
        // width: '70%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    message: {
        color: Colors.ThemeBlack,
        fontSize: '16px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    delIconCont: {
        width: '50px',
        display: 'flex',
        flexDirection: ' column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        '& button': {
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
        },
    },
    date: {
        fontSize: '14px',
        color: Colors.ThemeBlack,
        margin: '0',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },

    linkButton: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        color: Colors.ThemeGreen,
    },
}));

export const SideDrawerStyles = makeStyles({
    sideDrawer: {
        width: '15%',
        maxWidth: 42,
        '& .MuiDrawer-paper': {
            backgroundColor: 'white',
            background: 'white',
            boxShadow: '0px 2px 6px #0000001A',
        },
    },
    mobileManuDropdown: {
        '@media (min-width: 320px)': {
            marginTop: '40px',
            background: '#F4F4F480 0% 0% no-repeat padding-box',
        },
        '@media (min-width: 768px)': {
            marginTop: '40px',
            background: '#F4F4F480 0% 0% no-repeat padding-box',
        },
        '@media (min-width: 1240px)': {
            marginTop: 0,
            background: 'transparent',
        },
        '@media (min-width: 1920px)': {
            marginTop: 0,
            background: 'transparent',
        },
    },
    list: {
        width: 320,
        paddingTop: '70px',
        '& .MuiListItem-gutters': {
            background: '#F4F4F480 0% 0% no-repeat padding-box',
            borderBottom: '0.5px solid #BEBEBE4D',
            paddingLeft: '50px',
        },
    },
    listWrapper: {
        marginTop: '100px',
    },
    buttonCont: {
        margin: '40px 0 40px 50px',
        display: 'flex',
        alignItems: 'center',
    },
    singnInText: {
        fontSize: '20px',
        color: '#387DFF',
        marginLeft: ' 5px',
    },
    mobileListItemText: {
        '& span': {
            color: Colors.ThemeBlack,
            fontWeight: '600',
        },
    },
});
