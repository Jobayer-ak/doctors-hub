import React, { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";
// import { format } from "date-fns";
import Loader from "../../common/Loading/Loader";

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading} = useQuery(
    ["allAppointments", user],
    async () => {
      const res = await axios.get(
        "https://doctors-hub-server.vercel.app/api/v1/admin/users",
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4">
      <div className="overflow-auto">
        <table className="table w-full md:min-w-[60%] lg:w-full">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((a, index) => (
              <tr className="relative">
                <th className="sticky left-0">{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.mobile}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
