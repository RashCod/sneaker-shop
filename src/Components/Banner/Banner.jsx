import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import banner from "../.././img/baner.png";
import { Link } from "react-router-dom";
import { A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Banner = () => {
  return (
    <div className="swipper-blok">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className="baner-img" src={banner} alt="baner" />
          <Link className="buy" to="/">
            Купить
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img className="baner-img" src={banner} alt="baner" />
          <Link className="buy" to="/">
            Купить
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img className="baner-img" src={banner} alt="baner" />
          <Link className="buy" to="/">
            Купить
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
