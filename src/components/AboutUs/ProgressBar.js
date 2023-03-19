import React, { useEffect, useState } from 'react';

const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = useState(0);

  //   useEffect(() => {
  //     setValue(percent * width);
  //   }, [percent, width]);

  return (
    <div>
      <h2 className="text-white font-bold text-2xl">Hello</h2>
      <div
        className="bg-[rgb(233, 233, 233)] rounded-full"
        style={{ width: "100%" }}
      >
        <div
          style={{ width: `70%` }}
          className="bg-green-500 h-[2px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProgressBar;

// how to do animated progressbar with tailwindcss in react