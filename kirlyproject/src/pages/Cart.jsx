import React from "react";
import styled from "styled-components";
import CartListProduct from "../components/CartListProduct";


const Cart = () => {
  return (
    <div>
      <Box>
        <Title>장바구니</Title>
        <CartBox>
          <CartRightBox>
            오른쪽
            <Select>
              <Select1>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                  alt=""
                  className="css-1wfsi82 e31wziv0"
                />
                전체선택
                <Select1A>선택삭제</Select1A>
              </Select1>
            </Select>
            <FoodTitleBox>
              <FoodTitle>
                <FoodTitleIcon>아이콘</FoodTitleIcon>
                <FoodTitleText>냉장식품</FoodTitleText>
              </FoodTitle>
            </FoodTitleBox>


            



            <FoodTitleBox>
              <FoodTitle>
                <FoodTitleIcon>아이콘</FoodTitleIcon>
                <FoodTitleText>냉동식품</FoodTitleText>
              </FoodTitle>
            </FoodTitleBox>




            <FoodTitleBox>
              <FoodTitle>
                <FoodTitleText>구매불가상품</FoodTitleText>
              </FoodTitle>
            </FoodTitleBox>



          </CartRightBox>
          <CartLeftBox>
        <AddressBox>
          <Address1>
          배송지
          </Address1>
          <Address2>
            서울시 행복동 행복아파트 11동 103호
          </Address2>
          <Address3>
            샛별배송
          </Address3>
          <Address4>
            배송지변경
          </Address4>
        </AddressBox>
        <PriceBox>
          <Price1>
          <Price1A>상품금액</Price1A>
          <Price1B>110000</Price1B>
          </Price1>
        </PriceBox>
        <Order>
            주문하기
          </Order>
          <Notice>
쿠폰적립금은 주문서에서 사용가능합니다 <br/>
주문완료상태일때만 주무취소가 가능합니다 <br/>
마이컬리-주문내역상세페이지에서 주문취소가 가능합니다 <br/>
상품별로 적립금지급기준이다를수 있습니다. <br/>
          </Notice>



          </CartLeftBox>
        </CartBox>
      </Box>
    </div>
  );
};

const Box = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 80px;
`;
const Title = styled.div`
  padding: 50px 0px 48px;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`;
const CartBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const CartRightBox = styled.div`
  width: 742px;
`;

const Select = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 18px 10px 16px 2px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
`;
const Select1 = styled.div`
  display: inline-flex;
  font-size: 14px;
  line-height: 26px;
  padding: 0px;
  color: rgb(51, 51, 51);
`;

const Select1A = styled.button`
  overflow: visible;
  background-color: transparent;
  border: none;
`;

const FoodTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const FoodTitleBox = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 60px;
  padding: 15px 5px 15px 0px;
  border-top: 1px solid rgb(51, 51, 51);
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* background-color: blue; */
`;

const FoodTitleIcon = styled.div``;
const FoodTitleText = styled.div``;

const FoodContent = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

`;

const Check = styled.div`
margin-right:12px; 
`;
const FoodImage = styled.div`
width:60px;
height:78px;
border: 1rem solid;;
border-color:black;
/* border-radius:1px; */


`;

const FoodText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 0 10px 0 10px ;
  /* line-height: 26px; */
  /* vertical-align: middle; */
`;
const FoodButton = styled.button`
  width:28px;
  height:28px;
    background-color   : whitesmoke;
  border-color: lightgray;
  margin: 0 10px 0 10px ;
`;
const FoodPrice = styled.div`
  width:28px;
  height:28px;
    background-color   : whitesmoke;
  border-color: lightgray;
  margin: 0 10px 0 10px ;
`;

const CartLeftBox = styled.div`
  width: 284px;
  padding-top: 60px;
  position: sticky;
  top: 60px;
  right: 0px;

`;
const AddressBox = styled.div`
  padding: 23px 19px 20px;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(242, 242, 242);
    border-right-color: rgb(242, 242, 242);
    border-left-color: rgb(242, 242, 242);
    border-image: initial;
    border-bottom-style: initial;
    border-bottom-color: initial;
    display:flex;
    flex-direction:column
`;

const Address1 = styled.div`

    padding-left: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg) 0px 50% / 20px 20px no-repeat;
`;

const Address2 = styled.div`
padding-left: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    margin: 10px 0 10px 0;
    line-height: 150%
`;

const Address3 = styled.div`
color: rgb(95, 0, 128);
    font-size: 20px;
    padding: 7px 0px 12px;


`;

const Address4 = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 36px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);

`;

const PriceBox = styled.div`
padding: 23px 19px 20px;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(242, 242, 242);
    border-right-color: rgb(242, 242, 242);
    border-left-color: rgb(242, 242, 242);
    border-image: initial;
    border-bottom-style: initial;
    border-bottom-color: initial;

`;

const Price1 = styled.div`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-top: 0px;

`;
const Price1A = styled.div`
width: 100px;
    font-size: 24px;
    line-height: 24px;
    white-space: nowrap;

`;
const Price1B = styled.div`
font-size: 24px;
    line-height: 24px;
    text-align: right;

`;const Order = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
    font-weight: 500;
    

`;

const Notice = styled.div`
padding: 16px 0px;
color: rgb(102, 102, 102);
    margin: 6px 0px 0px -6px;
    /* background: rgb(153, 153, 153); */

    `;


export default Cart;
