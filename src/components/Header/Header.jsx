import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay,Pagination} from "swiper";
import './header.css'
import I1 from '../img/phone.webp'
import I2 from '../img/slide2_image.jpg'

const Header = () => {
  return (
    <header>
     <div class=" container header__container">
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='info_slide' href="github.com" target="_blank">
                <div className='slide_text'>
                    <h1>Iphone 4s</h1>
                    <h5>128 gb</h5>

                    <a href="" className='btn btn-primary'>Click me</a>
                </div>
                <div className='slide_img'>
                    <img src={I1} alt="" />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='info_slide' href="github.com" target="_blank">
                <div className='slide_text'>
                    <h1>Iphone 4s</h1>
                    <h5>128 gb</h5>

                    <a href="" className='btn btn-primary'>Click me</a>
                </div>
                <div className='slide_img'>
                    <img src={I2} alt="" />
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
     </div> 
    </header>
  )
}

export default Header