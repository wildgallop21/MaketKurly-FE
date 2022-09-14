
import styled from "styled-components";
import React , {useState, useCallback}from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Input from "../elements/Input";
import More from "../elements/More";
import Check from "../elements/Check";
import { getPosts, postItemThunk } from "../redux/modules/posts";
import { createUserThunk } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// const Card=(props)=>{
  const Card=({posts})=>{
    // const {itemName} = posts;
    console.log(posts)
    
   const price = posts?.itemPrice
   function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

          // console.log({props})
  useEffect(() => {
 
    dispatch(getPosts())
    // console.log(getPosts())
  }, [dispatch]);
  // }, []);
  const item_list = useSelector((state) => state.posts)
  // console.log(item_list)
  // console.log(props)

    return(
    <>
    <Stdiv>
        <Cardsty onClick={() => navigate( `/detail/${posts.id}`)}>
            <ImageSt>
        <img 
        style={{ width: "267px", height: "320px" }}
        src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657090094835l0.jpg"

        alt="img"
        />
        </ImageSt>
        <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>
          {/* {item_list.posts[1].itemName} */}
          {posts?.itemName}

          {/* optional chaning */}
          </h3>
          <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>
          {/* {posts?.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 */}
          {posts?.itemPrice}원

          {/* {numberWithCommas(price)}원 */}

          </h3>
          <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>
          {/* {item_list.posts[1].itemName} */}
          {posts?.itemIMG}

          {/* optional chaning */}
          </h3>



        <span styled={{marginLeft:"4px", fontsize: "16px", color:"rgb(250, 98, 47)"}}>31%</span>
        <span styled={{ marginLeft: "4px", fontSize: "16px" }}>8,800원</span>
        <BeforeDiscount>12,000원</BeforeDiscount>
        </Cardsty>

    </Stdiv>
    </>);
}

export default Card;

const Stdiv = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Cardsty = styled.div`

  width: 267px;
  height: 411px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 9px;
  background-repeat: no-repeat;
  background-size: cover;

  /* background-color:green  */
`

const ImageSt = styled.div`

  margin: auto;
/* 
  background-color:red; */
`

const BeforeDiscount = styled.span `
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;
    margin-top: 2px;
`