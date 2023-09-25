import { Button } from '@mui/material';
import { SubmitButton } from './submitButton';
import { useModal } from "../../utils";

export const CreateCancel = ({ actionType, title, maxWidth, handleSubmit, flex, handleClose }) => {
    const { close } = useModal();

    const handleCloseBtn = () => {
      close()
      if(handleClose && handleClose()){
        handleClose()
      }
    }
    return (
        <div className={flex ? "create-cancel-flex-wrapper" : "create-cancel-wrapper"} style={maxWidth ? { maxWidth: maxWidth } : {}}>
            <Button className="cancel-button" color="info" onClick={handleCloseBtn}>
                <span className="button-text">Cancel</span>
            </Button>
            <SubmitButton title={title} type="submit" actionType={actionType} handleSubmit={handleSubmit} />
        </div>
    );
};
