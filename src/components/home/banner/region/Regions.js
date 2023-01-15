import React from "react";
import Region from "./Region";

const Regions = () => {
  const regions = ["Dhaka", "Chottogram", "Mymensingh", "Sylhet"];
  return (
    <div className="lg:flex lg:justify-between md:grid md:grid-cols-2 md:gap-6 lg:pl-5 md:pl-10 pl-[71px] p-5 md:py-7">
      {regions?.map((region, index) => (
        <Region key={index} region={region} />
      ))}
    </div>
  );
};

export default Regions;
