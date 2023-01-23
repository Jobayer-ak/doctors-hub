import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import { useQuery } from "react-query";
import axios from "axios";

const DoctorCards = () => {
  const [curDepartment, setCurDepartment] = useState("All");

  //   const specialities = [
  //     "Medicine",
  //     "Cardiology",
  //     "Neuro Medicine",
  //     "Orthopedics",
  //     "Gynaecology",
  //     "Dental",
  //     "Plastic Surgery",
  //     "Dermatology",
  //   ];

  const { data: doctors, isLoading } = useQuery(["doctor"], async () => {
    const res = await axios.get("http://localhost:5000/api/v1/doctors", {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <h2 className="text-xl font-bold text-white">Loading......</h2>;
  }

  const doctorArray = ["All", ...new Set(doctors.map((doc) => doc.department))];

  const depDoctors = doctors.filter((doc) => doc.department === curDepartment);
  console.log(depDoctors);

  return (
    <div className="">
      {/* medical available department name */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-2 my-3 px-4 w-full lg:max-w-[100%] text-center">
        {doctorArray.map((s) => (
          <button
            className="font-bold text-white md:text-sm bg-[#4a1a98] hover:bg-[#0a062c] transition-all ease-in-out py-2 rounded-md"
            onClick={() => setCurDepartment(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* doctor cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {curDepartment === "All"
          ? doctors?.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          : depDoctors?.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
      </div>
    </div>
  );
};

export default DoctorCards;
