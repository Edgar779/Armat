import { Button } from '@material-ui/core';

export const DeleteMyAccount = ({ handleClick }) => {
    return (
        <div style={{ marginTop: '40px' }}>
            <Button style={{ color: '#F07379', fontSize: '16px', lineHeight: '22px', fontWeight: '600' }} onClick={handleClick}>
                Delete my account
            </Button>
        </div>
    );
};
