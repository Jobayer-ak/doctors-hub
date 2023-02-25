import React, { useEffect, useState } from "react";

import ForUser from "./ForUser";
import Admin from "./admin/Admin";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setRole(userRole);
    setLoading(false);
  }, []);

  if (loading) {
    return <h2 className="text-white text-xl">Loading...</h2>;
  }

  return (
    <div className="mx-4 md:mx-10 mt-4 bg-[#23075e] lg:w-[80%] min-h-screen py-4 rounded-md">
      <h2 className="font-bold text-3xl text-white text-center">
        Welcome To Dashboard
      </h2>

      {/* dashboard buttons for normal user */}

      {role === "admin" ? <Admin /> : <ForUser />}
    </div>
  );
};

export default Dashboard;

