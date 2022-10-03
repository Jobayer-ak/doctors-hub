import React from "react";
import Banner from "./Banner";
import HeroPart from "./HeroPart";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import StayConnected from "./StayConnected";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <Services />
      <HeroPart />
      <MakeAppointment />
      <Testimonials />
      <StayConnected/>
    </div>
  );
};

export default Home;
