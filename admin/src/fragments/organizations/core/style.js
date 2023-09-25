import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'theme';

export const membersFragmentStyle = makeStyles((theme) => ({
    TableHeadNumber: {
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
        '& .TableHeadRole': {
            alignItems: 'center',
        },
    },

    TableRowIndex: {
        cursor:'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
    },

    EditTableRowIndex: {
        cursor:'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
        color:'#387DFF',
        fontSize:'16px',
    },

    SearchBoxWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    tableRowRole: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#545F7E',
        cursor:'pointer',
    },

    cursor:{
        cursor:'pointer'
    },

    SearchBoxSearchComponent: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },

    editButton: {
        width: '24px',
        height: '24px',
        background: '#387DFF1A',
        borderRadius: '4px',
        margin: '0 64px 0 24px',
    },

    PopoverStatusListWrapper: {
        cursor: 'pointer',
        height: '40px',
        width: '147px',
        margin: '0 6px 0 6px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            background: '#EAF2FF 0% 0% no-repeat padding-box',
            borderRadius: '6px',
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
        },
        '& span': {
            fontSize: '16px',
            lineHeight: '17px',
            color: '#545F7E',
            marginLeft: '7px',
            '& span': {
                color: '#545F7E80',
                fontSize: '12px',
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '26px',
            marginLeft: '17px',
        },
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paper: {
        width: '578px',
        height: '449px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        outline: 'none',
    },

    modalBody: {
        padding: '0 40px 40px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },

    modalText: {
        marginTop: '16px',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#252E48',
    },

    commentInputStyle: {
        margin: '40px 0 15px 0',
        width: '100%',
        outline: 'none',
        padding: '24px 24px 94px 24px',
        border: '1px solid #387DFF80',
        borderRadius: '10px',

        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },
    },

    modalButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
    },

    AZFilter: {
        width: '17px',
        height: '17px',
        marginLeft: '9px',
        position: 'absolute',
        marginTop: '6px',
        cursor: 'pointer',
    },

    TotalMembers: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#545F7E',
        marginLeft: '16px',
        '@media (min-width: 1281px)': {
            marginLeft: '32px',
        },
    },

    membersTableWrapper: {
        background: `${Colors.white} 0% 0% no-repeat padding-box`,
        height: '100%',
        width: '100%',
        boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '8px',
        marginTop: '24px',
        marginBottom: '24px',
        '& .MuiTableContainer-root': {
            boxShadow: 'none',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            height: '100%',
            minHeight:'600px',
        },
    },

    tableHead: {
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '8px 0px 0px 0px',
        height: '50px',
        '& .MuiTableCell-sizeSmall': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
            padding: '6px 10px 6px 0',
        },
        '& .MuiTableCell-sizeSmall:first-child': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
            padding: '6px 46px 6px 31px',

            '@media (min-width: 1281px)': {
                padding: '6px 20px 6px 47px',
            },
        },
        '& .MuiTableCell-root': {
            fontSize: '16px',
        },
    },

    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },

    deleteButton: {
        width: '24px',
        height: '24px',
        background: '#F073791A 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        marginLeft: '24px',
    },

    tableRow: {
        '&:hover': {
            background: '#EAF2FF 0% 0% no-repeat padding-box',
        },
        height: '50px',
        '& .makeStyles-membersTableWrapper-26 .MuiTableContainer-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
        },
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 10px 6px 0',
        },

        '& .MuiTableCell-sizeSmall:last-child': {
            paddingTop: '11px',
            fontSize: '16px',
            lineHeight: '30px',
            color: '#545F7E',
        },

        '& .MuiTableCell-sizeSmall:first-child': {
            padding: '6px 20px 6px 28px',

            '@media (min-width: 1281px)': {
                padding: '6px 20px 6px 47px',
            },
        },

        '& MuiSwitch-track': {
            borderRadius: '12px',
            background: 'lightgray',
        },

        '& .MuiSwitch-colorPrimary.Mui-checked': {
            color: 'white',
        },

        '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
            background: '#387DFF',
            borderRadius: '12px',
            opacity: '1',
        },
    },

    name:{
        fontSize:'16px',
        fontWeight:'600',
        color: '#545F7E',
    },

    tableRowUserName: {
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#387DFF',
        marginLeft: '16px',
        cursor: 'pointer',
    },

    tableRowGrayText: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: '#545F7E',

        '& .MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
            background: '#F073791A 0% 0% no-repeat padding-box',
            borderRadius: '4px',
        },
        '& .MuiIconButton-root': {
            padding: '0',
            marginLeft: '16px',
        },
    },
    tableDeleteText: {
        '& .MuiIconButton-root': {
            padding: '0',
            width: '24px',
            height: '24px',
            background: '#F073791A 0% 0% no-repeat padding-box',
            borderRadius: '4px',
            marginLeft: '16px',
        },
    },

    tableRowSwitch: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: '#545F7E',
        display: 'flex',
    },

    switcherBox: {
        alignItems: 'center',

        '& .MuiSwitch-root': {
            padding: '7px',
            marginLeft: '10px',
        },
    },

    userAvatar: {
        width: '32px',
        height: '32px',
        objectFit: 'cover',
        borderRadius: '24px',
    },

    UserInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '32px',
        '& img': {
            width: '46px',
            height: '46px',
            border: '2px solid white',
            borderRadius: '40px',
            marginRight: '16px',
        },
        '& p': {
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '30px',
            color: '#FFFFFF',
        },
    },

    UserInfoFragments: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',

        '& div': {
            display: 'flex',
            alignItems: 'center',
        },

        '& p': {
            width: '200px',
            fontSize: '16px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#FFFFFF',
        },
        '& span': {
            fontSize: '16px',
            lineHeight: '30px',
            fontWeight: 'normal',
            color: '#FFFFFF',
        },
    },

    IconStyle: {
        width: '24px',
        height: '24px',
        background: '#FFFFFF1A 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8px',

        '& img': {
            width: '14px',
            height: '15px',
        },
    },

    SwitchIconStyle: {
        width: '24px',
        height: '24px',
        background: '#FFFFFF1A 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8px',

        '& img': {
            width: '14px',
            height: '8px',
        },
    },

    memberTypeStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '125px',
        marginRight: '10px',
        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#545F7E',
        },
    },

    PopoverListWrapper: {
        cursor: 'pointer',
        height: '40px',
        width: '225px',
        margin: '0 6px 0 6px',
        '&:hover': {
            background: '#EAF2FF 0% 0% no-repeat padding-box',
            borderRadius: '6px',
        },
    },



}));
