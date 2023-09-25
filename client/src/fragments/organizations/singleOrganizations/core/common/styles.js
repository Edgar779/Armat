import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'utils';

export const CommonStyle = makeStyles(() => ({
    itemWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '13px',
        marginBottom: '16px',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        '& p': {
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeBlack,
            lineHeight: '22px',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },
        '& span': {
            fontSize: '18px',
            fontWeight: '600',
            color: Colors.ThemeGreen,
            lineHeight: '24px',
            marginLeft: '8px',
            '@media (min-width: 320px)': {
                fontSize: '16px',
            },
            '@media (min-width: 768px)': {
                fontSize: '18px',
            },
        },
    },

    info: {
        fontSize: '16px',
        color: Colors.ThemeLightGray,
    },

    customButtonsWrapper: {
        '& div': {
            display: 'flex',
        },
    },

    modalItemWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '13px',
        marginBottom: '8px',
        background: '#FAFAFA',
        borderRadius: '4px',
        '@media (min-width: 320px)': {
            padding: '8px 12px',
        },
        '@media (min-width: 1240px)': {
            padding: '16px 12px',
        },
        '& p': {
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeGreen,
            lineHeight: '22px',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },
        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.ThemeBlack,
            lineHeight: '24px',
            marginLeft: '8px',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },
    },

    whiteItem: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        padding: '13px 24px',
        marginTop: '16px',
        width: '100%',
        '@media (min-width: 320px)': {
            padding: '12px 8px',
        },
        '@media (min-width: 768px)': {
            padding: '13px 24px',
        },
        '& span': {
            fontSize: '16px',
            fontWeight: '400',
            color: `${Colors.ThemeLightGray}!important`,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },
        '& p': {
            fontSize: '16px',
            fontWeight: '400',
            color: `${Colors.ThemeLightGray}!important`,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },
    },
    ellipsis: {
        textOverflow: 'ellipsis',
        display: 'flex',
        whiteSpace: 'nowrap',
        overflow: 'scroll',
        width: '100%',
    },
    link: {
        marginLeft: '8px',
        color: Colors.ThemeGreen,
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        textOverflow: 'ellipsis',
        display: 'flex',
        overflow: 'scroll',
        width: '90%',
        '@media (min-width: 320px)': {
            width: '90%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
    },
    modalWrapper: {
        background: 'white',
        borderRadius: '10px',
        '@media (min-width: 320px)': {
            width: '343px',
            padding: '16px',
        },
        '@media (min-width: 768px)': {
            width: '688px',
        },
        '@media (min-width: 1240px)': {
            width: '688px',
            padding: '14px 40px 30px 40px',
        },
        '@media (min-width: 1920px)': {
            width: '1000px',
            padding: '14px 64px 30px 64px',
        },
        '& .info': {
            color: Colors.ThemeBlack,
        },
    },

    modalWrapperBack: {
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        // outline: 'none',
        // overflow: 'auto',
        maxHeight: '80vh',
    },

    footerSection: {
        height: '76px',
        background: '#FAFAFA',
        borderRadius: '0px 0px 10px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            padding: '16px',
        },
        '@media (min-width: 1240px)': {
            padding: '0 24px 0 24px',
        },
        '@media (min-width: 1920px)': {
            padding: '0 40px 0 40px',
        },
    },
    clearAll: {
        border: 'none',
        background: 'none',
        textDecoration: 'underline',
        color: Colors.ThemeLightGray,
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
    },
    save: {
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: '600',
        background: Colors.ThemeGreen,
        borderRadius: '8px',
        width: '84px',
        height: '36px',
        cursor: 'pointer',
    },

    titleAndIcon: {
        display: 'flex',
        alignItems: 'center',
        margin: '24px 0 17px 0',

        '& p': {
            fontSize: '20px',
            fontWeight: '600',
            color: Colors.ThemeBlack,
            marginLeft: '12px',
        },
    },

    titleWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        '& p': {
            fontSize: '30px',
            color: Colors.ThemeBlack,
            fontWeight: '600',
            '@media (min-width: 320px)': {
                fontSize: '18px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '30px',
            },
        },
        '@media (min-width: 320px)': {
            alignItems: 'center',
        },
        '@media (min-width: 1240px)': {
            alignItems: 'baseline',
        },
    },

    itemsWrapper: {
        marginTop: '16px',
    },

    buttonsWrapper: {
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginTop: '16px',
        },
        '@media (min-width: 1240px)': {
            marginTop: '30px',
        },
        '& button': {
            border: 'none',
            borderRadius: '4px',
            height: '48px',
            fontSize: '16px',
            fontWeight: '600',
            width: '100%',
        },
    },
    reject: {
        background: '#7B7B7B1A',
        color: Colors.ThemeLightGray,
        '@media (min-width: 320px)': {
            height: '42px',
        },
        '@media (min-width: 1240px)': {
            height: '48px',
        },
    },
    approve: {
        background: Colors.ThemeGreen,
        marginLeft: '16px',
        color: 'white',
        '@media (min-width: 320px)': {
            height: '42px',
        },
        '@media (min-width: 1240px)': {
            height: '48px',
        },
    },
    rows: {
        '& p': {
            fontSize: '16px',
            color: '#22222299',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            margin: '0 8px',
        },
    },
    lastRows: {
        '& p': {
            fontSize: '16px',
            color: Colors.ThemeBlack,
            fontWeight: 'bold',
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
        },

        '& span': {
            display: 'none',
            marginLeft: '8px',
            marginRight: '8px',
        },
    },
    imageAndIcon: {
        display: 'flex',
        alignItems: 'center',
    },
    categoriesWrapper: {
        width: '100%',
        maxHeight: '200px',
        height: 'auto',
        overflow: 'auto',
        margin: '5px 0',
    },

    buttonsStyleClicked: {
        width: '58px',
        height: '58px',
        background: Colors.ThemeGreen,
        borderRadius: '32px',
        marginLeft: '24px',
        position: 'absolute',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        right: '0',
        cursor: 'none',
        padding: '0 0 0 16px',
        '& svg': {
            marginRight: '8px',
        },
        transition: 'all 0.3s linear',
        '& p': {
            '@media (max-width: 767px)': {
                display: 'none',
            },
            display: 'block',
        },
    },
    buttonsStyle: {
        width: '166px',
        height: '58px',
        background: Colors.ThemeGreen,
        borderRadius: '32px',
        marginLeft: '24px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        cursor: 'none',
        padding: '0 0 0 16px',
        '@media (min-width: 767px)': {
            fontSize: '13px',
        },
        '@media (min-width: 1240px)': {
            fontSize: '15px',
        },
        '@media (min-width: 1440px)': {
            fontSize: '16px',
        },
        '& svg': {
            marginRight: '8px',
        },

        '@media (max-width: 767px)': {
            width: '312px',
            position: 'absolute',
            marginLeft: 0,
            borderRadius: '32px',
        },
    },
    reviewsWrapper: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001F',
        borderRadius: '10px',
        margin: '4px',
        cursor: 'pointer',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            padding: '16px',
            height: '90vh',
            maxHeight: '607px',
        },
        '@media (min-width: 768px)': {
            padding: '40px',
            width: '688px',
            height: '100%',
            maxHeight: '600px',
        },
        '@media (min-width: 1240px)': {
            width: '688px',
            height: '100%',
            maxHeight: '600px',
        },
        '@media (min-width: 1920px)': {
            width: '713px',
            height: '100%',
            maxHeight: '900px',
        },
    },

    closeButton: {
        '@media (min-width: 320px)': {
            marginTop: '-20px',
            marginRight: '-20px',
        },
        '@media (min-width: 768px)': {
            marginTop: '-40px',
            marginRight: '-40px',
        },
    },
    reviewTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: Colors.ThemeBlack,
        '@media (min-width: 320px)': {
            fontSize: '24px',
            marginBottom: '10px',
        },
        '@media (min-width: 768px)': {
            fontSize: '32px',
            marginBottom: '16px',
        },
    },

    cardBody: {
        height: '50vh',
        overflow: 'auto',
    },

    stars: {
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginBottom: '24px',
        },
        '@media (min-width: 768px)': {
            marginBottom: '32px',
        },
        '@media (min-width: 1920px)': {
            marginBottom: '40px',
        },
        '& p ': {
            marginRight: '7px',
            fontSize: '16px',
            fontWeight: 600,
            color: Colors.ThemeBlack,
            '@media (min-width: 320px)': {
                fontSize: '16px',
            },
            '@media (min-width: 768px)': {
                fontSize: '18px',
            },
        },
    },

    cardWrapper: {
        height: 'auto',
        width: '99%',
        margin: '4px',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 6px #0000001A',
        borderRadius: '16px',
        '@media (min-width: 320px)': {
            padding: '16px',
            marginBottom: '16px',
        },
        '@media (min-width: 768px)': {
            padding: '24px',
            marginBottom: '24px',
        },
    },

    iconTitleStars: {
        display: 'flex',
    },

    name: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: Colors.ThemeBlack,

        '@media (min-width: 320px)': {
            fontSize: '16px',
            marginBottom: '6px',
        },
        '@media (min-width: 768px)': {
            fontSize: '18px',
            marginBottom: '8px',
        },
    },

    infoWrapper: {
        '@media (min-width: 320px)': {
            marginLeft: '8px',
        },
        '@media (min-width: 768px)': {
            marginLeft: '16px',
        },
    },

    description: {
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#545F7E',

        '@media (min-width: 320px)': {
            fontSize: '14px',
            marginTop: '6px',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            marginTop: '10px',
        },
    },
}));
