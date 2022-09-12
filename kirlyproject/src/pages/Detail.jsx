import React from "react";
import styled from "styled-components";


const Detail=()=>{
    return(
        //헤더 불러오기
        <>       
         <DetailPagediv>
            <Imagediv>
            <img 
            styled={{width: "430px", height: "552px" }}
            //이미지 받아오게끔 변경필요함 
            src="https://img-cf.kurly.com/shop/data/goods/1655704363603l0.jpg" />
            </Imagediv>
        </DetailPagediv>
        <Titlediv>
            {/* 상품명 */}
            <Name>[YOZM]플레인그릭요거트500g</Name>
            {/* 상품 간략 설명 */}
            <MiniDes>넉넉하게 맛보는 그릭요거트</MiniDes>

            <Pricediv>
            {/* 할인율 */}
            <DiscountPer>10%</DiscountPer>
            {/* 할인가격 */}
            <Price>13,500</Price>
            <Won>원</Won>
            </Pricediv>

            <InformationWrap>
                <dl>
                    <dt>배송</dt>
                    <dd>샛별배송</dd>
                </dl>
                <dl>
                    <dt>판매자</dt>
                    <dd>컬리</dd>
                </dl>
                <dl>
                    <dt>포장타입</dt>
                    <dd>냉장(종이포장)</dd>
                </dl>
                <dl>
                    <dt>중량/용량</dt>
                    <dd>500g</dd>
                </dl>
                <dl>
                    <dt>알레르기정보</dt>
                    <dd>-호두가 함유된 제품과 같은 제조시설에서 제조</dd>
                </dl>
                <dl>
                    <dt>유통기한정보</dt>
                    <dd>수령일 포함 최소 5일 남은 제품을 보내드립니다.</dd>
                </dl>
                <dl>
                    <dt>입고안내</dt>
                    <dd>매주 화/목/토 정기입고</dd>
                </dl>
                <dl>
                    <dt>구매수량</dt>
                    <div>
                        <button aria-label="수량내리기"></button>
                        <div>1</div>
                        <button aria-label="수량올리기"></button>
                    </div>
                </dl>
            </InformationWrap>
        </Titlediv>
        </>

    )
}

export default Detail;

const DetailPagediv= styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 50px;
`
const Imagediv = styled.div `
  float: left;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
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
    display: flex;
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
    padding-right: 4px;
    font-size: 28px;
    color: rgb(51, 51, 51);
`

const Won = styled.span`
    display: inline-block;
    position: relative;
    top: 3px;
    font-size: 18px;
    color: rgb(51, 51, 51);
    vertical-align: top;
`

const InformationWrap = styled.div`
  float: right;
  width: 560px;
  margin-top: 19px;
  padding-bottom: 25px;
  border-top: 1px solid #f4f4f4;
`