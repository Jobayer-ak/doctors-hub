import React, { useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Slider = () => {
  const info = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="w-full md:w-full lg:max-w-[650px] xl:max-w-[1200px] bg-[green] mb-5 h-[250px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {info.map((d) => (
          <SwiperSlide><h2 className="text-white text-2xl font-bold">{d}</h2></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
