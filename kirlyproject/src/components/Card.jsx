import React from "react";
import styled from "styled-components";

const Card=()=>{
    return(
    <>
    <Stdiv>
        <Cardsty>
            <ImageSt>
        <img 
        style={{ width: "267px", height: "320px" }}
        src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657090094835l0.jpg"
        />
        </ImageSt>
        <h3 
        styled={{marginLeft:"4px", fontsize: "16px"}}>[미소프레쉬] 칼칼한 대구탕 (냉동)</h3>
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