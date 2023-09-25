import { makeStyles } from '@material-ui/core/styles';
import {Colors} from "theme";

export const inputsStyle = makeStyles(() => ({
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
        border: '1px solid #387DFF',
        borderRadius: '28px',
        padding: '24px',
        cursor:'pointer',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },
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
    SearchAddressDisable: {
        fontSize: '16px',
        lineHeight: '22px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #387DFF',
        borderRadius: '28px',
        padding: '24px',
        cursor:'no-drop',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },
    },

    searchAddressDescriptionWrapper: {
        position: 'absolute',
        // border: 'solid 1px red',
        // height: '256px',
        // width: 'auto',
        // overflow: 'auto',
    },

    searchAddressDescription: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 12px #0052E01A',
        borderRadius: '6px',
        position: 'absolute',
        zIndex: '9999',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        top: '300px',
    },

    searchAddressDescriptionText: {
        paddingTop: '5px',
        marginLeft: '5px',
        fontSize: '16px',
        lineHeight: '30px',
        color: '#545F7E',
        '& :hover': {
            background: '#387DFF1A 0% 0% no-repeat padding-box',
            borderRadius: '6px',
        },
    },


    SearchInputBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '500px',
        height: '40px',
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
            background: Colors.blue,
            borderRadius: '20px',
            color: 'white',
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
            border: '0.5px solid #387DFF',
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
        height: '58px',
        '& .MuiInputLabel-outlined': {
            marginTop: '-2px',
            marginLeft: '13px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
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
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #387DFF',
            borderRadius: '28px',
            height:'auto',
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
            color: '#545F7E',
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: '#387DFF',
        },

        '& .MuiChip-root': {
            color: '#387DFF',
            background: '#387DFF1A 0% 0% no-repeat padding-box',
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
            lineHeight: '22px',
            color: '#545F7E',
            opacity: 1,
        },
    },

    miniSelectInputStyle: {
        height: '58px',
        '& .MuiInputLabel-outlined': {
            marginTop: '-7px',
            marginLeft: '4px',
            padding: '0 8px',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
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
            height: '48px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '0.5px solid #387DFF',
            borderRadius: '28px',
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
            color: '#545F7E',
        },

        '& .MuiSvgIcon-root': {
            marginRight: '19px',
            color: '#387DFF',
        },

        '& .MuiChip-root': {
            color: '#387DFF',
            background: '#387DFF1A 0% 0% no-repeat padding-box',
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
            color: '#387DFF',
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
                fontWeight: '600',
                lineHeight: '30px',
                color: '#545F7E80',
            },
        },

        '& span': {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            color: '#387DFF',
            cursor: 'pointer',
        },
    },

    formControl: {
        minWidth: '100%',
    },

    InputStyle: {
        height: '48px',
        width: '100%',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #387DFF',
        borderRadius: '24px',
        outline: 'none',
        padding: '0 24px 0 24px',
        marginBottom: '30px',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#545F7E',
        '&::placeholder': {
            fontSize: '16px',
            lineHeight: '22px',
            color: '#545F7EB3',
        },
    },

    DateInput: {
        height: '58px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '0.5px solid #387DFF',
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
            color: '#387DFF',
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
        color: '#545F7E',
        width: 'auto',

        '&::placeholder': {
            color: '#545F7E',
            fontSize: '16px',
        },
    },

    createEventInput: {
        borderRadius: '32px',
        background: 'transparent',
        color: '#545F7E',
        height: '58px',
        width: '100%',
        padding: '0 24px',
        fontSize: '16px',
        marginBottom: '16px',
        border: '0.5px solid #387DFF',
    },

    inputTextField:{
        width:'100%',
        '& .MuiOutlinedInput-notchedOutline':{
            borderColor: '#347AF0',
        },
        '& .MuiOutlinedInput-root':{
            height:'48px',
            color: '#51566D',
        },
        '& .MuiInputLabel-outlined':{
            marginTop:'-3px',
            color :'#51566D',
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -2px) scale(0.75)'
        },
        '&:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#347AF0',
        },
        '& .MuiInputBase-input::placeholder':{
            fontSize: 14,
            color: '#4B5C6880'
        }
    },
    inputTextFieldSmall:{
        width:'100%',
        '& .MuiOutlinedInput-notchedOutline':{
            borderColor:'#347AF0',
        },
        '& .MuiOutlinedInput-root':{
            height:'36px',
            color: '#51566D',
        },
        '& .MuiInputLabel-outlined':{
            marginTop:'-3px',
            color :'#51566D',
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -2px) scale(0.75)'
        },
        '&:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#347AF0',
        },
        '& .MuiInputBase-input::placeholder':{
            fontSize: 14,
            color: '#4B5C6880',
        }
    },
    placeholder: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: 24,
        marginTop: 21,
        color: '#545F7E',
        fontSize: 16,
    },

}));
