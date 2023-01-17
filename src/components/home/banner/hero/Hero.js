import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "./calender.css";
import heroImage from "../../../../assets/icons/routine-health-checkup.png";

const Hero = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="lg:flex lg:justify-between items-center mt-6">
      <div className="mb-4 md:mb-0">
        <Calendar />
      </div>

      <img
        src={heroImage}
        alt=""
        className="w-full h-[320px] md:h-[420px] lg:h-[320px] bg-[#23075E] rounded-md md:mt-5 lg:mb-[22px]"
      />
    </div>
  );
};

export default Hero;
