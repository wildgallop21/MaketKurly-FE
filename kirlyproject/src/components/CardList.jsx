import styled from "styled-components";
import React , {useState, useCallback}from "react";
import { useNavigate } from "react-router-dom";

import Input from "../elements/Input";
import More from "../elements/More";
import Check from "../elements/Check";
import { getPosts, postItemThunk } from "../redux/modules/posts";
import { createUserThunk } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { Pagination, Navigation } from "swiper";

const CardList=()=>{

  const all_list = useSelector((state) => state.post.post)


  return(
    <div>
      <div>이상품어떄요</div>

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
                <DivSt>

          {all_list.map((item, idx) => (
          <SwiperSlide key={item.id}><Card item={item}/></SwiperSlide>
          ))}
                  </DivSt>
                  </Swiper>


    </div>
  )
}
export default CardList

const DivSt = styled.div`

`
