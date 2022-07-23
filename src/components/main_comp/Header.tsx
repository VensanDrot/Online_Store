import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "./header.css";
import I1 from "../img/phone.webp";
import I2 from "../img/slide2_image.jpg";

const data = [
  {
    id: 1,
    image: I1,
    title: "Iphone 14",
    small: "128 gb",
    url: "/",
  },
  {
    id: 2,
    image: I2,
    title: "Iphone 14",
    small: "128 gb",
    url: "/",
  },
];

const Header = () => {
  return (
    <section>
      <div className=" container header__container">
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data.map(({ id, image, title, small, url }) => {
            return (
              <SwiperSlide key={id}>
                <div className="info_slide" href="github.com" target="_blank">
                  <div className="slide_text">
                    <h1>{title}</h1>
                    <h5>{small}</h5>

                    <a href={url} className="btn btn-primary">
                      Want me?{" "}
                    </a>
                  </div>
                  <div className="slide_img">
                    <img src={image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="tri_block">
          <div className="categories">
            <a href="/">
              <h1>Computers</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </h5>
            </a>
          </div>

          <div className="categories">
            <a href="/">
              <h1>Computers</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </h5>
            </a>
          </div>

          <div className="categories">
            <a href="/">
              <h1>Computers</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
