import React from "react";
import Region from "./Region";

const Regions = () => {
  const regions = ["Dhaka", "Chottogram", "Mymensingh", "Sylhet"];
  return (
    <div className="md:flex md:justify-between md:items-cente px-4 pt-3 md:pt-7 md:pb-7">
      {regions?.map((region, index) => (
        <Region key={index} region={region} />
      ))}
    </div>
  );
};

export default Regions;
