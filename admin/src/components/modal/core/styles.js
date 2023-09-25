import {makeStyles} from '@material-ui/core/styles';
import {Colors} from "theme";

export const modalStyle = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    width: '486px',
    height: '291px',
    background: '#F5FAFE 0% 0% no-repeat padding-box',
    borderRadius: '10px',
    outline: 'none',
  },

  modalBody: {
    padding: '0 40px 40px 40px',

    '& h2': {
      textAlign: 'center',
      fontSize: '30px',
      lineHeight: '41px',
      fontWeight: 'bold',
      color: '#387DFF',
    },

    '& p': {
      marginTop: '16px',
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 'normal',
      color: '#252E48',

      '& .modalText': {
        marginLeft: '5px',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 'normal',
        color: '#252E48',
      },

      '& .user': {
        marginLeft: '5px',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 'normal',
        color: '#387DFF',
      },
    },
  },

  modalButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
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

  PopoverStyle: {
    cursor: 'pointer',
    margin: '15px 0 0 60px',

    '& .MuiPopover-paper': {
      width: '237px',
      height: '168px',
      overflow: 'hidden',
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      boxShadow: '0px 8px 12px #0052E01A',
      borderRadius: '6px',
      padding: '10px 0',
    },
  },

  PopoverStatusStyle: {
    cursor: 'pointer',
    margin: '15px 0 0 50px',
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

  PopoverListWrapper: {
    cursor: 'pointer',
    height: '40px',
    width: '225px',
    margin: '0 6px 0 6px',

    '&:hover': {
      background: '#EAF2FF 0% 0% no-repeat padding-box',
      borderRadius: '6px',
    },
  },

  PopoverStatusListWrapper: {
    cursor: 'pointer',
    height: '40px',
    width: '225px',
    margin: '0 6px 0 6px',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      background: '#EAF2FF 0% 0% no-repeat padding-box',
      borderRadius: '6px',
    },

    '& div': {
      display: 'flex',
      alignItems: 'center',
    },

    '& span': {
      fontSize: '16px',
      lineHeight: '17px',
      color: '#545F7E',
      marginLeft: '7px',

      '& span': {
        color: '#545F7E80',
        fontSize: '12px',
      },
    },

    '& .MuiSvgIcon-root': {
      fontSize: '26px',
      marginLeft: '17px',
    },
  },

  FilterType: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    color: '#387DFF',
    margin: '0 24px 10px 24px',
  },

  inviteModalPaper: {
    width: '480px',
    height: 'auto',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '10px',
    outline: 'none',
  },

  inviteModalBody: {
    padding: '0 40px 40px 40px',

    '& h2': {
      fontSize: '30px',
      lineHeight: '41px',
      fontWeight: 'bold',
      color: '#387DFF',
    },

    '& p': {
      marginTop: '16px',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 'normal',
      color: '#252E48',
    },
  },

  SearchInputBox: {
    '& .MuiInputBase-fullWidth': {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.5px solid #387DFF',
      borderRadius: '24px',
      width: '100%',
    },

    '& input': {
      border: 'none',
      marginLeft: '24px',
      width: '90%',
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

  modalButtonsLoader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  PopoverUserInfo: {
    padding: '0 0 24px 24px',
    width: '546px',
    margin: '0 auto',
    outline: 'none',
    border: 'none',
    height: 'auto',
    background: '#252E48 0% 0% no-repeat padding-box',
    borderRadius: '8px',
    zIndex: 1,
  },





  availableScheduleWrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: '40px 0',
    borderRadius: 8,
    position: 'relative'
  },
  availableScheduleTitle: {
    fontSize: 32,
    color: '#4B5C68',
    fontWeight: 'bold',
    lineHeight: '48px',
    marginBottom: 20
  },
  closeBtn: {
    position: 'absolute',
    right: 3,
    top: 11
  },
  timeRow: {
    padding: '16px 24px',
    borderRadius: 8,
    boxShadow: '0px 0px 6px #347AF033',
    display: 'flex',
    marginRight:'16px',
    '&:not(:last-child)':{
      marginBottom: 16,
    }
  },
  scrollable: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxHeight: 550,
    padding: '10px',
    overflow: 'hidden',
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '@media (min-width: 320px)': {
      gridTemplateColumns: '1fr',
    },
    '@media (min-width: 1240px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  dayName: {
    fontSize: 16,
    color:'#347AF0',
    lineHeight: '20px',
    textTransform: 'uppercase',
    marginRight: 16,
    fontWeight: 'bold',
    maxWidth: 40,
    width: '100%'
  },
  addTime: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& img': {},
    '& span': {
      fontSize: '16px',
      color: '#545F7E',
      lineHeight: '19px',
      marginLeft: '10px',
    },
  },
  times: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  moreHoursBtn: {
    fontSize: 14,
    color: '#347AF0',
    lineHeight: '20px',
    cursor: 'pointer',
    marginTop: 8,
    display: 'inline-block',
  },
  timeInputStyle: {
    border: `1px solid #347AF0`,
    borderRadius: 8,
    padding: '1px 5px',
    '& .MuiInputBase-root::before': {
      content: 'revert!important',
    },
    '& .MuiInputBase-root::after': {
      content: 'revert!important',
    },
    '& .Mui-disabled': {
      color: '#4B5C6880',
    },
  },
  smallLine: {
    margin: '0 5px',
    color: '#347AF0',
  },
  customCheckbox: {
    color:  '#347AF0',
    padding: 0,
    '&.Mui-checked':{
      backgroundColor: 'white',
      color:  '#347AF0',
    },
    '& .MuiSvgIcon-root': {
      width: 24,
      height: 24
    }
  },
  notAvailableText: {
    fontSize: 14,
    color: '#4B5C68',
    lineHeight: '20px',
    textTransform: 'capitalize',
    paddingLeft: 6
  },
  infoModalWrapper :{
    width: '645px',
    padding: '32px',
    borderRadius: '8px',
    backgroundColor: 'white',
    position: 'relative',
  },

  removeTimeBtn: {
    color: '#FE7070',
    fontSize: 14,
    cursor: 'pointer',
    margin: '0 8px',
  },

  closeCheckbox:{
    marginLeft:'100px',
    display:'flex',
    alignItems:'center',
  },

}));
