import React , {useState}from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import More from "../elements/More";
import Check from "../elements/Check";





const Signup=()=>{

    //컬러값 가져다가 쓰기 (기본,성공,실패 시 각각..)
    const color = {
        default: "rgb(82,82,82)",
        success: "rgb(51, 141, 39)",
        fail: "rgb(228, 56, 56)",
    };


//이름, 아이디 받기
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [name, setName] = useState("");

    const [idColor, setIdColor] = useState("");
    const [pwColor1, setPwColor1] = useState("");
    const [pwColor2, setPwColor2] = useState("");
    const [pwColor3, setPwColor3] = useState("");
    const [pwcColor, setPwcColor] = useState("");

    

//포커스 했을 때 - 컬러값도 설정해주기
    const [idFocus, setIdFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordCheckFocus, setPassworcCheckFocus] = useState(false);
    const [eventClick, setEventClick] = useState(false);

    function onIdMouseFocus() {
        setIdFocus(true);
        setIdColor(color.default);
      }
      function onPasswordMouseFocus() {
        setPasswordFocus(true);
        setPwColor1(color.default);
        setPwColor2(color.default);
        setPwColor3(color.default);
      }
      function onPasswordCheckMouseFocus() {
        setPassworcCheckFocus(true);
        setPwcColor(color.default);
      }
      function onEventClick() {
        setEventClick(true);
      }

    return (
        <SignupMainStyle>
        <SignupContainer>
          <SignupTitleBoxStyle>
            <SignupTitleStyle>회원가입</SignupTitleStyle>
            <SignupEssentialStyle>
              <SignupStarstyle>*</SignupStarstyle>필수입력사항
            </SignupEssentialStyle>
          </SignupTitleBoxStyle>
          <SignupBox>
            <SignupForm>
              <SignupTable>
                <tbody>
                  <SignupTr>
                    <SignupTh>
                      아이디<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input
                        value={id}
                        onFocus={onIdMouseFocus}
                        type="text"
                        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                      />
                      <SignupDupbtnStyle>중복확인</SignupDupbtnStyle>
                      {idFocus && <More color={idColor}></More>}
                    </SignupTd>
                  </SignupTr>
  
                  <SignupTr>
                    <SignupTh>
                      비밀번호<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input
                        onFocus={onPasswordMouseFocus}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                      />
                      {passwordFocus && (
                        <>
                          <More color={pwColor1}></More>
                          <More color={pwColor2}></More>
                          <More color={pwColor3}></More>
                        </>
                      )}
                    </SignupTd>
                  </SignupTr>
  
                  <SignupTr>
                    <SignupTh>
                      비밀번호확인<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input
                        onFocus={onPasswordCheckMouseFocus}
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                      />
                      {passwordCheckFocus && (
                        <More color={pwcColor}></More>
                      )}
                    </SignupTd>
                  </SignupTr>
  
                  <SignupTr>
                    <SignupTh>
                      이름<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input placeholder="이름을 입력해주세요" />
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>
                      이메일<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input placeholder="예: dsfdsf@gmail.com" />
                      <SignupDupbtnStyle>중복확인</SignupDupbtnStyle>
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>
                      휴대폰<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <Input placeholder="숫자만 입력해주세요" />
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>
                      주소<SignupStarstyle>*</SignupStarstyle>
                    </SignupTh>
                    <SignupTd>
                      <button
                        color="var(--main-purple)"
                        background="white"
                        font="var(--small-font)"
                        pad="10px 150px"
                      />
                      <More
                        color="rgb(82, 82, 82)"
                        text="배송지에 따라 물품이 다를 수 있습니다"
                      ></More>
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>성별</SignupTh>
                    <SignupTd>
                      <SignupCheckBox>
                        <div>
                          <SignupInputstyle
                            type="radio"
                            id="woman"
                            name="gender"
                          />
                          <label htmlFor="woman">여성</label>
                        </div>
  
                        <div>
                          <SignupInputstyle type="radio" id="man" name="gender" />
                          <label htmlFor="man">남성</label>
                        </div>
                        <div>
                          <SignupInputstyle
                            type="radio"
                            id="nocheck"
                            name="gender"
                          />
                          <label htmlFor="nocheck">선택 안함</label>
                        </div>
                      </SignupCheckBox>
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>생년월일</SignupTh>
                    <SignupTd>
                      <SignupBirthDiv>
                        <input type="text" placeholder="YYYY" />/
                        <input type="text" placeholder="MM" />/
                        <input type="text" placeholder="DD" />
                      </SignupBirthDiv>
                    </SignupTd>
                  </SignupTr>
                  <SignupTr>
                    <SignupTh>추가입력 사항</SignupTh>
                    <SignupTd>
                      <SignupCheckBox>
                        <div>
                          <SignupInputstyle
                            onClick={onEventClick}
                            type="radio"
                            id="recommend_id"
                            name="add_input"
                          />
                          <label htmlFor="recommend_id">추천인 아이디</label>
                        </div>
  
                        <div>
                          <SignupInputstyle
                            onClick={onEventClick}
                            type="radio"
                            id="event"
                            name="add_input"
                          />
                          <label htmlFor="event">참여 이벤트명</label>
                        </div>
                      </SignupCheckBox>
                      {eventClick && (
                        <div className="add_event_box">
                          <Input
                            type="text"
                            placeholder="추천인 아이디를 입력해주세요."
                          />
  
                          <More
                            color={color.default}
                            text="추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다."
                          ></More>
                          <More
                            color={color.default}
                            text="가입 이후, 수정이 불가합니다."
                          ></More>
                          <More
                            color={color.default}
                            text="대소문자 및 띄어쓰기에 유의해주세요."
                          ></More>
                        </div>
                      )}
                    </SignupTd>
                  </SignupTr>
                </tbody>
              </SignupTable>
            </SignupForm>
          </SignupBox>
  
          <Check></Check>
        </SignupContainer>
  
        <SignupBtn type="submit">
          가입하기
        </SignupBtn>
      </SignupMainStyle>
    );
  }

  export default Signup;
  
  const SignupMainStyle = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const SignupTitleBoxStyle = styled.div`
    width: 650px;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  `;
  
  const SignupTitleStyle = styled.h1`
    font-size: var(--xlarge-font);
    display: flex;
    justify-content: center;
    margin: 50px 0px;
    letter-spacing: -1px;
  `;
  
  const SignupStarstyle = styled.span`
    color: rgb(228, 56, 56);
    margin: 1px;
  `;
  
  const SignupEssentialStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: var(--xsmall-font);
    color: rgb(82, 82, 82);
    margin: 10px 0px;
  `;
  
  const SignupBox = styled.section`
    width: 650px;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  const SignupForm = styled.form`
    width: 100%;
  `;
  
  const SignupTable = styled.table`
    width: 100%;
  `;
  
  const SignupTh = styled.th`
    padding: 13px;
    text-align: start;
    font-size: var(--small-font);
    position: absolute;
    transform: translateY(10px);
  `;
  
  const SignupTd = styled.td`
    width: 77%;
    padding: 10px;
  `;
  
  const SignupTr = styled.tr``;
  
  const SignupDupbtnStyle = styled.a`
    display: inline-block;
    width: 23%;
    border: 1px solid var(--main-purple);
    padding: 12px 0px;
    border-radius: 4px;
    color: var(--main-purple);
    font-size: var(--small-font);
    font-weight: bold;
    text-align: center;
  `;
  
  const SignupInputstyle = styled.input`
    &[type="radio"] {
      display: none;
    }
    &[type="radio"] + label {
      display: inline-block;
      cursor: pointer;
      line-height: 25px;
      padding-left: 30px;
      background: url("./image/ico_checkbox.svg") left/22px no-repeat;
    }
    &[type="radio"]:checked + label {
      display: inline-block;
      cursor: pointer;
      line-height: 25px;
      padding-left: 30px;
      background: url("./image/ico_checkbox_checked.svg") left/22px no-repeat;
    }
  `;
  
  const SignupBtn = styled.button`
    background-color: var(--main-purple);
    margin: 50px;
    color: white;
    padding: 13px;
    width: 15%;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  `;
  
  const SignupCheckBox = styled.div`
    width: 68%;
    padding: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--small-font);
  `;
  
  const SignupBirthDiv = styled.div`
    width: 74%;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 4px;
    padding: 3px 0px;
    & > input {
      width: 31%;
      border: none;
      font-size: var(--small-font);
      text-align: center;
      padding: 10px 0px;
    }
    & > input:focus {
      outline: none;
    }
  `;