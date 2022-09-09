import React from "react";
import styled from "styled-components";


const Signup=()=>{
    return (
        <div>
            <div>회원가입</div>

            <div>
                <div>
                    <span>*</span>
                    필수입력사항
                </div>

                <div>
                    <div>
                        <label>아이디<span>*</span></label>
                        <input
                        id= "user_id"
                        name = "user_id"
                        placeholder="아이디를 입력해주세요"
                        type="text"
                         />
                         <button><span>중복확인</span></button>
                    </div>

                    <div>
                        <label>비밀번호<span>*</span></label>
                        <input
                        id= "password"
                        name = "password"
                        placeholder="비밀번호를 입력해주세요"
                        type="password"
                         />
                    </div>

                    <div>
                        <label>비밀번호 확인<span>*</span></label>
                        <input
                        id= "passwordConfirm"
                        name = "passwordConfirm"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                        type="password"
                         />
                    </div>

                    <div>
                        <label>이름<span>*</span></label>
                        <input
                        id= "name"
                        name = "name"
                        placeholder="이름을 입력해주세요"
                        type="text"
                         />
                    </div>

                    <div>
                        <label>이메일<span>*</span></label>
                        <input
                        id= "email"
                        name = "email"
                        placeholder="예: marketkurly@kurly.com"
                        type="text"
                         />
                         <button><span>중복확인</span></button>
                    </div>

                    <div>
                        <label>휴대폰<span>*</span></label>
                        <input
                        id= "mobileNumber"
                        name = "mobileNumber"
                        placeholder="숫자만 입력해주세요"
                        type="tel"
                         />
                         <button><span>인증번호 받기</span></button>
                    </div>

                    <div>
                    <label>주소<span>*</span></label>
                    <button styled={{ height: "44", radius:"4px"}}>
                        <span><img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />주소검색</span>
                    </button>
                    <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                    </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;