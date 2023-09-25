import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../../../utils';

export const SingleEventStyle = makeStyles(() => ({
    singleImage: {
        width: '100%',
        objectFit: 'contain',
        '@media (min-width: 320px)': {
            height: '180px',
        },
        '@media (min-width: 768px)': {
            height: '280px',
        },
        '@media (min-width: 1240px)': {
            height: '280px',
        },
        '@media (min-width: 1920px)': {
            height: '420px',
        },
    },

    backDrop: {
        backgroundImage: `url(/assets/armatBackground.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    singleOrgInfo: {
        height: 'auto',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '-6px',
        '@media (min-width: 320px)': {
            padding: '16px',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        '@media (min-width: 768px)': {
            padding: '24px 40px',
            flexDirection: 'row',
            alignItems: 'center',
        },
        '@media (min-width: 1240px)': {
            padding: '24px 42px',
        },
        '@media (min-width: 1920px)': {
            padding: '32px 238px',
        },
    },

    descriptionWrapper: {
        '& li': {
            listStyleType: 'disc',
        },
    },

    orgAvatar: {
        display: 'flex',
    },

    orgAvatarImage: {
        background: 'white',
        borderRadius: '50%',
        width: '74px',
        height: '74px',
        marginRight: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 320px)': {
            width: '36px',
            height: '36px',
            marginRight: '18px',
        },
        '@media (min-width: 768px)': {
            width: '56px',
            height: '56px',
            marginRight: '35px',
        },
        '@media (min-width: 1240px)': {
            width: '74px',
            height: '74px',
            marginRight: '27px',
        },
    },

    orgImg: {
        borderRadius: '50%',
        width: '74px',
        height: '74px',
        objectFit: 'cover',
        border: '4px solid #FFFFFF33',
        '@media (min-width: 320px)': {
            width: '36px',
            height: '36px',
        },
        '@media (min-width: 768px)': {
            width: '56px',
            height: '56px',
        },
        '@media (min-width: 1240px)': {
            width: '74px',
            height: '74px',
        },
    },
    orgImgSmall: {
        borderRadius: '50%',
        width: '74px',
        height: '74px',
        objectFit: 'cover',
        border: '4px solid #FFFFFF33',
        '@media (min-width: 320px)': {
            width: '36px',
            height: '36px',
        },
        '@media (min-width: 768px)': {
            width: '56px',
            height: '56px',
        },
        '@media (min-width: 1240px)': {
            width: '60px',
            height: '60px',
        },
    },

    pagePadding: {
        '@media (min-width: 320px)': {
            padding: '40px 16px 80px',
        },
        '@media (min-width: 768px)': {
            padding: '40px 40px 80px',
        },
        '@media (min-width: 1240px)': {
            padding: '40px 42px 80px',
        },
        '@media (min-width: 1920px)': {
            padding: '40px 238px 80px',
        },
    },

    title: {
        color: Colors.ThemeBlack,
        fontWeight: '800',
        lineHeight: '45px',
        margin: '0 0 16px 0',
        width: '100%',
        '@media (min-width: 320px)': {
            fontSize: '18px',
            lineHeight: 'normal',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
            lineHeight: '45px',
            marginRight: '16px',
            paddingRight: '16px',
        },
    },

    subTitle: {
        color: Colors.ThemeLightGray,
        fontSize: '18px',
        fontWeight: '600',
        margin: 0,
    },

    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 320px)': {
            marginTop: '16px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '0',
        },
    },

    view: {
        width: '146px',
        height: '40px',
        border: `2px solid ${Colors.ThemeGreen}`,
        borderRadius: '8px',
        color: Colors.ThemeGreen,
        fontSize: '16px',
        fontWeight: 'bold',
        background: 'none',
        marginRight: '24px',
        cursor: 'pointer',
    },

    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& button': {
            padding: '8px 16px 8px 16px',
            border: `2px solid ${Colors.ThemeGreen}`,
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            color: Colors.ThemeGreen,
        },
    },
    buttonsIcon: {
        '& svg': {
            '@media (min-width: 320px)': {
                display: 'none',
            },

            '@media (min-width: 768px)': {
                display: 'flex',
            },
        },
    },

    claimed: {
        padding: '8px 16px 8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        color: Colors.ThemeGreen,
        '& svg': {
            marginRight: '4px',
        },
    },

    infoTitle: {
        fontSize: '36px',
        fontWeight: '800',
        color: Colors.ThemeBlack,
        marginBottom: '24px',
        marginTop: '30px',
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
        },
    },

    InfoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
    },

    detailsSection: {
        width: '100%',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
    },
    detailsWrapper: {
        width: '100%',
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '95%',
        },
    },

    reviewsBody: {
        display: 'flex',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 1240px)': {
            flexDirection: 'row',
        },
    },

    reviews: {
        marginTop: '120px',
        height: 'auto',
        width: '100%',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        '@media (min-width: 320px)': {
            padding: '30px 16px',
            marginTop: '0',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            padding: '30px 40px',
            marginTop: '20px',
        },
        '@media (min-width: 1240px)': {
            padding: '30px 42px',
            marginTop: '100px',
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            padding: '40px 238px',
            marginTop: '120px',
        },
    },

    reviewsMobileDesktop: {
        height: 'auto',
        width: '100%',
        background: '#F4F4F4 0% 0% no-repeat padding-box',
        '@media (min-width: 320px)': {
            padding: '30px 16px',
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            padding: '30px 40px',
        },
        '@media (min-width: 1240px)': {
            padding: '30px 42px',
            marginTop: '100px',
            flexDirection: 'row',
        },
        '@media (min-width: 1920px)': {
            padding: '40px 238px',
            marginTop: '120px',
        },
    },

    cardsWrapper: {
        width: '46%',
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '46%',
        },
    },
    cardsWrapperConnect: {
        '@media (min-width: 320px)': {
            marginTop: '30px',
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            marginTop: '0',
            width: '46%',
        },
    },

    editButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '24px',
        '& button': {
            border: 'none',
            background: 'none',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            color: Colors.ThemeGreen,
        },
    },

    socialIcons: {
        '& svg': {
            width: '40px',
            height: '40px',
            marginRight: '24px',
        },
    },

    reviewItems: {
        display: 'flex',
        // justifyContent: 'space-between',
        width: '100%',
        overflow: 'auto',
    },

    reviewsTitle: {
        fontWeight: '800',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
        },
    },

    reviewsWrapper: {
        width: '266px',
        height: '121px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '16px',
        margin: '4px',
        cursor: 'pointer',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            padding: '16px',
            height: '91px',
            marginRight: '28px',
        },
        '@media (min-width: 768px)': {
            padding: '24px',
            height: '137px',
        },
    },

    type: {
        display: 'flex',
        '& p': {
            marginRight: '16px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: Colors.ThemeGreen,
            '@media (min-width: 320px)': {
                fontSize: '18px',
            },
            '@media (min-width: 768px)': {
                fontSize: '24px',
            },
        },
    },
    count: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#222222CC',
        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
    },

    eventsTitle: {
        fontWeight: '800',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '18px',
        },
        '@media (min-width: 768px)': {
            fontSize: '26px',
        },
    },

    noEvent: {
        height: '200px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& p': {
            fontSize: '30px',
            color: Colors.ThemeBlack,
        },
    },

    eventsWrapper: {
        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '100px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '100px',
        },
        '@media (min-width: 1920px)': {
            marginTop: '120px',
        },
    },

    events: {
        background: '#F4F4F4',
        '@media (min-width: 320px)': {
            padding: '70px 16px 0',
        },
        '@media (min-width: 768px)': {
            padding: '100px 40px 0',
        },
        '@media (min-width: 1240px)': {
            padding: '100px 42px 0',
        },
        '@media (min-width: 1920px)': {
            padding: '120px 238px 0',
        },
    },

    eventsAndSponsors: {
        background: '#F4F4F4',
        '@media (min-width: 320px)': {
            padding: '0 0 70px',
        },
        '@media (min-width: 768px)': {
            padding: '0 0 100px',
        },
        '@media (min-width: 1240px)': {
            padding: '0 0 100px',
        },
        '@media (min-width: 1920px)': {
            padding: '0 0 120px',
        },
    },

    titleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },

    link: {
        background: 'none',
        color: Colors.ThemeGreen,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        textDecoration: 'underline !important',
        '@media (min-width: 320px)': {
            fontSize: '14px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
        },
    },
}));
