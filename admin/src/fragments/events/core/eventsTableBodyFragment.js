import React from 'react';
import { useDispatch } from 'react-redux';
import { EventsActions } from 'store';
import { Images } from 'theme';
import { membersFragmentStyle } from './style';
import { ModalPopup, NoInfo, SlicedText, SliceText, TableDeleteButton } from 'components';
import { TableBody, TableRow, TableCell, IconButton } from '@material-ui/core';
import { Help, CheckCircle, Cancel } from '@material-ui/icons';
import { FilterEventsStatus } from './filterEventsStatus';
import { CommentPopup } from './commentPopup';
import { StatusText } from './common';
import * as moment from 'moment';

const styles = {
    EditDelButton: {
        fontSize: '16px',
        lineHeight: '22px',
        color: '#545F7E',
    },
};

export const EventsTableBodyFragment = ({ eventsData, handleCreate, type }) => {
    const classes = membersFragmentStyle();
    const [open, setOpen] = React.useState(false);
    const [userModalInfo, setUserModalInfo] = React.useState(null);
    const [modalType, setModalType] = React.useState(null);
    const [openComment, setOpenComment] = React.useState(false);
    const [disable, setDisable] = React.useState(false);

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

    const DeleteEvent = (id) => {
        const data = {
            id: id,
            type: type,
        };
        dispatch(EventsActions.deleteEvent(data));
        handleClose();
    };

    const handleClearState = () => {
        setUserModalInfo(null);
        setModalType(null);
    };

    const commentPopup = (eventId) => {
        setOpenComment(eventId);
    };

    const multiConverter = (date, time, tz, type) => {
        let setedDate = new Date(date.slice(0, 22));
        time && setedDate.setHours(time.slice(0, 2), time.slice(3, 5));
        let tzDifference = tz + new Date().getTimezoneOffset() / 60;
        let localTime = moment(setedDate)
          .add(moment.duration(-tzDifference, 'hours'))
          .format('DD/MM/YYYY');
        return localTime;
    };

    return (
        <TableBody>
            <ModalPopup
                modalTitle={'Delete an Event'}
                modalText={`Delete an Event`}
                buttonText={modalType}
                bodyText={` ? Deleting a event will permanently remove it from the system.`}
                user={userModalInfo && userModalInfo.name}
                handleClose={handleClose}
                handleDel={() => DeleteEvent(userModalInfo.eventId)}
                open={open}
            />

            <CommentPopup open={openComment} handleClose={() => setOpenComment(false)} type={type} />

            {eventsData && eventsData.length ? (
                eventsData.map((row, i) => (
                    <TableRow className={classes.tableRow} key={i}>
                        <TableCell
                            onClick={() => handleCreate(row)}
                            style={{
                                borderLeft: `5px solid ${
                                    row.status === 'UNPUBLISHED'
                                        ? '#545F7E80'
                                        : row.status === 'Approved'
                                            ? '#4FDC6F'
                                            : row.status === 'PUBLISHED'
                                                ? '#4FDC6F'
                                                : row.status === 'REJECTED'
                                                    ? '#F07379'
                                                    : '#545F7E80'
                                }`,
                            }}
                            className={classes.TableRowIndex}>
                            {i + 1}
                        </TableCell>
                        <TableCell onClick={() => handleCreate(row)} className={classes.TableRowIndex}>
                            {multiConverter(row?.startDate, row?.startTime, row?.timezoneOffset, 'DD')}
                            {/*{row.startDate ? moment(row.startDate).format('DD/MM/YYYY') : '...'}*/}
                        </TableCell>

                        {type !== 'MyEvents' &&
                            <TableCell onClick={() => handleCreate(row)} component='th' scope='row'>
                                {
                                    <div className={classes.userInfo}>
                                        <img
                                            className={classes.userAvatar}
                                            src={row.mainImage ? row.mainImage.url : Images.avatar}
                                            alt={'avatar'}
                                        />

                                        <p style={{ fontWeight: 'bold', marginLeft: '12px', color: '#387DFF' }}>
                                            <SlicedText
                                                data={row.creator ? row.creator.fullName : 'Deleted User'}
                                                type={'name'}
                                                size={18}
                                            />
                                        </p>
                                    </div>
                                }
                            </TableCell>
                        }

                        <TableCell className={classes.cursor} onClick={() => handleCreate(row)}>
                            <SlicedText data={row?.title} type={'name'} size={18} />
                        </TableCell>
                        <TableCell onClick={() => handleCreate(row)}>
                            <p className={classes.tableRowRole}>
                                {row.locationType === 'PHYSICAL'
                                    ? 'Physical'
                                    : row.locationType === 'VIRTUAL'
                                        ? 'Online'
                                        : '...'}{' '}
                            </p>
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
                                                {row.status === 'APPROVED' ? (
                                                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                                                ) : row.status === 'PUBLISHED' ? (
                                                    <CheckCircle style={{ color: '#4FDC6F', fontSize: '20px' }} />
                                                ) : row.status === 'REJECTED' ? (
                                                    <Cancel style={{ color: '#F07379', fontSize: '20px' }} />
                                                ) : row.status === 'UNPUBLISHED' ? (
                                                    <img style={{ width: '18px', height: '18px' }}
                                                         src={Images.unpublished} alt={'unpublished'} />
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
                                    type={type}
                                    EventId={row.eventId}
                                    handleDis={() => commentPopup(row.eventId)}
                                    List={type === 'MyEvents' ? [`Publish`, `Unpublish`] : [`Approve`, `Unpublish`, `Disapprove`]}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <NoInfo text={'No Events Yet'} />
            )}
        </TableBody>
    );
};
