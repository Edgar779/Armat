import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { GetBreakpoint } from '../../utils/hooks';
import { SignInUpModalsContext } from "../../context/signInUpModalsContext";


import { CloseButton } from 'components'

const useStyles = makeStyles ((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing (2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing (1),
  },
  Close: {
    width: '30px',
    height: '30px',
    position: 'absolute',
    right: '14px',
    top: '14px',
    backgroundColor: '#387DFF1A',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#387DFF33',
    },
  },
}));

export const MaxWidthModal = ({
                                children,
                                styles,
                                responsive,
                                unusedBreakpoint,
                                modal,
                                dispatchType,
                                fullWidth = false,
                                closeButton = true,
                                handleClose,
                              }) => {
  const { dispatch } = useContext (SignInUpModalsContext);
  const classes = useStyles ();
  const maxWidth = GetBreakpoint (unusedBreakpoint);

  return (
    <Dialog
      fullWidth={ fullWidth }
      maxWidth={ responsive ? maxWidth : null }
      open={ modal }
      onClose={ dispatchType ? () => dispatch ({ type: dispatchType }) : handleClose }
      className={ styles.dialog }
    >


      <CloseButton
        handleClick={ dispatchType ? () => dispatch ({ type: dispatchType }) : handleClose }
      />


      <DialogContent>{ children }</DialogContent>
      <DialogActions>
        { closeButton ? (
          <Button
            onClick={ dispatchType ? () => dispatch ({ type: dispatchType }) : handleClose }

            color="primary">
            Close
          </Button>
        ) : null }
      </DialogActions>
    </Dialog>
  );
};

export default MaxWidthModal;
