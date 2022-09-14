
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
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {posts} = useSelector((state) => state.posts)
  console.log(posts)

  useEffect(() => {
 
    dispatch(getPosts())
    console.log(getPosts())
  }, []);



  return(
    <div>
      

      <Swiper
          style={{
            width: "1770px",
            height: "570px",
            backgroundColor: "#FFF5F1",
            borderRadius: "12px",
          }}
          spaceBetween={8}
          initialSlide={3}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={4}


          navigation
          autoplay={{ delay: 3000 }}
        >
                <DivSt>

          {posts.map((posts, idx) => (
          <SwiperSlide key={posts.id}><Card posts={posts}/></SwiperSlide>
          ))}
                  </DivSt>
                  </Swiper>


    </div>
  )
}
export default CardList

const DivSt = styled.div`

`
