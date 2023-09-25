import { makeStyles } from '@material-ui/core';
import { Colors } from '../../../../utils';

export const organizationsStyle = makeStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },

        '@media (min-width: 768px)': {
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            alignItems: 'center',
        },
    },

    customCheckbox: {
        color: Colors.ThemeGreen,
    },

    filterCreate: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginTop: '30px',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            marginTop: 0,
            width: '100%',
        },
    },
    filterButton: {
        display: 'none',
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

    filterButtonTablete: {
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
            marginTop: '36px',
        },
        '@media (min-width: 1280px)': {
            display: 'none',
        },
    },

    organizationsWrapper: {
        display: 'flex',
        marginTop: '36px',
    },

    filtersWrapper: {
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
        '@media (min-width: 1280px)': {
            display: 'block',
        },
        '@media (min-width: 1920px)': {
            display: 'block',
        },
    },

    organizationsCards: {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 276px)',
        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 1280px)': {
            width: 'calc(100% - 276px)',
        },
    },

    filterWrapper: {
        width: '350px',
        height: '680px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        marginRight: '36px',
        padding: '30px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: '16px',
        fontWeight: '600',
        color: Colors.ThemeBlack,
        margin: 0,
    },

    treeItem: {
        fontSize: '14px',
        color: '#545F7E',
        marginTop: '17px',

        overflow: 'auto',
        width: '255px',

        '@media (min-width: 320px)': {
            height: '370px',
            padding: '0 0 0 14px',
        },
        '@media (min-width: 1280px)': {
            height: '510px',
            padding: 0,
        },
    },

    treeItemStyle: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#545F7E',
        overflow: 'auto',
        '& .MuiCheckbox-root': {
            margin: '0 8px !important',
        },
        '& .MuiTreeItem-iconContainer': {
            marginRight: '0',
        },
        '& .MuiTreeItem-iconContainer svg': {
            fontSize: '24px',
        },
        '& .MuiTreeItem-label': {
            background: 'transparent !important',
            padding: 0,
        },
        '& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
            background: 'transparent !important',
        },
        '& .MuiTreeItem-root.Mui-selected': {
            background: 'transparent !important',
        },
        '& .MuiTreeItem-root.Mui-selected :hover': {
            background: 'transparent !important',
        },
        '.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label: hover': {
            background: 'transparent !important',
        },
    },

    cardWrapper: {
        height: 'auto',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '8px',
        padding: '8px',
        width: '100%',
        marginBottom: '24px',
        display: 'flex',

        flexDirection: 'column',
    },

    imeInfoWrapper: {
        display: 'flex',
    },

    image: {
        borderRadius: 8,
        width: '144px',
        height: '144px',
        '@media (min-width: 320px)': {
            width: '70px',
            height: '70px',
        },
        '@media (min-width: 768px)': {
            width: '144px',
            height: '144px',
        },
        '& img': {
            borderRadius: 8,
            width: '144px',
            height: '144px',
            objectFit: 'cover',
            '@media (min-width: 320px)': {
                width: '70px',
                height: '70px',
            },
            '@media (min-width: 768px)': {
                width: '144px',
                height: '144px',
            },
        },
    },
    infoWrapper: {
        marginLeft: '16px',
        width: '100%',
    },
    titleDateWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'row',
        },

        '& p': {
            fontSize: '16px',
            fontWeight: 'bold',
            lineHeight: '22px',
            color: Colors.ThemeBlack,
            margin: '5px 0 19px 0',
            '@media (min-width: 320px)': {
                margin: '5px 0 8px 0',
                width: '100%',
                fontSize: '18px',
            },
            '@media (min-width: 768px)': {
                margin: '5px 0 19px 0',
                width: '80%',
            },
            '@media (min-width: 1280px)': {
                width: '80%',
            },
        },
        '& span': {
            fontSize: '14px',
            fontWeight: 'bold',
            lineHeight: '19px',
            color: '#222222CC',
        },
    },

    created: {
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
    },

    address: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '200px',
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 400px)': {
            width: '250px',
        },
        '@media (min-width: 500px)': {
            width: '300px',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

    moreInfoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
    },
    moreInfoMobileWrapper: {
        // display: 'flex',
        // justifyContent: 'space-between',
        '@media (min-width: 320px)': {
            display: 'flex',
            borderTop: `1px solid ${Colors.ThemeGreen}`,
            marginTop: '16px',
            paddingTop: '16px',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

    moreInfo: {
        '& a': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        },
    },

    titleInfo: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeGreen,
        margin: 0,
    },

    info: {
        marginLeft: '8px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeLightGray,
    },
    infoSliced: {
        marginLeft: '8px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '22px',
        color: Colors.ThemeLightGray,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '100%',
    },

    viewDetails: {
        display: 'flex',
        alignItems: 'flex-end',
        '& button': {
            marginBottom: '6px',
            border: 'none',
            cursor: 'pointer',
            width: '142px',
            height: '36px',
            background: Colors.ThemeGreen,
            borderRadius: '4px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',

            '@media (min-width: 320px)': {
                width: '114px',
                height: '32px',
                fontSize: '14px',
                '&:hover': {
                    background: Colors.lightGreen,
                    width: '114px',
                },
            },
            '@media (min-width: 768px)': {
                width: '142px',
                height: '36px',
                fontSize: '16px',
                '&:hover': {
                    background: Colors.lightGreen,
                    width: '142px',
                },
            },
        },
    },

    typeWrapper: {
        display: 'flex',
        height: '56px',
        background: '#F4F4F4',
        borderRadius: '4px',
        padding: '0 24px',
        '& .MuiIconButton-label': {
            color: Colors.ThemeGreen,
        },
    },

    type: {
        display: 'flex',
        flexDirection: 'row',
        '& .MuiIconButton-label': {
            color: Colors.ThemeGreen,
        },
    },

    viewDetailsMobile: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
    },
    detailsMobile: {
        display: 'flex',
        marginBottom: '4px',
        '& p': {
            fontSize: '14px',
            fontWeight: '600',
            color: '#545F7E',
            marginLeft: '4px',
        },
    },

    filterTreeItem: {
        '& ul': {
            padding: '0',
        },
        '& li': {
            // display: 'flex',
            marginBottom: '10px',
            marginLeft: '25px',
        },
        '& .k-mid': {
            display: 'flex',
            alignItems: 'center',
        },
        '& .k-in': {
            marginLeft: '16px',
            fontSize: '14px',
            color: '#545F7E',
        },
        '& .k-checkbox': {
            height: '18px',
            width: '18px',
        },
    },

    filtersButtonStyle: {
        width: '90px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '20px',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#387DFF',
        '@media (min-width: 320px)': {
            display: 'flex',
        },
        '@media (min-width: 768px)': {
            display: 'flex',
        },
        '@media (min-width: 1280px)': {
            display: 'none',
        },
    },

    mobileFilterWrapper: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '0px 10px 10px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '70vh',
        height: 'auto',
        '@media (min-width: 320px)': {
            width: '359px',
        },
        '@media (min-width: 768px)': {
            width: '500px',
        },
    },

    closeWrapper: {
        padding: '14px',
    },

    bottomTab: {
        height: '76px',
        background: '#FAFAFA 0% 0% no-repeat padding-box',
        borderRadius: '0px 0px 10px 0px',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        '@media (min-width: 320px)': {
            marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            marginTop: '40px',
        },
    },
    clear: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: Colors.ThemeLightGray,
        textDecoration: 'underline',
        fontSize: '16px',
        fontWeight: '600',
    },
    show: {
        background: Colors.ThemeGreen,
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        fontSize: '16px',
        fontWeight: '600',
        width: '150px',
        height: '36px',
    },

    headerContPast: {
        '@media (min-width: 320px)': {
            margin: '50px 0 30px 0',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        '@media (min-width: 768px)': {
            margin: '50px 42px 30px 42px',
        },
        '@media (min-width: 1280px)': {
            margin: '50px 42px 30px 42px',
        },
        '@media (min-width: 1920px)': {
            margin: '70px 238px 40px 238px',
        },
    },

    allItems: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '7px',
    },
}));
