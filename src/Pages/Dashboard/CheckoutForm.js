import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({ parts }) => {

  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState('');

  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice } = parts;




  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice }),
    })
    console.log(fetch)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log('ami ', data.clientSecret)
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)

        }

      });



  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    }
    else {
      setCardError('');
    }

  }
  return (
    <>

      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>
        </form>

      </div>

      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }

    </>

  );
};

export default CheckoutForm;