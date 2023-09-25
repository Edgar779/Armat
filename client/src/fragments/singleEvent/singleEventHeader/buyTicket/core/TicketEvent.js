import React, { useEffect, useState } from 'react';
import { buyTicketStyles } from '../styles';
import { CloseButton } from 'components';
import { noImage } from '../../core';
import { dateConverter } from '../../../../../utils/dateConverter';
import { ticketActions } from '../../../../../store';
import { useDispatch } from 'react-redux';

export const TicketEvent = ({ onClose, event, selectedTickets }) => {
    const classes = buyTicketStyles();
    const dispatch = useDispatch();
    const [total, setTotal] = useState(null);

    useEffect(() => {
        if (selectedTickets) {
            let totalPrice = 0;
            let totalCount = 0;
            selectedTickets?.map((i) => {
                (totalPrice = totalPrice + i?.price * i?.count), (totalCount = totalCount + i?.count);
            });
            setTotal({
                totalAmount: totalPrice,
                totalCount: totalCount,
            });
            dispatch(
                ticketActions.saveTotal({
                    totalAmount: totalPrice,
                    totalCount: totalCount,
                })
            );
        }
    }, [selectedTickets]);

    return (
        <div className={classes.ticketEventWrapper}>
            <div className={classes.closeButton}>
                <CloseButton handleClick={onClose} type={'info'} background={'#00000066 0% 0% no-repeat padding-box'} />
            </div>
            <div className={classes.ticketEventBodyWrapper}>
                <div className={classes.eventImageAndTitle}>
                    <img
                        className={classes.eventImage}
                        src={event?.images?.length > 0 ? event.images[event.eventImage ? event.eventImage : 0].url : noImage.lgJPG}
                        alt="icon"
                    />
                    <div>
                        <p className={classes.eventTitle}>{event?.title}</p>
                        <p className={classes.orderSummary}>Order Summary</p>
                    </div>
                </div>

                <div className={classes.eventInfo}>
                    <div className={classes.titleAndInfo}>
                        <p>Date</p>
                        <span>
                            {/*{multiConverter(event.startDate, event.startTime, event.timezoneOffset, 'LLLL')}*/}
                            {dateConverter(event)}
                        </span>
                        {/*<span>{moment(event?.startDate).format('LLLL')}</span>*/}
                    </div>
                    <div className={classes.titleAndInfo}>
                        <p>Time</p>
                        <span>{event?.allDay ? 'All Day' : dateConverter(event, 'LT')}</span>
                    </div>
                    <div className={classes.titleAndInfo}>
                        <p>Location</p>
                        <span>{event?.address?.formattedAddress ? event?.address?.formattedAddress : 'Not Set'}</span>
                    </div>
                    {/*<div className={classes.titleAndInfo}>*/}
                    {/*    <p>Location</p>*/}
                    {/*    <span>Grand Point Hall</span>*/}
                    {/*</div>*/}
                </div>

                {selectedTickets?.length ? (
                    <div className={classes.eventInfo}>
                        {selectedTickets?.map((i, j) => (
                            <div key={j} className={classes.titleAndInfo}>
                                <p>{`${i?.count} x ${i?.name}`}</p>
                                <span>$ {i?.price * i?.count}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    ''
                )}

                <div style={{ marginTop: '16px' }}>
                    <div className={classes.titleAndInfo}>
                        <p>Total Tickets</p>
                        <span>x {total?.totalCount ? total?.totalCount : 0}</span>
                    </div>
                    <div className={classes.titleAndInfo}>
                        <p>Total Amount</p>
                        <span>$ {total?.totalAmount ? total?.totalAmount : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
