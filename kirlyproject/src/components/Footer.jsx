import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterTop>
        <FooterTop1>
          <FooterTop1A>고객행복센터</FooterTop1A>
          <FooterTop1B>1644-1107</FooterTop1B>
          <FooterTop1C>
            <FooterTop1CA>카카오톡문의</FooterTop1CA>
            <FooterTop1CB>1:1문의</FooterTop1CB>
            <FooterTop1CC>대량주문문의</FooterTop1CC>
          </FooterTop1C>
          <FooterTop1D>
            비회원문의 : help@kurlycorp.com <br/>
            비회원대량주문문의 : kurlygif@kurlycorp.com<br/>
          </FooterTop1D>
        </FooterTop1>
        <FooterTop2>
          <FooterTop2ABox>
          <FooterTop2A>컬리소개</FooterTop2A>
          <FooterTop2A>컬리소개영상</FooterTop2A>

          <FooterTop2A>인재채용</FooterTop2A>
          <FooterTop2A>이용약관</FooterTop2A>
          <FooterTop2A>개인정보처리방침</FooterTop2A>
          </FooterTop2ABox>
          <FooterTop3>
          법인명(상호):주식회사 컬리 | 사업자등록번호: 261-81-23557 사업자정보확인<br/>
          통신판매업:제 2018-서울강남-01645호 | 개인정보보호책임자 : 이원준<br/>
          주소: 서울특별시 강남구 테헤란로 133,18 (역삼동) |대표이사 김슬아<br/>
          입점문의: 임점문의하기 |제휴문의 | buisness@kurlycorp.com<br/>
          채용문의 : recruit@kurlycorp.com<br/>
          팩스: 070-7500-6098<br/>
          
          </FooterTop3>
          <FooterTop4Box>
          <FooterTop4 src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기">
          </FooterTop4>
          <FooterTop4 src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기">            
          </FooterTop4>
          <FooterTop4 src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 네이버블로그 바로가기">            
          </FooterTop4>
          <FooterTop4 src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 네이버포스트 바로가기">            
          </FooterTop4>
          <FooterTop4 src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기">            
          </FooterTop4>
          </FooterTop4Box>

        </FooterTop2>
      </FooterTop>
      <FooterMiddle>
        <FooterMiddle1 src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고" className="css-1262i6n e57xuci1">

        </FooterMiddle1>
        <FooterMiddle2>
          [인증범위]마켓컬리 쇼핑몰 서비스 개발 및 운영 <br/>
          (심사받지않은 물리적 인프라 제외)<br/>
          [유효기간] 2022.01.19~2015.01.18<br/>
        </FooterMiddle2>
        <FooterMiddle1 src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="eprivacy plus 로고" className="css-1262i6n e57xuci1">

        </FooterMiddle1>
        <FooterMiddle2>
          개인정보보호 우수웹사이트 <br/>
          개인정보처리시스템인증(ePRIVACY PLUS)<br/>
        </FooterMiddle2>
        <FooterMiddle1 src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고" className="css-as7ifw e57xuci1">

        </FooterMiddle1>
        <FooterMiddle2>
          토스페이먼츠 구매안전(에스크로)<br/>
          서비스를 이용하실 수 있습니다.<br/>
        </FooterMiddle2>
        <FooterMiddle1 src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고" className="css-1262i6n e57xuci1">

        </FooterMiddle1>

        <FooterMiddle2>
          고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>
          채무지급보증계약을 체결하여 안전거래를 보장하고<br/>
          있습니다<br/>
        </FooterMiddle2>


      </FooterMiddle>
    </div>
  );
};

const FooterTop = styled.div`
  width: 1050px;
  margin: 0 auto;
  /* background-color: blue; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 67px;
  margin-top:4rem;

`;

const FooterTop1 = styled.div`
  /* background-color: yellow; */
`;

const FooterTop1A = styled.div`
  padding-bottom: 17px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  /* background-color: pink; */
`;
const FooterTop1B = styled.div`
  /* background-color: yellow; */
  display: block;
  padding-bottom: 20px;
  font-size: 28px;
  line-height: 40px;
`;
const FooterTop1C = styled.div`
  /* background-color: green; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 38px;
`;
const FooterTop1CA = styled.div`
  display: block;
  width: 140px;
  height: 40px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
`;
const FooterTop1CB = styled.div`
  display: block;
  width: 140px;
  height: 40px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
`;
const FooterTop1CC = styled.div`
  display: block;
  width: 140px;
  height: 40px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
`;

const FooterTop1D = styled.div`
  /* background-color: blue; */
`;

const FooterTop2 = styled.div`
  /* background-color: green; */
  display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    /* justify-content: space-between; */

  /* padding-bottom: 29px; */
`;
const FooterTop2ABox = styled.div`
  /* background-color: blue; */
  font-size: 18x;
  line-height: 18px;
  margin: 0 10px 0 10px;
  display:flex;
  flex-direction:row; 

`;
const FooterTop2A = styled.div`
  /* background-color: blue; */
  font-size: 18x;
  line-height: 18px;
  margin: 0 10px 0 10px;

`;
const FooterTop3 = styled.div`
  /* background-color: red; */
  margin: 0 10px 0 10px;
  color: rgb(153, 153, 153);

`;
const FooterTop3A = styled.div`
  /* background-color: red; */
  margin: 0 10px 0 10px;
`;
const FooterTop4 = styled.img`
  margin: 0 10px 0 10px;
  width: 40px;
  height: 40px;
`;
const FooterTop4Box = styled.div`
display:flex;
flex-direction:row;
`;
const FooterMiddle = styled.div`
display:flex;
flex-direction:row;
width: 1050px;
  margin: 0 auto;

`;

const FooterMiddle1 = styled.img`
  width: 40px;
  height: 40px;
/* background-color:yellow; */
margin:0 6px 0 6px ;
`;

const FooterMiddle2 = styled.div`
font-size: 10px;
    line-height: 14.5px;
    color: rgb(153, 153, 153);
    word-break: break-word;
    margin:0 6px 0 6px ;
    `;
const FooterMiddle3 = styled.div``;

export default Footer;
