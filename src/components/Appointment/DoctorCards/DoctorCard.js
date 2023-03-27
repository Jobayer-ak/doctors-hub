import React, { useState } from 'react';
import baseURL from '../../../utils/baseURL';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import { Puff, Triangle } from 'react-loader-spinner';
import Loader from '../../common/Loading/Loader';

const DoctorCard = ({ date, doctor, setDocinfo }) => {
  const formatedDate = format(date, 'PP');
  // console.log("date: ", formatedDate);

  const { data, isLoading, refetch } = useQuery(
    ['available', formatedDate],
    async () => {
      const res = await baseURL.get(`/doctors/slots?date=${formatedDate}`, {
        withCredentials: true,
      });
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);

  // console.log(doctor);1

  return (
    <div>
      <div className="rounded-md w-full h-[220px] md:w-[100%] bg-[#4a1a98] shadow-xl">
        <div className="px-4 py-2 text-white">
          <h3 className="text-xl">{doctor.name}</h3>
          <p className="italic">{doctor.higher_degree}</p>
          <hr className="border-solid border-1 border-[#722ED1] my-2 " />
          <p className="italic">{doctor.speciality}</p>

          <p className="text-[14px]">{doctor.working_hospital}</p>
          <p className="text-[20px] italic">
            Fee: <span className="">${doctor.fee}</span>
          </p>

          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-3"
              className="text-white cursor-pointer bg-[#0a062c] px-2 py-2 rounded-md mt-2 inline-block"
              onClick={() => setDocinfo(doctor)}
            >
              Booking Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
