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
