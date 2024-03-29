import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Booking from './Booking/Booking';
import baseURL from '../../../utils/baseURL';
import { Dna } from 'react-loader-spinner';

const DoctorCards = ({ selectedCity, date, setNewBooking }) => {
  const [curDepartment, setCurDepartment] = useState('All');
  const formatedDate = format(date, 'PP');
  const [active, setActive] = useState('All');
  const [docinfo, setDocinfo] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery(['doctor', date], async () => {
    const res = await baseURL.get(`/doctors/slots?date=${formatedDate}`, {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  const doctorArray = [
    'All',
    ...new Set(doctors?.map((doc) => doc.department)),
  ];

  const depDoctors = doctors.filter((doc) => doc.department === curDepartment);

  const branchDoc = depDoctors.filter((doc) => doc.branch === selectedCity);

  const cityDoc = doctors.filter((doc) => doc.branch === selectedCity);

  const handleActive = (department) => {
    setCurDepartment(department);
    setActive(department);
  };

  return (
    <div className="">
      {/* medical available department name */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-2 my-3 px-4 w-full lg:max-w-[100%] text-center">
        {doctorArray.map((department, i) => (
          <button
            className={
              active === department
                ? 'font-bold text-white md:text-sm bg-[#4a1a98] transition-all ease-in-out py-2 rounded-sm'
                : 'font-bold text-[#f68685] md:text-sm bg-[#381f6e] hover:bg-[#6f48eb]  hover:text-white transition-all ease-in-out py-2 rounded-sm'
            }
            onClick={() => handleActive(department)}
            // key={i}
          >
            {department}
          </button>
        ))}
      </div>

      {/* doctor cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {curDepartment === 'All'
          ? cityDoc?.map((doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
                date={date}
                setDocinfo={setDocinfo}
              />
            ))
          : branchDoc?.map((doctor) => (
              <DoctorCard key={doctor._id} date={date} doctor={doctor} />
            ))}
      </div>
      {docinfo && (
        <Booking
          date={date}
          docinfo={docinfo}
          setDocinfo={setDocinfo}
          refetch={refetch}
          setNewBooking={setNewBooking}
        />
      )}
    </div>
  );
};

export default DoctorCards;
