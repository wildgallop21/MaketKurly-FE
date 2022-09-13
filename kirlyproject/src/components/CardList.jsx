import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const CardList=()=>{
    return(
        <Swiper
        style={{
            width: "1550px",
            height: "435px",
            backgroundColor: "pink",
            borderRadius: "12px",
          }}
        slidesPerView={4}
        spaceBetween={8}
        initialSlide={1}
        centeredSlides={true}
        pagination={{
            clickable: true,
          }}
          navigation
          autoplay={{ delay: 3000 }}>
            <div>
                <SwiperSlide><Card /></SwiperSlide>
            </div>
        </Swiper>
    );
}

export default CardList;