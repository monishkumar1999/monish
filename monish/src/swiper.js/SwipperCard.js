import React from "react";
import img from "./object";
import useSwiperExpo from "./useSwiper";

import 'swiper/css';
import 'swiper/css/effect-cards';

const SwipperCard = () => {
useSwiperExpo()

  return (
    <div class="swiper">
      <div class="swiper-wrapper">
        {img.map((img) => {
          return (
            <div class="swiper-slide">
              <img src={img.url} alt="" />
              <div class="overlay">
                <h2>{img.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwipperCard;
