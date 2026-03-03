"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ImageCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="rounded-xl"
      >
        <SwiperSlide>
          <img src="/images/slide1.jpg" className="w-full h-[500px] object-cover rounded-xl" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/slide2.jpg" className="w-full h-[500px] object-cover rounded-xl" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/slide3.jpg" className="w-full h-[500px] object-cover rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}