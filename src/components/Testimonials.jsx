import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsData } from "../data";
import { Pagination } from "swiper";
import "../slider.css";
import "swiper/css";
import "swiper/css/pagination";

const slidedata = testimonialsData;
const Testimonials = ({ image, name, web, message, delay }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slidedata.map((slide_data, index) => (
        <SwiperSlide
          key={index}
          className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          // className={
          //   "flex md:gap-x-[30px] border border-accent-primary shadow-xl items-start bg-white rounded-[20px] lg:max-w-[650px] lg:max-h-[900px] max-h-[600px] max-w-screen-sm pt-12"
          // }
        >
          <img src={slide_data.image} className=" rounded-full" alt="" />
          <div>
            <div className="pt-0.5">
              <div className="font-bold text-primary text-[18px]">
                {slide_data.name}
              </div>
              <div className="cursor-pointer font-bold text-accent-primary">
                {slide_data.web}
              </div>
              <p className="pt-4 max-w-[240px]">{slide_data.message}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
