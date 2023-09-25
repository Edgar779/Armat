import { useContext } from 'react';
import { ModalContext } from './context';

export const useModal = () => {
    /**
     * Use Modal.
     */

    const { activeModal, setActiveModal, params, setParams } = useContext(ModalContext);

    return {
        openModal: (modalName, params = {}) => {
            setActiveModal((_snapshot) => modalName);
            setParams(params);
        },
        params,
        activeModal: activeModal || null,
        closeModal: () => {
            setActiveModal('');
            setParams({});
        },
    };
};
