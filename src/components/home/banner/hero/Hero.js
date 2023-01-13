import React, { useState } from "react";
import "./hero.css";
import { Calendar } from "react-calendar";
import "./calender.css";
import heroImage from "../../../../assets/icons/routine-health-checkup.png";

const Hero = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div id="hero" className="flex justify-between items-center">
      <div className="calender">
        <Calendar />
      </div>

      <div className="hero-img">
        <img src={heroImage} alt="" className="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
