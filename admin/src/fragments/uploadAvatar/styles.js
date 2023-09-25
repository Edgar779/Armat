import { makeStyles } from '@material-ui/core';
import {Colors} from "theme";

export const useStyles = makeStyles((theme) => ({
    avatarCont: {
        width: '276px',
        height: '208px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        borderRadius: '6px',
        opacity: 1,
        [theme.breakpoints.down('md')]: {
            width: '250px',
            height: '178px',
            marginBottom: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '178px',
            marginBottom: '40px',
        },
    },
    avatarHeader: {
        width: '100%',
        height: '87px',
        background: Colors.blue,
        borderRadius: '6px 6px 0px 0px',
        opacity: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    avatarPhoto: {
        marginTop: '25px',
        width: '82px',
        height: '82px',
        background: 'transparent 0% 0% no-repeat padding-box',
        opacity: 1,
        border: '4px solid white',
        [theme.breakpoints.down('md')]: {
            width: '78px',
            height: '78px',
        },
    },
    avatarUploadTextCont: {
        width: '100%',
        height: 208 - 87 + 'px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarUploadText: {},
    uploadPhoto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '50px',
        width: '162px',
        height: '22px',
        color: '#387DFF',
        opacity: 1,
        fontFamily: 'Arial,Helvetica,sans-serif',
        fontWeight: '400',
        [theme.breakpoints.down('md')]: {
            marginTop: '16px',
        },
        cursor: 'pointer',
    },

    modal: {
        maxWidth: '400px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '311px',
        },
    },
}));

export const userEditorStyles = makeStyles((theme) => ({
    button: {
        background: `transparent linear-gradient(270deg, #5690FF 0%, #766DE8 100%) 0% 0% no-repeat padding-box`,
        borderRadius: '24px',
        width: '116px',
        height: '48px',
        marginRight: '16px',
        marginTop: '16px',
    },
    profileEditorCont: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            padding: '0 16px 10px 16px',
            width: '290px',
        },
        '@media (min-width: 768px)': {
            padding: '0 30px 20px 30px',
            width: '688px',
        },
        '@media (min-width: 1240px)': {
            padding: '0 30px 20px 30px',
            width: '710px',
        },
        '@media (min-width: 1920px)': {
            padding: '0 40px 20px 40px',
            width: '750px',
        },
    },
    '& .MuiBox-root': {},

    profileEditorTitleCont: {
        height: '15%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    profileEditorTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    profileEditorTitleText: {
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '30px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '30px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '30px',
        },

        color: '#387DFF',
        fontFamily: 'Arial,Helvetica,sans-serif',
        fontWeight: 'bold',
    },

    editProfileImgCont: {
        margin: '30px auto 0 auto',
        background: '#FFFFFF66 0% 0% no-repeat padding-box',
        borderRadius: '6px',
        '@media (min-width: 320px)': {
            width: '200px',
            height: '200px',
        },
        '@media (min-width: 768px)': {
            width: '320px',
            height: '320px',
        },
        '@media (min-width: 1240px)': {
            width: '320px',
            height: '320px',
        },
        '@media (min-width: 1920px)': {
            width: '320px',
            height: '320px',
        },
    },

    editProfileImg: {
        width: '100%',
        height: '100%',
    },

    editProfileButtonCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '25px',
        width: '100%',

        '& #track': {
            color: '#F07379',
            background: 'green',
        },
    },
    editProfileButton: {
        display: 'flex',
        '@media (min-width: 320px)': {
            justifyContent: 'space-between',
        },
        '@media (min-width: 768px)': {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        '@media (min-width: 1240px)': {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        '@media (min-width: 1920px)': {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
    },
}));
