import React from "react";
import Searchbar from "../common/searchbar/Searchbar";
import Banner from "./banner/Banner";
import Hero from "./banner/hero/Hero";
import Slider from "./carousel/Slider";

const Home = () => {
  return (
    <div className="md:h-screen md:w-full mx-4 lg:mx-10 bg-[#0a062c] text-white">
      <Searchbar />
      <Banner />
      <Hero />
      {/* <Slider /> */}
      <div></div>
      <div></div>
    </div>
  );
};

export default Home; 
 