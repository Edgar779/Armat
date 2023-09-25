import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalStyle } from './core/styles';
import { EmailValidator } from 'constants/index';
import { invitesActions } from 'store';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import { ErrMessage, CloseButton, SendButton, SignInInput, SelectInput, MinLoader } from 'components';
import {FindLoad, FindSuccess} from "../../utils";

export const InviteModal = ({ open, handleClose, ModalTittle, ModalBody }) => {
    const classes = modalStyle();
    const dispatch = useDispatch();
    const [role, setRole] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const { message, errMessage } = useSelector((state) => ({
        isLoading: state.invite.isLoading,
        errMessage: state.invite.errMessage,
    }));

    useEffect(() => {
        if (errMessage || message) {
            setTimeout(() => dispatch(invitesActions.RemoveStatus(), setRole('')), 3000);
        }
    }, [errMessage, message]);


    const success = FindSuccess('SET_ROLE_INVITE')
    const loader = FindLoad('SET_ROLE_INVITE')

    useEffect(() => {
        if(success.length){
            setRole('');
            setError('');
            setValidEmail(false);
        }
    }, [success])


    useEffect(() =>{
        return() =>{
            setRole('');
            setError('');
            setValidEmail(false);
        }

    },[])

    const handleChangeEmail = (ev) => {
        setEmail(ev.target.value);
        setError('');
    };

    const handleCheck = (bool) => {
        setValidEmail(bool);
    };
    const handleChange = (ev) => {
        setRole(ev);
        setError('');
    };

    const sendInvite = () => {
            if (role && email && validEmail === false) {
                const roleType =
                    role === 'Verified Members' ? ' VERIFIED_MEMBER' :
                    role === 'Organizer' ? 'ORGANIZER' :
                    role === 'Member' ? 'MEMBER' :
                    role === 'ADMIN' ? 'ADMIN' : ''
                const info = {
                    "email": email,
                    "role": roleType,
                }
                dispatch(invitesActions.setRoleInvite(info));
            }
        else {
            setError('Input is not field');
        }
    };

    const closeModal = () => {
        setRole('');
        handleClose();
        setError('');
        setValidEmail(false);
    };

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.inviteModalPaper}>
                        <CloseButton handleClick={handleClose} />
                        <div className={classes.inviteModalBody}>
                            <h2>{ModalTittle}</h2>
                            <p>{ModalBody}</p>

                            <div>
                                <SignInInput
                                    className={'InviteEmail'}
                                    validator={EmailValidator}
                                    value={email}
                                    onChange={handleChangeEmail}
                                    sendBoolean={handleCheck}
                                    typeError={validEmail}
                                    name={'email'}
                                    type={'email'}
                                    label={'Email'}
                                    id={'email'}
                                    autoComplete={'current-email'}
                                />
                            </div>

                            <SelectInput
                                className={'Mini'}
                                title={'Select Role'}
                                handleChangeSelectValue={(ev) => handleChange(ev)}
                                selectData={['Member', 'Admin' ]}
                                // selectData={['Member', 'Verified Members', 'Organizer', 'Admin' ]}
                            />

                            {error ? <ErrMessage text={error} /> : <div style={{height:'24px'}}/>}
                            <div className={classes.modalButtons}>
                                {!!loader.length ? (
                                    <div className={classes.modalButtonsLoader}>
                                        <MinLoader />
                                    </div>
                                ) : (
                                    <SendButton handleCLick={sendInvite} buttonText={'Send Invite'} />
                                )}
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
