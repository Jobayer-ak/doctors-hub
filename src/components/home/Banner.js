import React from 'react';
import banner from '../../assets/home/HomeBanner.png';

//style={{backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}

const Banner = () => {
  return (
    <div className="w-full bg-[#1e2148]">
      <div className="flex justify-between py-6 px-4">
        <div className="w-[50%] p-4 top-center">
          <img src={banner} alt="" />
        </div>
        <div>
          <h3 className="uppercase text-[#13bab9] font-bold text-right">Our Moto</h3>
          <h2 className="text-white font-bold text-4xl uppercase">Great Health</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
