import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-[#23075e] mt-1 h-[50vh]">
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  );
};

export default Loader;
