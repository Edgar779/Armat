import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Backgrounds, Colors } from 'utils';

export const imageStyles = makeStyles((theme) => ({
    pictureBox: {
        position: 'relative',
        backgroundColor: '#387DFF1A',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

        '@media (min-width: 320px)': {},
        '@media (min-width: 768px)': {},
        '@media (min-width: 1240px)': {
            padding: '15px 30px 30px 30px',
        },
        '@media (min-width: 1920px)': {
            padding: '15px 30px 30px 30px',
        },
    },
    picture: {
        '@media (min-width: 320px)': {},
        '@media (min-width: 768px)': {},
        '@media (min-width: 1240px)': {
            height: '294px',
            marginTop: '30px',
        },
        '@media (min-width: 1920px)': {
            height: '387px',
            marginTop: '50px',
        },
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
    logo: {
        width: 'calc(100% - 40px)',
        height: '40px',
        position: 'absolute',
    },
}));

export const useStyles = makeStyles((theme) => ({
    dialog: {
        '& .MuiDialog-paper': {
            width: '100%',
            overflow: 'hidden',
            background: Backgrounds.gray,
            '@media (min-width: 320px)': {
                maxWidth: '343px !important',
                width: '343px',
                borderRadius: '10px',
                height: '584px',
                maxHeight: '584px !important',
                display: 'flex',
                justifyContent: 'center',
            },
            '@media (min-width: 768px)': {
                maxWidth: '550px !important',
                width: '550px',
                borderRadius: '10px',
                height: '631px',
                maxHeight: '631px !important',
                display: 'flex',
                justifyContent: 'center',
            },
            '@media (min-width: 1240px)': {
                maxWidth: '970px !important',
                width: '970px',
                borderRadius: '10px',
                height: '531px',
                maxHeight: '531px !important',
            },
            '@media (min-width: 1920px)': {
                maxWidth: '1200px !important',
                width: '1200px',
                borderRadius: '10px',
                height: '682px',
                maxHeight: '682px !important',
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
    dialogSignIn: {
        '& .MuiDialog-paper': {
            width: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            background: Backgrounds.gray,
            display: 'flex',
            justifyContent: 'center',
            '@media (min-width: 320px)': {
                maxWidth: '343px !important',
                width: '343px',
                borderRadius: '10px',
                height: '90vh',
                maxHeight: '584px !important',
                display: 'flex',
            },
            '@media (min-width: 768px)': {
                maxWidth: '550px !important',
                width: '550px',
                borderRadius: '10px',
                height: '631px',
                maxHeight: '631px !important',
                display: 'flex',
            },
            '@media (min-width: 1240px)': {
                maxWidth: '970px !important',
                width: '970px',
                borderRadius: '10px',
                height: '590px',
                maxHeight: '590px !important',
            },
            '@media (min-width: 1920px)': {
                maxWidth: '1200px !important',
                width: '1200px',
                borderRadius: '10px',
                height: '682px',
                maxHeight: '682px !important',
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
    dialogSignUp: {
        '& .MuiDialog-paper': {
            width: '100%',
            overflowY: 'scroll',
            background: Backgrounds.gray,
            '@media (min-width: 320px)': {
                maxWidth: '343px !important',
                width: '343px',
                borderRadius: '10px',
                height: '100%',
                maxHeight: '90vh !important',
                display: 'flex',
            },
            '@media (min-width: 768px)': {
                maxWidth: '550px !important',
                width: '550px',
                borderRadius: '10px',
                height: '631px',
                maxHeight: '631px !important',
                display: 'flex',
            },
            '@media (min-width: 1240px)': {
                maxWidth: '970px !important',
                width: '970px',
                borderRadius: '10px',
                height: '545px',
                maxHeight: '545px !important',
            },
            '@media (min-width: 1920px)': {
                maxWidth: '1200px !important',
                width: '1200px',
                borderRadius: '10px',
                height: '740px',
                maxHeight: '740px !important',
                overflow: 'hidden',
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

    dialogInviteSuccess: {
        '& .MuiDialog-paper': {
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            background: Backgrounds.gray,

            '@media (min-width: 320px)': {
                maxWidth: '343px !important',
                width: '343px',
                borderRadius: '10px',
                height: '464px',
                maxHeight: '464px !important',
            },
            '@media (min-width: 768px)': {
                maxWidth: '544px !important',
                width: '544px',
                borderRadius: '10px',
                height: '560px',
                maxHeight: '560px !important',
            },
            '@media (min-width: 1240px)': {
                maxWidth: '544px !important',
                width: '544px',
                borderRadius: '10px',
                height: '560px',
                maxHeight: '560px !important',
            },
            '@media (min-width: 1920px)': {
                maxWidth: '584px !important',
                width: '584px',
                borderRadius: '10px',
                height: '650px',
                maxHeight: '650px !important',
            },

            [theme.breakpoints.down('xl')]: {},
            [theme.breakpoints.down('lg')]: {},

            [theme.breakpoints.down('md')]: {
                // display:'flex',
                // justifyContent:'center'
            },
            [theme.breakpoints.down('sm')]: {
                // display:'flex',
                // justifyContent:'center'
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

    inviteModal: {
        margin: '0 auto',
        '@media (min-width: 320px)': {
            width: '343px',
            maxWidth: '343px !important',
            height: '584px',
        },
        '@media (min-width: 768px)': {
            width: '550px',
            maxWidth: '550px !important',
            height: '631px',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '970px !important',
            width: '970px',
            height: '631px',
            padding: '30px',
        },
        // '@media (min-width: 1920px)': {
        //     width: '1200px',
        //     maxWidth: '1200px !important',
        //     height:'682px',
        //     padding:'30px'
        // },

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
    closeIcon: {
        top: '14px',
        color: Colors.ThemeGreen,
        right: '14px',
        width: '30px',
        height: '30px',
        position: ' absolute',
        backgroundColor: '#49B7761A',
    },
}));

// export const signInStyles = makeStyles((theme) => ({
//     content: {
//         maxWidth: '400px',
//         width: '100%',
//         [theme.breakpoints.down('xs')]: {
//             maxWidth: '311px',
//         },
//     },
//     root: {
//         maxWidth: '400px',
//         width: '100%',
//     },
//     form: {
//         position: 'relative',
//     },
//     fieldsGroup: {
//         width: '100%',
//         marginRight: '16px',
//     },
//     /* inputWrapper: {
//         position: 'relative',
//         '& > div': {
//             position: 'relative',
//         },
//     }, */
//     iconWrapper: {
//         width: '20px',
//         position: 'absolute',
//         '& svg': {
//             width: '20px',
//             height: '20px',
//             marginTop: '12.5px',
//             marginLeft: '20px',
//             [theme.breakpoints.down('xs')]: {
//                 marginTop: '8.5px',
//             },
//         },
//     },
//     fieldStyles: {
//         width: '100%',
//         marginTop: 0,
//         marginBottom: '16px',
//         '& label': {
//             display: 'none',
//             color: '#545F7EB3',
//         },
//         '& .MuiInputBase-root': {
//             borderRadius: '24px',
//             paddingRight: '0',
//             '& .MuiInputAdornment-positionEnd': {
//                 display: 'none',
//             },
//             '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
//                 opacity: '1 !important',
//                 color: `${theme.palette.text.hint}`,
//             },
//             '& input': {
//                 padding: '14.5px 14px',
//                 paddingLeft: '52px',
//                 [theme.breakpoints.down('xs')]: {
//                     padding: '12.7px 47px',
//                 },
//             },
//             '& fieldset': {
//                 paddingLeft: '46px',
//                 borderColor: theme.palette.primary.main,
//                 borderWidth: '0.5px',
//             },
//             '&:hover fieldset': {
//                 borderColor: theme.palette.primary.main,
//                 borderWidth: '1px',
//             },
//         },
//         '& fieldset legend': {
//             display: 'none',
//         },
//         '& .MuiInputLabel-asterisk': {
//             color: '#545F7EB3',
//         },
//         '& .Mui-focused': {
//             '& .MuiOutlinedInput-notchedOutline': {
//                 border: '2px solid #387DFF !important',
//                 // borderColor: theme.palette.primary.main,
//                 // borderWidth: '2px !important',
//             },
//             ' &::after': {
//                 border: '2px solid #387DFF !important',
//                 // borderColor: theme.palette.primary.main,
//                 // borderWidth: '2px !important',
//             },
//         },
//     },
//     fieldStylesError: {
//         width: '100%',
//         marginTop: 0,
//         marginBottom: '16px',
//         '& label': {
//             display: 'none',
//             color: '#545F7EB3',
//         },
//         '& .MuiInputBase-root': {
//             borderRadius: '24px',
//             paddingRight: '0',
//             '& .MuiInputAdornment-positionEnd': {
//                 display: 'none',
//             },
//             '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
//                 opacity: '1 !important',
//                 color: `${theme.palette.text.hint}`,
//             },
//             '& input': {
//                 padding: '14.5px 14px',
//                 paddingLeft: '52px',
//                 [theme.breakpoints.down('xs')]: {
//                     padding: '12.7px 47px',
//                 },
//             },
//             '& fieldset': {
//                 paddingLeft: '46px',
//                 borderColor: '#F07379',
//                 borderWidth: '0.5px',
//             },
//             '&:hover fieldset': {
//                 borderColor: '#F07379',
//                 borderWidth: '1px',
//             },
//         },
//         '& fieldset legend': {
//             display: 'none',
//         },
//         '& .MuiInputLabel-asterisk': {
//             color: '#545F7EB3',
//         },
//         '& .Mui-focused': {
//             '& .MuiOutlinedInput-notchedOutline': {
//                 borderColor: '#F07379',
//                 borderWidth: '2px !important',
//             },
//             ' &::after': {
//                 borderColor: '#F07379',
//                 borderWidth: '2px !important',
//             },
//         },
//     },
// }));

export const TitleTypography = withStyles((theme) => ({
    root: {
        marginBottom: '60px',
        fontSize: '30px',
        fontWeight: 600,
        textAlign: 'center',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
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
    /* inputWrapper: {
        position: 'relative',
        '& > div': {
            position: 'relative',
        }, */
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

export const forgotPasswordStyles = makeStyles((theme) => ({
    modalWrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        background: Backgrounds.gray,
    },
    saveMyInfoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    forgotButton: {
        border: 'none',
        outline: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        color: '#545F7E',
    },
    contentPaddings: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            padding: '16px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            padding: '32px',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: 'auto',
            padding: '16px',
            margin: '0 auto',
        },
        '@media (min-width: 1920px)': {
            width: 'auto',
            padding: '32px',
            margin: '0 auto',
        },
    },
    contentPaddingsSignUp: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            padding: '16px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            padding: '32px',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: 'auto',
            margin: '32px auto 0 auto',
            padding: '0 32px 50px 32px',
            position: 'absolute',
            right: '45px',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
        },
        '@media (min-width: 1920px)': {
            padding: '32px',
            width: 'auto',
            right: '0',
            margin: '0 auto',
            position: 'relative',
        },
    },

    content: {
        width: '400px',
        maxWidth: '400px',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
    title: {
        color: Colors.ThemeBlack,
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '41px',
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
            marginLeft: '5px',
            marginTop: '2px',
        },
    },

    rightPanelImg: {
        background: '#FBFBFB 0% 0% no-repeat padding-box',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
            width: '420px',
            height: '551px',
            padding: '15px 30px 30px 30px',
        },
        '@media (min-width: 1920px)': {
            display: 'block',
            width: '534px',
            height: '682px',
            padding: '15px 30px 30px 30px',
        },
    },
    rightPanelImgSignIn: {
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
            width: '420px',
            height: '590px',
            padding: '15px 30px 30px 30px',
        },
        '@media (min-width: 1920px)': {
            display: 'block',
            width: '534px',
            height: '682px',
            padding: '15px 30px 30px 30px',
        },
    },
    rightPanelImgSignUp: {
        background: Backgrounds.darkGray,
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1240px)': {
            display: 'block',
            width: '420px',
            height: '100%',
            maxHeight: '682px',
            padding: '15px 30px 30px 30px',
        },
        '@media (min-width: 1920px)': {
            display: 'block',
            width: '534px',
            height: '750px',
            maxHeight: '750px',
            padding: '37px 30px 30px 30px',
        },
    },

    errorStyle: {
        position: 'absolute',
        color: '#F07379',
        fontSize: '12px',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    termOfUSe: {
        '@media (min-width: 320px)': {
            marginTop: '-5px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-5px',
        },
        '@media (min-width: 1240px)': {
            marginTop: 0,
        },
        '@media (min-width: 1920px)': {
            marginTop: 0,
        },
    },

    forgotTitleStyle: {
        fontWeight: '600',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
    },

    forgotTitleStyleCheck: {
        fontWeight: '600',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            marginTop: '80px',
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '0',
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
    },
    forgotTitleStyleSmall: {
        fontWeight: '600',
        color: '#387DFF',
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '28px',
            lineHeight: '41px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '28px',
            lineHeight: '41px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
    },

    logoStyle: {
        // position:'absolute'
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
        margin: '40px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '200px',
            margin: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '150px',
        },
    },
    picture: {
        paddingTop: '100%',
    },
}));

// export const codeVerifStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: '400px',
//         width: '100%',
//     },
//     content: {
//         maxWidth: '400px',
//         width: '100%',
//         [theme.breakpoints.down('xs')]: {
//             maxWidth: '311px',
//         },
//     },
//     fieldStyles: {
//         width: 'auto !important',
//         margin: '0 -16px 40px',
//         display: 'flex',
//         justifyContent: 'center',
//         [theme.breakpoints.down('sm')]: {
//             marginBottom: '30px',
//         },
//         '& input': {
//             width: '43px !important',
//             height: '59px !important',
//             margin: '0 8px',
//             borderRadius: 'initial !important',
//             border: `1px solid ${theme.palette.primary.main} !important`,
//             color: theme.palette.text.secondary,
//             transition: 'border 0.1s !important',
//             '&::placeholder': {
//                 color: theme.palette.text.hint,
//             },
//             '&:focus': {
//                 borderWidth: '2px !important',
//             },
//             [theme.breakpoints.down('xs')]: {
//                 width: '40px !important',
//                 height: '50px !important',
//                 margin: '0 5px',
//             },
//         },
//     },
// }));

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
    // fieldStyles: {
    //     width: '100%',
    //     marginTop: 0,
    //     marginBottom: '16px',
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
    //             paddingLeft: '46px',
    //             borderColor: theme.palette.primary.main,
    //             borderWidth: '0.5px',
    //         },
    //         '&:hover fieldset': {
    //             borderColor: theme.palette.primary.main,
    //             borderWidth: '1px',
    //         },
    //     },
    //     '& fieldset legend': {
    //         display: 'none',
    //     },
    //     '& .MuiInputLabel-asterisk': {
    //         color: '#545F7EB3',
    //     },
    //     '& .Mui-focused': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //             border: '2px solid #387DFF !important',
    //             // borderColor: theme.palette.primary.main,
    //             // borderWidth: '2px !important',
    //         },
    //         ' &::after': {
    //             border: '2px solid #387DFF !important',
    //             // borderColor: theme.palette.primary.main,
    //             // borderWidth: '2px !important',
    //         },
    //     },
    // },
    // fieldStylesError: {
    //     width: '100%',
    //     marginTop: 0,
    //     marginBottom: '16px',
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
    //             paddingLeft: '52px',
    //             [theme.breakpoints.down('xs')]: {
    //                 padding: '12.7px 47px',
    //             },
    //         },
    //         '& fieldset': {
    //             paddingLeft: '46px',
    //             borderColor: '#F07379',
    //             borderWidth: '0.5px',
    //         },
    //         '&:hover fieldset': {
    //             borderColor: '#F07379',
    //             borderWidth: '1px',
    //         },
    //     },
    //     '& fieldset legend': {
    //         display: 'none',
    //     },
    //     '& .MuiInputLabel-asterisk': {
    //         color: '#545F7EB3',
    //     },
    //     '& .Mui-focused': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //             borderColor: '#F07379',
    //             borderWidth: '2px !important',
    //         },
    //         ' &::after': {
    //             borderColor: '#F07379',
    //             borderWidth: '2px !important',
    //         },
    //     },
    // },
}));

// export const successResetPassStyles = makeStyles((theme) => ({
//     content: {
//         maxWidth: '400px',
//         width: '100%',
//         [theme.breakpoints.down('xs')]: {
//             maxWidth: '311px',
//         },
//     },
//     pictureBox: {
//         maxWidth: '250px',
//         margin: '40px auto',
//         [theme.breakpoints.down('md')]: {
//             maxWidth: '200px',
//             margin: '30px auto',
//         },
//         [theme.breakpoints.down('xs')]: {
//             maxWidth: '150px',
//         },
//     },
//     picture: {
//         paddingTop: '100%',
//     },
// }));

export const welcomeStyles = makeStyles((theme) => ({
    pictureBox: {
        '@media (min-width: 320px)': {
            maxWidth: '150px',
            margin: '30px auto',
        },
        '@media (min-width: 768px)': {
            maxWidth: '150px',
            margin: '30px auto',
        },
        '@media (min-width: 1240px)': {
            maxWidth: '200px',
            margin: '30px auto',
        },
        '@media (min-width: 1920px)': {
            maxWidth: '250px',
            margin: '40px auto',
        },
    },
    picture: {
        paddingTop: '100%',
    },
    inviteMemberSuccessTitle: {
        textAlign: 'center',
        letterSpacing: 0,
        color: Colors.ThemeBlack,
        fontWeight: 'bold',

        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: '24px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
            lineHeight: '41px',
        },
    },
    inviteEmail: {
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0px',
        color: Colors.ThemeGreen,
    },
    inviteMemberSuccessButton: {
        margin: '30px auto 0 auto',
        display: 'flex',
        width: '100%',
    },
}));

export const useSocialStyles = makeStyles((theme) => ({
    dividers: {
        //marginTop: '40px',
        marginTop: '30px',
        marginBottom: '30px',

        [theme.breakpoints.down('xs')]: {
            marginTop: '30px',
        },
    },
    divider: {
        maxWidth: '160px',
        height: '0.5px',
        width: '100%',
        backgroundColor: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '116px',
        },
    },
    socialMedia: {
        margin: '16px 0 40px 0',
        [theme.breakpoints.down('xs')]: {
            margin: '16px -8px 30px -8px',
            width: 'calc(100% + 16px)',
        },
    },
    socialLink: {
        width: '50px',
        height: '50px',
        margin: '0 10px',
        backgroundColor: 'white',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '40px',
            height: '40px',
            margin: '0 8px',
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
