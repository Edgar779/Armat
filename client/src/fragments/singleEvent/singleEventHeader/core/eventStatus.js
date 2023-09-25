import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SVGNames } from 'constants/index';
import { Icon } from 'components';
import { CreateEventModal } from 'fragments';
import { EventsActions } from 'store';
import { Box } from '@material-ui/core';
import { AntSwitch } from './style';

export const EventStatus = ({ classes, id, data, role }) => {
    const dispatch = useDispatch();

    const [editEventInfo, setEditEventInfo] = useState('');
    const { eventStatusType } = useSelector((state) => ({
        eventStatusType: state.event.eventStatusType,
    }));

    const status = eventStatusType ? eventStatusType : data.status;
    const [checked, setChecked] = useState(status === 'PUBLISHED');

    const statuses =
        status === 'UNPUBLISHED'
            ? 'Unpublished'
            : status === 'DISAPPROVED'
            ? 'Disapproved'
            : status === 'REJECTED'
            ? 'Disapproved'
            : status === 'PENDING'
            ? 'Pending'
            : status === 'PUBLISHED'
            ? 'Published'
            : null;

    const handleChange = (id) => {
        setChecked(!checked);
        const type = role.auth.role === 'ORGANIZER' ? true : role.auth.role === 'ADMIN';
        const stat =
            type === true
                ? statuses === 'Unpublished'
                    ? 'PUBLISHED'
                    : statuses === 'Published'
                    ? 'UNPUBLISHED'
                    : ''
                : statuses === 'Unpublished'
                ? 'PENDING'
                : statuses === 'Published'
                ? 'UNPUBLISHED'
                : '';

        const info = {
            status: stat,
        };
        dispatch(EventsActions.setEventStatus(info, data.eventId));
    };

    const pageType = sessionStorage.getItem('windowPath');

    return (
        <Box className={classes.eventStatusCont}>
            {editEventInfo && (
                <CreateEventModal eventInfo={editEventInfo} handleClose={() => setEditEventInfo('')} EventTitle={'Edit an Event'} />
            )}

            <Box className={status === 'DISAPPROVED' ? classes.eventStatusHeaderColumn : classes.eventStatusHeader}>
                <Box className={classes.eventStatus}>
                    <Box className={classes.eventStatusText}>{'Event Status: '}</Box>
                    <Box className={classes.eventStatusIcon}>
                        <Icon
                            name={
                                status === 'UNPUBLISHED'
                                    ? SVGNames.Unpublished
                                    : status === 'DISAPPROVED'
                                    ? SVGNames.Disapproved
                                    : status === 'REJECTED'
                                    ? SVGNames.Disapproved
                                    : status === 'PENDING'
                                    ? SVGNames.Pending
                                    : status === 'PUBLISHED'
                                    ? SVGNames.Approved
                                    : null
                            }
                            className={classes.statusIcon}
                            width={24}
                            height={24}
                        />
                        <p className={classes.status}>{statuses}</p>
                    </Box>
                </Box>

                {pageType !== '/pastEvents' && (
                    <Box
                        className={classes.eventSubmitButton}
                        style={role.auth.role === 'ORGANIZER' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                        {role.auth.role === 'ORGANIZER' || role.auth.role === 'ADMIN' ? (
                            <div className={classes.organizerPublishUn}>
                                <p className={classes.publishEventText}>{statuses === 'Unpublished' ? 'Publish' : 'Unpublish'}</p>
                                <AntSwitch checked={checked} onChange={() => handleChange(id)} name="checked" />
                            </div>
                        ) : (
                            <div>
                                {statuses === 'Disapproved' ? (
                                    <button className={classes.editResubmit} onClick={() => setEditEventInfo(data)}>
                                        <Icon name={SVGNames.Resubmit} style={{ marginRight: '8px' }} />
                                        <p className={classes.editResubmitText}>{'Edit & Resubmit the Event'}</p>
                                    </button>
                                ) : statuses === 'Pending' ? (
                                    <Icon name={SVGNames.Resubmit} style={{ marginRight: '8px' }} />
                                ) : (
                                    <div className={classes.organizerPublishUn}>
                                        {statuses === 'Unpublished' ? (
                                            <button className={classes.editResubmit} onClick={handleChange}>
                                                <Icon name={SVGNames.Resubmit} style={{ marginRight: '8px' }} />
                                                <p className={classes.editResubmitText}>Submit</p>
                                            </button>
                                        ) : (
                                            <>
                                                <p className={classes.publishEventText}>Unpublish</p>
                                                <AntSwitch checked={checked} onChange={() => handleChange(id)} name="checked" />
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </Box>
                )}
            </Box>
            {statuses === 'Disapproved' && data.comment && (
                <Box className={classes.descCon}>
                    <p className={classes.desc}>{data.comment}</p>
                </Box>
            )}
        </Box>
    );
};
