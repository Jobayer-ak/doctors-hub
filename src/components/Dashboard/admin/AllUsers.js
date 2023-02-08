import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const AllUsers = () => {
    const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery(
    ["allAppointments", user],
    async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/admin/users",
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return <h2 className="text-xl text-white">Loading....</h2>;
  }

  console.log("users: ", data);
    return (
        <div>
            <h2 className='text-white text-xl'>All Users</h2>
        </div>
    );
};
 
export default AllUsers;