import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import { notificationsActions } from 'store';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNoteItemStyle } from '../styles';
import Loader from 'react-loader-spinner';
import { CircularProgress } from '@material-ui/core';
import { Text } from './text';
import axios from 'axios';
import { Colors } from '../../../../utils';

const NotificationItem = ({ notifications, closeOpen, params, removeNotification }) => {
    const classes = useNoteItemStyle();
    const dispatch = useDispatch();
    const router = useRouter();
    const [marked, setmarked] = useState(true);

    const date1 = new Date(notifications?.createdAt);
    const date2 = new Date();
    let month = date2.getMonth() + 1;
    let year = date2.getFullYear();
    let daysInMonth = new Date(year, month, 0).getDate();
    let diffTime = Math.abs(date2 - date1);
    let total_seconds = parseInt(Math.floor(diffTime / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    let week = parseInt(Math.floor(days / 7));
    let filteredMonth = parseInt(Math.floor(days / daysInMonth));
    let filteredYear = parseInt(Math.floor(filteredMonth / 12));

    const handleDel = () => {
        dispatch(notificationsActions.removeNotification(notifications.id, params));
    };

    const time =
        filteredYear > 0
            ? `${filteredYear}y`
            : filteredMonth
            ? `${filteredMonth}m`
            : week > 0
            ? `${week}w`
            : days > 0
            ? `${days}d`
            : hours > 0
            ? `${hours}h`
            : minutes > 0
            ? `${minutes}m`
            : `${seconds}s`;

    const handleSeeEvent = (id) => {
        closeOpen();
        router.push(`singleEvent?eventid=${id}`);
    };

    return (
        <div
            className={classes.NotificationItem}
            style={notifications.status === 'UNREAD' && marked ? { backgroundColor: '#FAFAFA' } : { backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div
                    style={{ display: 'flex' }}
                    onClick={() => {
                        setmarked(false);
                        dispatch(notificationsActions.markReadNotification({ notificationId: notifications.id }));
                    }}>
                    <div className={classes.iconCont}>
                        <Icon
                            name={
                                notifications.type === 'EVENT_APPROVED'
                                    ? SVGNames.ApprovedNotification
                                    : notifications.type === 'EVENT_DISAPPROVED'
                                    ? SVGNames.DisapprovedEvent
                                    : notifications.type === 'CLAIM_APPORVED'
                                    ? SVGNames.ApprovedNotification
                                    : notifications.type === 'CLAIM_REJECTED'
                                    ? SVGNames.DisapprovedEvent
                                    : notifications.type === 'UPGRADE_VERIFITED'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'UPGRADE_ORGANIZATION_ADMIN'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'UPGRADE_ORGANIZER'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'UPGRADE_ORGANIZATION_ORGANIZER'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'DOWNGRADE_ORGANIZATION_MANAGER'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'UPGRADE_ORGANIZATION_MEMBER'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'UPGRADE_ORGANIZATION_MANAGER'
                                    ? SVGNames.OrganizerMember
                                    : notifications.type === 'DOWNGRADE_MEMBER'
                                    ? SVGNames.UnverifiedMember
                                    : notifications.type === 'DOWNGRADE_ORGANIZATION_MEMBER'
                                    ? SVGNames.UnverifiedMember
                                    : notifications.type === 38
                                    ? SVGNames.EventIcon
                                    : notifications.type === 82
                                    ? SVGNames.ApprovedNotification
                                    : null
                            }
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className={classes.messageCont}>
                        <p className={classes.message}>
                            <Text
                                type={notifications.type}
                                info={notifications}
                                classes={classes}
                                handleClose={closeOpen}
                                handleSeeComment={handleSeeEvent}
                            />

                            {/*<p>{notifications.type === 'CLAIM_APPORVED' ? notifications.org.name : ''}</p>*/}
                            {/*{notifications.type === 879 ? (*/}
                            {/*    `${notifications.inviter} invites you to become a Verified Member to create events and invite people`*/}
                            {/*) : notifications.type === 81 ? (*/}
                            {/*    <span>*/}
                            {/*        Your event has been disapproved.{' '}*/}
                            {/*        <span*/}
                            {/*            style={notifications.event && { color: '#387DFF' }}*/}
                            {/*            onClick={() => notifications.event && handleSeeEvent(notifications.event.eventId)}>*/}
                            {/*            See the comment*/}
                            {/*        </span>*/}
                            {/*    </span>*/}
                            {/*) : notifications.type === 82 ? (*/}
                            {/*    `Your event has been published`*/}
                            {/*) : notifications.type === 83 ? (*/}
                            {/*    <span>*/}
                            {/*        Your event has been disapproved.{' '}*/}
                            {/*        <span style={{ color: '#387DFF' }} onClick={() => handleSeeEvent(notifications.event.eventId)}>*/}
                            {/*            See the comment*/}
                            {/*        </span>*/}
                            {/*    </span>*/}
                            {/*) : notifications.type === 38 ? (*/}
                            {/*    <span*/}
                            {/*        style={{ margin: 0 }}*/}
                            {/*        onClick={() =>*/}
                            {/*            notifications.event && router.push(`singleEvent?eventid=${notifications.event.eventId}`)*/}
                            {/*        }>*/}
                            {/*        {`${notifications.event ? notifications.event.eventName : ''} will start in 2 days`}*/}
                            {/*    </span>*/}
                            {/*) : notifications.type === 878 ? (*/}
                            {/*    `Congrats! You have become an Organizer. Now you can create & publish events and invite people`*/}
                            {/*) : notifications.type === 880 ? (*/}
                            {/*    `You have become an Unverified Member. Now you cannot create events and invite people`*/}
                            {/*) : null}*/}
                        </p>
                    </div>
                </div>

                <div className={classes.delIconCont}>
                    {removeNotification === notifications.id ? (
                        <CircularProgress
                            style={{
                                width: '15px',
                                height: '15px',
                                margin: '0 auto',
                                color: Colors.ThemeGreen,
                            }}
                        />
                    ) : (
                        <button onClick={handleDel}>
                            <Icon name={SVGNames.ClearIcon} />
                        </button>
                    )}
                    <p className={classes.date}>{time}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationItem;
