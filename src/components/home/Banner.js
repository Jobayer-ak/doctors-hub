import React from 'react';
import banner from '../../assets/home/HomeBanner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full bg-[#23075e]">
      <div className="md:flex justify-between py-6 px-4">
        {/* left part */}

        <div className="block md:hidden lg:block text-center lg:text-left mb-8 lg:mb-0">
          <div className="h-[30%] border-l-2 border-[#25beef] mt-5 mb-12 hidden lg:block"></div>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className="leading-9 mb-4">
              <h3 className="uppercase text-[#25beef]">Top Doctors</h3>

              <h1 className="font-bold text-3xl lg:text-4xl inline lg:block text-[#f68685] mr-2 lg:mr-0">
                Make Your
              </h1>
              <h1 className="text-3xl lg:text-4xl inline lg:block">
                Life Healty
              </h1>
            </div>

            <Link to="/appointments">
              <button className="bg-[#f68685] px-4 py-4 font-bold rounded-sm">
                <h4 className="border-r inline-block border-white pr-3 mr-3 uppercase">
                  Get Appointment
                </h4>

                <FontAwesomeIcon
                  icon={faPlus}
                  className="hover:rotate-[360deg] transition-all duration-700"
                />
              </button>
            </Link>
          </AnimationOnScroll>
        </div>
        {/* image part */}
        <div className=" md:w-[60%] lg:w-[50%] p-4 top-center">
          <img src={banner} alt="" />
        </div>

        {/* infor part right */}
        <div
          className="hidden md:block"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h3 className="uppercase text-[#13bab9] font-bold text-right mt-4">
              Our Moto
            </h3>

            <h2 className="text-white font-bold text-4xl uppercase text-[#25beef]">
              Great Health
            </h2>

            <div className="leading-9 mt-12">
              <h2 className="text-white font-bold uppercase text-xl text-right">
                Specialists Of
              </h2>
              <h4 className="font-bold uppercase text-[#25beef] text-right">
                medicine
              </h4>
              <h2 className="font-bold uppercase text-[#25beef] text-right">
                Cardiology
              </h2>
              <h2 className="font-bold uppercase text-[#25beef] text-right">
                Neurology
              </h2>
              <h2 className="font-bold uppercase text-[#25beef] text-right">
                Gynecology
              </h2>
              <h2 className="font-bold uppercase text-[#25beef] text-right">
                Cardiology <br /> & so on.......
              </h2>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Banner;
