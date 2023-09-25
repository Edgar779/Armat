import { Dialog, IconButton, DialogActions, DialogContent, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useStyles } from './styles';

export const Modal = ({ open, size, styles, hasCloseButton, handleClose, children }) => {
    const classes = useStyles;
    return (
        <Dialog fullWidth={true} maxWidth={size} open={open} onClose={handleClose} className={styles.dialog}>
            <IconButton aria-label="close" className={classes.close} onClick={handleClose}>
                <Close />
            </IconButton>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                {!hasCloseButton ? (
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                ) : null}
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
