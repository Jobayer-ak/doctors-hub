import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import baseURL from '../../utils/baseURL';

const CheckOutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const {
    patient_name,
    patient_email,
    doctor_name,
    speciality,
    date,
    slot,
    branch,
    fee,
  } = data.appointment;

  useEffect(() => {
    console.log(fee);

    baseURL
      .post(
        `/create-payment-intent`,
        { fee },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data?.clientSecret) {
          console.log('res: ', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        }
      })
      .catch((error) => console.log(error));
  }, [fee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    console.log('Payment Method: ', paymentMethod);
    console.log('client Secret: ', clientSecret);

    setCardError(error?.message || '');
    setSuccess('');

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient_name,
            email: patient_email,
          },
        },
      });

    console.log('Payment intent: ', paymentIntent);

    if (intentError) {
      setCardError(intentError.message);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);

      setTransactionId(paymentIntent.id);

      setSuccess('Your payment has done!');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <img src={image} alt=""/> */}
        <CardElement
          className="p-4"
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

        <button
          type="submit"
          className="bg-green-700 px-2 py-1"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700">{cardError}</p>}
      {success && <div className="text-green-700">
      <p>  {success}</p>
        <p> Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span> </p>
      </div>}
    </div>
  );
};

export default CheckOutForm;
