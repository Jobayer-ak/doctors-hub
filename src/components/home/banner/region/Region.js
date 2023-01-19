import React from "react";

const Region = ({ region }) => {
  return (
    <div className="text-center bg-[#722ed180] p-2.5 w-[220px] h-[55px] mb-4 md:mb-0 rounded-md hover:bg-[#0a062c] transition duration-300 ease-in">
      <h2 className="text-2xl">{region}</h2>
    </div>
  );
};

export default Region;
