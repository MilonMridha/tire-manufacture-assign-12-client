import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L197DIQrfpS93HURjAE4fzdmFmaec8dpMs9GnIc3Fbigyfo1GXbFmbK894wZE4j4MFxLEQG6TR9fMnq4pPoMYEV004KUqPKhm');

const Payment = () => {
    const { id } = useParams()

    const url = `https://dry-sea-91165.herokuapp.com/order/${id}`;

    const { data: payBooking, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
    // const { name, address, email, quantity } = payBooking;
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Payment</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'> Hello, {payBooking.name}</p>
                    <h2 class="card-title">Pay for your order quantity : {payBooking.quantity}</h2>
                    <p> Your address {payBooking.address}. We will delivered it soon</p>

          </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payBooking={payBooking} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;