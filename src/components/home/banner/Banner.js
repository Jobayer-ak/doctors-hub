import React from "react";

import Regions from "./region/Regions";

const Banner = () => {
  return (
    <div className="bg-[#23075E] py-3 rounded-md">
      <h1 className="font-bold text-4xl text-center">
        Meet <span className="text-[#D3ADF8]">Doctor</span> In Your City
      </h1>
      <Regions />
    </div>
  );
};

export default Banner;
