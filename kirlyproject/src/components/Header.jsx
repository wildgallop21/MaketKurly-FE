import React from "react";
import styled from "styled-components";
import { location } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarCheck,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Box>
          <Logocontainer>
            <Logo>
              <img
                style={{ width: "82px" }}
                src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
              />
            </Logo>
            <LogoName>마켓컬리</LogoName>
          </Logocontainer>
          <SearchBox>
            <Search></Search>
            <SearchLogo>돋보기</SearchLogo>
          </SearchBox>

          <IconBox>
            <IconLocation></IconLocation>
            <IconHeart>하트</IconHeart>
            <IconBasket>장바구니</IconBasket>
            {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <FontAwesomeIcon icon={faApple} /> */}
          </IconBox>

          {/* <TextPurple>샛별/낮</TextPurple>
        <Text>배송안내</Text> */}
        </Box>
      </HeaderContainer>
    </div>
  );
};

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
  flex-direction:row;
  width: 400px;
  height: 48px;
  border: solid 1px #5f0080;
  border-radius: 6px;


  /* background-color: blue */
`;
const SearchLogo = styled.div``;

const Search = styled.input`
  margin: 5px 0 5px 0;
  width: 350px;
  height: 28px;
  border:none;
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
  display: flex;
  flex-direction: row;
`;

const IconBox = styled.div`
  margin: 0 0 0 400px;
  display: flex;
  flex-direction: row;
`;
const IconLocation = styled.div`
  background-color: green;
  margin: 0px 20px 0px 0px;
  width: 36px;
  height: 36px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iI2VlZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K)
    50% 50% no-repeat;
`;
const IconHeart = styled.div`
  background-color: green;
  margin: 0px 20px 0px 0px;
  width: 36px;
  height: 36px;
`;
const IconBasket = styled.div`
  background-color: green;
  margin: 0px 20px 0px 0px;
  width: 36px;
  height: 36px;
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

export default Header;
