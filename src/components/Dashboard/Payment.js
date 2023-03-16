import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { format } from "date-fns";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import baseURL from "../../utils/baseURL"; 
import Loader from "../common/Loading/Loader";

const stripePromise = loadStripe(
  "pk_test_51LSbBsHNAh9QmIhmJrxmXeNGOCbnpqoJzijZbqw6Mt6f2xMvYbZ0ugrb708DdIVQoFbnUJGfAovtJaw7KRZl29Rg00pYWLyJWO"
);

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading} = useQuery(
    ["payment", id],
    async () => {
      const res = await baseURL.get(
        `/booking/${id}`,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <Loader />;
  }
  // console.log(data.appointment);

  return (
    <div className="w-[83%] mx-4 my-4 p-4 bg-[#23075e] w-full flex justify-center gap-10">
      <div className="card max-w-md rounded-md bg-base-100 shadow-xl ">
        <div className="p-5">
          <h3 className="font-bold text-xl text-center mb-4">
            Payment Summary
          </h3>
          <p className="text-xl">
            Hello, {data.appointment.patient_name} <br /> Your appointment
            information:
          </p>
          <h2 className="card-title mt-4">{data.appointment.doctor_name}</h2>
          <p className="italic">{data.appointment.speciality} specialist</p>
          <p>Branch: {data.appointment.branch}</p>
          <p>
            Your appointment on {format(new Date(data.appointment.date), "PP")}{" "}
            at {data.appointment.slot}
          </p>
          <p>Please Pay: ${data.appointment.fee}</p>
        </div>
      </div>
      <div className="card rounded-md w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm data={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
