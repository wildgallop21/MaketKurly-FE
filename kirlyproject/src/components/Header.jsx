import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Box>
          <Logocontainer>
            <Logo>로고자리</Logo>
            <LogoName>마켓컬리</LogoName>
          </Logocontainer>
          <Search>검색창</Search>
          <IconBox>
            <Icon>배송지</Icon>
            <Icon>하트</Icon>
            <Icon>장바구니</Icon>
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
  background-color: red;
`;
const TextPurple = styled.div`
  margin: auto;
  color: rgb(95, 0, 128);
`;
const Text = styled.div`
  margin: auto;
`;
const Search = styled.div`
  margin: 10px 0 10px 0;
  width: 400px;
  height: 48px;
  background-color: skyblue;
  /* position: absolute; */
  /* left: 325px; */
  /* top: -55px; */
`;
const Logo = styled.div``;
const LogoName = styled.div`
  color: rgb(95, 0, 128);
`;
const Logocontainer = styled.div`
  width: 300px;
  height: 63px;
  background-color: yellow;
  display: flex;
  flex-direction: row;
`;

const IconBox = styled.div`
  margin: 0 0 0 400px;
  display: flex;
  flex-direction: row;
`;
const Icon = styled.div`
  background-color: green;
  margin: 0px 20px 0px 0px;
  width: 36px;
  height: 36px;
`;

const Box = styled.div`
  margin: auto;
  background-color: pink;
  margin: 0 0 1% 0;
  /* align-items: center; */
  height: 63px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;

export default Header;
