import React, { useState } from "react";
import MyHistory from "./MyHistory";
import MyReviews from "./MyReviews";

const ForUser = () => {
  const [active, setActive] = useState("MyHistory");

  const dashboardBtn = ["My History", "My Reviews"];

  return (
    <div className="mx-4 lg:mx-10 mt-4 bg-[#23075e] w-full py-4 rounded-md">
      <h2 className="font-bold text-3xl text-white text-center">
        Welcome To Dashboard
      </h2>

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
      <div>{active === "My History" ? <MyHistory /> : <MyReviews />}</div>
    </div>
  );
};

export default ForUser;