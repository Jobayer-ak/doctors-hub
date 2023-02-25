import React, { useState } from "react";
// import MyHistory from "./MyHistory";
import MyReviews from "./MyReviews";
import PendingAppointments from "./PendingAppointments";
import AppointmentHistory from "./AppointmentsHistory";

const ForUser = () => {
  const [active, setActive] = useState("Pending Appointments");

  const dashboardBtn = [
    "Pending Appointments",
    "Appointments History",
    "My Reviews",
  ];

  return (
    <div className="">
      <div className=" mt-4 bg-[#23075e] py-4 rounded-md sticky top-[100px] z-10">
        {/* dashboard buttons */}
        <div className="text-white px-4 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-12">
          {dashboardBtn.map((b) => (
            <button
              className={
                active === b
                  ? "bg-[#0a062c] py-2 text-xl rounded-md mb-4 md:mb-0"
                  : "bg-[#4a1a98] hover:bg-[#0a062c] transition-all w-full py-2 text-xl rounded-md mb-4 md:mb-0"
              }
              onClick={() => setActive(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* button details */}
      <div className="max-h-screen lg:h-auto">
        {active === "Pending Appointments" && <PendingAppointments />}
        {active === "Appointments History" && <AppointmentHistory />}
        {active === "My Reviews" && <MyReviews />}
      </div>
    </div>
  );
};

export default ForUser;
