
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
import { useParams } from "react-router-dom";
import { getPost } from "../redux/modules/posts";
import { postCartThunk } from "../redux/modules/carts";


// const Detail=(posts)=>{
  const Detail=()=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id}  = useParams();

    const itemId = id.id 
    const item_list = useSelector((state) => state.posts.posts) 
    console.log(item_list)
  useEffect(() => {
    dispatch(getPosts(id))
    dispatch(getPost(id))
    console.log(id)
    
  }, []);
  console.log(id)
  
  const cartDispatch = () => {
    dispatch(
      postCartThunk({
        product_Id: id
      })
    )
    }
    const imgDetail = item_list[{id}.id-1]?.itemName




    return(
        //헤더 불러오기
        <>       
         <DetailPagediv>
            <Imagediv>
            {/* <img 
            styled={{width: "430px", height: "552px"}}
            //이미지 받아오게끔 변경필요함 
            src="https://img-cf.kurly.com/shop/data/goods/1655704363603l0.jpg" /> */}
            <img  
            styled={{width: "430px", height: "552px"}}
            alt = "img" src= {item_list[{id}.id-1]?.itemIMG}
          
            ></img>
                    </ Imagediv>
       <Imagediv>
       {item_list[{id}.id-1]?.itemIMG}
       </Imagediv>
        <Titlediv>
            {/* 상품명 */}
            {/* <Name>[YOZM]플레인그릭요거트500g</Name> */}
            <Name>{item_list[{id}.id-1]?.itemName}</Name>

            {/* 상품 간략 설명 */}
            <MiniDes>넉넉하게 맛보는 그릭요거트</MiniDes>

            <Pricediv>
            {/* 할인율 */}
            <DiscountPer>10%</DiscountPer>
            {/* 할인가격 */}
            {/* <Price>13,500원</Price> */}
            {/* <Price>{item_list[{id}.id]?.itemPrice}</Price> */}
            <Price>
            {Number(item_list[{id}.id-1]?.itemPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원


            </Price>

            </Pricediv>

            <InformationWrap>
                <dl className="list">
                    <dt className="title">배송</dt>
                    <dd className="desc">샛별배송</dd>
                </dl>
                <dl className="list">
                    <dt className="title">판매자</dt>
                    <dd className="desc">컬리</dd>
                </dl>
                <dl className="list">
                    <dt className="title">포장타입</dt>
                    <dd className="desc">냉장(종이포장)</dd>
                </dl>
                <dl className="list">
                    <dt className="title">중량/용량</dt>
                    <dd className="desc">500g</dd>
                </dl>
                <dl className="list">
                    <dt className="title">알레르기정보</dt>
                    <dd className="desc">-호두가 함유된 제품과 같은 제조시설에서 제조</dd>
                </dl>
                <dl className="list">
                    <dt className="title">유통기한정보</dt>
                    <dd className="desc">수령일 포함 최소 5일 남은 제품을 보내드립니다.</dd>
                </dl>
                <dl className="list">
                    <dt className="title">입고안내</dt>
                    <dd className="desc">매주 화/목/토 정기입고</dd>
                </dl>

            </InformationWrap>
        </Titlediv>
        <Boxwrap>
            <span>구매수량</span>
        <Option>
            <span className="count">
                <button className="down btn"
                ></button>
                <input className="inp"/>
                <button className="up btn"></button>
            </span>
        </Option>
        </Boxwrap>


        <Total>
        <div className="price">
            <strong>총 상품금액 : </strong>
            <span className="num">13,500</span>
            <span className="won">원</span>
        </div>
        </Total>
        <BtnWrap>
            <button className="btn" onClick={cartDispatch} >
              장바구니 담기
            </button>
          </BtnWrap>
        </DetailPagediv>
        </>

    )
}

export default Detail;

const DetailPagediv= styled.div`
  width: 1050px;
  height: 987px;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 50px;

`
const Imagediv = styled.div `
  float: left;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: "430px"; 
  height: "552px"

`

const Titlediv = styled.div`
  float: right;
  width: 560px;

`
const Name = styled.div`
  display: block;
  padding-right: 60px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  word-break: break-all;
  letter-spacing: -0.5px;
`

const MiniDes = styled.span`
  display: block;
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  word-break: break-all;
`

const Pricediv = styled.div`
    flex-direction: row;
    align-items: flex-end;
    padding-top: 19px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.5px;

`

const DiscountPer = styled.span`
   padding-right: 9px;
    font-size: 28px;
    color: rgb(250, 98, 47);
`

const Price = styled.span`
font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0;
  font-family: noto sans;
  color: #333;
  & span {
    padding: 0 7px 0 2px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    vertical-align: 2px;
    letter-spacing: 0;
  }
`;



const InformationWrap = styled.div`
  float: right;
  width: 560px;
  margin-top: 19px;
  padding-bottom: 25px;
  border-top: 1px solid #f4f4f4;
  .list {
    overflow: hidden;
    padding: 13px 0;
    border-bottom: 1px solid #f4f4f4;
  }
  .title {
    float: left;
    width: 128px;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }
  .desc {
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
  }
`;

const Boxwrap = styled.div`
  float: right;
  width: 560px;
  margin-top: -1px;
  padding-bottom: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  & > strong {
    float: left;
    width: 128px;
    padding-top: 9px;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
  .a {
    display: block;
    overflow: hidden;
    width: 100%;
    padding: 9px 0 9px 15px;
    border-top: 1px solid #f4f4f4;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.3px;
  }
`;

const Option = styled.div`
  margin-left: 65px;
  padding-top: 0;
  overflow: hidden;
  .count {
    overflow: hidden;
    float: left;
    width: 88px;
    height: 30px;
    border: 1px solid #dddfe1;
    border-radius: 3px;
  }
  .down {
    background: #fff url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg")
      no-repeat 50% 50%;
    width: 30px;
    outline: none;
  }
  .btn {
    overflow: hidden;
    float: left;
    width: 28px;
    height: 28px;
    border: 0;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
  }
  .inp {
    float: left;
    width: 30px;
    height: 30px;
    margin-right: -1px;
    padding: 0 0 4px;
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    line-height: 18px;
    text-align: center;
    outline: none;
  }
  .up {
    float: right;
    margin-left: -1px;
    background: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg")
      no-repeat 50% 50%;
    background-size: 30px 30px;
  }
`;
const Total = styled.div`
  display: block;
  float: right;
  padding: 30px 0 20px;
  border-top: 1px solid #f4f4f4;
  .price {
    overflow: hidden;
    text-align: right;
  }
  .strong {
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    vertical-align: 2px;
  }
  .num {
    padding-left: 8px;
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
  }
  .won {
    padding-left: 2px;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    vertical-align: -1px;
  }
`

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 30px 0 20px;
  .btn {
    width: 432px;
    height: 56px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    color: #fff;
    background-color: #5f0081;
    border: 1px solid #5f0081;
    cursor: pointer;
  }
`;