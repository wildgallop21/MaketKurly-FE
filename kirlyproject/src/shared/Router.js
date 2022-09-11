import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";


const Router = () => {
  return(
    <BrowserRouter>
    <Routes>
      {/* 각자 작업한 router 설정 */}
      {/* <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/cart" element={<Cart />} />


    </Routes>
  </BrowserRouter>
  )
}
export default Router;
