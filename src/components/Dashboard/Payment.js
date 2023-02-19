import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51LSbBsHNAh9QmIhmJrxmXeNGOCbnpqoJzijZbqw6Mt6f2xMvYbZ0ugrb708DdIVQoFbnUJGfAovtJaw7KRZl29Rg00pYWLyJWO"
);

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useQuery(
    ["payment", id],
    async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/booking/${id}`,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h2 className="text-white text-xl">Loading...</h2>;
  }
  console.log(data.appointment);

  return (
    <div className="mx-4 my-4 p-4 bg-[#23075e] w-full">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-xl">
            Hello, {data.appointment.patient_name} <br /> your appointment
            information:
          </p>
          <h2 className="card-title">{data.appointment.doctor_name}</h2>
          <p className="italic">{data.appointment.speciality} specialist</p>
          <p>Branch: {data.appointment.branch}</p>
          <p>
            Your appointment on {format(new Date(data.appointment.date), "PP")}{" "}
            at {data.appointment.slot}
          </p>
          <p>Please Pay: ${data.appointment.fee}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
