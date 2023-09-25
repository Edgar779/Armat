import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'utils';

export const ButtonsStyle = makeStyles(() => ({
    CloseButton: {
        minWidth: '30px',
        height: '30px',
        background: '#49B7761A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
    },

    CloseInfoButton: {
        minWidth: '30px',
        height: '30px',
        background: '#49B7761A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
    },

    CloseButtonContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
    },

    DeleteButtonBox: {
        '& .MuiButton-root': {
            width: '195px',
            height: '48px',
            background: '#F07379 0% 0% no-repeat padding-box',
            borderRadius: '24px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: '#FFFFFF',
            textTransform: 'capitalize',
        },
    },

    CancelButtonBox: {
        '& .MuiButton-root': {
            width: '195px',
            height: '48px',
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '24px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            color: '#545F7E',
            textTransform: 'capitalize',
        },
    },

    deleteButton: {
        '& img': {
            width: '16px',
            height: '15px',
        },
    },

    CreateEventButton: {
        '& .MuiButton-root': {
            width: '174px',
            height: '40px',
            background:
                'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
            borderRadius: '20px',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '23px',
            textTransform: 'initial',
            paddingLeft: 0,
        },
    },

    CreateEventButtonPlus: {
        fontSize: '30px',
        marginRight: '8px',
    },

    SendButtonStyle: {
        '& .MuiButton-root': {
            width: '400px',
            height: '48px',
            background: Colors.ThemeGreen,
            borderRadius: '24px',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '23px',
            textTransform: 'initial',
            paddingLeft: 0,
        },
    },

    AddButton: {
        background: 'none',
        border: 'none',
        alignItems: 'center',
        display: 'flex',
    },

    AddButtonIcon: {
        width: '24px',
        height: '24px',
        borderRadius: '24px',
        background:
            'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
        marginRight: '8px',
    },

    AddButtonText: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '20px',
        color: '#FFFFFF',
    },

    bodyDeleteCategory: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '30px',
        color: '#545F7E',
    },

    Create: {
        width: '195px',
        height: '48px',
        background: Colors.ThemeGreen,
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        padding: '0',
        lineHeight: '22px',
        color: '#FFFFFF',
        textTransform: 'capitalize',
        '&:hover': {
            background: Colors.lightGreen,
        },
        // '& :hover': {
        //     width: '195px',
        //     height: '48px',
        //     padding: '0',
        //     borderRadius: '24px',
        //     fontSize: '16px',
        //     fontWeight: '600',
        //     lineHeight: '22px',
        //     color: '#FFFFFF',
        //     textTransform: 'capitalize',
        //
        // },
        '& .MuiButton-text': {
            padding: 0,
            fontSize: '16px',
        },
        '@media (min-width: 320px)': {
            width: '46%',
            maxWidth: '164px',
        },
        '@media (min-width: 768px)': {
            width: '195px',
        },
        '@media (min-width: 1240px)': {
            width: '195px',
        },
    },

    Cancel: {
        width: '195px',
        height: '48px',
        background: '#7B7B7B1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#222222CC',
        marginLeft: '16px',
        textTransform: 'capitalize',

        '@media (min-width: 320px)': {
            width: '46%',
            maxWidth: '164px',
        },
        '@media (min-width: 768px)': {
            width: '195px',
        },
        '@media (min-width: 1240px)': {
            width: '195px',
        },
    },

    filtersButtonStyle: {
        width: 'auto',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '20px',
        fontSize: '16px',
        lineHeight: '22px',
        color: Colors.ThemeGreen,
        '@media (min-width: 320px)': {
            display: 'flex',
            '& p': {
                display: 'none',
            },
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
            '& p': {
                display: 'block',
            },
        },
    },

    filtersButtonMobileStyle: {
        width: 'auto',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '20px',
        fontSize: '16px',
        lineHeight: '22px',
        padding: '0 16px',
        color: Colors.ThemeGreen,
        '@media (min-width: 320px)': {
            display: 'flex',
            marginRight: '8px',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
        '@media (min-width: 1240px)': {
            display: 'none',
            '& p': {
                display: 'block',
            },
        },
    },

    tyrAgainButton: {
        width: '247px',
        height: '48px',
        background: Colors.ThemeGreen,
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#FFFFFF',
    },

    settingsButtons: {
        width: '325px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #347AF033',
        borderRadius: '8px',
        padding: '2px',
    },

    passiveButton: {
        width: '160px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        background: 'transparent',
        color: '#545F7E',
        cursor: 'pointer',
        border: 'none',
    },

    activeButton: {
        width: '160px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        cursor: 'pointer',
        background: '#387DFB 0% 0% no-repeat padding-box',
        border: 'none',
    },
}));
