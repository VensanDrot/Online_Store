import React,{useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "./header.css";




const Header = () => {
  const [Slides, SetSlides] = useState([]);

      const response = fetch("http://localhost:3001/slides", {
        method: "get",
      }).then((res) => res.json());


      useEffect(() => {
        response.then((data) => {
          SetSlides(data);
        });
      }, []);
  
      console.log(Slides)
  
  
  
  return (

    
      <div className=" header__container">
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
          {Slides.map((g) => {
            return (
              <SwiperSlide key={g.id}>
                <div className="info_slide" >
                  <div className="slide_text">
                    <h1>{g.name}</h1>
                    <h5>{g.small}</h5>
                    <Link to={"/Item/"+g.url} className="btn btn-primary">
                      Want me?{" "}
                    </Link>
                    
                  </div>
                  <div className="slide_img">
                    <img src={g.image} alt="" />
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

  );
};

export default Header;
