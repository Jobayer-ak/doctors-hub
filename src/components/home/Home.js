import React from 'react';

import Banner from './Banner';
import Welcome from './Welcome';
import Services from './Services';
import Testimonial from './Testimonial';
import DoctorsSlider from './DoctorsSlider';
// import Search from './Search';

const Home = () => {
  return (
    <div className="w-full lg:w-[83%] py-0 ml-0 lg:ml-1 bg-[#0a062c] text-white">
      {/* <Search /> */}
      <Banner />
      <Welcome />
      <Services />
      <Testimonial />
      <DoctorsSlider />
      {/* <Banner /> */}
      {/* <Hero /> */}
      {/* <Slider /> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
