import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import image from "../../assets/images/contact.jpg";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

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
    // if (error) {
    //   setCardError(error.message);
    //   console.log("[error]", error);
    // } else {
    //   setCardError("");
    //   console.log("[PaymentMethod]", paymentMethod);
    // }
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
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700">{cardError}</p>}
    </div>
  );
};

export default CheckOutForm;
