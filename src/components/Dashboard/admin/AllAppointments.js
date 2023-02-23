import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../../context/AuthProvider";
import { format } from "date-fns";
import Loader from "../../common/Loading/Loader";
import baseURL from "../../../utils/baseURL";

const AllAppointments = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery(
    ["allAppointments", user.userRole],
    async () => {
      const res = await baseURL.get("/all-appointments", {
        withCredentials: true,
      });
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <Loader />;
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

export default AllAppointments;
