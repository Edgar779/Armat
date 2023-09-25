import { CommonStyle } from './styles';
import { CloseButton, MiniLoader } from 'components';
import { MofalItem } from './modalItem';
import * as moment from 'moment';
import { EventsActions } from 'store';
import { useDispatch } from 'react-redux';
import { FindLoad } from 'utils';
import React from 'react';

export const Modal = ({ info, handleClose }) => {
    const classes = CommonStyle();
    const dispatch = useDispatch();
    const loader = FindLoad('APPROVE_REJECT_SPONSOR');
    const [type, setType] = React.useState('');

    const handleApprove = (status) => {
        setType(status);
        const date = {
            eventId: info.eventId,
            statusInfo: {
                status: status,
                orgId: info.orgId,
            },
        };
        dispatch(EventsActions.approveOrRejectSponsor(date));
        // handleClose();
    };

    return (
        <div className={classes.modalWrapper}>
            <div className={classes.titleWrapper}>
                <p>Sponsoring Request</p>
                <div>
                    <CloseButton style={{ margin: 0 }} handleClick={handleClose} />
                </div>
            </div>

            <div className={classes.itemsWrapper}>
                <MofalItem title={'Event Date:'} value={info && moment(info.createdAt).format('MM/DD/YYYY')} />
                <MofalItem title={'Requested by:'} value={info && info.requesterName} />
                <MofalItem title={'Event Title:'} value={info && info.eventTitle} />
                <MofalItem title={'Note:'} value={info && info.note ? info.note : 'No Note'} />
            </div>

            <div className={classes.buttonsWrapper}>
                <button className={classes.reject} onClick={() => handleApprove('REJECTED')}>
                    {loader.length && type === 'REJECTED' ? <MiniLoader width={24} /> : 'Reject'}
                </button>
                <button className={classes.approve} onClick={() => handleApprove('APPROVED')}>
                    {loader.length && type === 'APPROVED' ? <MiniLoader color={'white'} width={24} /> : 'Approve'}
                </button>
            </div>
        </div>
    );
};
