import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import useAdmin from "../../hook/useAdmin";
import ForUser from "./ForUser";
import Admin from "./admin/Admin";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { admin } = useAdmin(user.userEmail);

  console.log(admin);
  return (
    <div className="mx-4 md:mx-10 mt-4 bg-[#23075e] lg:w-full h-screen py-4 rounded-md">
      <h2 className="font-bold text-3xl text-white text-center">
        Welcome To Dashboard
      </h2>

      {/* dashboard buttons for normal user */}

      {user.userRole === "admin" ? <Admin/> : <ForUser />}
    </div>
  );
};

export default Dashboard;
