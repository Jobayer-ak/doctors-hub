import React from 'react';
import firstImg from '../../assets/about/first.png';
import secondImg from '../../assets/about/second.png';
import thirdImg from '../../assets/about/third.png';
import aboutImg from '../../assets/about/about.jpg';
import './about.css';

const About = () => {
  return (
    <div className="mx-4 my-4 bg-[#23075e] lg:w-[83%] min-h-screen rounded-md">
      <div className="bg-[#1e2148] py-[60px]">
        <h2 className="text-white font-bold text-3xl text-center">About Us</h2>
      </div>

      <div className="text-center mt-[60px] text-white">
        <div className="">
          <span className="text-white font-bold uppercase pl-12 line ">
            doctor's hub
          </span>
          <h2 className="text-2xl my-2">
            <span className="text-[#13bab9] mr-2 font-bold">
              Doctor's Hub - The Plastform
            </span>
            You Deserve
          </h2>
          <p className="">
            If you are planning on developing a product landing app or website,
            take a look at this beautiful-crafted
          </p>
        </div>

        {/* three cards */}
        <div className="flex justify-around items-center my-[150px]">
          <div className="w-[30%] h-auto bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
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
          <div className="w-[30%] bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
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
          <div className="w-[30%] bg-[#1e2148] p-4 relative hover:-translate-y-[30px] transition duration-300 delay-75">
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
        <div className="bg-[#1e2148] py-12">
          <div className="flex items-center gap-12">
            {/* left part */}
            <div className="text-left pl-4 w-[50%]">
              <div className="py-4 ">
                <h2 className="text-white font-bold uppercase line pl-12">
                  about
                  <span className="text-[#13bab9] ml-2">doctor's hub</span>
                </h2>
                <h2 className="text-3xl my-2">
                  <span className="text-[#13bab9] mr-2 font-bold">Health</span>
                  <span className="text-white">Commitments</span>
                </h2>
                <p className="">
                  We are ready to provide you with any Medical, health and
                  fitness help as well as prepare a business plan. We are ready
                  to provide you with any Medical, health and fitness help as
                  well as prepare a business plan.
                </p>
              </div>

              {/* proress bars */}
              <div className="mt-10 mb-4">
                <div className="flex justify-between">
                  <span className="text-[#13bab9]">Successful Operations</span>
                  <span className="text-[#13bab9]">80%</span>
                </div>
                <progress
                  className="progress progress-info w-[100%]"
                  value="80"
                  max="100"
                ></progress>

                <div className="flex justify-between mt-6">
                  <span className="text-[#13bab9]">Empathy for Patients</span>
                  <span className="text-[#13bab9]">90%</span>
                </div>
                <progress
                  className="progress progress-info w-[100%]"
                  value="90"
                  max="100"
                ></progress>

                <div className="flex justify-between mt-6">
                  <span className="text-[#13bab9]">Hygiene</span>
                  <span className="text-[#13bab9]">100%</span>
                </div>
                <progress
                  className="progress progress-info w-[100%]"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </div>

            {/* right part */}
            <div className="w-[60%]">
              <img src={aboutImg} alt="" className="" />
            </div>
          </div>
        </div>

        {/* why choose us */}
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default About;

//how to draw 30px horizontal line using pseudo class content using tailwindcss in react
