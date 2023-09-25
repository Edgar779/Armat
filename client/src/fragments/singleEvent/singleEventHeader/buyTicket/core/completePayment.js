import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { Elements } from '@stripe/react-stripe-js';
import { buyTicketStyles } from '../styles';
import { Icon, MiniLoader } from 'components';
import { SVGNames } from '../../../../../constants';
import { Radio } from '@material-ui/core';
import { StripeCard } from './stripeCard';
import { ticketActions } from 'store';
import { FindLoad } from 'utils';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PKEY
    // 'sk_test_51LmCY4HoKYb9ljrZKNqe6e09viQy6YyhrCacRyveuyi3AuJ42XVZ0U9pjogWtHUe9dezEd6GzJKpLd984lYhpqfL00oHptE7td'
    //   'pk_test_51M7m33GcA4XaWRFSUfLrnR9QB9MhgGGdFRmLMjmjjHJdZXm2PbHEEqPhpOQGdw1v9pOOBzql2F7I4uJrIDaS0SrB00FuUYXY2G'

    // 'pk_test_51LmCY4HoKYb9ljrZoGdppsVebwpoEdy464xiqERqYUD69cenEagijTovG6OFvaL71GCNMlm5v2yfpFnNWFlEgZoA00toGW6jzS'
);

export const CompletePayment = ({ selectedTickets }) => {
    const { currentCard, accessToken } = useSelector((state) => ({
        currentCard: state.payments.currentCard,
        accessToken: state.auth.accessToken,
    }));
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');
    const classes = buyTicketStyles();
    const [checked, setChecked] = useState(null);
    const dispatch = useDispatch();
    const loader = FindLoad('BUY_TICKET');
    const router = useRouter();

    useEffect(() => {
        if (!currentCard) {
            setChecked('newCard');
        }
    }, []);

    const handlePay = (email) => {
        let ticketList = [];
        selectedTickets?.map((i) =>
            ticketList.push({
                ticketId: i?.id,
                count: i?.count,
            })
        );
        if (token) {
            dispatch(ticketActions.buyTicket({ tickets: ticketList, eventId: router.query.eventid }, router.query.eventid));
        } else {
            dispatch(
                ticketActions.buyTicketNoToken({ tickets: ticketList, email: email, eventId: router.query.eventid }, router.query.eventid)
            );
        }
        ticketList = [];
    };

    return (
        <>
            <div className={classes.spaceBetween}>
                <div>
                    <p className={classes.choseTicketTitle}>Checkout</p>
                    <div className={classes.ticketsWrapper}>
                        <p className={classes.selectTMethodTitle}>Payment Details</p>
                        <p className={classes.savedCardOr}>
                            {currentCard?.card ? 'Choose Your Payment Method: Use Your Saved Card or Add a New One' : ''}
                        </p>
                    </div>
                    {currentCard?.card && (
                        <div
                            style={{ background: checked === 'current' ? '#FAFAFA' : 'transparent' }}
                            className={classes.paymentDetailCardWrapper}
                            onClick={() => setChecked('current')}>
                            <div className={classes.flexAble}>
                                <Icon
                                    name={
                                        currentCard?.card === 'visa'
                                            ? SVGNames.VisaCard
                                            : currentCard?.card === 'mastercard'
                                            ? SVGNames.MasterCard
                                            : ''
                                    }
                                    width={'40px'}
                                    height={'40px'}
                                />
                                <div className={classes.cardInformationWrapper}>
                                    <p className={classes.cardTypeText}>
                                        {currentCard?.card === 'visa'
                                            ? 'Visa Card'
                                            : currentCard?.card === 'mastercard'
                                            ? 'Master Card'
                                            : ''}
                                    </p>
                                    <div className={classes.cardInformationText}>
                                        <p>{`**** **** **** ${currentCard?.last4}`} </p>
                                        <p>{`${currentCard?.exp_month}/${currentCard?.exp_year}`}</p>
                                    </div>
                                </div>
                            </div>
                            <Radio style={{ color: '#49B776' }} checked={checked === 'current'} />
                        </div>
                    )}
                    {checked !== 'newCard' && (
                        <div
                            style={{ background: checked === 'newCard' ? '#FAFAFA' : 'transparent' }}
                            className={classes.newCardWrapper}
                            onClick={() => setChecked('newCard')}>
                            <div className={classes.newCardWrapperHead}>
                                <div className={classes.cardInformationWrapper} style={{ marginLeft: '0' }}>
                                    <p className={classes.cardTypeText}>+ Add New Card</p>
                                </div>
                                <Radio style={{ color: '#49B776' }} checked={checked === 'newCard'} />
                            </div>
                        </div>
                    )}
                    {checked === 'newCard' && (
                        <div style={{ width: '100%' }}>
                            <Elements stripe={stripePromise}>
                                <StripeCard handlePay={handlePay} currentCard={currentCard} backLoader={loader} />
                            </Elements>
                        </div>
                    )}
                </div>
                {checked === 'current' && (
                    <div className={classes.continueBtnWrapper}>
                        <button
                            disabled={!checked}
                            className={classes.completeBtn}
                            style={!checked ? { background: '#F4F4F4' } : {}}
                            onClick={handlePay}>
                            {loader?.length ? <MiniLoader color={'white'} position={'relative'} /> : 'Complete Payment'}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
