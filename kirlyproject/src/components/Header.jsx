import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { location } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";
// import {
//   faCalendarCheck,
//   faCaretRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { faApple } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const navigate = useNavigate();





  return (
    <div>
      <Container>
        <HeaderTop>
          <HeaderTop1 onClick={()=>{navigate("/signup")}}>회원가입</HeaderTop1>
          <HeaderTop2 onClick={()=>{navigate("/login")}}>로그인</HeaderTop2>
          <HeaderTop3>고객센터</HeaderTop3>
        </HeaderTop>
        <HeaderContainer>
          <Box>
            <Logocontainer>
              <Logo>
                <img
                  style={{ width: "82px" }}
                  src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                />
              </Logo>
              <LogoName onClick={()=>{navigate("/")}}
              >마켓컬리</LogoName>
            </Logocontainer>
            <SearchBox>
              <Search></Search>
              <SearchLogo></SearchLogo>
            </SearchBox>

            <IconBox>
              <IconLocation></IconLocation>
              <IconHeart></IconHeart>
              <IconBasket onClick={()=>{navigate("/cart")}}></IconBasket>
            </IconBox>
          </Box>
        </HeaderContainer>
        <HeaderBottom>
          <HeaderBottom1>카테고리</HeaderBottom1>
          <HeaderBottom2>
            <HB1>신상품</HB1>
            <HB2>베스트</HB2>
            <HB3>알뜰쇼핑</HB3>
            <HB4>특가혜택</HB4>
          </HeaderBottom2>
          <HeaderBottom3>샛별 낮 배송안내</HeaderBottom3>
        </HeaderBottom>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderTop = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 20px 10px 0;
  
`;
const HeaderTop1 = styled.div`
  margin: 0 10px 0px 10px;
  color: rgb(95, 0, 128);
`;
const HeaderTop2 = styled.div`
  margin: 0 10px 0px 10px;
`;
const HeaderTop3 = styled.div`
  margin: 0 10px 0px 10px;
`;
const HeaderContainer = styled.div`
  margin: 0 300px 0 300px;
  /* background-color: red; */
`;
const TextPurple = styled.div`
  margin: auto;
  color: rgb(95, 0, 128);
`;
const Text = styled.div`
  margin: auto;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 48px;
  border: solid 1px #5f0080;
  /* margin : 0 0 0 200px; */
  border-radius: 6px;

  /* background-color: blue */
`;
const SearchLogo = styled.div`
position: relative;
    width: 30px;
    height: 30px;
    margin: 10px;
    bottom: 3px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) 0px 0px no-repeat;
`;

const Search = styled.input`
  margin: 5px 0 5px 0;
  width: 350px;
  height: 28px;
  border: none;
  /* background-color: skyblue; */
  font-size: 16px;
  letter-spacing: -0.33px;
  left: 325px;
  top: -55px;

  /* position: absolute; */
  /* left: 325px; */
  /* top: -55px; */
`;

const SearchText = styled.div`
  width: 300px;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: -0.33px;
`;
const Logo = styled.div`
  margin: 0 20px 0 20px;
`;
const LogoName = styled.div`
  color: rgb(95, 0, 128);
  font-weight: 500;
  font-size: 30px;
  vertical-align: bottom;
  
`;
const Logocontainer = styled.div`
  width: 300px;
  height: 63px;
  /* background-color: yellow; */
  /* margin: 30px 0 0 0 ; */
  display: flex;
  flex-direction: row;
`;

const IconBox = styled.div`
  margin: 0 0 0 400px;
  display: flex;
  flex-direction: row;
`;
const IconLocation = styled.div`
    width: 36px;
    height: 36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) 50% 50% no-repeat;
    cursor: pointer;
`;
const IconHeart = styled.div`
width: 36px;
    height: 36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==) 50% 50% no-repeat;
    cursor: pointer;
`;
const IconBasket = styled.div`
display: block;
    width: 36px;
    height: 36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
    cursor: pointer;
`;

const Box = styled.div`
  margin: auto;
  /* background-color: pink; */
  margin: 0 0 1% 0;
  /* align-items: center; */
  height: 63px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;
const HeaderBottom = styled.div`
  margin: 0 0 0 10%;
  display: flex;
  flex-direction: row;

`;
const HeaderBottom1 = styled.div`
  margin: 0 10% 0 10%;
  width: 150px;
    height: 55px;
    height: fit-content;
    font-size: 25px;
    font-weight: 500;
    color: #333;
`;

const HeaderBottom2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  `;

const HeaderBottom3 = styled.div`
  margin: 0 10% 0 10%;
  width: 100px;
    height: 55px;
    height: fit-content;
    font-size: 15px;
    font-weight: 500;
    color: #333;
  `;

const HB1 = styled.div`
    width: 150px;
    height: 55px;
    height: fit-content;
    font-size: 25px;
    font-weight: 1000;
    color: #333;
    `;
const HB2 = styled.div`
    width: 150px;
    height: 55px;
    height: fit-content;
    font-size: 25px;
    font-weight: 500;
    color: #333;
`;
const HB3 = styled.div`
    width: 150px;
    height: 55px;
    height: fit-content;
    font-size: 25px;
    font-weight: 500;
    color: #333;
    `;
const HB4 = styled.div`
    width: 150px;
    height: 55px;
    height: fit-content;
    font-size: 25px;
    font-weight: 500;
    color: #333;
    `;

export default Header;
