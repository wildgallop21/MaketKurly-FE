import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




const Login = () => {
    const navigate = useNavigate();

    const [memberId, setMemberId]= useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        setMemberId(e.target.value);
      };
    

      const onChangePassword = (e) => {
        setPassword(e.target.value);
      };

      const sendRequestLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://52.79.58.138/member/login",
                {
                    memberId: memberId,
                    password: password,
                },
            );
            localStorage.setItem("authorization", response.headers["authorization"]);
            console.log(response.headers)
          localStorage.setItem(
        "refresh-token",
        response.headers["refresh-token"]
      );
      navigate("/");
        } catch (error) {
            alert("아이디와 비밀번호를 확인해주세요.");
      }}
      useEffect(() => {
        console.log("token", localStorage.getItem("access-token"))
        if (localStorage.getItem("access-token") !== null) {
          console.log("성공이용")
        }
      }, []);

    return (
        <LoginContainer>
            <LoginTitle>로그인</LoginTitle>
            <Logindiv>
                <Inputdiv>
                    <input 
                    name="id"
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    onChange={onChangeId} />

                    <input 
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChangePassword}/>

                </Inputdiv>
                <Finddiv>
                <a>아이디 찾기</a>
                <span />
                <a>비밀번호 찾기</a>
                </Finddiv>

                <div>
                    <Loginbutton onClick={sendRequestLogin}>
                        <span>로그인</span>
                    </Loginbutton>
                    <Signupbutton>
                        <span>회원가입</span>
                    </Signupbutton>
                </div>
                </Logindiv>
            
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    min-width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
`

const LoginTitle = styled.div`
font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
`

const Logindiv = styled.div`
    width: 340px;
    margin: 0px auto;
    letter-spacing: -0.6px;
    `

const Inputdiv = styled.div`
    margin-top: 30px;
    & > input {
        margin-bottom: 10px;
        height: 54px;
    font-size: 14px;
    width: 100%;
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

const Finddiv = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 13px;
    & > a {
    color: rgb(51, 51, 51);
    cursor: pointer; 
    background-color: transparent;
    text-decoration: none;
}
    & > span {
        width: 1px;
    height: 10px;
    margin: 3px 6px 0px;
    background-color: rgb(51, 51, 51);
    }
`

const Loginbutton =styled.button`
    display: block;
    margin-top: 28px;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
    & > span {
        display: inline-block;
    font-size: 16px;
    font-weight: 500;
    }
`
const Signupbutton = styled.button`
    margin-top: 10px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    & > span {
   display: inline-block;
    font-size: 16px;
    font-weight: 500;
    }`
