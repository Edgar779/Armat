import {makeStyles} from '@material-ui/core/styles';
import {Colors} from 'theme';

export const membersFragmentStyle = makeStyles(() => ({
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
        color: Colors.gray,
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            minHeight: '600px',
        },
    },

    tableHead: {
        background: `${Colors.head} 0% 0% no-repeat padding-box`,
        borderRadius: '8px 0px 0px 0px',
        height: '50px',
        '& .MuiTableCell-sizeSmall': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.primary,
            padding: '6px 10px 6px 0',
        },
        '& .MuiTableCell-sizeSmall:first-child': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.primary,
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
        cursor: 'pointer',
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
            color: Colors.gray,
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
            background: Colors.primary,
            borderRadius: '12px',
            opacity: '1',
        },
    },

    tableRowUserName: {
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '30px',
        color: Colors.primary,
        marginLeft: '16px',
        cursor: 'pointer',
    },

    tableRowGrayText: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: Colors.gray,

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
        color: Colors.gray,
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
            color: Colors.white,
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
            color: Colors.white,
        },
        '& span': {
            fontSize: '16px',
            lineHeight: '30px',
            fontWeight: 'normal',
            color: Colors.white,
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
        width: '132px',
        marginRight: '10px',
        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.gray,
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
