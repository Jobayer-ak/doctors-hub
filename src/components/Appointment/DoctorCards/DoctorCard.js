import React from 'react';

const DoctorCard = ({ date, doctor, setDocinfo }) => {
  return (
    <div>
      <div className="rounded-md w-full h-[300px] bg-[#381f6e] shadow-xl">
        <div className="px-3 py-2 text-white">
          <div className="flex justify-between items-center gap-4 mb-3">
            <div className="w-full">
              <h3 className="text-xl font-bold text-[#f39896]">
                {doctor.name}
              </h3>
              <p className="italic">{doctor.higher_degree}</p>
            </div>
            <div className="w-1/2">
              <img src={doctor.imageURL} alt="" className="rounded-full" />
            </div>
          </div>
          <hr className="border-solid border-1 border-[#722ED1] my-2 " />
          <div className="mb-4">
            <p className="italic">{doctor.speciality}</p>
            <p className="text-[14px]">{doctor.working_hospital}</p>
            <p className="text-[20px py-2">
              Fee: <span className="">${doctor.fee}</span>
            </p>
          </div>

          <div className="card-actions justify-center">
            <label
              htmlFor="my-modal-3"
              className="bg-[#f68685] text-[#381f6e] rounded-sm drop-shadow-md hover:bg-[#cd5453] hover:text-white border-none p-2 outline-0 cursor-pointer transition- duration-300"
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
