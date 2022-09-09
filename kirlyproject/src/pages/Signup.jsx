import React from "react";
import styled from "styled-components";


const Signup=()=>{
    return (
        <SignUPContainer>
            <Title>회원가입</Title>

            <Subdiv>
                <Sub>
                    <span>*</span>
                    필수입력사항
                </Sub>

                <div styled={{width:"300px"}}>
                    <IDdiv>
                        <label>아이디<span>*</span></label>
                        <input
                        id= "user_id"
                        name = "user_id"
                        placeholder="아이디를 입력해주세요"
                        type="text"
                         />
                         <button><span>중복확인</span></button>
                    </IDdiv>

                    <PWdiv>
                        <label>비밀번호<span>*</span></label>
                        <input
                        id= "password"
                        name = "password"
                        placeholder="비밀번호를 입력해주세요"
                        type="password"
                         />
                    </PWdiv>

                    <PWCNdiv>
                        <label>비밀번호 확인<span>*</span></label>
                        <input
                        id= "passwordConfirm"
                        name = "passwordConfirm"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        type="password"
                         />
                    </PWCNdiv>

                    <Namediv>
                        <label>이름<span>*</span></label>
                        <input
                        id= "name"
                        name = "name"
                        placeholder="이름을 입력해주세요"
                        type="text"
                         />
                    </Namediv>

                    <Emdiv>
                        <label>이메일<span>*</span></label>
                        <input
                        id= "email"
                        name = "email"
                        placeholder="예: marketkurly@kurly.com"
                        type="text"
                         />
                         <button><span>중복확인</span></button>
                    </Emdiv>

                    <Phonediv>
                        <label>휴대폰<span>*</span></label>
                        <input
                        id= "mobileNumber"
                        name = "mobileNumber"
                        placeholder="숫자만 입력해주세요"
                        type="tel"
                         />
                         <button><span>인증번호 받기</span></button>
                    </Phonediv>

                    <Maildiv>
                    <label>주소<span>*</span></label>
                    <div>
                    <button styled={{ height: "44", radius:"4px"}}>
                        <span><img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />주소검색</span>
                    </button>
                    <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                    </div>
                    </Maildiv>

                    <div>
                        <label>성별</label>
                        <input 
                        id="gender-man"
                        name="gender"
                        type="radio"
                        value="MALE"/>
                        <span>남자</span>
                        <input 
                        id="gender-woman"
                        name="gender"
                        type="radio"
                        value="FEMALE"/>
                        <span>여자</span>
                        <input 
                        id="gender-none"
                        name="gender"
                        type="radio"
                        value="NONE"/>
                        <span>선택안함</span>
                    </div>

                    <div>
                        <label>생년월일</label>
                        <div>
                            <input
                            name="birthYear"
                            placeholder="YYYY"
                            type="text"
                          />
                          <span>/</span>
                          <input 
                            name="birthMonth"
                            placeholder="MM"
                            type="text"
                          />
                          <span>/</span>
                          <input 
                            name="birthDay"
                            placeholder="DD"
                            type="text"
                          /> 
                        </div>
                        <div>
                            <label>추가입력 사항</label>
                            <div>
                                <input 
                                id="additional-recommand"
                                type="radio"
                                value="RECOMMAND"/>
                                <span>추천인 아이디</span>
                                <input 
                                name="joinExtraInput"
                                placeholder="추천인 아이디를 입력해주세요."
                                text="text"
                                />
                                <span>가입 이후는 수정이 불가능합니다. 대소문자 및 띄어쓰기에 유의해주세요.</span>
                            </div>
                            <div>
                                <button 
                                type="submit"
                                styled={{width:"240", height:"56", radius:"3"}}
                                ><span
                                styled={{
                                    display: "inline-block",
                                    fontsize: "16px",
                                    fontweight: "500",
                                }}>가입하기</span></button>
                            </div>

                        </div>
                    </div>
                </div>
            </Subdiv>
        </SignUPContainer>
    )
}

export default Signup;


const SignUPContainer= styled.div`
min-width: 1050px;
    margin-top: 50px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
`

const Title = styled.div`
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
    color: rgb(51, 51, 51);
`
const Subdiv = styled.div `
width: 640px;
margin: 0px auto;
`

const Sub =styled.div `
padding-bottom: 10px;
    border-bottom: 2px solid rgb(51, 51, 51);
    font-size: 12px;
    color: rgb(102, 102, 102);
    line-height: 17px;
    text-align: right;

& > span {
    color: rgb(238, 106, 123);
}
`
const IDdiv = styled.div`
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;
    & > label {
        font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
    width: 139px;
    padding-top: 12px;
    }

    & > input {
    width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;

    & > button {
    width: 120px;
    margin-left: 8px;
    height: 44px;
    border-radius: 3px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 52px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    & > span {
    font-weight: 500;
    font-size: 14px;
    }
    }
    }
`
const PWdiv= styled.div`
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;
    & > label {
        width: 139px;
    padding-top: 12px;
    }
    & > input {
        width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
    }
`

const PWCNdiv = styled.div`
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;

& > label {
    width: 139px;
    padding-top: 12px;
}

& > input {
    width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
}
`
const Namediv = styled.div`
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;

& > label {
    width: 139px;
    padding-top: 12px;
}

& > input {
    width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
}
`
const Emdiv = styled.div`
   display: inline-flex;
    width: 100%;
    padding: 10px 20px;
    & > label {
        font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
    width: 139px;
    padding-top: 12px;
    }

    & > input {
    width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;

    & > button {
    width: 120px;
    margin-left: 8px;
    height: 44px;
    border-radius: 3px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 52px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    & > span {
    font-weight: 500;
    font-size: 14px;
    }
    }
    }
`
const Phonediv = styled.div`
   display: inline-flex;
    width: 100%;
    padding: 10px 20px;
    & > label {
        font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
    width: 139px;
    padding-top: 12px;
    }

    & > input {
    width: 333px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;

    & > button {
    width: 120px;
    margin-left: 8px;
    height: 44px;
    border-radius: 3px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 52px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    & > span {
    font-weight: 500;
    font-size: 14px;
    }
    }
    }
`
const Maildiv = styled.div `
display: inline-flex;
width: 100%;
padding: 10px 20px;
& > label {
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
}
& > span {
    color: rgb(238, 106, 123);
}
& > div {
    flex: 110%;
    & > button {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
}
}
& > button {
    width:333px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
}
& > span {
    font-size: 14px;
    font-weight: 500;
}
`