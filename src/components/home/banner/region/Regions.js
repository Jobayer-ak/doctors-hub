import React from "react";
import "./regions.css";
import Region from "./Region";

const Regions = () => {
  const regions = ["Dhaka", "Chottogram", "Mymensingh", "Sylhet"];
  return (
    <div className="flex justify-between items-center px-4 py-7">
      {regions?.map((region, index) => (
        <Region key={index} region={region} />
      ))}
    </div>
  );
};

export default Regions;
