import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex justify-center left-0 bottom-0 top-[120px] absolute">
      <Dna
        visible={true}
        height="130"
        width="130"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
