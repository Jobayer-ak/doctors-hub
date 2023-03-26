import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import doc1 from '../../assets/home/docSlider/doc1.jpg';
import doc2 from '../../assets/home/docSlider/doc2.jpg';
import doc3 from '../../assets/home/docSlider/doc3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';
import { useQuery } from 'react-query';
import baseURL from '../../utils/baseURL';
import Loader from '../common/Loading/Loader';
import { Puff } from 'react-loader-spinner';

const DoctorsSlider = () => {
  const { data, isLoading } = useQuery(['sliderDocs'], async () => {
    const res = await baseURL.get('/all-doctors', {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  // if (isLoading) {
  //   return <Loader />;
  // }

  // console.log("doctors: ",data);

  // const images = [doc1, doc2, doc3];

  return (
    <div className="bg-[#23075e] w-full px-4 pb-12">
      {/* top part  */}
      <div className="w-[100%] text-center mb-6">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <h4 className="mt-[30px] md:mt-[80px] text-[#14aab1] font-bold uppercase pl-12 line inline-block">
            Doctors
          </h4>
        </AnimationOnScroll>
        <h2 className="text-4xl my-2 text-center">
          <span className="text-[#13bab9] mr-2 font-bold">Our Outstanding</span>
          <span className="text-white">Doctors</span>
        </h2>
        <FontAwesomeIcon
          icon="fa-brands fa-facebook"
          size="xl"
          className="text-white"
        />
      </div>

      {/* slider */}
      {/* < className="py-10"> */}
        <div className="py-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {isLoading && (
              <div className='flex justify-center'>
                <Puff
                  height="100"
                  width="100"
                  radius={1}
                  color="#fff"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                /> 
              </div>
            )}
            {data?.map((i) => (
              <SwiperSlide>
                <div className="relative">
                  <div className="parent">
                    <img
                      src={i.imageURL}
                      className=" w-[400px] h-[340px] opacity-75"
                      alt=""
                    />

                    <div className="absolute w-full h-full px-4 bottom-0 pb-4 flex items-end justify-start opacity-0 hover:opacity-100 transition-all duration-500">
                      <div className="bg-white w-full px-4 py-2 left-content">
                        <h4 className="text-2xl font-bold text-blue-700">
                          {i.name}
                        </h4>
                        <h6 className="text-gray-700 text-xl">
                          {i.speciality}
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* social icons */}
                  <div className=" absolute right-[5px] top-[5px]">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-[40px] fill-blue-800 hover:fill-slate-500 transition-all"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                      </svg>
                    </a>
                    <a
                      className="my-2"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-[40px] fill-blue-800 hover:fill-slate-500 transition-all"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                      </svg>
                    </a>
                    <a
                      className=""
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-[35px] fill-blue-800 hover:fill-slate-500 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </div> */}
    </div>
  );
};

export default DoctorsSlider;
