import React from "react";
import "./home.css";
import Searchbar from "../common/searchbar/Searchbar";
import Banner from "./banner/Banner";
import Hero from "./banner/hero/Hero";
import Slider from "./carousel/Slider";

const Home = () => {
  return (
    <div id="home">
      <Searchbar />
          <Banner />
          <Hero />
          <Slider/>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
