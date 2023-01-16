import React, { useState } from "react";
import "./hero.css";
import { Calendar } from "react-calendar";
import "./calender.css";
import heroImage from "../../../../assets/icons/routine-health-checkup.png";

const Hero = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="lg:flex lg:justify-between items-center mt-6">
      <div className="mb-5 md:mb-0 w-full md:w-[520px]">
        <Calendar />
      </div>

      <img
        src={heroImage}
        alt=""
        className="w-full md:w-full lg:w-[480px] h-[320px] md:h-[420px] lg:h-[320px] bg-[#23075E] rounded-md md:mt-5"
      />
    </div>
  );
};

export default Hero;
