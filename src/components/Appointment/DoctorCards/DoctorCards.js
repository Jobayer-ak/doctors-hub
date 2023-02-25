import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import { useQuery } from "react-query";
import axios from "axios";
import { format } from "date-fns";
import Booking from "./Booking/Booking";
import Loader from "../../common/Loading/Loader";
import baseURL from "../../../utils/baseURL";

const DoctorCards = ({ selectedCity, date }) => {
  const [curDepartment, setCurDepartment] = useState("All");
  const formatedDate = format(date, "PP");
  const [active, setActive] = useState("All");
  const [docinfo, setDocinfo] = useState(null);

  // console.log(date);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery(["doctor", date], async () => {
    const res = await baseURL.get(`/doctors/slots?date=${date}`, {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <Loader />;
  }

  const doctorArray = [
    "All",
    ...new Set(doctors?.map((doc) => doc.department)),
  ];

  const depDoctors = doctors.filter((doc) => doc.department === curDepartment);

  const branchDoc = depDoctors.filter((doc) => doc.branch === selectedCity);

  const cityDoc = doctors.filter((doc) => doc.branch === selectedCity);

  console.log("Branch doctors: ", cityDoc);
  console.log("City doctors: ", cityDoc);

  const handleActive = (department) => {
    setCurDepartment(department);
    setActive(department);
  };

  return (
    <div className="">
      {/* medical available department name */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-2 my-3 px-4 w-full lg:max-w-[100%] text-center">
        {doctorArray.map((department, i) => (
          <button
            className={
              active === department
                ? "font-bold text-white md:text-sm bg-[#0a062c] transition-all ease-in-out py-2 rounded-md"
                : "font-bold text-white md:text-sm bg-[#4a1a98] hover:bg-[#0a062c] transition-all ease-in-out py-2 rounded-md"
            }
            onClick={() => handleActive(department)}
            // key={i}
          >
            {department}
          </button>
        ))}
      </div>

      {/* doctor cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {curDepartment === "All"
          ? cityDoc?.map((doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
                date={date}
                setDocinfo={setDocinfo}
              />
            ))
          : branchDoc?.map((doctor) => (
              <DoctorCard key={doctor._id} date={date} doctor={doctor} />
            ))}
      </div>
      {docinfo && (
        <Booking
          date={date}
          docinfo={docinfo}
          setDocinfo={setDocinfo}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default DoctorCards;
