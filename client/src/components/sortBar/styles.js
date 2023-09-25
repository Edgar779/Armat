import { makeStyles } from '@material-ui/core';
import { Colors } from '../../utils';

export const sortBarStyles = makeStyles((theme) => ({
    sortByStyle: {
        margin: '6px',
        '&:hover': {
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '6px',
            margin: '6px',
        },
    },

    sortBarWrapper: {
        '& .MuiSelect-root': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            color: Colors.ThemeGreen,
            paddingLeft: '20px',
            '& svg': {
                display: 'none',
            },
        },
        '@media (min-width: 320px)': {
            // marginTop: '30px',
        },
        '@media (min-width: 768px)': {
            // marginTop: '30px',
        },
        '@media (min-width: 1240px)': {
            marginLeft: '16px',
            marginTop: 0,
        },
    },
    selectCont: {
        '@media (min-width: 320px)': {
            width: ' 110px',
        },
        '@media (min-width: 768px)': {
            width: ' 183px',
        },
        '@media (min-width: 1240px)': {
            width: ' 183px',
        },
    },
    selectField: {
        width: '100%',
        '& .MuiFormControl-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '&:after': {
                margin: 0,
            },
        },

        '& .MuiFormLabel-root': {
            fontSize: '16px',
            lineHeight: '22px',
            color: Colors.ThemeGreen,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 0px 6px #0000001A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        '& .MuiInputBase-root': {
            marginTop: 0,
            width: '100%',
            borderBottom: 'none',
        },
        '& .MuiInput-underline': {
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: 'none',
                marginTop: 0,
            },
            '&:hover:before': {
                borderBottom: 'none',
            },
        },

        '& .MuiInputLabel-root': {
            marginTop: '-11px',
            marginLeft: '10px',
        },

        '& .MuiInputLabel-root.Mui-focused': {
            display: 'none',
        },
        '& .MuiSelect-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiSvgIcon-root': {
            color: Colors.ThemeGreen,
        },
    },
    radio: {
        color: Colors.ThemeGreen,
        marginRight: '6px',
        padding: 0,
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: `${Colors.ThemeGreen}!important`,
        },
        '& .Mui-checked':{
            color: Colors.ThemeGreen,
        }
    },
}));
