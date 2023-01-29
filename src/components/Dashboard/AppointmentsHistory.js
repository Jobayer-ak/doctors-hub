import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

const MyHistory = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const {
    data,
    isLoading,
    refetch,
  } = useQuery(["booking", user], async () => {
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

  console.log(data);

  return (
    <div className="px-4">
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
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
              {data.map((a, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{ a.doctor_name}</td>
                  <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.gender}</td>
              </tr>
              ))

              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
