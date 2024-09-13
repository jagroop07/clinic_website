"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay'

export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={"/img/logo-1.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-3.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-7.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-8.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-10.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-1.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/img/logo-3.svg"} alt="..." width={150} height={150}/>
      </SwiperSlide>
    </Swiper>
  );
};