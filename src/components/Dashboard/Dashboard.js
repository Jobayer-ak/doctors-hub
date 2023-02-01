import React, { useState } from "react";
import AppointmentHistory from "./AppointmentsHistory";
import MyReviews from "./MyReviews";
import PendingAppointments from "./PendingAppointments";

const Dashboard = () => {
  const [active, setActive] = useState("Pending Appointments");

  const dashboardBtn = [
    "Pending Appointments",
    "Appointments History",
    "My Reviews",
  ];

  return (
    <div className="mx-4 lg:mx-10 mt-4 bg-[#23075e] md:w-full h-screen py-4 rounded-md">
      <h2 className="font-bold text-3xl text-white text-center">
        Welcome To Dashboard
      </h2>

      {/* dashboard buttons for normal user */}
      <div className="text-white w-full px-4 my-5 grid lg:grid-cols-3 gap-3 lg:gap-12">
        {dashboardBtn.map((b) => (
          <button
            className={
              active === b
                ? "bg-[#0a062c] w-full py-2 text-xl rounded-md"
                : "bg-[#4a1a98] hover:bg-[#0a062c] transition-all w-full py-2 text-xl rounded-md "
            }
            onClick={() => setActive(b)}
          >
            {b}
          </button>
        ))}
      </div>

      {/* button details */}
      <div className="max-h-screen">{active === "Appointments History" && <AppointmentHistory />}
        {active === "My Reviews" && <MyReviews />}
        {active === "Pending Appointments" && <PendingAppointments/>}
      </div>
    </div>
  );
};

export default Dashboard;
