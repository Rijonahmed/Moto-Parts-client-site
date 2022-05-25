import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements()

  const [cardError, setCardError] = useState('');

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
          <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
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