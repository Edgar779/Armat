import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {EventsActions, organizationActions} from 'store';
import {Images} from 'theme';
import {suggestedStyle,} from './style';
import {ButtonMiniLoader, ModalPopup, NoInfo, SliceText, TableDeleteButton} from 'components';
import {TableBody, TableRow, TableCell, IconButton} from '@material-ui/core';
// import { Help, CheckCircle, Cancel } from '@material-ui/icons';
// import { FilterEventsStatus } from './filterEventsStatus';
// import { CommentPopup } from './commentPopup';
// import { StatusText } from './common';
// import {TableEdit} from "../../createOrgs/core/tableEdit";
import {useHistory, useParams} from 'react-router-dom';
import {Cancel, CheckCircle} from "@material-ui/icons";
import moment from 'moment';
import {FindLoad} from "../../../../utils";

const styles = {
    EditDelButton: {
        fontSize: '16px',
        lineHeight: '22px',
        color: '#545F7E',
    },
};

export const SuggestedTableBodyFragment = ({items, eventsData, handleCreate, type, handleOpenModal}) => {
    const classes = suggestedStyle();
    const history = useHistory();
    const params = useParams()
    const [open, setOpen] = React.useState(false);
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    const [openComment, setOpenComment] = React.useState(false);
    const [disable, setDisable] = React.useState(false);

    const [itId, setIdId] = useState('')
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

    const handleAcceptOrReject = (id, type) => {
        setIdId(id)
        const info = {
            id: id,
            action: type,
            orgId: params.id,
        }
        dispatch(organizationActions.acceptOrReject(info))
    }


    const rejectLoad = FindLoad('REJECT')
    const acceptLoad = FindLoad('APPROVE')


    return (
        <TableBody>
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
            <TableRow className={classes.tableRow}>

                <TableCell
                    className={classes.TableRowIndex}>
                    {moment(items.createdAt).format('MM/DD/YYYY')}
                </TableCell>

                <TableCell className={classes.TableRowIndex}>
                    {items && items.editor && items.editor.fullName}
                </TableCell>

                <TableCell
                    onClick={() => handleOpenModal(items)}
                    className={classes.TableRowIndex}>
                    {       items.name ? `Change Name to ${items.name}` :
                             items.phoneNumber ? `Change Phone Number to ${items.phoneNumber}` :
                              items.email ? `Change Email to ${items.email}` :
                                items.address ? `Change Address to ${items.address}` :
                                 items.hours ? `Change Hours` :
                                  items.categories ? `Change Categories` :
                                   items.description ? `Change Description` :
                                    ''
                    }
                </TableCell>

                <TableCell
                >
                    <div className={classes.actionsButtons}>
                        <button onClick={() => handleAcceptOrReject(items.id, 'APPROVE')}>
                            {acceptLoad.length ?  itId === items.id ?
                                <ButtonMiniLoader color={'#4FDC6F'}/>
                                :
                                <CheckCircle style={{color: '#4FDC6F', fontSize: '24px'}}/>
                                :
                                <CheckCircle style={{color: '#4FDC6F', fontSize: '24px'}}/>
                            }
                        </button>
                        <button onClick={() => handleAcceptOrReject(items.id, 'REJECT')}>
                            {rejectLoad.length ? itId === items.id ?
                                <ButtonMiniLoader color={'#F07379'}/>
                                :
                                <Cancel style={{color: '#F07379', fontSize: '24px'}}/>
                                :
                                <Cancel style={{color: '#F07379', fontSize: '24px'}}/>
                            }
                        </button>
                    </div>
                </TableCell>
            </TableRow>
        </TableBody>
    );
};
