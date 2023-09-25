import { makeStyles } from '@material-ui/core';
import {Colors} from "../../../../utils";

export const homeAboutStyles = makeStyles((theme) => ({
    aboutCont: {
        height: '383px',
        maxHeight: '383px',
        display: 'flex',
        flexDirection: 'row',

        '@media (min-width: 320px)': {
            height: '513px',
            maxHeight: '513px',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            padding: '0',
            height: '383px',
            maxHeight: '383px',
            display: 'flex',
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            // padding: '0 42px 0 42px',
            height: '383px',
            maxHeight: '383px',
            display: 'flex',
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            // padding: '0 144px 0 144px',
            height: '383px',
            maxHeight: '383px',
            display: 'flex',
            flexDirection: 'row',
        },
    },
    about: {
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '40%',
        },
        '@media (min-width: 1920px)': {
            width: '40%',
        },
    },

    desc: {
        color: Colors.ThemeLightGray,
        '@media (min-width: 320px)': {
            fontSize: '14px',
            lineHeight: '21px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            lineHeight: '24px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '16px',
            lineHeight: '24px',
        },
        '@media (min-width: 1920px)': {
            fontSize: '16px',
            lineHeight: '24px',
            maxWidth: '524px',
            width: '100%',
        },
    },

    image: {
        height: '100%',
        '@media (min-width: 320px)': {
            width: '100%',
            marginTop: '30px',
            paddingRight: '16px',
        },
        '@media (min-width: 768px)': {
            width: '100%',
            marginTop: '30px',
            paddingRight: '28px',
        },
        '@media (min-width: 1240px)': {
            width: '60%',
            margin: 0,
            paddingRight: 0,
            paddingLeft: '30px',
        },
        '@media (min-width: 1920px)': {
            width: '60%',
            margin: 0,
            paddingRight: 0,
            paddingLeft: '30px',
        },
    },

    whoTitle: {
        '@media (min-width: 320px)': {
            margin: '0 0 30px 0',
        },
        '@media (min-width: 768px)': {
            margin: '0 0 50px 0',
        },
        '@media (min-width: 1240px)': {
            margin: '50px 0',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '70px 0',
        },
    },
}));
