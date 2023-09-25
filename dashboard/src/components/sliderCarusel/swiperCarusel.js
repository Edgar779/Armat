import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { carouselList } from 'utils';
import 'swiper/css';
import 'swiper/css/navigation';
import { Images } from 'assets';

export const SwiperCarusle = ({ list }) => {
    /**
     * Hooks.
     */

    return (
        <div className="carousel-container">
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: '#next',
                    prevEl: '#prev',
                }}
                className="mySwiper swipe-container">
                <div className="previes-btn" id="prev">
                    <div className="">
                        <img src={Images.PreviouseImage} alt=" Previouse Image" />
                    </div>
                </div>
                <SwiperSlide className="swiper-box">
                    <div className="swiper-image">
                        <div className="main-img">Main Image</div>
                        <img src={Images.SwiperExample} alt={'Swiper Example'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-image">
                        <img src={Images.SwiperExample} alt={'Swiper Example'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-image">
                        <img src={Images.SwiperExample} alt={'Swiper Example'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-image">
                        <img src={Images.SwiperExample} alt={'Swiper Example'} />
                    </div>
                </SwiperSlide>
                <div className=" next-btn" id="next">
                    <div className="">
                        <img src={Images.NextImage} alt="Next Image" />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};
