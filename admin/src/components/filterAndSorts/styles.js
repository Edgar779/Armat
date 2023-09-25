import { makeStyles } from '@material-ui/core/styles';

export const FilterAndSort = makeStyles(() => ({
    AZFilter: {
        width: '17px',
        height: '17px',
        marginLeft: '9px',
        position: 'absolute',
        marginTop: '6px',
        cursor: 'pointer',
    },

    ArrowDownwardStyle: {
        color: '#387DFF',
        fontSize: '18px',
        marginLeft: '9px',
        cursor: 'pointer',
        position: 'absolute',
        marginTop: '6px',
    },

    SimplePopoverButton: {
        background: 'none',
        border: 'none',
        outline: 'none',

        '& .MuiSvgIcon-root': {
            color: '#387DFF',
            marginTop: '-18px',
            marginLeft: '3px',
            position: 'absolute',
            cursor: 'pointer',
        },
    },

    PopoverStatusStyle: {
        cursor: 'pointer',
        margin: '15px 0 0 10px',

        '& .MuiPopover-paper': {
            width: '237px',
            height: 'auto',
            overflow: 'hidden',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
            borderRadius: '6px',
            padding: '10px 0',
        },
    },

    PopoverStatusStyleLeft: {
        cursor: 'pointer',
        margin: '15px 0 0 70px',

        '& .MuiPopover-paper': {
            width: '237px',
            height: 'auto',
            overflow: 'hidden',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
            borderRadius: '6px',
            padding: '10px 0',
        },
    },

    smallPopoverStatusStyle: {
        cursor: 'pointer',
        margin: '15px 0 0 -50px',

        '& .MuiPopover-paper': {
            width: '159px',
            height: 'auto',
            overflow: 'hidden',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
            borderRadius: '6px',
            padding: '6px 0',
        },
    },

    FilterType: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 'bold',
        color: '#387DFF',
        margin: '0 24px 10px 24px',
    },
}));
