import React, {useEffect, useState} from 'react';
import { membersFragmentStyle } from './style';
import { useDispatch } from 'react-redux';
import {EventsActions, httpRequestsOnSuccessActions} from 'store';
import { Backdrop, Fade, Input, Modal } from '@material-ui/core';
import { CancelButton, CloseButton, DeleteButton, ErrMessage, PageTitle } from 'components';
import {FindLoad, FindSuccess} from "../../../utils";

export const CommentPopup = ({ open, handleClose, type }) => {
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
                status: "REJECTED",
                comment: comment,
            };
            dispatch(EventsActions.setEventStatus(data, open, type))
        } else {
            setError('Input is not fiel');
        }
    };
    const loader = FindLoad('SET_EVENT_STATUS')
    const success = FindSuccess('SET_EVENT_STATUS')

    useEffect(() =>{
        if(success.length){
            handleClose && handleClose()
            setComment('')
            setError('')
            dispatch(httpRequestsOnSuccessActions.removeSuccess('SET_EVENT_STATUS'))
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
                        <PageTitle style={{ fontSize: '31px' }} title={'Want to Disapprove an Event?'} />
                        <p className={classes.modalText}>
                            {' '}
                            Disapproving an event will notify the Event Organizer about disapproval and possible reason.
                        </p>
                        <textarea
                            placeholder={'Type disapproval reason here...'}
                            className={classes.commentInputStyle}
                            onChange={handleChangeComment}
                        />
                        <ErrMessage style={{ margin: 0 }} text={error} />

                        <div className={classes.modalButtons}>
                            <DeleteButton style={{ width: '241px' }} handleClick={handleDisapprove} text={'Disapprove'} loader={!!loader.length}/>
                            <CancelButton style={{ width: '241px' }} handleClick={handleClose} text={'Cancel'} />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
