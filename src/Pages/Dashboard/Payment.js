import React from 'react';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3PZ2CCygQfLdXCV8seUCvdM3YqHSOOpz6OytrW6HvoXtN0bXgaWg6Bwqvj81Nqdu8dTdsADpBwgsk4PUMr8Gpm00WBfCn8h3');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`

  const { data: parts, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',

  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>


      <div class="m-5">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 class="text-xl font-bold">Product Name : {parts.partsNmae}</h1>
            <p className='text-xl'>Total Price : {parts.totalPrice}</p>




          </div>
          <div className='mx-4'>
            <h1 class="text-4xl font-bold pb-10 text-center">My Profile...</h1>

            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>



          </div>
        </div>
      </div>

    </div>
  );
};

export default Payment;