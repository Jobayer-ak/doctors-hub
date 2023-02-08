import axios from "axios";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthProvider";
import { format } from "date-fns";

const PendingAppointments = () => {
  const { user } = useContext(AuthContext);
  const date = new Date();
  const formatedDate = format(date, "PP");
  // console.log("Mseconds: ",format(new Date(1675255392460), "PP"));

  const { data, isLoading } = useQuery(["pending", user], async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/pending-appointments?patient=${user.userEmail}&date=${formatedDate}`,
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

  console.log(data.length);

  return (
    <>
      {data.length !== 0 ? (
        <div className="px-4">
          <div className="overflow-x-auto">
            <table className="table w-full md:min-w-[60%] lg:w-full">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Specialist</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((a, index) => (
                  <tr className="relative">
                    <th className="sticky left-0">{index + 1}</th>
                    <td>{a.doctor_name}</td>
                    <td>{format(new Date(a.date), "PP")}</td>
                    <td>{a.slot}</td>
                    <td>{a.speciality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center ">
          
          <h2 className="text-white text-xl mt-12">
            There is no pending appointments.
          </h2>
        </div>
      )}
    </>
  );
};

export default PendingAppointments;
