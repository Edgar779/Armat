import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { GetBreakpoint } from '../../utils/hooks';
import { SignInUpModalsContext } from '../../contexts/signInUpModalsContext';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
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
    const { dispatch } = useContext(SignInUpModalsContext);
    const classes = useStyles();
    const maxWidth = GetBreakpoint(unusedBreakpoint);

    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={responsive ? maxWidth : null}
            open={modal}
            onClose={dispatchType ? () => dispatch({ type: dispatchType }) : handleClose}
            className={styles.dialog}>
            <IconButton
                aria-label="close"
                className={classes.Close}
                onClick={dispatchType ? () => dispatch({ type: dispatchType }) : handleClose}>
                <Close />
            </IconButton>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                {closeButton ? (
                    <Button onClick={dispatchType ? () => dispatch({ type: dispatchType }) : handleClose} color="primary">
                        Close
                    </Button>
                ) : null}
            </DialogActions>
        </Dialog>
    );
};

export default MaxWidthModal;
