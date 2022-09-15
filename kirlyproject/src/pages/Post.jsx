import React , {useState, useCallback}from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../elements/Input";
import More from "../elements/More";
import Check from "../elements/Check";
import { getPosts, postItemThunk } from "../redux/modules/posts";
import { createUserThunk } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Post=()=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");

  const [item_Name, setItemName] = useState({
    item_Name: "",
  });
  const [item_Price, setItem_Price] = useState({
    item_Price: "",
  });
  const [item_IMG, setItem_IMG] = useState({
    item_IMG: "",
  });


  useEffect(() => {
 
    dispatch(getPosts())
    console.log(getPosts())
  }, [dispatch]);

  const postDispatch = () => {
    dispatch(
      postItemThunk({
        itemName: item_Name,
        itemPrice: item_Price,
        itemIMG: item_IMG
      })
    );
  };

  console.log(item_Name, item_Price);

  // const item_list = useSelector((state) => state.posts)
  // console.log(item_list)


  return (
    <div>
      <div>상품이름</div><br/>
      <input 
                    name="id"
                    type="text"
                    placeholder="상품이름을 입력해주세요"
                    onChange={(ev) => {
                        setItemName(ev.target.value);
                      }} />
      {/* <div>{item_list.posts[1].itemName}</div> <br/> */}
  
      <div>이미지</div> <br/>
      <input 
                    name="id"
                    type="text"
                    placeholder="이미지URL을 입력해주세요"
                    onChange={(ev) => {
                        setItem_IMG(ev.target.value);
                      }} />
      <div>상품가격</div> <br/>
      <input 
                    name="id"
                    type="text"
                    placeholder="상품가격을 입력해주세요"
                    onChange={(ev) => {
                        setItem_Price(ev.target.value);
                      }} />

      <div>

        </div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <div></div> <br/>
      <button onClick={postDispatch}> 상품등록 </button>

    </div>
  )
}

export default Post;
