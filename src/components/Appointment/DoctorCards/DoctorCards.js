import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { useQuery } from "react-query";
import axios from "axios";
import { format } from "date-fns";

const DoctorCards = ({ selectedCity, date }) => {
  const [curDepartment, setCurDepartment] = useState("All");
  const formatedDate = format(date, "PP");

  console.log(selectedCity);

  const { data: doctors, isLoading, refetch } = useQuery(["doctor"], async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/doctors`,
      {
        withCredentials: true,
      }
    );
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <h2 className="text-xl font-bold text-white">Loading......</h2>;
  }


  const doctorArray = ["All", ...new Set(doctors.map((doc) => doc.department))];

  const depDoctors = doctors.filter((doc) => doc.department === curDepartment);
  
  const branchDoc = depDoctors.filter(doc => doc.branch === selectedCity);
  console.log(curDepartment)

  const cityDoc = doctors.filter(doc => doc.branch === selectedCity);

  console.log(cityDoc);
  console.log(branchDoc);

  

  return (
    <div className="">
      {/* medical available department name */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-2 my-3 px-4 w-full lg:max-w-[100%] text-center">
        {doctorArray.map((s, i) => (
          <button
            className="font-bold text-white md:text-sm bg-[#4a1a98] hover:bg-[#0a062c] transition-all ease-in-out py-2 rounded-md"
            onClick={() => setCurDepartment(s)}
            key={i}
          >
            {s}
          </button>
        ))}
      </div>


      {/* doctor cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {curDepartment === "All"
          ? cityDoc?.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          : branchDoc?.map((doctor) => (
            
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
      </div>
    </div>
  );
};

export default DoctorCards;
