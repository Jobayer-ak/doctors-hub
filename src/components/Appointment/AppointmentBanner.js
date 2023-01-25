import React, { useState } from "react";

// import "react-day-picker/dist/style.css";
// import "./dayCalender.css";
import { Calendar } from "react-calendar";
import "../home/banner/hero/calender.css";
import DoctorCards from "./DoctorCards/DoctorCards";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Dhaka");

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
    // console.log(newDate);
  };

  // console.log(date);

  return (
    <div className="pb-4">
      {/*  all city branches */}
      <div className="lg:grid grid-cols-2 gap-4 lg:gap-0 mb-4">
        <div className="text-white rounded-md mb-4 lg:mb-0">
          <Calendar value={date} onChange={onDateChange}/>
        </div>

        <div className="bg-[#23075e] px-4 py-3 text-center rounded-md relative">
          <h2 className="font-bold text-2xl text-white mb-3">Select City</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region) => (
              <button
                className="text-white font-bold rounded-md px-2 py-2 bg-[#4a1a98] hover:bg-[#9258e5] transition-all"
                onClick={() => setSelectedCity(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="text-center flex justify-center mt-10 lg:mt-0">
            <h3 className="font-bold text-white text-xl bottom-0 mb-2 absolute">
              Selected City is{" "}
              <span className="text-[#d3adf8]">{selectedCity}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* All doctor cards */}
      <div className="bg-[#23075e] py-4 rounded-md">
        <div>
          <h2 className="font-bold text-3xl text-center text-white px-4 pb-2 rounded-md">
            All Specialists
          </h2>
          <p className="text-white"></p>
        </div>
        {/* Doctor Cards */}
        <div>
          <DoctorCards date={date} selectedCity={selectedCity} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
