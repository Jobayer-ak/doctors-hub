import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { format } from 'date-fns';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import baseURL from '../../utils/baseURL';
import Loader from '../common/Loading/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import visaCard from '../../assets/card/icons8-visa-card-67.png';
import masterCard from '../../assets/card/icons8-credit-card-67.png';
import { Dna } from 'react-loader-spinner';

const stripePromise = loadStripe(
  'pk_test_51LSbBsHNAh9QmIhmJrxmXeNGOCbnpqoJzijZbqw6Mt6f2xMvYbZ0ugrb708DdIVQoFbnUJGfAovtJaw7KRZl29Rg00pYWLyJWO'
);

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(['payment', id], async () => {
    const res = await baseURL.get(`/booking/${id}`, {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return  <div className="flex justify-center items-center w-full lg:w-[83%] bg-[#23075e] ml-0 lg:ml-1 h-[100vh]">
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>;
  }
  // console.log(data.appointment);

  return (
    <div className="w-full lg:w-[83%] ml-0 lg:ml-1">
      <div className="bg-[#23075e] min-h-screen lg:flex lg:justify-around lg:py-4">
        <div className="lg:w-[50%] rounded-md bg-[#1e2148] shadow-xl text-white p-4">
          <h3 className="text-[#13bab9] text-center font-bold text-2xl my-4">
            Payment Summary
          </h3>
          <p className="text-xl py-4">
            Hello, {data.appointment.patient_name} <br /> Your appointment
            information:
          </p>
          <div className="bg-[#242852] mt-4 rounded-md px-6 pt-4 pb-6">
            <h2 className="text-xl mt-4">{data.appointment.doctor_name}</h2>
            <p className="italic">{data.appointment.speciality} specialist</p>
            <hr className="mt-2" />
            <p className="pt-4">Branch: {data.appointment.branch}</p>
            <p>
              Your appointment on{' '}
              {format(new Date(data.appointment.date), 'PP')} at{' '}
              {data.appointment.slot}
            </p>
            <p>Please Pay: ${data.appointment.fee}</p>
          </div>
        </div>
        <div className="lg:w-[90%] lg:max-w-md rounded-md mt-12 lg:mt-0 shadow-2xl bg-[#1e2148] pb-6 md:pb-0 md:py-12 lg:py-4">
          <div className="w-full px-4 py-6 md:py-12 lg:py-6">
            <h2 className="text-[#13bab9] text-center mb-4 text-2xl">
              Great! That's ${data.appointment.fee}!
            </h2>
            <div className="flex justify-between items-center">
              <div className="text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleDot} size="lg" />
                <h2 className="text-white font-bold text-xl">
                  Debit/Credit Card
                </h2>
              </div>

              <div className="flex justify-center items-center gap-2">
                <img src={visaCard} alt="" className="" />
                <img src={masterCard} alt="" className="" />
              </div>
            </div>
          </div>

          <Elements stripe={stripePromise}>
            <CheckOutForm data={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
