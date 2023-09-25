import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {Colors} from "../../../utils";

export const imageStyles = makeStyles((theme) => ({
    pictureBox: {
        width: '100%',
        height: '100%',
        maxWidth: '534px',
        position: 'relative',
        backgroundColor: '#387DFF1A',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    picture: {
        paddingTop: '127.71%',
    },
    logo: {
        margin: '30px',
    },
}));

export const useStyles = makeStyles((theme) => ({
    dialog: {
        '& .MuiDialog-paper': {
            width: '100%',
            [theme.breakpoints.down('xl')]: {
                maxWidth: '1300px !important',
                width: '1300px',
                borderRadius: '10px',
            },
            [theme.breakpoints.down('lg')]: {
                maxWidth: '1300px !important',
                width: '1300px',
                borderRadius: '10px',
            },
            '& .MuiDialogContent-root': {
                padding: 0,
                display: 'flex',
            },
            '& .MuiDialogActions-root': {
                position: 'absolute',
                bottom: 0,
                right: 0,
            },
        },
    },
    closeIcon: {
        top: '14px',
        color: '#387DFF',
        right: '14px',
        width: '30px',
        height: '30px',
        position: ' absolute',
        backgroundColor: '#387DFF1A',
    },
}));

export const TitleTypography = withStyles((theme) => ({
    root: {
        marginBottom: '70px',
        fontWeight: 600,
        textAlign: 'center',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
            marginBottom: '60px',
            marginTop: '20px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '50px',
            fontSize: '30px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            marginBottom: '70px',
        },
    },
}))(Typography);
export const TitleTypographySignUp = withStyles((theme) => ({
    root: {
        marginBottom: '70px',
        fontWeight: 600,
        textAlign: 'center',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
            marginBottom: '60px',
            marginTop: '20px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
        },
        '@media (min-width: 1240px)': {
            marginBottom: '70px',
            marginTop: '20px',
            fontSize: '30px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            marginBottom: '70px',
        },
    },
}))(Typography);

export const signUpStyles = makeStyles((theme) => ({
    signUpOtherText: {
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% + 40px)',
            marginLeft: '-20px',
        },
    },
    root: {
        maxWidth: '400px',
        width: '100%',
    },
    form: {
        position: 'relative',
    },
    fieldsGroup: {
        width: '100%',
        marginRight: '16px',
    },
    iconWrapper: {
        width: '20px',
        position: 'absolute',
        '& svg': {
            width: '20px',
            height: '20px',
            marginTop: '12.5px',
            marginLeft: '20px',
            [theme.breakpoints.down('xs')]: {
                marginTop: '8.5px',
            },
        },
    },
    // fieldStyles: {
    //     width: '100%',
    //     marginTop: 0,
    //     marginBottom: '16px',
    //     border: '1px solid #387DFF',
    //     borderRadius: '25px',
    //
    //     '& .Mui-focused': {
    //         border: '2px solid #387DFF !important',
    //     },
    //     '& label': {
    //         display: 'none',
    //         color: '#545F7EB3',
    //     },
    //     '& .MuiInputBase-root': {
    //         borderRadius: '24px',
    //         paddingRight: '0',
    //         '& .MuiInputAdornment-positionEnd': {
    //             display: 'none',
    //         },
    //         '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
    //             opacity: '1 !important',
    //             color: `${theme.palette.text.hint}`,
    //         },
    //         '& input': {
    //             padding: '14.5px 14px',
    //             paddingLeft: '37px',
    //             [theme.breakpoints.down('xs')]: {
    //                 padding: '12.7px 47px',
    //             },
    //         },
    //         '& fieldset': {
    //             border: 'none',
    //         },
    //     },
    //     '& fieldset legend': {
    //         display: 'none',
    //     },
    //     '& .MuiInputLabel-asterisk': {
    //         color: '#545F7EB3',
    //     },
    // },
    //
    // fieldStylesError: {
    //     width: '100%',
    //     marginTop: 0,
    //     marginBottom: '16px',
    //     border: '1px solid #F07379',
    //     borderRadius: '25px',
    //
    //     '& .Mui-focused': {
    //         border: '2px solid #F07379 !important',
    //     },
    //
    //     '& label': {
    //         display: 'none',
    //         color: '#545F7EB3',
    //     },
    //     '& .MuiInputBase-root': {
    //         borderRadius: '24px',
    //         paddingRight: '0',
    //         '& .MuiInputAdornment-positionEnd': {
    //             display: 'none',
    //         },
    //         '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
    //             opacity: '1 !important',
    //             color: `${theme.palette.text.hint}`,
    //         },
    //         '& input': {
    //             padding: '14.5px 14px',
    //             paddingLeft: '37px',
    //             [theme.breakpoints.down('xs')]: {
    //                 padding: '12.7px 47px',
    //             },
    //         },
    //         '& fieldset': {
    //             border: 'none',
    //         },
    //     },
    //     '& fieldset legend': {
    //         display: 'none',
    //     },
    //     '& .MuiInputLabel-asterisk': {
    //         color: '#545F7EB3',
    //     },
    // },

    fieldStyles: {
        width: '100%',
        marginTop: 0,
        marginBottom: '16px',
        '& label': {
            display: 'none',
            color: '#545F7EB3',
        },
        '& .MuiInputBase-root': {
            height: '42px',
            borderRadius: '24px',
            paddingRight: '0',
            '& .MuiInputAdornment-positionEnd': {
                display: 'none',
            },
            '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: `${theme.palette.text.hint}`,
            },
            '& input': {
                padding: '14.5px 14px',
                paddingLeft: '52px',
                [theme.breakpoints.down('xs')]: {
                    padding: '12.7px 47px',
                },
            },
            '& fieldset': {
                paddingLeft: '46px',
                borderColor: Colors.ThemeGray,
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: Colors.ThemeGray,
                borderWidth: '1px',
            },
        },
        '& fieldset legend': {
            display: 'none',
        },
        '& .MuiInputLabel-asterisk': {
            color: '#545F7EB3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: `2px solid ${Colors.ThemeGray} !important`,
                // borderColor: theme.palette.primary.main,
                // borderWidth: '2px !important',
            },
            ' &::after': {
                border: `2px solid ${Colors.ThemeGray} !important`,
                // borderColor: theme.palette.primary.main,
                // borderWidth: '2px !important',
            },
        },
    },
    fieldStylesError: {
        width: '100%',
        marginTop: 0,
        marginBottom: '16px',
        '& label': {
            display: 'none',
            color: '#545F7EB3',
        },
        '& .MuiInputBase-root': {
            borderRadius: '24px',
            paddingRight: '0',
            height: '42px',
            '& .MuiInputAdornment-positionEnd': {
                display: 'none',
            },
            '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
                opacity: '1 !important',
                color: `${theme.palette.text.hint}`,
            },
            '& input': {
                padding: '14.5px 14px',
                paddingLeft: '52px',
                [theme.breakpoints.down('xs')]: {
                    padding: '12.7px 47px',
                },
            },
            '& fieldset': {
                paddingLeft: '46px',
                borderColor: '#F07379',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#F07379',
                borderWidth: '1px',
            },
        },
        '& fieldset legend': {
            display: 'none',
        },
        '& .MuiInputLabel-asterisk': {
            color: '#545F7EB3',
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F07379',
                borderWidth: '2px !important',
            },
            ' &::after': {
                borderColor: '#F07379',
                borderWidth: '2px !important',
            },
        },
    },
}));

export const forgotPasswordStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContent: {
        maxWidth: '400px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
    },
    root: {
        maxWidth: '400px',
        width: '100%',
    },
    form: {
        position: 'relative',
        '& .fieldsGroup-1': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '7px',
            '& .inputWrapper-0': {
                '& .MuiCheckbox-root': {
                    color: theme.palette.primary.main,
                },
                '& .MuiTypography-body1': {
                    marginLeft: '-3px',
                    color: theme.palette.text.secondary,
                },
            },
            '& .inputWrapper-1 ': {
                marginTop: '9px',
                '& button': {
                    padding: 0,
                    color: theme.palette.text.secondary,
                    fontWeight: '400',
                    fontSize: '1rem',
                    lineHeight: 0,
                },
            },
        },
    },
    fieldsGroup: {
        width: '100%',
        marginRight: '16px',
    },
    iconWrapper: {
        width: '20px',
        position: 'absolute',
        '& svg': {
            width: '20px',
            height: '20px',
            marginTop: '12.5px',
            marginLeft: '20px',
            [theme.breakpoints.down('xs')]: {
                marginTop: '8.5px',
            },
        },
    },
}));

export const checkEmailStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    innerContent: {
        maxWidth: '400px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
    },
    pictureBox: {
        maxWidth: '250px',
        margin: '30px auto',

        '@media (min-width: 320px)': {
            maxWidth: '150px',
        },
        '@media (min-width: 768px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '250px',
        },
    },
    picture: {
        paddingTop: '100%',
    },
}));

export const resetPassStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '400px',
        width: '100%',
    },
    form: {
        position: 'relative',
    },
    fieldsGroup: {
        width: '100%',
        marginRight: '16px',
    },
    iconWrapper: {
        width: '20px',
        position: 'absolute',
        '& svg': {
            width: '20px',
            height: '20px',
            marginTop: '12.5px',
            marginLeft: '20px',
            [theme.breakpoints.down('xs')]: {
                marginTop: '8.5px',
            },
        },
    },
}));

export const successResetPassStyles = makeStyles((theme) => ({
    content: {
        maxWidth: '400px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
    },
    pictureBox: {
        maxWidth: '250px',
        margin: '30px auto',

        '@media (min-width: 320px)': {
            maxWidth: '150px',
        },
        '@media (min-width: 768px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '250px',
        },
    },
    picture: {
        paddingTop: '100%',
    },
}));

export const welcomeStyles = makeStyles(() => ({
    pictureBox: {
        maxWidth: '250px',
        margin: '30px auto',

        '@media (min-width: 320px)': {
            maxWidth: '150px',
        },
        '@media (min-width: 768px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '200px',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '250px',
        },
    },
    picture: {
        paddingTop: '100%',
    },
    pictureSignin: {
        '@media (min-width: 320px)': {},
        '@media (min-width: 768px)': {},
        '@media (min-width: 1240px)': {
            height: '530px',
            marginTop: '-50px',
        },
        '@media (min-width: 1920px)': {
            height: '600px',
            marginTop: '-50px',
        },
    },
}));

export const useSocialStyles = makeStyles((theme) => ({
    dividers: {
        marginTop: '20px',
        marginBottom: '16px',

        [theme.breakpoints.down('xs')]: {
            marginTop: '30px',
        },
    },
    divider: {
        maxWidth: '160px',
        height: '0.5px',
        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.text.secondary,

        '@media (min-width: 320px)': {
            maxWidth: '100px',
        },
        '@media (min-width: 768px)': {
            maxWidth: '160px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '160px',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '160px',
        },
    },
    socialMedia: {
        margin: '16px 0 40px 0',
        '@media (min-width: 320px)': {
            margin: '16px -8px 30px -8px',
            width: 'calc(100% + 16px)',
        },
        '@media (min-width: 768px)': {
            margin: '16px 0 20px 0',
        },
    },
    socialLink: {
        backgroundColor: 'white',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '@media (min-width: 320px)': {
            width: '40px',
            height: '40px',
            margin: '0 8px',
        },
        '@media (min-width: 768px)': {
            width: '40px',
            height: '40px',
            margin: '0 8px',
        },
        '@media (min-width: 1240px)': {
            width: '50px',
            height: '50px',
            margin: '0 10px',
        },
        '@media (min-width: 1920px)': {
            width: '50px',
            height: '50px',
            margin: '0 10px',
        },

        '& .icon-facebookFill': {
            fill: '#3B5998',
        },
        '& .icon-twitterFill': {
            fill: '#03A9F4',
        },
        '& .icon-appleFill': {
            fill: '#252E48',
        },
    },
}));
