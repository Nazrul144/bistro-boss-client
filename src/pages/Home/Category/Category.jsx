import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import TitleSection from '../../../components/SectionTitle/TitleSection';


const Category = () => {
    return (
        <div>
            <section>
               <TitleSection 
               subHeading={"---From 11:00am to 10:00pm---"} 
               heading={"ORDER ONLINE"}
               ></TitleSection>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide><img src={slide1} alt="" />
                <h1 className='text-sky-400 uppercase -mt-24 text-center'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                <h1 className='text-sky-400 uppercase -mt-24 text-center'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                <h1 className='text-sky-400 uppercase -mt-24 text-center'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                <h1 className='text-sky-400 uppercase -mt-24 text-center'>Desearts</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                <h1 className='text-sky-400 uppercase -mt-24 text-center'>Salad</h1>

                </SwiperSlide>
            </Swiper>
            </section>
        </div>
    );
};

export default Category;