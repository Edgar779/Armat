// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
//
// import CheckoutForm from './checoutForm';
//
// // Make sure to call `loadStripe` outside of a component's render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
//
// function App() {
//     return (
//         <Elements stripe={stripePromise}>
//             <CheckoutForm />
//         </Elements>
//     );
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));
//

import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checoutForm';
// import { PayInfo } from 'fragments';
// import CheckoutForm from 'fragments/sections/payments/checkoutForm';
// import { CheckoutContainer } from 'fragments/sections/payments/styles';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PKEY
    // 'sk_test_51LmCY4HoKYb9ljrZKNqe6e09viQy6YyhrCacRyveuyi3AuJ42XVZ0U9pjogWtHUe9dezEd6GzJKpLd984lYhpqfL00oHptE7td'
    //   'pk_test_51M7m33GcA4XaWRFSUfLrnR9QB9MhgGGdFRmLMjmjjHJdZXm2PbHEEqPhpOQGdw1v9pOOBzql2F7I4uJrIDaS0SrB00FuUYXY2G'

    // 'pk_test_51LmCY4HoKYb9ljrZoGdppsVebwpoEdy464xiqERqYUD69cenEagijTovG6OFvaL71GCNMlm5v2yfpFnNWFlEgZoA00toGW6jzS'
);

const CheckoutPage = ({ onClose }) => {
    const route = useRouter();

    return (
        <div>
            <div className="checkout-container-wrapper">
                <Elements stripe={stripePromise}>
                    <CheckoutForm query={route?.query?.editCard} onClose={onClose} />
                </Elements>
                {/*{!route?.query?.editCard && (*/}
                {/*    <div>*/}
                {/*        <PayInfo checked={checked} setChecked={handleSetChecked} />*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default CheckoutPage;
