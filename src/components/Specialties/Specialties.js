import React from "react";

const Specialties = () => {
  const specialities = [
    "Medicine",
    "Cardiology",
    "Neuro Medicine",
    "Anchology",
      "Orthopedics",
      "Gynaecology",
        "Dentist"
  ];

  return (
    <div className="mx-4 md:mx-10 mt-6 md:w-[70%] lg:w-[80%] h-screen">
      <div className="bg-[#23075e] py-4 rounded-md">
        <h1 className="font-bold text-3xl text-center text-white px-4 pb-2 rounded-md">
          Specialties
        </h1>

        <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2 my-3 px-4 w-full lg:max-w-[100%] text-center">
          {specialities.map((s) => (
            <h3 className="font-bold text-white md:text-sm xl:text-lg bg-[#4a1a98] hover:bg-[#0a062c] transition-all ease-in-out px-2 py-2 mr-2 rounded-md">
              {s}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
