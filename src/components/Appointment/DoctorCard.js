import React from "react";

const DoctorCard = ({ doctor }) => {
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

          <div className="flex justify-center mt-2">
            <button className="bg-[#23075e] px-2 py-1 rounded-md hover:bg-[#9258e5] transition-all">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
