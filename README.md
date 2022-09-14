# 🛒 MarketKirly - Clone
___     
  
   
## 🛠설치패키지
___     
```yarn add aixos```   
```yarn add react-icons```    
```yarn add redux```  
```Yarn add @reduxjs/toolkit```   
```yarn add react-router-dom```   
```yarn add styled-components```   
```yarn add swiper```   
   
   
## 💥Trouble Shooting   
+ 로그인 서버 연결 후 Refresh-token은 localstorage에 확인이 되나, Authorization은 undefind로 뜨는 문제    
   - => ```console.log(response.headers)``` 확인을 통해 토큰명 "authorization" 인 것을 확인 후 해결
+ 같은 식별자명으로 이중배열 객체를 사용하여 혼동함    
- 디버깅 중 이 트러블 발견하여 객체 이름 수정을 통해 추후 있을 혼동 미연에 방지함 
