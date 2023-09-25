import { makeStyles } from '@material-ui/core/styles';
import {Background, Colors} from 'theme';

const drawerWidth = 100;
export const navBarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: Background.backFone,
        height:'100vh',
        paddingBottom:'20px',
    },

    appBar: {
        background: Colors.blue,
        boxShadow: '0px 3px 16px #387DFF4D',
        opacity: 1,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        background: Colors.blue,
        opacity: '1',
        width: '162px',
        overflowX: 'hidden',
        border: 'none',
        zIndex:'4',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: Colors.blue,
        opacity: '1',
        width: '64px',
        border: 'none',
        zIndex:'4',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        margin: '120px 20px 24px 20px',
        paddingBottom: '40px',
    },

    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    menuItems: {
        marginTop: '35px',
        marginLeft: '-5px',
        '& .MuiListItemText-root': {
            margin: '0',
        },
        '& a': {
            textDecoration: 'none',
        },
    },
    organization:{
        display:'flex',
        alignItems:'center',
        '& p':{
            fontSize:'16px',
            fontWeight:'400',
            color:'#FFFFFF80',
        },
        '& img':{
        width: '24px',
        height: '24px',
        marginRight: '10px',
        },
    },
    organizationWrapper:{
        '& .MuiAccordion-rounded':{
            background:'none',
            height: '48px',
            // marginTop: '10px',
            boxShadow:'none',
        },
        '& .MuiAccordionSummary-root':{
            padding:'0px',
        },
        '& .MuiAccordionSummary-root.Mui-expanded':{
            minHeight:'48px',
            height: '48px',
        }
    },
    ActiveListItem: {
        background:
            'transparent linear-gradient(270deg, rgb(255, 255, 255, 0.2) 0%, rgb(128, 128, 128, 0.2) 100%) 0% 0% no-repeat padding-box',
        marginTop: '10px',
        paddingLeft: '27px',
        height: '48px',
    },

    ActiveListItemOrg: {
        background:
            'transparent linear-gradient(270deg, rgb(255, 255, 255, 0.2) 0%, rgb(128, 128, 128, 0.2) 100%) 0% 0% no-repeat padding-box',
        marginTop: '10px',
        paddingLeft: '27px',
        height: '150px',
        '& .MuiAccordionSummary-root.Mui-expanded':{
            marginTop:'-75px'
        },
        '& .MuiAccordionSummary-root':{
            minHeight:'38px'
        }
    },
    ListItem: {
        height: '48px',
        marginTop: '10px',
        paddingLeft: '27px',
    },
    menuItemsStyle: {
        textAlign: 'left',
        font: 'normal normal normal 16px/22px',
        letterSpacing: '0px',
        color: '#FFFFFF80',
        opacity: '1',
    },

    boxWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    userInfo: {
        alignItems: 'center',
        display: 'flex',

        '& img': {
            width: '42px',
            height: '42px',
            border: '1px solid white',
            borderRadius: '24px',
        },
    },

    userInfoText: {
        textAlign: 'right',
        font: 'normal normal normal 14px/19px',
        letterSpacing: '0',
        color: '#FFFFFF',
        opacity: '1',
        paddingRight: '9px',
    },

    logOutInfo: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '54px',
        '& img': {
            width: '18px',
            height: '18px',
        },
    },

    logOut: {
        textAlign: 'right',
        font: 'normal normal normal 12px/17px',
        letterSpacing: '0',
        color: '#FFFFFF',
        opacity: '1',
        paddingLeft: '8px',
    },
}));
