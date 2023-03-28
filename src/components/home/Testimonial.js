import {
  faAward,
  faHandHoldingMedical,
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import baseURL from '../../utils/baseURL';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useQuery } from 'react-query';
import Loader from '../common/Loading/Loader';

const Testimonial = () => {
  const { data, isLoading } = useQuery(['reviews'], async () => {
    const res = await baseURL.get('/get-reviews', {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });


  if (isLoading) {
    return <Loader/>;
  }

  const reviews = data.result;

  return (
    <div className="bg-[#23075e] my-1 w-full lg:pl-4 px-4 lg:px-0">
      <div className="pb-12">
        {/* top part  */}
        <div className="w-[100%] mb-20 lg:mb-10">
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <h4 className="mt-[60px] lg:mt-[100px] text-[#14aab1] font-bold uppercase pl-12 line inline-block">
              Testimonial
            </h4>
          </AnimationOnScroll>
          <h2 className="text-4xl my-2 text-left">
            <span className="text-[#13bab9] mr-2 font-bold">
              What Our Patients
            </span>{' '}
            <span className="text-white">Says</span>
          </h2>
        </div>

        {/* bottom part */}

        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* slider  */}
          <div className="lg:w-[50%]">
            <Swiper
              pagination={{
                type: 'progressbar',
              }}
              // navigation={true}
              loop={true}
              autoplay={{ delay: 2000 }}
              modules={[Autoplay, Pagination]}
              className="mySwiper h-[100%]"
            >
              {reviews?.map((d) => (
                <SwiperSlide>
                  <div className="w-[100%] px-4 py-10 bg-[#260078] shadow-xl">
                    <div className="px-2 py-2">
                      <div className="h-[180px] w-full overflow-hidden">
                        <p className="italic text-xl text-left">
                          <FontAwesomeIcon
                            icon={faQuoteLeft}
                            size="sm"
                            className="pr-2"
                          />
                          {d.review}

                          <FontAwesomeIcon
                            icon={faQuoteRight}
                            size="sm"
                            className="pl-2"
                          />
                        </p>

                        <div className="text-left mt-2">
                          {[...Array(d.rating)].map((r) => (
                            <>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-[#ffc107]"
                              />
                            </>
                          ))}
                          <span className="ml-3 italic">( {d.rating} )</span>
                        </div>

                        {/* <h3 className=''>{ d.rating}</h3> */}
                      </div>
                      <div className="flex justify-start gap-6 items-start">
                        <div className="mt-2 w-[100px]">
                          <img
                            src={d.imageURL}
                            alt=""
                            className="rounded-full"
                          />
                        </div>
                        <div className="w-[100%] text-left pt-2">
                          <h2 className="text-xl text-[#13bab9] font-bold">
                            {d.name}
                          </h2>
                          <h3 className="text-xl font-bold italic">Patient</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* icon part */}
          <div className="w-[40%] bg-[#f68685] py-5 pl-12 hidden lg:block">
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <div className="flex justify-left gap-6">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  size="2xl"
                  className="h-[60px] text-slate-600"
                />
                <div>
                  <h1 className="text-4xl mb-2">2050+</h1>
                  <h2 className="text-2xl text-slate-600 uppercase">
                    SATISFIED PATIENTS
                  </h2>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <div className="flex justify-left gap-6 my-6">
                <FontAwesomeIcon
                  icon={faHandHoldingMedical}
                  size="2xl"
                  className="h-[60px] text-slate-600"
                />
                <div>
                  <h2 className="text-4xl mb-2 uppercase">15+</h2>
                  <h2 className="text-2xl text-slate-600 uppercase">
                    Health Care
                  </h2>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="flex justify-left gap-6">
                <FontAwesomeIcon
                  icon={faAward}
                  size="2xl"
                  className="h-[65px] text-slate-600"
                />
                <div className="ml-4">
                  <h1 className="text-4xl mb-2">45+</h1>
                  <h2 className="text-2xl text-slate-600 uppercase">
                    Awards won
                  </h2>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

// how to get image width using form in reactjs
