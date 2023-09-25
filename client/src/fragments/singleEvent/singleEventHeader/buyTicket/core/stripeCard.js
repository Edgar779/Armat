import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Checkbox, Radio } from '@material-ui/core';
import { Colors } from 'utils';
import { checkoutStyles } from '../../../../checkoutForm/styles';
import { buyTicketStyles } from '../styles';
import { MiniLoader } from 'components';
import { useSelector } from 'react-redux';

const cardElementOptions = {
    style: {
        base: {
            color: '#666',
            fontSize: '16px',
        },
        invalid: {
            color: '#fa755a',
            fontSize: '16px',
        },
    },
};

export const StripeCard = ({ handlePay, currentCard, backLoader }) => {
    const [cardError, setCardError] = useState('');
    const [loader, setLoader] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkoutError, setCheckoutError] = useState();
    const [email, setEmail] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const cardClasses = checkoutStyles();
    const classes = buyTicketStyles();
    const { accessToken } = useSelector((state) => ({
        accessToken: state.auth.accessToken,
    }));
    const token = accessToken ? accessToken : typeof window !== 'undefined' && localStorage.getItem('access-token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        setCardError('');
        try {
            const paymentMethod = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement('card'),
            });

            if (token) {
                await axios
                    .post('/payments/pmtMethod', null, {
                        params: { pmMethodId: paymentMethod?.paymentMethod?.id },
                        auth: true,
                    })
                    .then(() => {
                        handlePay(email);
                        setLoader(false);
                    })
                    .catch((e) => {
                        setCardError(e?.data?.message);
                        setLoader(false);
                    });
            } else {
                handlePay(email);
                setLoader(false);
            }
        } catch (err) {
            setCheckoutError(err.message);
            setLoader(false);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <form onSubmit={handleSubmit} className={classes.addCardForm}>
                <div style={{ background: '#FAFAFA' }} className={classes.newCardWrapper}>
                    <div className={classes.newCardWrapperHead} style={{ marginTop: '4px' }}>
                        <div className={classes.cardInformationWrapper} style={{ marginLeft: '0' }}>
                            <p className={classes.cardTypeText}>+ Add New Card</p>
                        </div>
                        {currentCard?.card ? <Radio style={{ color: '#49B776' }} checked={true} /> : null}
                    </div>

                    {!token && (
                        <>
                            <p style={{ marginTop: '24px' }} className={cardClasses.cardTitle}>
                                {'Email*'}
                            </p>
                            <div className={cardClasses.cardEmailInput}>
                                <input type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </>
                    )}

                    <p style={{ marginTop: '12px' }} className={cardClasses.cardTitle}>
                        {'Card Number'}
                    </p>
                    <div className={cardClasses.cardInputWrapper}>
                        <CardElement options={cardElementOptions} />
                    </div>
                    {checkoutError && <span style={{ color: 'red', fontSize: '12px' }}>{checkoutError}</span>}

                    {cardError && (
                        <p style={{ color: '#fa755a', marginTop: '10px' }}>
                            {cardError === "Can not create customer Error: Your card's security code is incorrect."
                                ? "Your card's security code is incorrect."
                                : cardError === 'Can not create customer Error: Your card has expired.'
                                ? 'Your card has expired.'
                                : cardError ===
                                  'Can not create customer Error: An error occurred while processing your card. Try again in a little bit.'
                                ? 'An error occurred while processing your card. Try again in a little bit.'
                                : cardError === 'Can not create customer Error: Your card was declined.'
                                ? 'Your card was declined.'
                                : cardError ===
                                  'This customer has no attached payment source or default payment method. Please consider adding a default payment method. For more information, visit https://stripe.com/docs/billing/subscriptions/payment-methods-setting#payment-method-priority.'
                                ? 'Input is not field'
                                : cardError}
                        </p>
                    )}
                    <div className={cardClasses.checkboxWrapper}>
                        <Checkbox
                            style={{ color: Colors.ThemeGreen }}
                            checked={checked}
                            name="available"
                            onClick={() => setChecked(!checked)}
                        />
                        <p className={cardClasses.acceptText}>
                            I accept the Armat
                            <a href="/termAndCondition" className={cardClasses.linkText}>
                                Terms of Service.
                            </a>
                        </p>
                    </div>
                </div>

                <div className={classes.continueBtnWrapper}>
                    <button
                        className={classes.completeBtn}
                        type="submit"
                        style={checked === false ? { background: '#F4F4F4' } : {}}
                        disabled={checked === false}>
                        {loader || backLoader?.length ? <MiniLoader color={'white'} position={'relative'} /> : 'Complete Payment'}
                    </button>
                </div>
            </form>
        </div>
    );
};
