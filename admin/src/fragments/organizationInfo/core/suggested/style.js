import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'theme';

export const suggestedStyle = makeStyles((theme) => ({
    tableHead: {
        background: '#387DFF1A 0% 0% no-repeat padding-box',
        borderRadius: '8px 0px 0px 0px',
        height: '50px',
        '& .MuiTableCell-sizeSmall': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
            padding: '6px 10px 6px 0',
        },
        '& .MuiTableCell-sizeSmall:first-child': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
            padding: '6px 46px 6px 31px',

            '@media (min-width: 1281px)': {
                padding: '6px 20px 6px 47px',
            },
        },
        '& .MuiTableCell-root': {
            fontSize: '16px',
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
        '&:hover': {
            background: '#EAF2FF 0% 0% no-repeat padding-box',
        },
        height: '50px',
        '& .makeStyles-membersTableWrapper-26 .MuiTableContainer-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
        },
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 10px 6px 0',
        },

        '& .MuiTableCell-sizeSmall:last-child': {
            paddingTop: '11px',
            fontSize: '16px',
            lineHeight: '30px',
            color: '#545F7E',
        },

        '& .MuiTableCell-sizeSmall:first-child': {
            padding: '6px 20px 6px 28px',

            '@media (min-width: 1281px)': {
                padding: '6px 20px 6px 47px',
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
        cursor:'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
    },

    EditTableRowIndex: {
        cursor:'pointer',
        '& .MuiTableCell-sizeSmall': {
            padding: '6px 24px 6px 42px',
        },
        color:'#387DFF',
        fontSize:'16px',
    },
    actionsButtons:{
        display:'flex',
        '& button':{
            border:'none',
            background:'none',
            padding: 0,
            marginRight:'24px',
        },
    },

    approve:{
        background: '#387DFF 0% 0% no-repeat padding-box',
    },

    reject:{
        background: '#F07379 0% 0% no-repeat padding-box',
        marginLeft:'24px',
    },





}));
