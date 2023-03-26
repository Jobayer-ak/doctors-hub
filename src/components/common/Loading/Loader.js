import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-[#23075e] ml-1 w-[100%] h-[100vh]">
    <Dna
      visible={true}
      height="130"
        width="130"
        className='text-right'
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  );
};

export default Loader;
