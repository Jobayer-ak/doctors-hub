import React, { useState } from "react";

// import "react-day-picker/dist/style.css";
// import "./dayCalender.css";
import { Calendar } from "react-calendar";
import "../home/banner/hero/calender.css";
import DoctorCards from "./DoctorCards/DoctorCards";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [active, setActive] = useState("Dhaka");

  const regions = [
    "Dhaka",
    "Mymensingh",
    "Chattogram",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Bogra",
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
      {/*  all city branches */}
      <div className="lg:flex justify-center gap-1 mb-1">
        <div className="text-white mb-1 lg:mb-0">
          <Calendar value={date} onChange={onDateChange} />
        </div>

        <div className="bg-[#23075e] w-[100%] px-4 py-3 text-center relative">
          <h2 className="font-bold text-2xl text-white mt-3 mb-6">Select City</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region) => (
              <button
                className={
                  active === region
                    ? "text-white font-bold rounded-md px-2 py-2 bg-[#0a062c] transition-all"
                    : "text-white font-bold rounded-md px-2 py-2 bg-[#4a1a98] hover:bg-[#0a062c] transition-all"
                }
                onClick={() => handleRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="text-center flex justify-center mt-20 lg:mt-0">
            <h3 className="font-bold text-white text-xl bottom-0 pb-8 absolute">
              Selected City is 
              <span className="text-[#d3adf8]">{selectedCity}</span>
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
          <DoctorCards date={date} selectedCity={selectedCity} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
