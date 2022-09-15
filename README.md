# 🛒 MarketKirly - Clone
___     
  <img src="https://user-images.githubusercontent.com/110365677/190322449-868cf4e2-2ad6-4a50-b654-05fab751cdf2.png" />   

     
## 🦾 구현기능   

 +  회원가입: 회원가입 유효성 검사   
 +  로그인 : 로그인 유효성 검사   
 +  메인페이지 : 상품 클릭시 상세페이지 이동   
 +  상세페이지 : 장바구니 담기 및 상품 수량 변경    
 +  장바구니 기능   
 
## 📅 프로젝트 기간   
  2022년 9월 9일 ~ 2022년 9월 15일   
  서버배포 : 2022년 9월 15일   
      
## 🙆‍♂️ 팀 소개    
+  [CMS-Front] 장현욱 : https://github.com/artlogy/MarketKurly-CMS   
+  [Front] 조수진   
+  [Front] 손다윤 : https://github.com/suzz-in
+  [BackEnd] 이수민, 배상훈, 안재원, 정수민 : https://github.com/bsh9254/MarketKurly-BE   

## 🛠 설치패키지
 
```yarn add aixos```   
```yarn add react-icons```    
```yarn add redux```  
```Yarn add @reduxjs/toolkit```   
```yarn add react-router-dom```   
```yarn add styled-components```   
```yarn add swiper```   
   
   
## 💥 Trouble Shooting   
+ 로그인 서버 연결 후 Refresh-token은 localstorage에 확인이 되나, Authorization은 undefind로 뜨는 문제    
   - => ```console.log(response.headers)``` 확인을 통해 토큰명 "authorization" 인 것을 확인 후 해결
+ 같은 식별자명으로 이중배열 객체를 사용하여 혼동함    
   - =>디버깅 중 이 트러블 발견하여 객체 이름 수정을 통해 추후 있을 혼동 미연에 방지함 
+ 하나의 스와이퍼에 4개의 이미지가 넣어지지 않고 하나의 이미지만 넣어짐 
   - => 스와이퍼 그룹설정 해줌 ``` slidesPerGroup={4}``` 으로 설정
   
## 😭 아쉬운점    
*  시간부족으로 구글로그인 구현못함     
*  서버 연결이 안되어 ```axios.interceptor``` 를 사용해보지 못한 점 + 로그아웃 구현 못한점   
