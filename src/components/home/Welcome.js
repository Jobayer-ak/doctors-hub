import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import clock from '../../assets/home/clock.gif';

const Welcome = () => {
  const specialists = [
    'Cardiologists',
    'Neuro surgeons',
    'Orthopedic surgeons',
    'Gynecologists',
    'Medicine specialists',
    'Dermatologists',
    'Dentists',
    'Neuro medicine specialists',
    'Nuclear medicine specialists',
    'Physio therapists',
    'Onchologists',
    'Psychiatrists',
    "Pediatricians'",
  ];

  return (
    <div className="w-full bg-[#23075e] my-1 pb-12">
      <div className="p-4 lg:flex lg:justify-between gap-14">
        {/* left part */}
        <div className="w-[100%]">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="mb-6 lg:w-[100%]">
              <h4 className="text-[#14aab1] font-bold uppercase pl-12 line inline-block">
                About Doctor's Hub
              </h4>

              <h1 className="font-bold text-3xl text-[#f68685] mt-2">
                Welcome <br />
                To Doctor's Hub
              </h1>
              <p className="text-white mt-2 pr-6">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </AnimationOnScroll>

          {/* Opening time  */}
          <div className="bg-[#1e2148] lg:w-[90%] px-4 pb-12 w-full">
            <img src={clock} alt="" className="w-[150px] h-auto" />
            
            <h2 className="text-[#25beef] text-3xl mb-4">Opening Time</h2>

            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="flex justify-between items-center">
                <h3 className="">Monday - Friday</h3>
                <h3>8.00am - 11.00pm</h3>
              </div>
              <hr className="w-full h-[1px] bg-green-200 opacity-25 my-4"></hr>

              <div className="flex justify-between items-center mb-2 mt-4">
                <h3 className="">Saturday</h3>
                <h3>3.00pam - 11.00pm</h3>
              </div>
              <hr className="w-full h-[1px] bg-green-200 opacity-25 mb-4 my-4"></hr>

              <div className="flex justify-between items-center mb-2">
                <h3 className="">Saturday</h3>
                <h3>10.00am - 11.00pm</h3>
              </div>
              <hr className="w-full h-[1px] bg-green-200 opacity-25 my-4"></hr>
            </AnimationOnScroll>
          </div>
        </div>

        <div className="text-left pl-2 lg:pl-0 lg:w-[60%] pt-2">
          <div className="leading-[47px]">
            {specialists.map((a, index) => (
              <AnimationOnScroll animateIn="animate__fadeIn" key={index}>
                <div >
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-[#f68685] mr-4"
                  />
                  <span className="text-xl">{a}</span>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* right part */}
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="flex justify-center w-[100%] mt-4">
          <button className="bg-[#f68685] px-4 py-4 font-bold rounded-sm">
            <h4 className="border-r inline-block border-white pr-3 mr-3 uppercase">
              Get Appointment
            </h4>

            <FontAwesomeIcon
              icon={faPlus}
              className="hover:rotate-[360deg] transition-all duration-700"
            />
          </button>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Welcome;
