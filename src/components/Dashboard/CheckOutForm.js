import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import image from "../../assets/images/contact.jpg";
import axios from "axios";

const CheckOutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // console.log(data.appointment.fee);

    axios
      .post(
        `https://doctors-hub-server.vercel.app/api/v1/create-payment-intent`,
        data.appointment.fee,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
  }, [data.appointment.fee]);

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
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

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

    if (intentError) {
      setCardError(intentError.message);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setSuccess("Your payment is completed!");
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
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
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
      {success && <p className="text-green-700">{success}</p>}
    </div>
  );
};

export default CheckOutForm;
