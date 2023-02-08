import React, { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

const AllDoctors = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery(
    ["allAppointments", user.userEmail],
    async () => {
      const res = await axios.get("http://localhost:5000/api/v1/doctors", {
        withCredentials: true,
      });
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h2 className="text-xl text-white">Loading....</h2>;
  }

  console.log(data);
  return (
    <div className="px-4">
      <div className="overflow-x-auto">
        <table className="table w-full md:min-w-[60%] lg:w-full">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Mobile</th>
                          <th>Speciality</th>
                          <th>Branch</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((a, index) => (
              <tr className="relative">
                <th className="sticky left-0">{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.gender}</td>
                <td>{a.contact_number}</td>
                <td>{a.speciality}</td>
                <td>{a.branch}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoctors;
