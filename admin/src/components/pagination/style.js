import { makeStyles } from '@material-ui/core/styles';

export const paginationStyle = makeStyles ((theme) => ({
  PaginationWrapper: {
    width: '100%',
    margin: '22px 16px 22px -16px',
    display: 'flex',
    justifyContent: 'flex-end',

    '& .MuiPaginationItem-textPrimary.Mui-selected': {
      background: '#387DFF 0 0 no-repeat padding-box',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '19px',
    },

    '& .MuiPaginationItem-page': {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.5px solid #DDE3F0',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '19px',
    },

    '& .MuiPaginationItem-outlined': {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '1px solid #DDE3F0',
      borderRadius: '4px',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: '#545F7E',
    },

    '& .MuiPaginationItem-page.Mui-selected:hover': {
      background: '#387DFF 0% 0% no-repeat padding-box',
      color: 'white',
    },
  },
}));
