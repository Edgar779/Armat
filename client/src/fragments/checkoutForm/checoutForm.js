// import React, { useState, useEffect } from 'react';
// import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';
//
// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const [paymentRequest, setPaymentRequest] = useState(null);
//
//     useEffect(() => {
//         if (stripe) {
//             const pr = stripe.paymentRequest({
//                 country: 'US',
//                 currency: 'usd',
//                 total: {
//                     label: 'Demo total',
//                     amount: 1099,
//                 },
//                 requestPayerName: true,
//                 requestPayerEmail: true,
//             });
//
//             // Check the availability of the Payment Request API.
//             pr.canMakePayment().then((result) => {
//                 if (result) {
//                     setPaymentRequest(pr);
//                 }
//             });
//         }
//     }, [stripe]);
//
//     if (paymentRequest) {
//         return <PaymentRequestButtonElement options={{ paymentRequest }} />;
//     }
//
//     // Use a traditional checkout form.
//     return 'Insert your form or button component here.';
// };
//
//

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CloseButton, MiniLoader } from 'components';
import { checkoutStyles } from './styles';
import { Checkbox } from '@material-ui/core';
import { Colors } from 'utils';
import { paymentActions } from 'store';

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

const CheckoutForm = ({ query, onClose }) => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const classes = checkoutStyles();

    const [checkoutError, setCheckoutError] = useState();
    const [loader, setLoader] = useState(false);
    const [cardError, setCardError] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSetChecked = () => {
        setChecked(!checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        setCardError('');

        try {
            const paymentMethod = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement('card'),
            });

            await axios
                .post('/payment/pmtMethod', null, { params: { pmMethodId: paymentMethod?.paymentMethod?.id }, auth: true })
                .then(() => {
                    dispatch(paymentActions.getCurrentCard());
                    onClose();
                    setLoader(false);
                    // dispatch(menusActions.getUserActivePlane(userInfo?.id));
                    // const inter = setInterval(() => {
                    //     services.getSubscription().then((res) => {
                    //         setLoader(false);
                    //
                    //         // dispatch(paymentActions.getMyPackage());
                    //         // dispatch(menusActions.getUserActivePlane(userInfo?.id));
                    //
                    //         if (query) {
                    //             router.push('/payment');
                    //         } else {
                    //             // open(MODAL_NAMES.CHECK_PAYMENT_HELPER);
                    //         }
                    //         clearInterval(inter);
                    //     });
                    // }, 2000);
                })
                .catch((e) => {
                    setCardError(e?.data?.message);
                    setLoader(false);
                });
        } catch (err) {
            setCheckoutError(err.message);
            setLoader(false);
        }
    };

    return (
        <div className="form-wrapper">
            <div className={classes.closeButton}>
                <CloseButton handleClick={onClose} color={'#2A374E'} background={'#F5F5F5'} />
            </div>
            <p className={classes.addCardTitle}>Add Card</p>
            <form onSubmit={handleSubmit} className={classes.addCardForm}>
                <div>
                    <p className={classes.cardTitle}>{'Card Number'}</p>
                    <div className={classes.cardInputWrapper}>
                        <CardElement options={cardElementOptions} />
                    </div>
                    {checkoutError && <span style={{ color: 'red', fontSize: '12px' }}>{checkoutError}</span>}
                </div>
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
                <div className={classes.checkboxWrapper}>
                    <Checkbox style={{ color: Colors.ThemeGreen }} checked={checked} name="available" onClick={() => handleSetChecked()} />
                    <p className={classes.acceptText}>
                        I accept the Armat
                        <a href="/termAndCondition" className={classes.linkText}>
                            Terms of Service.
                        </a>
                    </p>
                </div>
                <div className={classes.buttonsWrapper}>
                    <button onClick={onClose} className={classes.cancelButton} type={'button'}>
                        {'Cancel'}
                    </button>
                    <button
                        className={classes.addButton}
                        type="submit"
                        style={checked === false ? { background: 'gray' } : {}}
                        disabled={checked === false}>
                        {loader ? <MiniLoader color={'white'} /> : query ? 'Save' : 'Pay'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
