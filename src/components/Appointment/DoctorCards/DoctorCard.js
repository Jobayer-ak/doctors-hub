import React, { useState } from 'react';
import baseURL from '../../../utils/baseURL';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import { Dna, Puff, Triangle } from 'react-loader-spinner';
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
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <Dna
          visible={true}
          height="60"
          width="60"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  console.log('doctor: ', data);

  // console.log(doctor);

  return (
    <div>
      <div className="rounded-md w-full h-[300px] bg-[#4a1a98] shadow-xl">
        <div className="px-3 py-2 text-white">
          <div className="flex justify-between items-center gap-4 mb-3">
            <div className="w-full">
              <h3 className="text-xl font-bold text-[#f39896]">{doctor.name}</h3>
              <p className="italic">{doctor.higher_degree}</p>
            </div>
            <div className="w-1/2">
              <img src={doctor.imageURL} alt="" className="rounded-full" />
            </div>
          </div>
          <hr className="border-solid border-1 border-[#722ED1] my-2 " />
          <div className='mb-4'>
            <p className="italic">{doctor.speciality}</p>

            <p className="text-[14px]">{doctor.working_hospital}</p>
            <p className="text-[20px py-2">
              Fee: <span className="">${doctor.fee}</span>
            </p>
          </div>

          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-3"
              className="bg-[#f68685] text-[#381f6e] rounded-sm hover:bg-slate-500 hover:text-white border-none p-2 outline-0 cursor-pointer"
              onClick={() => setDocinfo(doctor)}
            >
              Make Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
