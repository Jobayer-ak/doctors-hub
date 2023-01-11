import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import TableRow from "./TableRow";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", async () => {
    const res = await axios.get("http://localhost:5000/api/v1/admin/users", {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(users);

  return (
    <div>
      <h2 className="text-2xl font-bold">All Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
                <TableRow key={user._id} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
