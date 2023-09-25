import { makeStyles } from '@material-ui/core';
import { Colors } from 'theme';

export const useStyles = makeStyles((theme) => ({
    singleEventCont: {
        maxWidth: '1920px',
        margin: '0 auto',
        background: '#FAFAFA',
        position: 'relative',

        '@media (min-width: 320px)': {
            padding: '180px 16px 100px 16px',
        },
        '@media (min-width: 768px)': {
            padding: '180px 40px 100px 40px',
        },
        '@media (min-width: 1280px)': {
            padding: '150px 42px 100px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '150px 238px 100px 238px',
        },

        genBackImg: {
            position: 'absolute',
            top: '0',
            right: '0',
        },

        ///Single event header styles

        headerCont: {
            width: '100%',
        },
        breadcrumbsCont: {
            width: '100%',
            height: '10%',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '36px',
            },
        },
        infoCardCont: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '36px',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column-reverse',
                margin: 0,
            },
        },
        infoCard: {
            [theme.breakpoints.down('xl')]: {
                width: '1006px',
                height: '479px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('lg')]: {
                width: '1006px',
                height: '461px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('md')]: {
                width: '795px',
                height: '461px',
                background: Colors.Blue,
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('sm')]: {
                marginTop: '56px',
                marginBottom: '0',
                width: '100%',
                background: Colors.Blue,
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                marginTop: '56px',
                marginBottom: '0',
                width: '100%',
                minWidth: '320px',
                background: Colors.Blue,
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'row',
            },
        },

        infoCont: {
            [theme.breakpoints.down('xl')]: {
                width: '60%',
                height: '100%',
                padding: '48px 0 48px 64px',
            },
            [theme.breakpoints.down('lg')]: {
                width: '60%',
                height: '100%',
                padding: '48px 0 48px 64px',
            },
            [theme.breakpoints.down('md')]: {
                width: '60%',
                height: '100%',
                padding: '48px 0 48px 64px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '60%',
                height: '100%',
                padding: '32px 0 32px 64px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '60%',
                height: '100%',
                padding: '24px 0 24px 16px',
            },
        },
        titleCont: {
            [theme.breakpoints.down('xl')]: {
                width: '530px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('lg')]: {
                width: '530px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('md')]: {
                width: '455px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('sm')]: {
                width: '450px',
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('xs')]: {
                width: '300px',
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '36px',
            },
        },
        titleIcon: {
            width: '22px',
            height: '95px',
            marginRight: '10px',
            background:
                'transparent linear-gradient(180deg, #FFA330 0%, #FF9346 27%, #FF8559 54%, #FB7A6A 77%, #F07379 100%) 0% 0% no-repeat padding-box',
            [theme.breakpoints.down('sm')]: {
                height: '95px',
            },
            [theme.breakpoints.down('xs')]: {
                height: '50px',
            },
        },

        title: {
            fontSize: '26px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            [theme.breakpoints.down('xs')]: {
                fontSize: '18px',
            },
        },
        orgCont: {
            [theme.breakpoints.down('xl')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            [theme.breakpoints.down('lg')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                marginBottom: '36px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
        },
        avatar: {
            [theme.breakpoints.down('xl')]: {
                marginRight: '0',
            },
            [theme.breakpoints.down('lg')]: {
                marginRight: '0',
            },
            [theme.breakpoints.down('md')]: {
                marginRight: '0',
            },
            [theme.breakpoints.down('xs')]: {
                marginRight: '0',
                height: '28px',
                width: '28px',
            },
        },
        org: {
            color: '#FFFFFF',
            padding: 0,
            '@media (min-width: 320px)': {
                fontSize: '14px',
                marginLeft: '8px',
            },
            '@media (min-width: 768px)': {
                fontSize: '18px',
                marginLeft: '16px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '18px',
                marginLeft: '16px',
            },
            '@media (min-width: 1920px)': {
                fontSize: '18px',
                marginLeft: '16px',
            },
        },
        dataCont: {
            [theme.breakpoints.down('xl')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            [theme.breakpoints.down('lg')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            [theme.breakpoints.down('md')]: {
                width: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            [theme.breakpoints.down('sm')]: {
                width: '335px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            [theme.breakpoints.down('xs')]: {
                width: '315px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
        },
        type: {
            [theme.breakpoints.down('xl')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('lg')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
            },
        },
        date: {
            [theme.breakpoints.down('xl')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('lg')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
            },
        },
        location: {
            [theme.breakpoints.down('xl')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('lg')]: {
                display: 'flex',
                flexDirection: 'row',
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
            },
        },
        icon: {
            [theme.breakpoints.down('xl')]: {
                width: '24px',
                height: '24px',
                marginRight: '4px',
            },
            [theme.breakpoints.down('lg')]: {
                width: '24px',
                height: '24px',
                marginRight: '4px',
            },
            [theme.breakpoints.down('md')]: {
                width: '24px',
                height: '24px',
                marginRight: '4px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '18px',
                height: '18px',
                marginRight: '4px',
            },
        },
        li: {
            [theme.breakpoints.down('xl')]: {
                fontSize: '16px',
                color: '#FFFFFF',
                margin: '0',
            },
            [theme.breakpoints.down('lg')]: {
                fontSize: '16px',
                color: '#FFFFFF',
                margin: '0',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '16px',
                color: '#FFFFFF',
                margin: '0',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
                color: '#FFFFFF',
                margin: '0',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '14px',
                color: '#FFFFFF',
                margin: '0',
            },
        },
        buttonCont: {
            [theme.breakpoints.down('xl')]: {
                width: '100%',
                height: '20%',
            },
            [theme.breakpoints.down('lg')]: {
                width: '100%',
                height: '20%',
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                height: '20%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '20%',
                paddingTop: '30px',
            },
        },
        backImgCont: {
            [theme.breakpoints.down('xl')]: {
                width: '40%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '62px 142px 62px 0',
            },
            [theme.breakpoints.down('lg')]: {
                width: '40%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '62px 142px 62px 0',
            },
            [theme.breakpoints.down('md')]: {
                width: '40%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '62px 142px 62px 0',
            },
        },
        img: {
            backgroundSize: 'cover',
            height: 'auto',
            borderRadius: '16px',
            border: '6px solid #FFFFFF',
            boxShadow: '0px 2px 6px #0000001F',
            minWidth: '400px',
            minHeight: '243px',
            marginTop: '270px',
            marginLeft: '-150px',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: 'auto',
                minHeight: '0',
                minWidth: '0',
                margin: 0,
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                height: 'auto',
                minHeight: '0',
                minWidth: '0',
                margin: 0,
            },
        },
        eventCardStatusCont: { marginTop: '70px', width: '100%' /* '& p': { margin: 0 }  */ },
        eventStatusCont: {
            width: '100%',
            backgroundColor: '#387DFF1A',
            borderRadius: '16px',
            padding: '40px 24px 40px 24px',
        },
        eventStatusHeaderColumn: {
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
        },
        eventStatusHeader: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
        },
        eventStatus: {
            display: 'flex',
            flexDirection: 'row',
        },
        eventStatusIcon: {
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '16px',
            alignItems: 'center',
        },
        eventStatusText: {
            fontSize: '18px',
            color: '#545F7E',
            fontWeight: 'bold',
            [theme.breakpoints.down('xs')]: {
                fontSize: '16px',
            },
        },
        statusIcon: { marginRight: '8px' },
        status: { margin: '0 0 0 8px' },
        eventSubmitButton: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('xs')]: {
                margin: '8px 0 0 0',
            },
        },
        buttonText: {
            fontSize: '16px',
            color: '#387DFF',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                fontSize: '14px',
            },
        },
        descCon: {},
        desc: {
            fontSize: '16px',
            color: '#545F7E',
            [theme.breakpoints.down('xs')]: {
                fontSize: '14px',
            },
        },
    },
}));
