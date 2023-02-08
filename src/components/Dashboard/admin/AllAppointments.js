import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../../context/AuthProvider";
import axios from "axios";

const AllAppointments = () => {
  const { user } = useContext(AuthContext);

  const sendReq = async () => {
    try {
      const result = axios.get(
        "http://localhost:5000/api/v1/all-appointments",
        {
          withCredentials: true,
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendReq();
  }, []);

  // const { data, isLoading, refetch } = useQuery(
  //   ["allAppointments", user],
  //   async () => {
  //     const res = await axios.get(
  //       "http://localhost:5000/api/v1/admin/all-appointments",
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     const result = res.data;
  //     return result;
  //   }
  // );

  // if (isLoading) {
  //   return <h2 className="text-xl text-white">Loading....</h2>;
  // }

  // console.log(1111, data);

  return (
    <div>
      <h2 className="text-xl text-white">All Appointments</h2>
    </div>
  );
};

export default AllAppointments;
