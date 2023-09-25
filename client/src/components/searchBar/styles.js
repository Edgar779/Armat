import { makeStyles } from '@material-ui/core';

export const searchBarStyles = makeStyles(() => ({
    searchCont: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
    },
    searchContButtonsAndSelect: {
        width: '35%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
    },
    searchBarCont: {
        marginRight: '80px',
        width: '65%',
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiFilledInput-input': {
            padding: '10px 12px 12px 10px',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiInputLabel-filled': {
            color: '#545F7E80',
            marginTop: '-7px',
        },
        '& .MuiFilledInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
            borderRadius: '20px',
        },
        '& .MuiInput-underline': {
            '&:hover:before': {
                borderBottom: 'none',
            },
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: 'none',
            },
            '&:hover': {
                borderBottom: 'none',
            },
        },
        '& .MuiInput-formControl': {
            margin: 0,
        },
        '& .MuiFilledInput-underline': {
            '&:before': {
                borderBottom: 0,
            },
            '&:after': {
                borderBottom: 0,
            },
        },
    },
    gridViewButton: {
        width: '40px',
        height: '40px',
        background: '#387DFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 16px #387DFF80',
        borderRadius: '6px',
        marginRight: '16px',
        padding: '10px',
    },
    listViewButton: {
        width: '40px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 8px 12px #0052E01A',
        marginRight: '40px',
        borderRadius: '6px',
        padding: '10px',
    },

    selectCont: {
        width: ' 183px',
    },
    selectField: {
        width: '100%',
        '& .MuiFormControl-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
            borderRadius: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '5%',
            paddingRight: '5%',
            '&:after': {
                margin: 0,
            },
        },
        '& .MuiInput-root': {
            height: '40px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 8px 12px #0052E01A',
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

        '& .MuiFormLabel-root': {
            color: '#545F7E80',
            fontSize: '14px',
        },
        '& .MuiInputLabel-root': {
            marginTop: '-8px',
            marginLeft: '10px',
        },

        '& .MuiInputLabel-root.Mui-focused': {
            display: 'none',
        },
        '& .MuiSelect-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiSvgIcon-root': {
            color: '#387DFF',
        },
    },

    SearchInputBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '20px',
        height: '40px',

        '@media (min-width: 320px)': {
            width: '100%',
        },
        '@media (min-width: 768px)': {
            width: '100%',
        },
        '@media (min-width: 1240px)': {
            width: '559px',
        },

        '& input': {
            border: 'none',
            marginLeft: '24px',
            width: '100%',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7E',
        },

        '& input::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7E80',
        },

        '& input:focus': {
            outline: 'none',
        },

        '& .MuiButton-root': {
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '20px',
            width: '60px',
            height: '32px',
            margin: '4px',
            color: '#387DFF',
        },
    },
}));
