import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyTicketStyles } from './styles';
import { TicketCategory, TicketEvent, DoneScreen, CardTypes, CompletePayment } from './core';
import { httpRequestsOnSuccessActions, paymentActions, ticketActions } from 'store';
import { FindSuccess } from 'utils';
import { CloseButton } from 'components';

const ACTION_TYPE = 'BUY_TICKET';

export const BuyTicket = ({ eventTickets, onClose, event }) => {
    const classes = buyTicketStyles();
    const dispatch = useDispatch();
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [screenType, setScreenType] = useState('tickets');
    const success = FindSuccess(ACTION_TYPE);

    useEffect(() => {
        if (success?.length) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess(ACTION_TYPE));
            setScreenType('done');
        }
    }, [success]);

    useEffect(() => {
        dispatch(paymentActions.getCurrentCard());
        dispatch(ticketActions.removeTotal());
    }, []);

    const changeScreen = (type) => {
        setScreenType(type);
    };
    return (
        <div className={classes.buyTicketWrapper}>
            {screenType !== 'done' && (
                <div className={classes.flexEndMobile}>
                    <div className={classes.closeButton}>
                        <CloseButton handleClick={onClose} type={'info'} background={'#00000066 0% 0% no-repeat padding-box'} />
                    </div>
                </div>
            )}
            {screenType !== 'done' && (
                <div className={classes.ticketCategoryWrapper}>
                    {screenType === 'tickets' ? (
                        <TicketCategory
                            eventTickets={eventTickets}
                            setSelectedTickets={setSelectedTickets}
                            selectedTickets={selectedTickets}
                            changeScreen={changeScreen}
                            event={event}
                        />
                    ) : screenType === 'paymentTypes' ? (
                        <CardTypes changeScreen={changeScreen} selectedTickets={selectedTickets} />
                    ) : screenType === 'completePayment' ? (
                        <CompletePayment selectedTickets={selectedTickets} />
                    ) : (
                        ''
                    )}
                </div>
            )}
            {screenType !== 'done' && <TicketEvent onClose={onClose} event={event} selectedTickets={selectedTickets} />}

            {screenType === 'done' && <DoneScreen onClose={onClose} tickets={selectedTickets} event={event} />}
        </div>
    );
};
