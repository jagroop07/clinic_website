"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function AboutSlider() {
    return (
        <>
            <div className='aboutSlider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <Image src={'/img/about1.png'} alt='...' height={1000} width={1000} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <Image src={'/img/about2.png'} alt='...' height={1000} width={1000} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <Image src={'/img/about3.png'} alt='...' height={1000} width={1000} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <Image src={'/img/about4.png'} alt='...' height={1000} width={1000} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
