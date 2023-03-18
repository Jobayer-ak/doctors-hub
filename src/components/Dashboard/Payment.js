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
    return <Loader />;
  }
  // console.log(data.appointment);

  return (
    <div className="w-[83%] mx-4 my-4 p-4 bg-[#23075e] w-full flex justify-around">
      <div className="max-w-md rounded-md bg-[#1e2148] shadow-xl text-white">
        <div className="p-5">
          <h3 className="text-[#13bab9] font-bold text-2xl text-center mb-4">
            Payment Summary
          </h3>
          <p className="text-xl">
            Hello, {data.appointment.patient_name} <br /> Your appointment
            information:
          </p>
          <div className='bg-[#242852] px-4 pt-1 pb-2 mt-4 rounded-md'>
            <h2 className="card-title mt-4">{data.appointment.doctor_name}</h2>
            <p className="italic">{data.appointment.speciality} specialist</p>
            <hr className='my-2'/>
            <p>Branch: {data.appointment.branch}</p>
            <p>
              Your appointment on{' '}
              {format(new Date(data.appointment.date), 'PP')} at{' '}
              {data.appointment.slot}
            </p>
            <p>Please Pay: ${data.appointment.fee}</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] rounded-md max-w-md shadow-2xl bg-[#1e2148]">
        <div className="p-4">
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
  );
};

export default Payment;
