import React from "react";
// import Searchbar from "../common/searchbar/Searchbar";

import Hero from "./banner/hero/Hero";
// import Footer from "../common/Footer/Footer";
import Slider from "./carousel/Slider";
import Banner from "./Banner";


const Home = () => {
  return (
    <div className="md:w-[95%] lg:w-[80%] mx-4 py-2 lg:mx-4 bg-[#0a062c] text-white">
      <Banner/>
      {/* <Searchbar /> */}
      {/* <Banner /> */}
      <Hero />
      <Slider />
      {/* <Footer/> */}
      {/* <div></div>
      <div></div> */}
    </div>
  );
};

export default Home; 
 