import React from 'react';
// import Searchbar from "../common/searchbar/Searchbar";

import Hero from './banner/hero/Hero';
// import Footer from "../common/Footer/Footer";
// import Slider from './carousel/Slider';
import Banner from './Banner';
import Welcome from './Welcome';
import Services from './Services';
import Testimonial from './Testimonial';
import DoctorsSlider from './DoctorsSlider';

const Home = () => {
  return (
    <div className="w-full lg:w-[82%] py-0 lg:ml-1 bg-[#0a062c] text-white">
      <Banner />
      <Welcome />
      <Services />
      <Testimonial />
      <DoctorsSlider/>
      {/* <Searchbar /> */}
      {/* <Banner /> */}
      {/* <Hero /> */}
      {/* <Slider /> */}
      {/* <Footer/> */}
      {/* <div></div>
      <div></div> */}
    </div>
  );
};

export default Home;
