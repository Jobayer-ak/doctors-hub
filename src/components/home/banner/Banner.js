import React from "react";
import "./banner.css";
import Regions from "./region/Regions";

const Banner = () => {
  return (
    <div id="banner" className="bg-[#23075E] py-2.5 rounded-md">
      <h1 className="font-bold text-4xl text-center">
        Meet <span className="text-[#D3ADF8]">Doctor</span> In Your City
      </h1>
      <Regions />
    </div>
  );
};

export default Banner;
