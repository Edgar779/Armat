import { Switch } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Colors } from "../../utils";
// import { withStyles } from '@material-ui/core/styles';

// export const AntSwitch = withStyles((theme) => ({
//   root: {
//     width: 32,
//     height: 16,
//     padding: 0,
//     display: 'flex',
//     marginTop: 6,
//     marginLeft: '8px',
//   },
//   switchBase: {
//     paddingTop: '2.2px',
//     padding: 3,
//     color: theme.palette.common.white,
//     '&$checked': {
//       transform: 'translateX(14px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: '#0e9594',
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   },
//   thumb: {
//     width: 12,
//     height: 12,
//     marginTop: 0,
//     boxShadow: 'none',
//     background: 'white',
//   },
//   track: {
//     border: 'none',
//     borderRadius: 24 / 2,
//     opacity: 1,
//     backgroundColor: theme.palette.grey[400],
//   },
//   checked: {},
// }))(Switch);

export const inputsStyle = makeStyles(() => ({
  inputTextField: {
    width: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      height: "48px",
    },
    "& .MuiInputLabel-outlined": {
      marginTop: "-3px",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -2px) scale(0.75)",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      background: "none",
    },
  },

  SignInValidInput: {
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

  SignInInput: {
    width: "100%",
    "& .MuiFormLabel-root": {
      fontSize: "16px",
      color: "black",
    },

    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red",
    },
  },

  inputValidTextField: {
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor:'black'
    },
    '& .MuiOutlinedInput-root': {
      height: '48px',
      color:'#222222CC',
    },
    '& .MuiInputLabel-outlined': {
      marginTop: '-3px',
      color: '#222222CC',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: 14,
      color: '#4B5C6880',
    },
  },
  inputTextFieldSmall: {
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      height: '36px',
      color: '#222222CC',
    },
    '& .MuiInputLabel-outlined': {
      marginTop: '-3px',
      color:'#222222CC',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor:'black',
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: 14,
      color: '#4B5C6880',
    },
  },
  selectInputStyle: {
    '& .MuiInputLabel-outlined': {
      padding: '0 8px',
      marginLeft: '6px',
      marginTop: '-2px',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
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
      border: '1px solid #9D9D9D',
      borderRadius: '8px',
      minHeight: '48px',
      height: '48px',
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
      color: '#222222',
    },

    '& .MuiSvgIcon-root': {
      marginRight: '19px',
      color: '#222222',
    },

    '& .MuiChip-root': {
      color: '#222222',
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
      color: '#9D9D9D',
      opacity: 1,
    },

    '& .MuiAutocomplete-tag': {
      // display: 'none',
    },
  },

}));
