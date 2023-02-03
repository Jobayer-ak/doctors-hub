import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";
import { format } from "date-fns";

const MyHistory = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery(["booking", user], async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/bookings?patient=${user.userEmail}`,
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

  return (
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
  );
};
// responsive table with jsx

export default MyHistory;
