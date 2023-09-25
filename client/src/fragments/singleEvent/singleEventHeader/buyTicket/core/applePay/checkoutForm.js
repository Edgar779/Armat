import React, { useState, useEffect } from 'react';
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

export const CheckoutForm = () => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);

    const { itemTotal } = useSelector((state) => ({
        itemTotal: state.tickets.itemTotal,
    }));

    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Total',
                    amount: itemTotal?.totalAmount,
                },
                requestPayerName: false,
                requestPayerEmail: true,
            });

            console.log(pr, 'pr pr');
            pr.canMakePayment().then((result) => {
                if (result) {
                    console.log(result, 'result');
                    setPaymentRequest(pr);
                }
            });
        }
    }, [stripe]);

    // paymentRequest.on('paymentmethod', async (ev) => {
    //     // Confirm the PaymentIntent without handling potential next actions (yet).
    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    //         // clientSecret,
    //         { payment_method: ev.paymentMethod.id },
    //         { handleActions: false }
    //     );
    //
    //     if (confirmError) {
    //         // Report to the browser that the payment failed, prompting it to
    //         // re-show the payment interface, or show an error message and close
    //         // the payment interface.
    //         console.log('failll');
    //         ev.complete('fail');
    //     } else {
    //         // Report to the browser that the confirmation was successful, prompting
    //         // it to close the browser payment method collection interface.
    //         console.log('failll');
    //         ev.complete('success');
    //         // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
    //         // handle the flow. If using an API version older than "2019-02-11"
    //         // instead check for: `paymentIntent.status === "requires_source_action"`.
    //         if (paymentIntent.status === 'requires_action') {
    //             console.log('requires_action');
    //             // Let Stripe.js handle the rest of the payment flow.
    //             const { error } = await stripe.confirmCardPayment();
    //             if (error) {
    //                 console.log('The payment failed');
    //                 // The payment failed -- ask your customer for a new payment method.
    //             } else {
    //                 console.log('The payment succeeded');
    //                 // The payment has succeeded -- show a success message to your customer.
    //             }
    //         } else {
    //             // The payment has succeeded -- show a success message to your customer.
    //         }
    //     }
    // });

    if (paymentRequest) {
        return <PaymentRequestButtonElement options={{ paymentRequest }} />;
    }

    // Use a traditional checkout form.
    return '';
};
