import { makeStyles } from '@material-ui/core/styles';
import {Backgrounds, Colors} from 'utils';

export const deleteStyles = makeStyles((theme) => ({
    modalWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 16px 10px 16px',

        '@media (min-width: 320px)': {
            maxWidth: '343px',
            padding: '0 16px 8px 16',
        },
        '@media (min-width: 768px)': {
            maxWidth: '466px',
            padding: '0 30px 8px 30px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '466px',
            padding: '0 30px 20px 30px',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '486px',
            padding: '0 40px 20px 40px',
        },
    },
    modalTitleCont: {
        paddingBottom: '16px',
    },
    modalTitle: {
        color: Colors.ThemeBlack,
        fontSize: '30px',
        fontWeight: '600',
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '30px',
        },
    },
    modalDescCont: {
        paddingBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDesc: {
        display: 'flex',
        color: Colors.ThemeLightGray,
        fontSize: '16px',

        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    modalButtonsCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    cancelButton: {
        width: '100%',
        height: '48px',
        background: '#7B7B7B1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeLightGray,
        textTransform: 'capitalize',
        '@media (min-width: 320px)': {
            fontSize: '14px',
            height: '42px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            height: '48px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
            height: '48px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '16px',
            height: '48px',
        },
        '&:hover': {
            background: Backgrounds.darkGray,
            borderRadius: '24px',

            '@media (min-width: 320px)': {
                fontSize: '14px',
                height: '42px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
                height: '48px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '16px',
                height: '48px',
            },
            '@media (min-width: 1920px)': {
                fontSize: '16px',
                height: '48px',
            },
        },
    },

    deleteButton: {
        width: '100%',
        height: '48px',
        background: '#F07379 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#FFFFFF',
        textTransform: 'capitalize',
        marginLeft: '16px',
        '@media (min-width: 320px)': {
            fontSize: '14px',
            height: '42px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            height: '48px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
            height: '48px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '16px',
            height: '48px',
        },
        '&:hover': {
            background: '#ec8e93',
            borderRadius: '24px',

            '@media (min-width: 320px)': {
                fontSize: '14px',
                height: '42px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
                height: '48px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '16px',
                height: '48px',
            },
            '@media (min-width: 1920px)': {
                fontSize: '16px',
                height: '48px',
            },
        },
    },
}));

export const myProfilePage = makeStyles(() => ({
    tittle: {
        fontSize: '18px',
        lineHeight: '30px',
        fontWeight: '600',
        color: '#545F7E',
        marginLeft: '62px',
        marginBottom: '32px',
    },

    profileWrapper: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '8px',
        width: '100%',
    },
    profileTittleMargins: {
        '@media (min-width: 320px)': {
            margin: '190px 0 30px 0',
        },
        '@media (min-width: 768px)': {
            margin: '170px 0 30px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '170px 0 30px 0',
        },
        '@media (min-width: 1920px)': {
            margin: '190px 0 40px 0',
        },
    },

    IconStyle: {
        marginLeft: '21px',
    },

    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '@media (min-width: 320px)': {
            padding: '5px 16px 100px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '40px 40px 100px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '5px 70px 100px 70px',
            display: 'flex',
        },
        '@media (min-width: 1920px)': {
            padding: '5px 238px 100px 238px',
            display: 'flex',
        },
    },
    profileContainerBody: {
        display: 'flex',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            flexDirection: 'row',
        },
    },

    profileBodyWrapper: {
        marginTop: '30px',
        width: '100%',
        '@media (min-width: 1240px)': {
            marginTop: 0,
            maxWidth: '900px',
        },
        '@media (min-width: 1920px)': {
            marginTop: 0,
            maxWidth: '1006px',
        },
    },

    profileAvatar: {
        width: '276px',
        height: '208px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        marginRight: '80px',

        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '276px',
        },

        '& p': {
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '30px',
            color: Colors.ThemeBlack,
            marginTop: '70px',
            cursor: 'pointer',
        },

        '& button': {
            background: 'none',
            border: 'none',
            color: Colors.ThemeBlack,
            fontSize: '16px',
            lineHeight: '30px',
            // position: 'absolute',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            marginTop: '65px',
            textAlign: 'center',
            cursor: 'pointer',

            '@media (min-width: 1240px)': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
            },
        },
    },

    organizationAvatar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& button': {
            background: 'none',
            border: 'none',
            color: Colors.ThemeGreen,
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
        color: Colors.ThemeGreen,
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

    avatarPhoto: {
        width: '82px',
        height: '82px',
        margin: '-50px auto',
        border: '4px solid white',
        borderRadius: '42px',
    },

    companyAvatarPhoto: {
        width: '82px',
        height: '82px',
        margin: '-50px auto',
        background: 'aliceblue',
        border: '4px solid white',
        borderRadius: '42px',
    },

    profileAvatarBackground: {
        height: '87px',
        background: Colors.ThemeGreen,
        borderRadius: '6px 6px 0px 0px',
    },

    orgAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        border: '4px solid #49B7761A',
        borderRadius: '50%',

        '& img': {
            width: '80%',
            height: '80%',
            cursor: 'pointer',
            borderRadius: '50%',
        },
    },

    profileSettings: {
        width: '100%',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        padding: '0 0 20px 0',
    },

    profileSettingsHead: {
        height: '62px',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        borderRadius: '6px 6px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 32px 0 36px',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            padding: '0 16px 0 16px',
        },
        '@media (min-width: 768px)': {
            padding: '0 16px 0 16px',
        },
    },

    profileSettingsGeneral: {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '30px',
        color: Colors.ThemeBlack,
        alignItems: 'center',
        display: 'flex',

        '@media (min-width: 320px)': {
            fontSize: '16px',
        },
        '@media (min-width: 768px)': {
            fontSize: '20px',
        },
    },

    profileSettingsEdit: {
        width: '94px',
        height: '36px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeBlack,
        border: 'none',
        outline: 'none',
        background: 'none',
        cursor: 'pointer',

        '@media (max-width: 768px)': {
            fontSize: '14px',
        },
    },

    profileSettingsSave: {
        height: '36px',
        background: Colors.ThemeGreen,
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
        '@media (min-width: 1240px)': {
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
        background: '7B7B7B1A 0% 0% no-repeat padding-box',
        borderRadius: '18px',
        border: 'none',
        fontWeight: '600',
        lineHeight: '22px',
        outline: 'none',
        cursor: 'pointer',
        color: '#222222CC',
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
        '@media (min-width: 1240px)': {
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
        padding: '0 32px 10px 32px',

        '@media (max-width: 768px)': {
            padding: '0 16px 10px 16px',
        },
    },
    profileSettingsBodyNoBottom: {
        borderBottom: '0.5px solid #545F7E80',
        display: 'flex',
        marginTop: '17px',
        height: '39px',
        marginBottom: '5px',
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
        margin: '0 0 16px 21px',
        marginBottom: '16px',
        alignItems: 'center',

        '@media (max-width: 768px)': {
            margin: '0 0 10px 8px',
        },

        '& p': {
            marginLeft: '15px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: Colors.ThemeLightGray,

            '@media (max-width: 768px)': {
                fontSize: '14px',
            },
        },
    },

    profileSettingsErrorBodyName: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 16px 21px',

        '@media (max-width: 768px)': {
            margin: '0 0 10px 8px',
        },

        '& p': {
            marginLeft: '15px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: '#F07379',

            '@media (max-width: 768px)': {
                fontSize: '14px',
            },
        },
    },

    profileSettingsBodyUserNameInput: {
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
        color: Colors.ThemeLightGray,
        width: 'auto',

        '@media (max-width: 768px)': {
            fontSize: '14px',
            lineHeight: '19px',
            width: '108px',
        },

        '&::placeholder': {
            color: Colors.ThemeLightGray,
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
        color: Colors.ThemeLightGray,
        width: 'auto',

        '@media (max-width: 768px)': {
            fontSize: '14px',
            lineHeight: '19px',
        },

        '&::placeholder': {
            color: Colors.ThemeLightGray,
            fontSize: '50px',
        },
    },
    errorStyle: {
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
        color: '#F07379',
        width: 'auto',

        '&::placeholder': {
            color: '#F07379',
            fontSize: '50px',
        },
    },

    profileSettingsBodyContacts: {
        width: '100%',
        display: 'flex',
        height: '39px',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            paddingRight: '5px',
        },
        '@media (min-width: 768px)': {
            paddingRight: '150px',
        },
        '@media (min-width: 1240px)': {
            paddingRight: '200px',
        },
    },
    profilePasswordBodyContacts: {
        width: '100%',
        display: 'flex',
        height: '39px',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            paddingRight: '5px',
        },
        '@media (min-width: 768px)': {
            paddingRight: '150px',
        },
        '@media (min-width: 1240px)': {
            paddingRight: '200px',
        },
    },

    settingsLoader: {
        margin: '0 65px 35px 0',
    },

    LockImg: {
        height: '21px',
        width: '20px',
        marginRight: '15px',
    },

    // deleteMyAccountButtonWrapper: {
    //     marginTop: '40px',
    //     '& button': {
    //         color: '#F07379',
    //         fontSize: '16px',
    //         lineHeight: '22px',
    //         fontWeight: '600',
    //     },
    // },

    deleteMyAccount: {
        width: '100%',
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        padding: '0 0 20px 0',
    },
}));
