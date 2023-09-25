import { makeStyles } from '@material-ui/core/styles';
import { Colors } from 'utils';

export const inputsStyle = makeStyles(() => ({
    SearchInputBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '500px',
        height: '61px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #387DFF80',
        borderRadius: '20px',

        '@media (min-width: 1281px)': {
            width: '616px',
        },

        '& input': {
            border: 'none',
            marginLeft: '24px',
            width: '100%',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7E80',
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
            width: '60px',
            height: '32px',
            marginRight: '4px',
            background: Colors.ThemeBlack,
            borderRadius: '20px',
            color: 'white',
        },
    },

    placeholder: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: 24,
        marginTop: 18,
        color: '#545F7E',
        fontSize: 16,
    },

    SearchAddressDisable: {
        fontSize: '16px',
        lineHeight: '22px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '61px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #387DFF',
        borderRadius: '28px',
        padding: '24px',
        cursor: 'no-drop',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },
    },

    searchAddressDescriptionWrapper: {
        position: 'absolute',
    },

    searchAddressDescription: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        position: 'absolute',
        zIndex: '9999',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 320px)': {
            width: '350px',
        },
        '@media (min-width: 768px)': {
            width: '500px',
        },
    },

    searchAddressDescriptionSearch: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        borderRadius: '6px',
        marginLeft: '-75px',
        position: 'absolute',
        zIndex: '9999',
        width: '356px',
        display: 'flex',
        flexDirection: 'column',

        textAlign: 'flex-start',

        top: '49px',
        height: 'auto',
        maxHeight: '250px',
        overflow: 'auto',
        paddingRight: '20px',

        '@media (min-width: 320px)': {
            width: '99%',
            maxWidth: '375px',
            top: '92px',
            marginLeft: '-50px',
        },
        '@media (min-width: 1279px)': {
            width: '430px',
            top: '49px',
            marginLeft: '-75px',
        },
    },

    searchAddressDescriptionText: {
        paddingTop: '5px',
        paddingBottom: '5px',
        marginLeft: '10px',
        fontSize: '16px',
        lineHeight: '30px',
        color: Colors.ThemeBlack,
        '& :hover': {
            background: '#F4F4F4',
            borderRadius: '6px',
        },
    },

    searchAddressDescriptionTextSearch: {
        paddingTop: '5px',
        // marginLeft: '56px',
        fontSize: '16px',
        lineHeight: '35px',
        color: '#545F7E',

        '& :hover': {
            background: '#F4F4F4',
            borderRadius: '6px',
        },
    },

    SearchAddress: {
        fontSize: '16px',
        lineHeight: '22px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #BEBEBE',
        borderRadius: '32px',
        padding: '24px',
        color: '#222222CC',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#22222299',
        },
    },

    SearchAddressSearching: {
        // fontSize: '16px',
        // lineHeight: '22px',
        outline: 'none',
        width: '100%',
        height: '36px',
        background: 'transparent',
        border: 'none',

        // color: '#545F7E',
        // '&::placeholder': {
        //     fontSize: '16px',
        //     lineHeight: '22px',
        //     color: '#545F7EB3',
        // },
    },

    ErrorSearchAddress: {
        fontSize: '16px',
        lineHeight: '22px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #F07379',
        borderRadius: '32px',
        padding: '24px',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7E',
        },
    },

    SignInInput: {
        '& .MuiFormControl-root': {
            width: '395px',
            marginTop: '20px',
        },

        '& .MuiFormLabel-root.Mui-error': {
            color: '#F07379',
            fontWeight: 'bold',
        },

        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            border: '2px solid red',
        },
    },

    emailInput: {
        margin: '40px 0 16px 0',

        '& input': {
            height: '48px',
            border: '0.5px solid #BEBEBE',
            borderRadius: '24px',
            width: '100%',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
            padding: '13px 0 13px 24px',
        },

        '& input::placeholder': {
            color: '#545F7EB3',
            fontSize: '16px',
            lineHeight: '22px',
        },
    },

    errorEmailInput: {
        margin: '40px 0 16px 0',

        '& input': {
            height: '48px',
            border: '0.5px solid red',
            borderRadius: '24px',
            width: '100%',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#F07379',
            padding: '13px 0 13px 24px',
        },

        '&::placeholder': {
            color: '#545F7EB3',
        },
    },

    selectInputStyle: {
        '& .MuiInputLabel-outlined': {
            padding: '0 8px',
            marginLeft: '6px',
            marginTop: '-2px',
            fontSize: '16px',
            lineHeight: '22px',
            color: Colors.ThemeLightGray,
        },

        '& .MuiMenuItem-root': {
            color: '#222222CC',
            fontSize: '16px',
        },

        '& .MuiSelect-select:focus': {
            background: 'none',
        },

        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            background: 'white',
        },

        '& .MuiFormControl-root': {
            width: '100%',
        },

        '& .MuiOutlinedInput-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #BEBEBE',
            borderRadius: '32px',
            minHeight: '58px',
            // height: '48px',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },

        '&:before': {
            borderBottom: 'none',
        },

        '&:hover': {
            borderBottom: 'none',
        },

        '&:after': {
            borderBottom: 'none',
        },

        '& .makeStyles-selectInputStyle-78:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& .MuiSelect-select.MuiSelect-select': {
            paddingLeft: '24px',
            fontSize: '16px',
            lineHeight: '20px',
            color: Colors.ThemeLightGray,
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: Colors.ThemeGreen,
        },

        '& .MuiChip-root': {
            color: Colors.ThemeBlack,
            background: '#F4F4F4',
            borderRadius: '12px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '30px',
            marginLeft: '10px',
        },

        '& .MuiChip-deleteIcon': {
            height: '12px',
            width: '12px',
        },

        '& .MuiInputBase-input::-webkit-input-placeholder': {
            paddingLeft: '10px',
            fontSize: '16px',
            lineHeight: '20px',
            color: Colors.ThemeLightGray,
            opacity: 1,
        },

        '& .MuiAutocomplete-tag': {
            // display: 'none',
        },
    },

    selectInputStyleError: {
        '& .MuiInputLabel-outlined': {
            padding: '0 8px',
            marginLeft: '6px',
            marginTop: '-2px',
            fontSize: '16px',
            lineHeight: '22px',
            color: Colors.ThemeLightGray,
        },

        '& .MuiSelect-select:focus': {
            background: 'none',
        },

        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            background: 'white',
        },

        '& .MuiFormControl-root': {
            width: '100%',
        },

        '& .MuiOutlinedInput-root': {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #F07379',
            borderRadius: '32px',
            minHeight: '58px',
            height: 'auto',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },

        '&:before': {
            borderBottom: 'none',
        },

        '&:hover': {
            borderBottom: 'none',
        },

        '&:after': {
            borderBottom: 'none',
        },

        '& .makeStyles-selectInputStyle-78:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& .MuiSelect-select.MuiSelect-select': {
            paddingLeft: '24px',
            fontSize: '16px',
            lineHeight: '20px',
            color: Colors.ThemeLightGray,
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: Colors.ThemeGreen,
        },

        '& .MuiChip-root': {
            color: Colors.ThemeGreen,
            background: '#F4F4F4',
            borderRadius: '12px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '30px',
            marginLeft: '10px',
        },

        '& .MuiChip-deleteIcon': {
            height: '12px',
            width: '12px',
        },

        '& .MuiInputBase-input::-webkit-input-placeholder': {
            paddingLeft: '10px',
            fontSize: '16px',
            lineHeight: '20px',
            color: Colors.ThemeLightGray,
            opacity: 1,
        },
    },

    miniSelectInputStyle: {
        height: '58px',
        '& .MuiInputLabel-outlined': {
            marginTop: '-7px',
            marginLeft: '18px',
            padding: '0 8px',
            lineHeight: '22px',
            color: Colors.ThemeLightGray,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '16px',
            },
        },

        '& .MuiSelect-select:focus': {
            background: 'none',
        },

        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            background: 'white',
            margin: '-3px auto',
        },

        '& .MuiFormControl-root': {
            width: '100%',
        },

        '& .MuiOutlinedInput-root': {
            height: '58px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #BEBEBE',
            borderRadius: '32px',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },

        '&:before': {
            borderBottom: 'none',
        },
        '&:hover': {
            borderBottom: 'none',
        },

        '&:after': {
            borderBottom: 'none',
        },

        '& .makeStyles-selectInputStyle-78:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& .MuiSelect-select.MuiSelect-select': {
            paddingLeft: '24px',
            lineHeight: '20px',
            color: Colors.ThemeLightGray,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '16px',
            },
            '@media (min-width: 1240px)': {
                fontSize: '16px',
            },
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: Colors.ThemeBlack,
        },

        '& .MuiChip-root': {
            color: Colors.ThemeBlack,
            background: '#F4F4F4',
            borderRadius: '12px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '30px',
        },

        '& .MuiChip-deleteIcon': {
            height: '12px',
            width: '12px',
        },
    },

    CreateInput: {
        width: '100%',
        height: '48px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '2px solid #387DFF',
        borderRadius: '8px',
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px 0 14px',

        '& input': {
            border: 'none',
            outline: 'none',
            padding: '10px',
            width: '100%',
            color: '#545F7E',
            fontSize: '16px',
            fontWeight: '600',

            '&::placeholder': {
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '30px',
                color: '#545F7E80',
            },
        },

        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.ThemeGreen,
            cursor: 'pointer',
        },
    },

    CreateTagInput: {
        width: '100%',
        height: '48px',
        borderBottom: '1px solid gray',
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px 0 14px',

        '& input': {
            border: '2px solid #387DFF',
            borderRadius: '24px',
            padding: '0 24px 0 24px',
            height: '33px',
            outline: 'none',
            width: '43%',
            color: '#545F7E',
            fontSize: '16px',
            fontWeight: '600',

            '&::placeholder': {
                fontSize: '16px',
                lineHeight: '22px',
                color: '#545F7E80',
            },
        },

        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: Colors.ThemeGreen,
            cursor: 'pointer',
        },
    },

    formControl: {
        minWidth: '100%',
    },

    InputStyle: {
        width: '100%',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #BEBEBE',
        borderRadius: '24px',
        outline: 'none',
        padding: '0 24px 0 24px',
        lineHeight: '22px',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },

        '@media (min-width: 320px)': {
            marginBottom: '16px',
            fontSize: '14px',
            '& input::placeholder': {
                fontSize: '14px',
            },
        },
        '@media (min-width: 768px)': {
            marginBottom: '30px',
            fontSize: '16px',
            '& input::placeholder': {
                fontSize: '15px',
            },
        },
        '@media (min-width: 1240px)': {
            marginBottom: '30px',
            fontSize: '16px',
            '& input::placeholder': {
                fontSize: '15px',
            },
        },
    },
    InputStyleError: {
        width: '100%',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #F07379',
        borderRadius: '24px',
        outline: 'none',
        padding: '0 24px 0 24px',
        lineHeight: '22px',
        color: '#545F7EB3',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },

        '@media (min-width: 320px)': {
            marginBottom: '16px',
            fontSize: '14px',
            '& input::placeholder': {
                fontSize: '14px',
            },
        },
        '@media (min-width: 768px)': {
            marginBottom: '30px',
            fontSize: '16px',
            '& input::placeholder': {
                fontSize: '15px',
            },
        },
        '@media (min-width: 1240px)': {
            marginBottom: '30px',
            fontSize: '16px',
            '& input::placeholder': {
                fontSize: '15px',
            },
        },
    },

    DateInput: {
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #BEBEBE',
        borderRadius: '32px',
        width: '100%',

        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& .MuiSvgIcon-root': {
            color: Colors.ThemeGreen,
            marginRight: '10px',
        },

        '& .MuiInputLabel-animated': {
            background: 'white',
            zIndex: '9',
            marginLeft: '23px',
            color: '#545F7EB3',
            marginRight: '10px',
            marginTop: '-2px',
        },

        '& .MuiInputBase-input': {
            marginRight: '20px',
            marginLeft: '24px',
            fontSize: '16px',
            marginTop: '14px',
            color: '#545F7EB3',
        },

        '& .MuiFormHelperText-root.Mui-error': {
            display: 'none',
        },

        '& .MuiFormLabel-root.Mui-error': {
            fontSize: '16px',
            color: '#545F7EB3',
            marginLeft: '26px',
        },
        '& .MuiInputLabel-shrink': {
            marginTop: '-7px',
            marginLeft: '18px',
            padding: '0 8px',
            color: '#545F7EB3',
        },
    },

    passwordInput: {
        borderBottom: 'none',
        '& ::placeholder': {
            fontSize: '50px',
            color: '#545F7E',
        },

        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        },

        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },
    },

    userEmailInput: {
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '22px',
        color: Colors.ThemeLightGray,
        width: 'auto',

        '@media (max-width: 768px)': {
            fontSize: '14px',
            lineHeight: '19px',
            width: '108px',
        },
        '&::placeholder': {
            color: Colors.ThemeLightGray,
            fontSize: '16px',
        },
    },

    createEventInput: {
        borderRadius: '32px',
        background: 'transparent',
        color: '#222222CC',
        height: '58px',
        width: '100%',
        padding: '0 24px',
        fontSize: '16px',
        marginBottom: '16px',
        border: '0.5px solid #BEBEBE',
    },
    createEventInputSmall: {
        borderRadius: '32px',
        background: 'transparent',
        color: '#22222299',
        height: '48px',
        width: '100%',
        padding: '0 24px',
        fontSize: '16px',
        marginBottom: '16px',
        border: '0.5px solid #BEBEBE',
        '& :placeholder': {
            color: '#22222299',
        },
    },

    inputTextField: {
        width: '100%',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.ThemeBlack,
        },
        '& .MuiOutlinedInput-root': {
            height: '48px',
            color: Colors.ThemeLightGray,
        },
        '& .MuiInputLabel-outlined': {
            marginTop: '-3px',
            color: Colors.ThemeLightGray,
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -2px) scale(0.75)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.ThemeBlack,
        },
        '& .MuiInputBase-input::placeholder': {
            fontSize: 14,
            color: '#4B5C6880',
        },
    },
    inputTextFieldSmall: {
        width: '100%',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.ThemeBlack,
        },
        '& .MuiOutlinedInput-root': {
            height: '36px',
            color: Colors.ThemeLightGray,
        },
        '& .MuiInputLabel-outlined': {
            marginTop: '-3px',
            color: Colors.ThemeLightGray,
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -2px) scale(0.75)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.ThemeBlack,
        },
        '& .MuiInputBase-input::placeholder': {
            fontSize: 14,
            color: '#4B5C6880',
        },
    },

    etCurrent: {
        color: Colors.ThemeGreen,
        margin: '10px 0',
        display: 'flex',
        fontSize: '16px',
        fontWeight: '600',
        border: 'none',
        marginLeft: '16px',
        background: 'transparent',
        cursor: 'pointer',
        '& p': {
            marginLeft: '10px',
        },
    },
}));
