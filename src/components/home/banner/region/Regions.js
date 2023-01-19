import React from "react";
import Region from "./Region";

const Regions = () => {
  const regions = ["Dhaka", "Chattogram", "Mymensingh", "Sylhet"];
  return (
    <div className="md:grid md:grid-cols-2 md:gap-6 lg:flex lg:justify-between lg:pl-5 md:pl-10 pl-[71px] p-5 md:pb-7 lg:max-w-[750px] xl:max-w-[1200px]">
      {regions?.map((region, index) => (
        <Region key={index} region={region} />
      ))}
    </div>
  );
};

export default Regions;
