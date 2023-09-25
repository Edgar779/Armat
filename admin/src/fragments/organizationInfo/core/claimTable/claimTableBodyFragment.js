import React from 'react';
import { useParams } from 'react-router-dom';
import { FindLoad } from 'utils';
import { useDispatch } from 'react-redux';
import { organizationActions } from 'store';
import { Images } from 'theme';
import { claimStyle } from './style';
import { ButtonMiniLoader, ModalPopup, SliceText } from 'components';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

export const ClaimTableBodyFragment = ({ claims }) => {
    const classes = claimStyle();
    const dispatch = useDispatch();
    const params = useParams();
    const loadApprove = FindLoad('APPROVE_CLAIMS');
    const rejectApprove = FindLoad('REJECT_CLAIMS');
    const [open, setOpen] = React.useState(false);
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    const [disable, setDisable] = React.useState(false);

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

    const handleApproveReject = (type, id) => {
        if (type === 'Approve') {
            dispatch(organizationActions.approveClaims(id, params.id));
        } else {
            dispatch(organizationActions.rejectClaims(id, params.id));
        }
    };

    return (
        <TableBody style={{ width: '100%' }}>
            <ModalPopup
                modalTitle={'Delete an Business'}
                modalText={`Delete an Business`}
                buttonText={modalType}
                bodyText={` ? Deleting a event will permanently remove it from the system.`}
                user={userModalInfo && userModalInfo.name}
                handleClose={handleClose}
                handleDel={() => DeleteEvent(userModalInfo.eventId)}
                open={open}
            />

            {claims &&
                claims.length &&
                claims.map((row, i) => (
                    <TableRow className={classes.tableRow} key={i}>
                        <TableCell className={classes.TableRowIndex}>01/26/2021</TableCell>
                        <TableCell className={classes.TableRowIndex}>
                            {
                                <div className={classes.userInfo}>
                                    <img
                                        className={classes.userAvatar}
                                        src={row && row.user.avatar ? row?.user?.avatar?.thumbUrl : Images.avatar}
                                        alt={'Avatar'}
                                    />
                                    <SliceText
                                        OnMouseEnter={() => setTimeout(() => setDisable(true), 1000)}
                                        OnMouseLeave={() => setTimeout(() => setDisable(false), 10)}
                                        disable={disable}
                                        row={row.user.name}
                                    />
                                </div>
                            }
                        </TableCell>

                        <TableCell className={classes.EditTableRowIndex}>
                            <div className={classes.actionsButtons}>
                                <button onClick={() => handleApproveReject('Approve', row.id)} className={classes.approve}>
                                    {loadApprove.length ? <ButtonMiniLoader color={'white'} /> : 'Approve'}
                                </button>
                                <button onClick={() => handleApproveReject('Reject', row.id)} className={classes.reject}>
                                    {rejectApprove.length ? <ButtonMiniLoader color={'white'} /> : 'Reject'}
                                </button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
};
