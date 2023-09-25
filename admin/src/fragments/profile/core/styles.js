import { makeStyles } from '@material-ui/core/styles';
import {Background, Colors, Shadow} from 'theme';

export const myProfilePage = makeStyles((theme) => ({
    tittle: {
        fontSize: '18px',
        lineHeight: '30px',
        fontWeight: '600',
        color: '#545F7E',
        marginLeft: '69px',
        marginBottom: '32px',
    },

    profileWrapper: {
        background: Background.table,
        boxShadow: Shadow.normal,
        borderRadius: '8px',
    },

    profileContainer: {
        padding: '70px 0px 100px 70px',
        display: 'flex',
    },

    profileAvatar: {
        width: '276px',
        height: '208px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '6px',
        marginRight: '80px',
        '& p': {
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '30px',
            color: '#387DFF',
            marginTop: '20px',
            cursor: 'pointer',
        },

        '& img': {
            width: '82px',
            height: '82px',
            margin: '-50px 97px 0 97px',
            border: '4px solid white',
            borderRadius: '42px',
        },
    },

    profileAvatarBackground: {
        height: '87px',
        background: Colors.blue,
        borderRadius: '6px 6px 0px 0px',
    },

    profileSettings: {
        width: '85%',
        maxWidth:'1006px',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '6px',

        '@media (min-width: 1281px)': {
            width: '100%',
        },
    },

    profileSettingsHead: {
        height: '62px',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '6px 6px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 32px 0 36px',
        alignItems: 'center',
    },

    profileSettingsGeneral: {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '30px',
        color: '#387DFF',
        alignItems: 'center',
        display: 'flex',
    },

    profileSettingsEdit: {
        width: '94px',
        height: '36px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#387DFF',
        border: 'none',
        outline: 'none',
        background: 'none',
        cursor: 'pointer',
    },


    profileSettingsSave: {
        height: '36px',
        background: 'transparent linear-gradient(270deg, #5690FF 0%, #766DE8 100%) 0% 0% no-repeat padding-box',
        borderRadius: '18px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: 'white',
        outline: 'none',
        cursor: 'pointer',
        '@media (min-width: 320px)': {
            fontSize: '14px',
            width: '60px',
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
        '@media (min-width: 1280px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
    },
    closeButton: {
        height: '36px',
        background: '#387DFF1A 0% 0% no-repeat',
        borderRadius: '18px',
        border: 'none',
        fontWeight: '600',
        lineHeight: '22px',
        outline: 'none',
        cursor: 'pointer',
        color: '#545F7E',
        '@media (min-width: 320px)': {
            fontSize: '14px',
            width: '60px',
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
        '@media (min-width: 1280px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '16px',
            width: '94px',
            marginRight: '16px',
        },
    },

    profileSettingsBodyWrapper: {
        padding: '40px 32px 40px 32px',
    },

    profileSettingsBody: {
        borderBottom: '0.5px solid #545F7E80',
        display: 'flex',
        marginTop: '17px',
        height: '39px',
        marginBottom: '5px',

        '&:hover': {
            borderBottom: '2px solid #545F7E',
        },
    },
    profileSettingsBodyNoBottom: {
        borderBottom: '0.5px solid #545F7E80',
        display: 'flex',
        marginTop: '17px',
        height: '39px',
        marginBottom: '5px',
    },
    profileSettingsBodyError: {
        borderBottom: '0.5px solid #F07379',
        display: 'flex',
        marginTop: '17px',
        height: '39px',

        '&:hover': {
            borderBottom: '2px solid #F07379',
        },
    },
    profileSettingsBodyName: {
        display: 'flex',
        marginBottom: '16px',
        alignItems: 'center',

        '& p': {
            marginLeft: '15px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: '#545F7E',
        },
    },
    profileSettingsErrorBodyName: {
        display: 'flex',
        marginBottom: '16px',
        alignItems: 'center',

        '& p': {
            marginLeft: '15px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: '#F07379',
        },
    },

    profileSettingsBodyUserNameInput: {
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
        color: '#545F7E',
        width: 'auto',

        '&::placeholder': {
            color: '#545F7E',
            fontSize: '16px',
        },
    },
    profileSettingsBodyPasswordInput: {
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
        color: '#545F7E',
        width: 'auto',

        '&::placeholder': {
            color: '#545F7E',
            fontSize: '50px',
        },
    },

    profileSettingsBodyContacts: {
        width: '90%',
        display: 'flex',
        height: '39px',
        justifyContent: 'space-between',
    },

    settingsLoader: {
        margin: '0 65px 35px 0',
    },


    organizationAvatar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& button': {
            background: 'none',
            border: 'none',
            color: '#387DFF',
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: 'bold',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            marginTop: '24px',
            textAlign: 'center',
            cursor: 'pointer',

            '@media (min-width: 1240px)': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
            },
        },
    },
    orgAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        border: '4px solid #387DFF1A',
        borderRadius: '50%',

        '& img': {
            width: '80%',
            height: '80%',
            cursor: 'pointer',
            borderRadius: '50%',
        },

    },
    removeChange: {
        display: 'flex',
    },

    remove: {
        fontWeight: 'bold',
        color: '#F07379 !important',
        marginRight: '32px',
        marginTop: '24px',
        cursor: 'pointer',
        '@media (min-width: 320px)': {
            fontSize: '16px',
        },
        '@media (min-width: 768px)': {
            fontSize: '20px',
        },
    },

    change: {
        color: '#387DFF',
        fontWeight: 'bold',

        marginTop: '24px',
        cursor: 'pointer',
        '@media (min-width: 320px)': {
            fontSize: '16px',
        },
        '@media (min-width: 768px)': {
            fontSize: '20px',
        },
    },
}));
