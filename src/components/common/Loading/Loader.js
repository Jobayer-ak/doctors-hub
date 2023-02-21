import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh]">
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
