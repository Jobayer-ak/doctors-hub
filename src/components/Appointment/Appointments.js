import React, { useState } from "react";
import DoctorCards from "./DoctorCards";
import AppointmentBanner from "./AppointmentBanner";

const Appointments = () => {
  const [date, setDate] = useState(new Date());


  return (
    <div className="mx-4 md:mx-10 mt-6 md:w-[70%] lg:w-[80%] min-h-screen md:h-auto">
      
      <AppointmentBanner date={date} setDate={setDate} />
     
      <div className="bg-[#23075e] py-4 rounded-md">
        <h1 className="font-bold text-3xl text-center text-white px-4 pb-2 rounded-md">
          Specialties
        </h1>

        <div>
          <DoctorCards />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
