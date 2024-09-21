"use client"

import { Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { SliderCom } from './SliderCom';

export default () => {
    const [spread, setspread] = useState(false)

    const sliderInfo = [
        {
            description: "During this pandemic and period of lockdown, Knack not only demonstrated their proactive approach to ensuring uninterrupted service delivery but also provide transparency in communication throughout, a true testament to the partnership we have built with Knack over the years.",
            more: "first",
            image: "/img/testi-2-1.webp",
            designation: "VP, RCM Operations",
        },
        {
            description:'I am really excited about our partnership in Accounts Receivable and I believe we are making the right decision to contribute to our success in Accounts Receivable.',
            more: 'second',
            image: '/img/testi-1.webp',
            designation: 'VP, RCM Operations'
        },
        {
            description:'The Knack team is an asset to our organization. Thanks again for being great partners, and a huge thank you to the teams for working endlessly.',
            more: 'third',
            image: '/img/testi-2.webp',
            designation: 'Sr Director of Operations'
        }
    ]

    return (
        <div className="slider">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[0].image} description={sliderInfo[0].description} designation={sliderInfo[0].designation} more={sliderInfo[0].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[1].image} description={sliderInfo[1].description} designation={sliderInfo[1].designation} more={sliderInfo[1].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[2].image} description={sliderInfo[2].description} designation={sliderInfo[2].designation} more={sliderInfo[2].more}/>
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <SliderCom spread={spread} setspread={setspread} image={sliderInfo[0].image} description={sliderInfo[0].description} designation={sliderInfo[0].designation} more={sliderInfo[0].more}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
