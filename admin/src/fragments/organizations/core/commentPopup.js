import React, {useEffect, useState} from 'react';
import { membersFragmentStyle } from './style';
import { useDispatch } from 'react-redux';
import {EventsActions, httpRequestsOnSuccessActions, organizationActions} from 'store';
import { Backdrop, Fade, Input, Modal } from '@material-ui/core';
import { CancelButton, CloseButton, DeleteButton, ErrMessage, PageTitle } from 'components';
import {FindLoad, FindSuccess} from "../../../utils";

export const CommentPopup = ({ open, handleClose, info }) => {
    const dispatch = useDispatch();
    const classes = membersFragmentStyle();
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleChangeComment = (ev) => {
        setComment(ev.target.value);
        setError('');
    };

    const handleDisapprove = ({}) => {
        if (comment) {
            const data = {
                status: {status: 'REJECTED', comment: comment },
                info: info.id,
                type: info.type,
            };
            dispatch(organizationActions.setStatus(data))
        } else {
            setError('Input is not fiel');
        }
    };
    const loader = FindLoad('SET_STATUS')
    const success = FindSuccess('SET_STATUS')

    useEffect(() =>{
        if(success.length){
            handleClose && handleClose()
            setComment('')
            setError('')
            dispatch(httpRequestsOnSuccessActions.removeSuccess('SET_STATUS'))
        }
    },[success])

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={open}>
                <div className={classes.paper}>
                    <CloseButton handleClick={handleClose} />
                    <div className={classes.modalBody}>
                        <PageTitle style={{ fontSize: '31px' }} title={'Want to Reject an Organization?'} />
                        <p className={classes.modalText}>
                            Rejecting an organization will notify the Organization Manager about the rejection and possible reason.
                        </p>
                        <textarea
                            placeholder={'Type disapproval reason here...'}
                            className={classes.commentInputStyle}
                            onChange={handleChangeComment}
                        />
                        <ErrMessage style={{ margin: 0 }} text={error} />

                        <div className={classes.modalButtons}>
                            <DeleteButton style={{ width: '241px' }} handleClick={handleDisapprove} text={'Reject'} loader={!!loader.length}/>
                            <CancelButton style={{ width: '241px' }} handleClick={handleClose} text={'Cancel'} />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
