import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getPosts  } from "../redux/modules/posts";
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
  }, []);



  return(
    <div>


      <Swiper
        // 카드를 보여주는 개수
        slidesPerView={4}
        // 카드 사이 공백
        spaceBetween={0}
        slidesPerGroup={4}
        // 무한 루프를 돌릴 것인지
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

        >
                <DivSt>

          {posts.map((posts, idx) => (
          <SwiperSlide key={posts.id}><Card posts={posts} onClick={()=>{navigate("/detail/:id")}} />
          </SwiperSlide>
          ))}
                  </DivSt>
                  </Swiper>


    </div>
  )
}
export default CardList

const DivSt = styled.div`

`