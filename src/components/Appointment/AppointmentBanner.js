import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import '../home/banner/hero/calender.css';
import DoctorCards from './DoctorCards/DoctorCards';
import Search from './Search';

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState('Dhaka');
  const [active, setActive] = useState('Dhaka');
  const minDate = new Date();
  const [newBooking, setNewBooking] = useState(false);

  const regions = [
    'Dhaka',
    'Mymensingh',
    'Chattogram',
    'Sylhet',
    'Rajshahi',
    'Khulna',
    'Barishal',
    'Bogra',
  ];

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleRegion = (region) => {
    setSelectedCity(region);
    setActive(region);
  };

  return (
    <div className="">
      <Search newBooking={newBooking} />
      {/*  all city branches */}
      <div className="lg:flex justify-center gap-1 mb-1">
        <div className="text-white mb-1 lg:mb-0">
          <Calendar value={date} minDate={minDate} onChange={onDateChange} />
        </div>

        <div className="bg-[#23075e] w-[100%] px-4 py-3 text-center relative">
          <h2 className="font-bold text-2xl text-white mt-3 mb-6">
            Select City
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <button
                className={
                  active === region
                    ? 'text-[#f68685] font-bold rounded-md px-2 py-2 bg-[#4a1a98] transition-all'
                    : 'text-[#f68685] font-bold rounded-md px-2 py-2 bg-[#381f6e] hover:bg-[#6f48eb] hover:text-white transition-all'
                }
                onClick={() => handleRegion(region)}
                key={index}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="text-center flex justify-center mt-20 lg:mt-0">
            <h3 className="font-bold text-white text-xl bottom-0 pb-8 absolute">
              Selected Branch Is
              <span className="text-[#f68685]  ml-2">{selectedCity}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* All doctor cards */}
      <div className="bg-[#23075e] py-4">
        <div>
          <h2 className="font-bold text-3xl text-center text-white px-4 pb-2 rounded-md">
            All Specialists
          </h2>
          <p className="text-white"></p>
        </div>
        {/* Doctor Cards */}
        <div className="bg-[#2375e] w-full min-h-[40vh]">
          <DoctorCards date={date} selectedCity={selectedCity} setNewBooking={setNewBooking} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
