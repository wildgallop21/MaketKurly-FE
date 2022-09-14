import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import CardList from "../components/CardList";
import Detail from "../pages/Detail";
import Card from "../components/Card";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/post" element={<Post />} />
        <Route path="/cardlist" element={<CardList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/card" element={<Card />} />


      </Routes>
    </BrowserRouter>
  );
};
export default Router;
