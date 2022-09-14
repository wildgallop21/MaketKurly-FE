import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartThunk } from "../redux/modules/carts";
import Header from "../components/Header"




const CartListProduct = (posts) => {

  console.log(posts)
  const dispatch = useDispatch();

  const cart_product = useSelector((state) => state.carts.data) 
  // console.log("state.carts조회",cart_product)

  useEffect(() => {
    dispatch(getCartThunk())

    // dispatch(getPost(id))
    // console.log(getPosts())
  }, [dispatch]);


  return (

    <div>
      
      <Box>

            <FoodTitleBox>
              <FoodTitle>
                <FoodTitleIcon></FoodTitleIcon>
                <FoodTitleText>냉장식품</FoodTitleText>
              </FoodTitle>
            </FoodTitleBox>
            <FoodContent>
              <DivSt>
                
              </DivSt>

            <img 
            styled={{width: "60px", height: "78px"}}
            src={cart_product[0]?.itemIMG}
            alt="" className="css-1wfsi82 e31wziv0"
            />

            {/* <FoodImage src={cart_product[0]?.itemIMG}
            alt="" className="css-1wfsi82 e31wziv0">
              음식사진

            </FoodImage> */}
            
            <FoodText>
            {cart_product[0]?.itemName}
            </FoodText>
            <FoodButton>
              -
            </FoodButton>
            1
            <FoodButton>
              +
            </FoodButton>
            <FoodPrice>
            {/* {cart_product[0]?.itemPrice} */}
            {Number(cart_product[0]?.itemPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </FoodPrice>
            <FoodButton>
              X
            </FoodButton>
            </FoodContent>
      </Box>
    </div>

  );
};

export default CartListProduct

const Box = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 80px;
`;
const DivSt = styled.div`

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
// const FoodImage = styled.img`
// width:60px;
// height:78px;
// border: 1rem solid;;
/* border-color:black; */
/* border-radius:1px; */


// `;

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