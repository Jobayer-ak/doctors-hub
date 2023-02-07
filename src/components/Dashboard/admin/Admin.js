import React, { useState } from "react";
import AllUsers from "./AllUsers";
import AllDoctors from "./AllDoctors";
import AllReviews from "./AllReviews";
import AllAppointments from "./AllAppointments";

const Admin = () => {
  const [active, setActive] = useState("All Appointments");

    const dashboardBtn = [ "All Appointments", "All Users", "All Doctors", "All Reviews"];
    
  return (
    <div>
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

        {/* button details */}
        <div className="max-h-screen lg:h-auto">
          {active === "All Appointments" && <AllAppointments />}
          {active === "All Users" && <AllUsers />}
          {active === "All Doctors" && <AllDoctors />}
          {active === "All Reviews" && <AllReviews />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
