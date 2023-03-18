import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import baseURL from '../../utils/baseURL';

const CheckOutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const {
    _id,
    patient_name,
    patient_email,
    doctor_name,
    speciality,
    date,
    slot,
    branch,
    fee,
  } = data.appointment;

  console.log('From appointment: ', data.appointment);

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
    setProcessing(true);

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
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);

      setTransactionId(paymentIntent.id);

      // store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      await baseURL
        .patch(
          `/booking/${_id}`,
          { payment },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setProcessing(false);
          console.log(res.data);
        })
        .catch((error) => console.log(error));

      setSuccess('Your payment is done!');
    }
  };
  return (
    <div className="bg-[#242852] px-4 py-4 mx-2 rounded-md">
      <div>
        <form onSubmit={handleSubmit}>
          {/* <img src={image} alt=""/> */}
          <CardElement
            className="pt-4 pb-6"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
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

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#722ed1] text-white font-bold px-4 py-1 rounded-md"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
          </div>
        </form>
        {cardError && (
          <p className="text-red-700 text-center mt-4">{cardError}</p>
        )}
        {success && (
          <div className="text-green-700 text-center mt-4">
            <p> {success}</p>
            <p>
              {' '}
              Your Transaction Id:{' '}
              <span className="text-orange-500 font-bold">
                {transactionId}
              </span>{' '}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOutForm;
