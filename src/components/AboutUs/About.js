import React from 'react';
import firstImg from '../../assets/about/first.png';
import secondImg from '../../assets/about/second.png';
import thirdImg from '../../assets/about/third.png';
import aboutImg from '../../assets/about/about.jpg';
import DMC from '../../assets/about/hopitalsIcons/DMC.png';
import RMC from '../../assets/about/hopitalsIcons/RMC.png';
import MMC from '../../assets/about/hopitalsIcons/MMC.png';
import Apollo from '../../assets/about/hopitalsIcons/Apollo Hopital.png';
import United from '../../assets/about/hopitalsIcons/United Hospital.png';
import './about.css';
import ProgressBar from 'react-animated-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcaseMedical,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  return (
    <div className="w-full lg:w-[83%] ml-0 lg:ml-1 rounded-sm">
      <div className="bg-[#23075e]">
        <div className="bg-[#1e2148] py-[60px] mb-[60px]">
          <h2 className="text-white font-bold text-3xl text-center">
            About Us
          </h2>
        </div>

        <div className="text-center text-white">
          <div className="">
            <h4 className="text-white font-bold uppercase pl-12 line inline-block">
              doctor's hub
            </h4>

            <h2 className="text-2xl my-2">
              <span className="text-[#13bab9] mr-2 font-bold">
                Doctor's Hub - The Plastform
              </span>
              You Deserve
            </h2>
            <p className="">
              If you are planning on developing a product landing app or
              website, take a look at this beautiful-crafted
            </p>
          </div>

          {/* three cards */}
          <div className="grid grid-col md:grid-cols-3 my-[150px] gap-20 md:gap-5 px-4">
            <div className="w-full h-auto bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
              <div className="flex justify-center absolute top-[-30px] left-[84px]">
                <img src={firstImg} alt="" className="" />
              </div>
              <div className="pt-[100px] pb-[60px] px-4">
                <h2 className="text-2xl text-[#13bab9]">Qualified Doctors</h2>
                <p className="my-3">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
              <div className="flex justify-center absolute top-[-30px] left-[84px]">
                <img src={secondImg} alt="" />
              </div>
              <div className="pt-[100px] pb-[60px] px-4">
                <h2 className="text-2xl text-[#13bab9]">Trusted Treatment</h2>
                <p className="my-3">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
              <div className="flex justify-center absolute top-[-30px] left-[84px]">
                <img src={thirdImg} alt="" />
              </div>
              <div className="pt-[100px] pb-[60px] px-4">
                <h2 className="text-2xl text-[#13bab9]">27/7 Services</h2>
                <p className="my-3">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin.
                </p>
              </div>
            </div>
          </div>

          {/* Health Commitments */}
          <div className="bg-[#1e2148] py-12 mb-[150px]">
            <div className="lg:flex lg:items-center lg:gap-12">
              {/* left part */}
              <div className=" md:text-center lg:text-left p-4 lg:w-[50%]">
                <div className="pt-4">
                  <h2 className="text-white text-left font-bold uppercase line pl-12">
                    about
                    <span className="text-[#13bab9] ml-2">doctor's hub</span>
                  </h2>
                  <h2 className="text-3xl my-2 text-left">
                    <span className="text-[#13bab9] mr-2 font-bold">
                      Health
                    </span>
                    <span className="text-white">Commitments</span>
                  </h2>
                  <div className="">
                    <p className="text-left">
                      We are ready to provide you with any Medical, health and
                      fitness help as well as prepare a business plan. We are
                      ready to provide you with any Medical, health and fitness
                      help as well as prepare a business plan.
                    </p>
                  </div>
                </div>

                {/* proress bars */}
                <div className="mt-4">
                  <div className="">
                    <span className="text-[#13bab9] text-left block">
                      Successful Operations
                    </span>
                    <ProgressBar
                      width="100%"
                      height="10px"
                      rect
                      fontColor="#3abff8"
                      percentage="80"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      trackBorderColor="grey"
                    />
                  </div>

                  <div className="">
                    <span className="text-[#13bab9] text-left block">
                      Empathy for Patients
                    </span>

                    <ProgressBar
                      width="100%"
                      height="10px"
                      rect
                      fontColor="#3abff8"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      trackBorderColor="grey"
                    />
                  </div>

                  <div className="">
                    <span className="text-[#13bab9] text-left block">
                      Hygiene
                    </span>

                    <ProgressBar
                      width="100%"
                      height="10px"
                      rect
                      fontColor="#3abff8"
                      percentage="100"
                      rectPadding="1px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      trackBorderColor="grey"
                    />
                  </div>
                </div>
              </div>

              {/* right part */}
              <div className="lg:w-[60%]">
                <img src={aboutImg} alt="" className="" />
              </div>
            </div>
          </div>

          {/* why choose us */}
          <div className="py-20 bg-[#1e2148]">
            {/* top part */}
            <div className="lg:flex justify-between items-center px-4">
              {/* left part of top */}
              <div className="w-full">
                <h2 className="text-[#13bab9] flex justify-left font-bold uppercase line pl-12">
                  Services
                </h2>

                <h2 className="my-2 text-4xl text-left">
                  <span className="text-[#13bab9] mr-2 font-bold">
                    Why Choose
                  </span>
                  <span className="text-white">Us</span>
                </h2>
              </div>

              {/* right part of bottom */}
              <div className="text-left">
                <p>
                  Mollit deserunt commodo tempor duis excepteur in excepteur
                  incididunt in pariatur Lorem Lorem. Veniam reprehenderit ad
                  nostrud anim est est cupidatat.
                </p>
              </div>
            </div>

            {/* bottom part */}
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-4 mt-20 px-4">
              <div className="bg-[#23075e] w-full text-[#13bab9] divOne box-border pt-6">
                
                  <div className="text-left px-4 mt-4 mb-4">
                    {/* <img src={oneImg} alt="" /> */}
                    <FontAwesomeIcon
                      icon={faBriefcaseMedical}
                      size="2xl"
                      className="h-[60px] text-[#13bab9]"
                    />
                  </div>
                  <h2 className="text-3xl text-left font-bold px-4">
                    Family Consultant
                  </h2>
                  <p className="px-4 text-left mt-4 mb-[59px] box-border overflow-x-auto">
                    LoremEt sint nulla irure nostrud elit ullamco laboris ut
                    dolore amet dolor in aute.
                  </p>
                
              </div>

              <div className="bg-[#23075e] w-full text-[#13bab9] divOne box-border pt-6">
                <div className="text-left px-4 mt-4 mb-4">
                  {/* <img src={oneImg} alt="" /> */}
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    size="2xl"
                    className="h-[60px] text-[#13bab9]"
                  />
                </div>
                <h2 className="text-3xl text-left font-bold px-4">
                  Health Services
                </h2>
                <p className="px-4 text-left mt-4 mb-[59px]">
                  LoremEt sint nulla irure nostrud elit ullamco laboris ut
                  dolore amet dolor in aute.
                </p>
              </div>

              <div className="bg-[#23075e] w-full text-[#13bab9] box-border divOne pt-6">
                <div className="text-left px-4 mt-4 mb-4">
                  {/* <img src={oneImg} alt="" /> */}
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    size="2xl"
                    className="h-[60px] text-[#13bab9]"
                  />
                </div>
                <h2 className="text-3xl text-left font-bold px-4">
                  Health Checkup
                </h2>
                <p className="px-4 text-left mt-4 mb-[59px]">
                  LoremEt sint nulla irure nostrud elit ullamco laboris ut
                  dolore amet dolor in aute.
                </p>
              </div>

              <div className="bg-[#23075e] full text-[#13bab9] box-border divOne pt-6">
                <div className="text-left px-4 mt-4 mb-4">
                  {/* <img src={oneImg} alt="" /> */}
                  <FontAwesomeIcon
                    icon={faTrophy}
                    size="2xl"
                    className="h-[60px] text-[#13bab9]"
                  />
                </div>
                <h2 className="text-3xl text-left font-bold px-4">
                  Awesome Services
                </h2>
                <p className="px-4 text-left mt-4 mb-[59px]">
                  LoremEt sint nulla irure nostrud elit ullamco laboris ut
                  dolore amet dolor in aute.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* hopitals slider */}
        <div className="py-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="myClass"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center p-4 w-[300px]">
                <img src={DMC} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mr-6">
              <div className="flex justify-center items-center p-4 w-[300px]">
                <img src={MMC} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center p-4 w-[300px]">
                <img src={RMC} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center p-4 w-[300px]">
                <img src={United} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center p-4 w-[300px]">
                <img src={Apollo} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;

//how to use multi carousel with switperjs included navigation in react
