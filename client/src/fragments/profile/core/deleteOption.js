import { MaxWidthModal } from 'components';
import DeleteAccount from './deleteAccount';

export const DeleteOption = ({ open, setOpen, info }) => {
    return open ? (
        <MaxWidthModal modal={open} styles={{ maxWidth: '486px', width: '100%' }} handleClose={() => setOpen(!open)} closeButton={false}>
            <DeleteAccount info={info} handleClose={() => setOpen(!open)} />
        </MaxWidthModal>
    ) : null;
};
