import React, { useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const info = ["item1", "item2", "item3", "item4", "item5" , "item6", "item7"];

  return (
    <div className="lg:max-w-[750px] xl:max-w-[1200px]">
      <div className="w-full md:w-full lg:w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[100%] mt-5"
        >
          {info.map((d) => (
            <SwiperSlide>
              <div className="card w-full bg-[#23075e] shadow-xl min-h-[250px]">
                <div className="card-body">
                  <div className="flex w-full overflow-hidden bg-slate-700">
                    <p className="italic text-xl">
                      <FontAwesomeIcon icon={faQuoteLeft} size="sm" className="pr-2" />
                      {d}
                      {/* fasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
                      
                      <FontAwesomeIcon icon={faQuoteRight} size="sm" className="pl-2" />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
