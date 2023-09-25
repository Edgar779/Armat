import React, { useState } from 'react';
import { Radio } from '@material-ui/core';
import { buyTicketStyles } from '../styles';
import { Icon } from 'components';
import { SVGNames } from '../../../../../constants';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './applePay/checkoutForm';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PKEY
    // 'pk_test_51LmCY4HoKYb9ljrZoGdppsVebwpoEdy464xiqERqYUD69cenEagijTovG6OFvaL71GCNMlm5v2yfpFnNWFlEgZoA00toGW6jzS'
);

export const CardTypes = ({ changeScreen }) => {
    const classes = buyTicketStyles();
    const [checked, setChecked] = useState(null);

    return (
        <>
            <div>
                <p className={classes.choseTicketTitle}>Checkout</p>
                <div className={classes.ticketsWrapper}>
                    <p className={classes.selectTMethodTitle}>Select Payment Method</p>
                </div>
                <div className={classes.paymentTypeSelector}>
                    <div
                        onClick={() => setChecked('debit')}
                        style={{ background: checked === 'debit' ? '#FAFAFA' : 'transparent', marginBottom: '16px' }}
                        className={classes.paymentMethodWrapper}>
                        <div className={classes.paymentMethodIconTitle}>
                            <div className={classes.paymentIcon}>
                                <Icon name={SVGNames.CreditCard} style={{ marginRight: '8px' }} />
                            </div>
                            <p>Pay with Debit or Credit Card</p>
                        </div>
                        <Radio style={{ color: '#49B776' }} checked={checked === 'debit'} />
                    </div>

                    <div style={{ marginBottom: '8px' }}>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
            <div className={classes.continueBtnWrapper}>
                <button
                    disabled={!checked}
                    className={classes.continueBtn}
                    style={!checked ? { background: '#F4F4F4' } : {}}
                    onClick={() => changeScreen('completePayment')}>
                    Continue
                </button>
            </div>
        </>
    );
};
