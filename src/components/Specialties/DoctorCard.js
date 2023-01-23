import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div>
      {/* <h2 className="font-bold text-white text-xl"></h2> */}

      <div className="rounded-md w-full h-[190px] md:w-[100%] bg-[#4a1a98] shadow-xl">
        <div className="px-4 py-2 text-white">
          <h2 className="text-xl">{doctor.name}</h2>
          <p className="italic">{doctor.treatment_area}</p>
          <p>{doctor.working_hospital}</p>
          
          <hr className="border-solid border-2 border-[#722ED1] my-2 " />

          <div className="flex justify-center">
            <button className="bg-[#23075e] px-2 py-1 rounded-md hover:bg-[#9258e5] transition-all">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
