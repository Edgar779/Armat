import { makeStyles } from '@material-ui/core/styles';

export const ButtonsStyle = makeStyles((theme) => ({
    CloseButton: {
        minWidth: '30px',
        height: '32px',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',
    },

    CloseInfoButton: {
        minWidth: '30px',
        height: '32px',
        background: '#FFFFFF1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        margin: '14px 14px 0 0',
        border: 'none',
        padding: '4px',
    },

    CloseButtonContent: {
        display: 'flex',
        justifyContent: 'flex-end',
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
            background: 'transparent linear-gradient(90deg, #5690FF 0%, #766DE8 100%) 0% 0% no-repeat padding-box',
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
        background: '#387DFF',
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#FFFFFF',
        textTransform: 'capitalize',
    },

    Cancel: {
        width: '195px',
        height: '48px',
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '24px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: '#545F7E',
        marginLeft: '16px',
        textTransform: 'capitalize',
    },
    deleteCategoryAndTagsDeleteButton: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',

        '& button': {
            width: '24px',
            height: '24px',
            borderRadius: '24px',
            background: '#F07379',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '8px',
        },
        '& img': {
            width: '14px',
            height: '14px',
        },
        '& span': {
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '30px',
            color: '#545F7E',
        },
    },

    settingsButtons: {
        width: '237px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #347AF033',
        borderRadius: '8px',
        padding: '2px',
    },

    passiveButton: {
        width: '116px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        background:'transparent',
        color: '#545F7E',
        curly:'pointer',
        border:'none',
    },

    activeButton: {
        width: '116px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        curly:'pointer',
        background: '#387DFB 0% 0% no-repeat padding-box',
        border:'none',
    }
}));
