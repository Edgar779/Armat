import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { httpRequestsOnSuccessActions, organizationActions } from 'store';
import { Images } from 'theme';
import { membersFragmentStyle } from './style';
import { ModalPopup, NoInfo, SlicedText, TableDeleteButton } from 'components';
import { TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Help, CheckCircle, Cancel } from '@material-ui/icons';
import { FilterEventsStatus } from './filterEventsStatus';
import { CommentPopup } from './commentPopup';
import { StatusText } from './common';
import { TableEdit } from '../../createOrgs/core/tableEdit';
import { useHistory } from 'react-router-dom';
import { FindLoad, FindSuccess } from 'utils';

const styles = {
    EditDelButton: {
        fontSize: '16px',
        lineHeight: '22px',
        color: '#545F7E',
    },
};

export const OrgansTableBodyFragment = ({ eventsData, handleCreate, type, local }) => {
    const classes = membersFragmentStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    const [openComment, setOpenComment] = React.useState(false);
    const [orgId, setOrgId] = React.useState('');

    const handleOpen = (row, modalType) => {
        setOpen(true);
        setUserModalInfo(row);
        setModalType(modalType);
    };

    const handleClearState = () => {
        setUserModalInfo(null);
        setModalType(null);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => handleClearState(), 10);
    };

    const DeleteEvent = () => {
        dispatch(organizationActions.deleteOrg(userModalInfo.id, userModalInfo.type));
    };

    const success = FindSuccess('DELETE_ORGANIZATION');
    const loading = FindLoad('DELETE_ORGANIZATION');

    useEffect(() => {
        if (success.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess('DELETE_ORGANIZATION'));
            handleClose();
        }
    }, [success]);


    const commentPopup = (row) => {
        setOpenComment(!openComment);
        setOrgId(row);
    };

    const openItem = (id) => {
        history.push(`/organization/${id}`);
    };

    return (
        <TableBody>
            <ModalPopup
                loading={!!loading.length}
                modalTitle={'Delete an Business'}
                modalText={`Delete an Business`}
                buttonText={modalType}
                bodyText={` ? Deleting a event will permanently remove it from the system.`}
                user={userModalInfo && userModalInfo.name}
                handleClose={handleClose}
                handleDel={() => DeleteEvent(userModalInfo && userModalInfo.id)}
                open={open}
            />

            <CommentPopup info={orgId} open={openComment} handleClose={() => setOpenComment(false)} type={type} />

            {eventsData && eventsData.length ? (
                eventsData.map((row, i) => (
                    <TableRow className={classes.tableRow} key={i}>
                        <TableCell
                            onClick={() => openItem(row.id)}
                            style={{
                                borderLeft: `5px solid ${
                                    row.status === 'ARCHIVED'
                                        ? '#387DFB'
                                        : row.status === 'ACTIVE'
                                            ? '#4FDC6F'
                                            : row.status === 'PENDING'
                                                ? '#A9AEBE'
                                                : row.status === 'REJECTED'
                                                    ? '#F07379'
                                                    : '#545F7E80'
                                }`,
                            }}
                            className={classes.TableRowIndex}>
                            <p className={classes.name}>
                                <SlicedText data={row.name} type={'name'} size={18} />
                            </p>
                        </TableCell>


                        {type === 'users' &&
                            <TableCell onClick={() => openItem(row.id)}>
                                <SlicedText data={row.creator ? row.creator.fullName : 'Deleted User'} type={'name'}
                                            size={10} />
                            </TableCell>
                        }
                        <TableCell onClick={() => openItem(row.id)}
                                   className={classes.TableRowIndex}>
                            <SlicedText data={row.address ? row.address.formattedAddress : 'Not Set'} type={'address'}
                                        size={40} />
                        </TableCell>

                        <TableCell
                            onClick={() => openItem(row.id)}
                            className={classes.TableRowIndex}>
                            {row.phoneNumber ? row.phoneNumber : 'Not Set'}
                        </TableCell>

                        {type === 'my' &&
                            <TableCell
                                onClick={() => openItem(row.id)}
                                className={classes.TableRowIndex}>
                                {row.email ? row.email : 'Not Set'}
                            </TableCell>
                        }

                        <TableCell
                            onClick={() => openItem(row.id)}
                            className={classes.EditTableRowIndex}>
                            {row.numEdits ? row.numEdits : 0} <span>Edits</span>
                        </TableCell>
                        <TableCell style={styles.EditDelButton}>
                            Edit
                            <TableEdit handleClick={() => handleCreate(row, 'delete')} />
                        </TableCell>

                        <TableCell style={styles.EditDelButton} className={classes.tableDeleteText}>
                            Delete
                            <TableDeleteButton handleClick={() => handleOpen(row, 'delete')} />
                        </TableCell>

                        <TableCell className={classes.switcherBox}>
                            <div style={{
                                width: '155px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <FilterEventsStatus
                                    fragment={
                                        <div>
                                            <IconButton aria-label='delete'>
                                                {row.status === 'ACTIVE' ? (
                                                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                                                ) : row.status === 'ARCHIVED' ? (
                                                    <img src={Images.archiveButton} alt={'archiveButton'}
                                                         style={{ width: '18px', height: '18px' }} />
                                                ) : row.status === 'REJECTED' ? (
                                                    <Cancel style={{ color: '#F07379', fontSize: '20px' }} />
                                                ) : row.status === 'PENDING' ? (
                                                    <Help style={{ color: '#545F7E80', fontSize: '20px' }} />
                                                ) : (
                                                    ''
                                                )}
                                            </IconButton>
                                            <span>
                                        <StatusText row={row.status} />
                                    </span>
                                        </div>
                                    }
                                    item={row}
                                    handleDis={() => commentPopup(row)}
                                    List={local === 'my' ? [`Active`, `Archived`] : [`Active`, `Archived`, `Rejected`]}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <NoInfo text={'No Organizations Yet'} />
            )}
        </TableBody>
    );
};
