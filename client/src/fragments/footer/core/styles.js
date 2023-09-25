import { Typography, withStyles } from '@material-ui/core';
import { Colors } from 'utils';
import { makeStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        position: 'absolute',
        paddingTop: '70px',
        paddingBottom: '20px',
        marginTop: '0',
        background: '#FAFAFA',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '95px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '95px',
        },
    },
    grid: {
        position: 'relative',
    },
    gridCopyright: {
        position: 'relative',
        '@media (min-width: 320px)': {
            marginTop: '44px',
        },
        '@media (min-width: 1279px)': {
            marginTop: 0,
        },
    },
    footerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    link: {
        color: Colors.ThemeBlack,
    },
    linkSpace: {
        marginRight: '40px',
        [theme.breakpoints.down('xs')]: {
            marginRight: '26px',
        },
    },
    socialBoxCont: {
        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '40px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '40px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '54px',
        },
    },
    socialBoxContIcons: {
        display: 'flex',
    },
    iconsItems: {
        '@media (min-width: 320px)': {
            marginRight: '16px',
        },
        '@media (min-width: 768px)': {
            marginRight: '30px',
        },
    },
    socialBox: {
        '@media (min-width: 320px)': {
            marginBottom: '44px',
            maxWidth: '180px',
        },
        '@media (min-width: 768px)': {
            marginBottom: '63px',
            maxWidth: '180px',
        },
    },
    socialLink: {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginTop: '16px',
        backgroundColor: Colors.ThemeGreen,
        [theme.breakpoints.down('xs')]: {
            width: '24px',
            height: '24px',
            '& svg': {
                width: '12px',
                height: '12px',
            },
        },
    },
    imageBox: {
        maxWidth: '1425px',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',

        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            // width: '85%',
        },
        '@media (min-width: 1920px)': {
            // width: '68%',
        },
    },
}));

export const LinkTypography = withStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            marginTop: '8px',
        },
    },
}))(Typography);

export const TitleTypography = withStyles((theme) => ({
    root: {
        fontSize: '30px',
        fontWeight: 600,
        color: Colors.ThemeBlack,
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
}))(Typography);

export const contactFormStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            maxWidth: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '700px',
        },
        '& .MuiFormControl-root': {
            marginBottom: 0,
        },
        '& .fieldsGroup-0': {
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                '& .inputWrapper-0, .inputWrapper-1': {
                    flexGrow: '0',
                    maxWidth: '50%',
                    flexBasis: '50%',
                },
                '& .inputWrapper-0 ': {
                    paddingRight: '16px',
                },
            },
        },
        '& .button-wrapper': {
            position: 'relative',
            display: 'inline-block',
        },
    },
    nameInputWrap: {
        [theme.breakpoints.down('xl')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    nameInput: {
        width: '46%',
        marginRight: '5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    emailInput: {
        width: '46%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    messageInput: {
        width: '100%',
    },

    fieldStyles: {
        width: '100%',
        '& label': {
            display: 'none',
            color: '#222222B3',
        },
        '& .MuiInputBase-root': {
            border: '1px solid #DCDCDC',
            backgroundColor: 'white',
            borderRadius: '6px',
            [theme.breakpoints.up('lg')]: {
                borderRadius: '10px',
            },

            '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: '#222222B3',
            },
            '& input': {
                color: '#222222B3',

                '@media (min-width: 320px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 768px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1240px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1920px)': {
                    padding: '13px 24px',
                },
            },
            '& fieldset': {
                border: 'none',
            },
        },
        '& .MuiInputLabel-asterisk': {
            color: '#222222B3B3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            ' &::after': {
                borderColor: 'white',
            },
        },
    },
    messageFieldStyle: {
        width: '100%',
        height: '167px',
        backgroundColor: 'white',
        borderRadius: '6px',
        resize: 'none',
        border: '1px solid #DCDCDC',
        color: '#222222B3',

        '@media (min-width: 320px)': {
            padding: '13px 15px',
        },
        '@media (min-width: 768px)': {
            padding: '13px 15px',
        },
        '@media (min-width: 1240px)': {
            padding: '13px 16px',
        },
        '@media (min-width: 1920px)': {
            padding: '13px 24px',
        },
        outline: 'none',
        fontSize: '16px',
        '&::placeholder': {
            color: '#222222B3B3',
            fontSize: '16px',
        },
    },
    messageFieldStyleError: {
        width: '100%',
        height: '167px',
        backgroundColor: 'white',
        borderRadius: '6px',
        resize: 'none',
        color: '#222222B3',
        '@media (min-width: 320px)': {
            padding: '13px 15px',
        },
        '@media (min-width: 768px)': {
            padding: '13px 15px',
        },
        '@media (min-width: 1240px)': {
            padding: '13px 16px',
        },
        '@media (min-width: 1920px)': {
            padding: '13px 24px',
        },
        border: '1px solid #F07379',
        outline: 'none',
        fontSize: '16px',
        '&::placeholder': {
            color: '#222222B3B3',
            fontSize: '16px',
        },
        '& .Mui-focused': {
            border: '1.5px solid #F07379 !important',
        },
    },

    fieldStylesError: {
        width: '100%',
        border: '1px solid #F07379',
        borderRadius: '11px',

        '& label': {
            display: 'none',
            color: '#222222B3B3',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderRadius: '6px',
            [theme.breakpoints.up('lg')]: {
                borderRadius: '10px',
            },
            '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: '#222222B3',
            },
            '& input': {
                color: theme.palette.text.primary,

                '@media (min-width: 320px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 768px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1240px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1920px)': {
                    padding: '13px 24px',
                },
            },
            '& fieldset': {
                border: 'none',
            },
        },
        '& .MuiInputLabel-asterisk': {
            color: '#222222B3B3',
        },
    },
    messageStylesError: {
        width: '100%',
        height: '167px',

        '& label': {
            display: 'none',
            color: '#222222B3B3',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderRadius: '6px',
            height: '167px',

            [theme.breakpoints.up('lg')]: {
                borderRadius: '10px',
                height: '167px',
            },

            '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
                height: '167px',
                opacity: '1 !important',
                color: '#222222B3',
            },
            '& input': {
                color: theme.palette.text.primary,
                padding: '14.5px 14px',
                height: '167px',

                [theme.breakpoints.down('xs')]: {
                    padding: '12.7px 14px',
                },
            },
            '& fieldset': {
                border: 'none',
            },
        },
        '& .MuiInputLabel-asterisk': {
            color: '#222222B3B3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            ' &::after': {
                borderColor: 'white',
            },
        },
    },

    sendMessageStyle: {
        '@media (min-width: 320px)': {
            width: '100%',
            maxWidth: '100%',
            marginBottom: '30px',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            maxWidth: '173px',
            marginBottom: '40px',
        },
        '@media (min-width: 1240px)': {
            width: '100%',
            maxWidth: '173px',
            marginBottom: '63px',
        },
        '@media (min-width: 1920px)': {
            width: '100%',
            maxWidth: '173px',
            marginBottom: '83px',
        },
    },

    contactUs: {
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '41px',
        color: '#222222',
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1920px)': {
            fontWeight: 'bold',
        },
    },
}));

export const subscribeStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '555px',
        width: '100%',
        marginBottom: '30px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '40px',
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: '54px',
        },
        '& .MuiFormControl-root': {
            marginBottom: 0,
        },
    },
    formik: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
    },
    body: {
        margin: '16px 0 40px 0',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            margin: '16px 0 24px 0',
        },
        '@media (min-width: 768px)': {
            margin: '16px 0 30px 0',
        },
        '@media (min-width: 1279px)': {
            margin: '16px 0 30px 0',
        },
        '@media (min-width: 1919px)': {
            margin: '16px 0 40px 0',
        },
    },
    fieldsGroup: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& .inputWrapper-0': {
            width: '100%',
        },
    },
    inputAndErrorWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    emailInput: {
        width: '100%',
        marginRight: '16px',
    },
    fieldStyles: {
        width: '100%',
        marginTop: 0,

        '& label': {
            display: 'none',
            color: '#222222B3B3',
            transform: 'translate(14px, 14.5px) scale(1)',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderRadius: '24px',
            border: '1px solid #BEBEBE',
            '& input.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: '#222222B3',
            },
            '& input': {
                color: theme.palette.text.primary,
                '@media (min-width: 320px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 768px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1240px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1920px)': {
                    padding: '13px 24px',
                },
            },
            '& fieldset': {
                border: 'none',
            },
        },
        '& .MuiInputLabel-asterisk': {
            color: '#222222B3B3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F07379',
            },
            ' &::after': {
                borderColor: '#F07379',
            },
        },
    },

    fieldStylesError: {
        width: '100%',
        marginTop: 0,

        '& label': {
            display: 'none',
            color: '#222222B3B3',
            transform: 'translate(14px, 14.5px) scale(1)',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderRadius: '24px',
            '& input.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: '#222222B3',
            },
            '& input': {
                color: theme.palette.text.primary,
                '@media (min-width: 320px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 768px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1240px)': {
                    padding: '13px 16px',
                },
                '@media (min-width: 1920px)': {
                    padding: '13px 24px',
                },
            },
            '& fieldset': {
                border: '1px solid #F07379',
            },
        },
        '& .MuiInputLabel-asterisk': {
            color: '#222222B3B3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F07379',
            },
            ' &::after': {
                borderColor: '#F07379',
            },
        },
    },
    sendSubscribeButtonStyle: {
        '@media (min-width: 320px)': {
            width: '130px',
        },
        '@media (min-width: 768px)': {
            width: '139px',
        },
        '@media (min-width: 1240px)': {
            width: '139px',
        },
        '@media (min-width: 1920px)': {
            width: '139px',
        },
    },
}));
