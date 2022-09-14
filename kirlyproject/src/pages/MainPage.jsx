import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import styled from "styled-components";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


import Header from "../components/Header"
import Footer from "../components/Footer"

import CardList from "../components/CardList";


SwiperCore.use([Navigation, Pagination]);

export default function MainPage() {
  return (
    <div>

      {/* <Card/> */}
      <Header/>


      <Header />

      <SwipeBox>
        <Swiper
          style={{
            width: "1770px",
            height: "370px",
            backgroundColor: "#FFF5F1",
            borderRadius: "12px",
          }}
          spaceBetween={8}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            {/* <SlIMG1
        src="https://pixabay.com/images/id-494706/"></SlIMG1> */}
            <img
              className="main-banner-image"
              src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/bb6b5057-b7a4-4870-b4de-de192729c085.jpg"
              alt="main-banner-596"
              style={{
                width:"25%"              }
              }
            ></img>
                        <img
              className="main-banner-image"
              src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/bb6b5057-b7a4-4870-b4de-de192729c085.jpg"
              alt="main-banner-596"
              style={{
                width:"25%"              }
              }

            ></img>

<img
              className="main-banner-image"
              src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/bb6b5057-b7a4-4870-b4de-de192729c085.jpg"
              alt="main-banner-596"
              style={{
                width:"25%"              }
              }

            ></img>

          </SwiperSlide>
          <SwiperSlide>
            <img
              className="main-banner-image"
              src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/d5dcd4e4-9a54-427e-9282-e16ae5fc911e.jpg"
              alt="main-banner-601"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="main-banner-image"
              src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ca8b5770-3919-48e5-b14b-66a4d0714d30.jpg"
              alt="main-banner-592"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide> */}
        </Swiper>
      </SwipeBox>
      <Event>
      <img src="https://product-image.kurly.com/banner/random-band/pc/img/6dcd7d28-61ac-4589-8d7d-dad01401a3e1.jpg" alt=""/>
      </Event>
      <SwipeBox2>
        <CardTitle>
          이상품은 어때요?
        </CardTitle>
        <CardList/>
        {/* <Swiper
          style={{
            width: "1550px",
            height: "370px",
            backgroundColor: "pink",
            borderRadius: "12px",
          }}
          // slidesPerView={4}
          spaceBetween={8}
          initialSlide={1}
          centeredSlides={true}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
          cardlist1
         
            <SlIMG1></SlIMG1>
          </SwiperSlide>
          <SwiperSlide>cardlist2</SwiperSlide>
          <SwiperSlide>cardlist3</SwiperSlide>
          <SwiperSlide>cardlist4</SwiperSlide>
        </Swiper> */}
      </SwipeBox2>

      <Footer/>


    </div>
  );
}

const SwipeBox = styled.div`
  /* width: 100%; */
  /* min-width: 1050px; */
  height: 370px;
  object-fit: cover;
  margin: 50px 0 50px 0;
`;
const CardTitle = styled.div`
  color: rgb(51, 51, 51);
    font-size: 38px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    text-align:center;
    vertical-align:middle;
    margin: 50px 0 50px 0;




`;
const SwipeBox2 = styled.div`
  width: 100%;
  min-width: 200px;
  height: 370px;
  /* object-fit: cover; */
`;
const Event = styled.div`
width: 650px;
    margin: 0 10px  0 10px  ;
    /* padding: 40px 0px; */
`;

const SlIMG1 = styled.img``;
const SlIMG2 = styled.img``;
const SlIMG3 = styled.img``;
