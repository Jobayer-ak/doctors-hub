import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
    <Dna
      visible={true}
      height="120"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  );
};

export default Loader;
