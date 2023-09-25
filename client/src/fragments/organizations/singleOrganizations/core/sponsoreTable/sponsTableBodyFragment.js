import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EventsActions, httpRequestsOnSuccessActions, organizationActions } from 'store';
import { suggestedStyle } from './style';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { Cancel, CheckCircle } from '@material-ui/icons';
import { FindLoad, FindSuccess } from 'utils';
import { MiniLoader, SimpleModal, SlicedText } from 'components';
import moment from 'moment';
import { Modal } from '../common';

export const SponsTableBodyFragment = ({ info }) => {
    const classes = suggestedStyle();
    // const history = useHistory();
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    // const [openComment, setOpenComment] = React.useState(false);
    // const [disable, setDisable] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const [lodId, setLoadId] = React.useState('');
    const [type, setType] = React.useState('');

    const dispatch = useDispatch();
    const handleOpen = (row, modalType) => {
        setOpen(true);
        setUserModalInfo(row);
        setModalType(modalType);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => handleClearState(), 1000);
    };

    const DeleteEvent = () => {
        dispatch(organizationActions.deleteOrg(userModalInfo.id));
        handleClose();
    };

    const handleClearState = () => {
        setUserModalInfo(null);
        setModalType(null);
    };

    const loader = FindLoad('APPROVE_REJECT_SPONSOR');

    // const commentPopup = (eventId) => {
    //     setOpenComment(eventId);
    // };

    const openItem = (id) => {
        // history.push(`/organization/${id}`)
    };

    const handleApprove = (status, id) => {
        setLoadId(id);
        setType(status);
        const date = {
            eventId: info.eventId,
            statusInfo: {
                status: status,
                orgId: info.orgId,
            },
        };
        dispatch(EventsActions.approveOrRejectSponsor(date));
    };
    const success = FindSuccess('APPROVE_REJECT_SPONSOR');

    useEffect(() => {
        if (success.length) {
            setOpen(false);
            dispatch(httpRequestsOnSuccessActions.removeSuccess('APPROVE_REJECT_SPONSOR'));
        }
    }, [success]);
    return (
        <>
            <SimpleModal
                openDefault={open}
                handleOpenClose={() => setOpen(!open)}
                content={<Modal info={info} handleClose={() => setOpen(!open)} />}
            />
            <TableBody className={classes.desktop}>
                <TableRow className={classes.tableRow}>
                    <TableCell>{info?.createdAt ? moment(info?.createdAt).format('MM/DD/YYYY') : '...'}</TableCell>

                    <TableCell>{info?.requesterName}</TableCell>

                    <TableCell>{info?.eventTitle}</TableCell>

                    <TableCell>
                        {info?.note ? (
                            <SlicedText type={'desc'} size={15} data={info?.note ? info?.note : 'Not set'} />
                        ) : (
                            <span style={{ color: '#22222299' }}>No Note</span>
                        )}
                    </TableCell>

                    <TableCell>
                        <div className={classes.actionsButtons}>
                            <button onClick={() => handleApprove('APPROVED', info.id)}>
                                {lodId === info?.id && loader?.length && type === 'APPROVED' ? (
                                    <MiniLoader width={24} />
                                ) : (
                                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '24px' }} />
                                )}
                            </button>
                            <button onClick={() => handleApprove('REJECTED', info.id)}>
                                {lodId === info?.id && loader?.length && type === 'REJECTED' ? (
                                    <MiniLoader width={24} />
                                ) : (
                                    <Cancel style={{ color: '#F07379', fontSize: '24px' }} />
                                )}
                            </button>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>

            <TableBody className={classes.mobile}>
                <TableRow className={classes.tableRow}>
                    <TableCell onClick={() => setOpen(!open)}>{info?.eventTitle}</TableCell>
                    <TableCell>
                        <div className={classes.actionsButtons}>
                            <button onClick={() => handleApprove('APPROVED', info?.id)}>
                                {lodId === info?.id && loader?.length && type === 'APPROVED' ? (
                                    <MiniLoader width={24} />
                                ) : (
                                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '24px' }} />
                                )}
                            </button>
                            <button onClick={() => handleApprove('REJECTED', info?.id)}>
                                {lodId === info?.id && loader?.length && type === 'REJECTED' ? (
                                    <MiniLoader width={24} />
                                ) : (
                                    <Cancel style={{ color: '#F07379', fontSize: '24px' }} />
                                )}
                            </button>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </>
    );
};
