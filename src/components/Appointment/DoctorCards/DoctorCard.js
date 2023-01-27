import React from "react";
import Booking from "./Booking/Booking";

const DoctorCard = ({ doctor, date }) => {
  const { time_slots } = doctor;
  // console.log(doctor);

  return (
    <div>
      {/* <h2 className="font-bold text-white text-xl"></h2> */}

      <div className="rounded-md w-full h-[190px] md:w-[100%] bg-[#4a1a98] shadow-xl">
        <div className="px-4 py-2 text-white">
          <h3 className="text-xl">{doctor.name}</h3>
          <p className="italic">{doctor.higher_degree}</p>
          <hr className="border-solid border-1 border-[#722ED1] my-2 " />
          <p className="italic">{doctor.treatment_area}</p>

          <p className="text-[14px]">{doctor.working_hospital}</p>
        </div>
        <Booking date={date} doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorCard;
