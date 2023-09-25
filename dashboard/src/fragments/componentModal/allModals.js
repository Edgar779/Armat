import React, { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from 'components/modal/context';
import { DeleteModal, CreatEvent, } from './core';
import { Backdrop, Modal } from '@mui/material';
import { Svg } from 'assets/images';
import { InviteMember, EventResponse } from 'pages';
import { useModal } from "../../utils";

export const AllModals = () => {
    /**
     * Hooks.
     */

    const { activeModal, setActiveModal } = useContext(ModalContext);
    const [mounted, setMounted] = useState(false);
    const { closeModal, params } = useModal();

    const renderTitle = () => {
        switch (activeModal) {
            case 'INVITE_MEMBER':
                return 'Invite a member';
            case 'ADD_TRANSACTION':
                return 'Add Transaction';
            case 'CREATE_ORGANIZATION':
                return 'Create an Organization';
            case 'DUPLICATE_LIST':
                return 'Duplicate List';
            case 'CREATE_NEW_LIST':
                return 'Create a New List';
            case 'ADD_USER_TO_LIST':
                return 'Add Users to List';
            case 'CONFIRM_LIST_DELETION':
                return 'Confirm List Deletion';
            case 'EVENT_RESPONSE':
                return 'RSVP Response';
            case 'CREATE_EVENT':
                return '';
            case 'ADD_SELECTED':
                return 'Add  Selected Members to a List';
            case 'DELETE_TAG':
                return 'Are you sure you want to remove this tag?';
            case 'ADD_SELECTED_MEMBERS':
                return 'Add  Selected Members to a List';
            case 'DELETE_MODAL':
                return '';
            default:
                return false;
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    function useModalSwitch() {
        switch (activeModal) {
            case 'ADD_TRANSACTION':
                return <div className="">Modal</div>;
            case 'INVITE_MEMBER':
                return <InviteMember />;
            case 'DELETE_MODAL':
                return <DeleteModal />;
            // case 'CREATE_ORGANIZATION':
            //     return <CreateOrganization />;
            // case 'DUPLICATE_LIST':
            //     return <DuplicateList />;
            // case 'CREATE_NEW_LIST':
            //     return <CreateNewList />;
            // case 'ADD_USER_TO_LIST':
            //     return <AddUserList />;
            case 'CONFIRM_LIST_DELETION':
                return <ConfirmDeletion />;
            case 'EVENT_RESPONSE':
                return <EventResponse />;
            case 'CREATE_EVENT':
                return <CreatEvent />;
            case 'ADD_SELECTED':
                // return <SelectedMembers />;
            // case 'DELETE_TAG':
            //     return <DeleteTag />;
            default:
                return null;
        }
    }

    const body = <div>{useModalSwitch()}</div>;

    if (mounted) {
        return createPortal(
            <Modal
                disableScrollLock={true}
                open={!!activeModal}
                onClose={() => setActiveModal('')}
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '99999',
                    boxShadow: 24,
                    p: 4,
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                {activeModal === 'CREATE_EVENT' ? (
                    <div className="event-wrapper">{body}</div>
                ) : activeModal === 'DELETE_TAG' ? (
                    <div className="tag-modal">{body}</div>
                ) : (
                    <div className="modal-wrapper">
                        {activeModal !== 'DELETE_MODAL' && (
                            <div className="flex-end">
                                <button type="button" className="close-button" onClick={() => closeModal()}>
                                    <img src={Svg.CloseModal} alt="Close-Modal" />
                                </button>
                            </div>
                        )}
                        <div style={renderTitle() ? { justifyContent: 'center' } : {}} className="align-start">
                            <p className="modal-title">{params?.modalTitle ? params.modalTitle : renderTitle()}</p>
                        </div>
                        <div>{body}</div>
                    </div>
                )}
            </Modal>,
            document.getElementsByTagName('body')[0]
        );
    }
};
