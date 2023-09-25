import { createContext, useState } from 'react';
import { AuthModal, InviteMemberModal } from 'fragments';

let initState = {
    auth: false,
    inviteMember: false,
};
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    let [modal, setModal] = useState(initState);
    let close = {
        auth: () => setModal((current) => ({ ...current, auth: false })),
        inviteMember: () => setModal((current) => ({ ...current, inviteMember: false })),
    };
    let open = {
        auth: () => setModal((current) => ({ ...current, auth: true })),
        inviteMember: () => setModal((current) => ({ ...current, inviteMember: true })),
    };
    return (
        <ModalContext.Provider value={{ openModal: open, closeModal: close }}>
            <AuthModal status={modal.auth} close={close.auth} />
            <InviteMemberModal status={modal.inviteMember} close={close.inviteMember} />
            {children}
        </ModalContext.Provider>
    );
};
