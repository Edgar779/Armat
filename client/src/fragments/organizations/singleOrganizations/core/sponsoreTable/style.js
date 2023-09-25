import { makeStyles } from '@material-ui/core';
import { Colors } from 'utils';

export const suggestedStyle = makeStyles((theme) => ({
    table: {
        '&.MuiTable-root': {
            borderCollapse: 'separate',
            borderSpacing: '0px 8px',
            padding: '5px',
            background: '#F4F4F4',
        },
    },
    tableHeadDesktop: {
        // boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '8px',
        height: 51,
        '& .MuiTableCell-stickyHeader': {
            background: 'transparent',
        },
        '& .MuiTableCell-sizeSmall': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '19px',
            color: Colors.ThemeGreen,
            padding: '6px 16px',
            border: 'none',
            '@media (min-width: 1920px)': {
                padding: '6px 16px',
            },
        },
        '@media (min-width: 320px)': {
            display: 'none !important',
        },
        '@media (min-width: 767px)': {
            display: 'table-header-group !important',
        },
    },
    tableHeadMobile: {
        // boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '8px',
        height: 51,
        '& .MuiTableCell-stickyHeader': {
            background: 'transparent',
        },
        '& .MuiTableCell-sizeSmall': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '19px',
            color: Colors.ThemeGreen,
            padding: '6px 16px',
            border: 'none',
            '@media (min-width: 1920px)': {
                padding: '6px 16px',
            },
        },
        '@media (min-width: 320px)': {
            display: 'revert !important',
        },
        '@media (min-width: 767px)': {
            display: 'none !important',
        },
    },
    TableHeadNumber: {
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
        '& .TableHeadRole': {
            alignItems: 'center',
        },
    },
    tableRow: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: 8,
        boxShadow: '0px 0px 12px #49B7761A',
        '& > td:first-child': {
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
        },
        '& > td:last-child': {
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
        },
        // '& .MuiTableRow-root td:first-child': {
        //     borderTopLeftRadius: '8px',
        //     borderBottomLeftRadius: '8px',
        // },
        // '& .MuiTableRow-root td:last-child': {
        //     borderTopRightRadius: '8px',
        //     borderBottomRightRadius: '8px',
        // },
        '&:hover': {
            // background: '#afadad',
        },
        height: '50px',
        '& .makeStyles-membersTableWrapper-26 .MuiTableContainer-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
        },

        '& .MuiTableCell-sizeSmall:last-child': {
            paddingTop: '11px',
            fontSize: '16px',
            lineHeight: '30px',
            color: Colors.ThemeBlack,
        },

        '& .MuiTableCell-sizeSmall': {
            padding: '6px 16px',
            border: 'none',

            '@media (min-width: 1281px)': {
                padding: '6px 16px',
                border: 'none',
            },
        },

        '& MuiSwitch-track': {
            borderRadius: '12px',
            background: 'lightgray',
        },

        '& .MuiSwitch-colorPrimary.Mui-checked': {
            color: 'white',
        },

        '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
            background: '#387DFF',
            borderRadius: '12px',
            opacity: '1',
        },
    },

    TableRowIndex: {
        cursor: 'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
    },

    EditTableRowIndex: {
        cursor: 'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
        color: '#387DFF',
        fontSize: '16px',
    },
    actionsButtons: {
        display: 'flex',
        '& button': {
            border: 'none',
            background: 'none',
            padding: 0,
            marginRight: '24px',
            cursor: 'pointer',
        },
    },

    approve: {
        background: '#387DFF 0% 0% no-repeat padding-box',
    },

    reject: {
        background: '#F07379 0% 0% no-repeat padding-box',
        marginLeft: '24px',
    },

    mobile: {
        '@media (min-width: 320px)': {
            display: 'contents !important',
        },
        '@media (min-width: 767px)': {
            display: 'none !important',
        },
    },
    desktop: {
        '@media (min-width: 320px)': {
            display: 'none !important',
        },
        '@media (min-width: 767px)': {
            display: 'table-row-group !important',
        },
    },
}));
