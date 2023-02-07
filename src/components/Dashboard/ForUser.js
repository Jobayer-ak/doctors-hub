import React, { useState } from "react";
// import MyHistory from "./MyHistory";
import MyReviews from "./MyReviews";
import PendingAppointments from "./PendingAppointments";
import AppointmentHistory from "./AppointmentsHistory";

const ForUser = () => {
  const [active, setActive] = useState("MyHistory");

  const dashboardBtn = [
    "Pending Appointments",
    "Appointments History",
    "My Reviews",
  ];

  return (
    <>
      <div className=" mt-4 bg-[#23075e] py-4 rounded-md">
        {/* dashboard buttons */}
        <div className="text-white px-4 my-5 flex justify-around gap-12">
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
      </div>

      {/* button details */}
      <div className="max-h-screen lg:h-auto">
        {active === "Appointments History" && <AppointmentHistory />}
        {active === "My Reviews" && <MyReviews />}
        {active === "Pending Appointments" && <PendingAppointments />}
      </div>
    </>
  );
};

export default ForUser;
