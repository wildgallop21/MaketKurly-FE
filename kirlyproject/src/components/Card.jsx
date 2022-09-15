import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../redux/modules/posts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

  const Card=({posts})=>{


    // console.log(posts)
    

  const dispatch = useDispatch();
  const navigate = useNavigate();




  useEffect(() => {
 
    dispatch(getPosts())

  }, [dispatch]);

  const item_list = useSelector((state) => state.posts)

    return(
    <>
    <Stdiv>
        <Cardsty onClick={() => navigate( `/detail/${posts.id}`)}>
            <ImageSt>

        {/* 상품이미지 */}
        <img 
        style={{ width: "267px", height: "320px" }}
        src={posts?.itemIMG}
        alt="img"
        />
        </ImageSt>
        <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>
          {/* 상품 이름 */}
          {posts?.itemName}
          </h3>
          <h3 styled={{marginLeft:"4px", fontsize: "15px"}}>
            {/* 가격+뒤에서 세번째 자리에 , 찍어줌 */}

       
          {Number(posts.itemPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원

          {/* {posts?.itemPrice}원 */}

          {/* {numberWithCommas(price)}원 */}

          </h3>
          <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>
          {/* {item_list.posts[1].itemName} */}
          {/* <img alt="test" src={posts?.itemIMG}> */}
          {/* </img> */}


          </h3>
          {/* <h3 styled={{marginLeft:"4px", fontsize: "16px"}}>

          </h3> */}


            {/* 할인전 가격, 할인율 불러와야하는데 어떡해야할까요.... */}
        {/* <span styled={{marginLeft:"4px", fontsize: "16px", color:"rgb(250, 98, 47)"}}>31%</span>
        <span styled={{ marginLeft: "4px", fontSize: "16px" }}>8,800원</span>
        <BeforeDiscount>12,000원</BeforeDiscount> */}
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