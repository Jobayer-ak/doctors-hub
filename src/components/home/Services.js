import React from 'react';
import './home.css';
import docImg from '../../assets/home/doc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingMedical,
  faHouseChimneyMedical,
  faPlus,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Services = () => {
  return (
    <div className="bg-[#23075e] w-[100%] rounded-sm md:pb-0 lg:relative">
      <div className=" lg:flex justify-between mb-8 lg:mb-0">
        {/* info part */}
        <div className="lg:w-[40%] pl-4">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h4 className="mt-[60px] lg:mt-[100px] text-[#14aab1] font-bold uppercase pl-12 line inline-block">
              Services
            </h4>
            <h2 className="text-3xl my-2 text-left">
              <span className="text-[#13bab9] mr-2 font-bold">
                We Provide Medical
              </span>{' '}
              <br />
              <span className="text-white">Consults & Services</span>
            </h2>

            <p className="text-left">
              We are ready to provide you with any Medical, health and fitness
              help as well as prepare a business plan. We are ready to provide
              you with any Medical, health and fitness help as well as prepare a
              business plan.
            </p>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <button className="bg-[#f68685] px-4 py-4 font-bold rounded-sm mt-12 mb-6 md:mb-0 lg:mt-16">
              <h4 className="border-r inline-block border-white pr-3 mr-3 uppercase">
                Get Appointment
              </h4>

              <FontAwesomeIcon
                icon={faPlus}
                className="hover:rotate-[360deg] transition-all duration-700"
              />
            </button>
          </AnimationOnScroll>
        </div>

        {/* image part */}
        <div className="bg-[#f68685] flex justify-center">
          <img
            src={docImg}
            alt="doctor"
            className="h-[90%] hidden lg:block hover:rotate-[5deg] duration-500 "
          />
        </div>
      </div>

      {/* z-index part */}

      <div className="bg-[#1e2148] px-4 md:flex md:justify-between md:itmes-center gap-4 lg:absolute lg:top-1/2 py-14">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <div className="">
            <FontAwesomeIcon
              icon={faHandHoldingMedical}
              size="2xl"
              className="bg-[#25beef] p-4 h-[40px] text-[#3b51aa] mb-8 rounded-md pulse-grow-on-hover"
            />

            <h1 className="font-bold text-2xl text-[#25beef] mb-4">
              Family Consultation
            </h1>
            <p>
              It is a long established fact that a will be distracted by the
              readable content of a page looking at its layout.
            </p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="my-12 md:my-0">
            <FontAwesomeIcon
              icon={faHouseChimneyMedical}
              size="2xl"
              className="bg-[#25beef] p-4 h-[40px] text-[#3b51aa] mb-8 rounded-md pulse-grow-on-hover"
            />
            <h1 className="font-bold text-2xl text-[#25beef] mb-4">
              Home Health Services
            </h1>
            <p>
              It is a long established fact that a will be distracted by the
              readable content of a page looking at its layout.
            </p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="2xl"
              className="bg-[#25beef] p-4 h-[40px] text-[#3b51aa] mb-8 rounded-md pulse-grow-on-hover"
            />
            <h1 className="font-bold text-2xl text-[#25beef] mb-4">
              Minor Procedures
            </h1>
            <p>
              It is a long established fact that a will be distracted by the
              readable content of a page looking at its layout.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Services;
