import {makeStyles} from '@material-ui/core/styles';
import {Background, Colors, Shadow} from 'theme';

export const settingsStyle = makeStyles((theme) => ({
    SettingsBackground: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
        background: Background.table,
        boxShadow: Shadow.normal,
        borderRadius: '8px',
        height: '100%',
        marginTop: '32px',
    },

    CloseButton: {
        minWidth: '30px',
        height: '32px',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',

    },

    headWrapper: {
        width: '49%',
    },

    title: {
        fontSize: '30px',
        lineHeight: '41px',
        fontWeight: 'bold',
        color: '#387DFF',
    },

    subTitle: {
        fontSize: '16px',
        color: '#252E48',
        marginTop: '16px',
    },

    input: {
        marginTop: '40px',
    },

    treeView: {
        color: '#387DFF',
        '& li': {
            margin: '20px 0',
        },
        '& .MuiTreeItem-label': {
            fontSize: '16px',
            fontWeight: '600',
        },
        '& .MuiTreeItem-iconContainer svg': {
            fontSize: '24px',
            marginRight: '8px',
        },
        '& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label': {
            background: 'transparent !important',
        },
        '& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
            background: 'transparent !important',
        },
        '& .MuiCollapse-wrapperInner': {
            marginLeft: '30px !important ',
        }
    },

    createButton: {
        height: '48px',
        background: '#387DFF 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        width: '100%',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        marginTop: '16px',
    },

    inputSubTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#387DFF',
        marginBottom: '4px',
        marginLeft: '24px',
    },

    organizerCategCead: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    head: {
        height: '59px',
        background: Colors.blue,
        borderRadius: '8px',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#FFFFFF',
        padding: '0 24px 0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    body: {
        height: '70vh',
        overflow: 'auto',
    },

    bodyWrapper: {
        height: '48px',
        background: '#EAF2FF 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px 0 24px',
        marginTop: '8px',
    },

    bodyCategoryName: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#387DFF',
    },

    TagsBodyWrapper: {
        height: '48px',
        padding: '0 24px 0 24px',
        marginTop: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '0.5px solid rgba(128, 128, 128, 0.5)',
    },

    bodyTagName: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#387DFF',
        background: '#EAF2FF 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        height: '32px',
        padding: '0 24px 0 24px',
    },

    noInfoScreen: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        '& p': {
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 'bold',
            color: '#387DFF80',
        },
    },

    organizerModalWrapper: {
        width: '480px',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '10px',
    },

    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    organizerModalPadding: {
        padding: '0 40px 40px 40px'
    },

    buttonsWrapper: {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        marginLeft: '30px'
    },
    buttons: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '24px',
        width: '24px',
        borderRadius: '12px',
        marginRight: '24px',
        border: 'none',
        '& img': {
            height: '12px',
            width: '12px',
        }
    },

    buttonsDel: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '24px',
        width: '24px',
        borderRadius: '12px',
        marginRight: '24px',
        border: 'none',
        '& img': {
            height: '14px',
            width: '14px',
        }
    },
    buttonsAdd: {
        background: '#387DFF 0% 0% no-repeat padding-box',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '24px',
        width: '24px',
        borderRadius: '12px',
        marginRight: '24px',
        border: 'none',
        '& img': {
            height: '14px',
            width: '14px',
        },
    },

    // treeItemWrapper:{
    //     '& .MuiTreeItem-label':{
    //         background:'transparent !important',
    //     },
    //     marginBottom:'10px',
    //
    //     '& .trHover':{
    //         display:'flex',
    //         background:'red',
    //     },
    //     '& .buttonsWrapper::hover':{
    //         background:'red'
    //     },
    //     display:'flex',
    //     width:'100%',
    //     '& :hover':{
    //
    //         display:'flex',
    //         background: 'green',
    //         borderRadius: '8px',
    //         // width:'500px',
    //     }
    // },

    dataTreeView: {
        height: '100%',
        overflow: 'auto',
    }

}));
