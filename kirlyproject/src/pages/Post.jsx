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


  useEffect(() => {
 
    dispatch(getPosts())
    console.log(getPosts())
  }, [dispatch]);

  const postDispatch = () => {
    dispatch(
      postItemThunk({
        itemName: item_Name,

      })
    );
  };

  console.log(item_Name);

  const item_list = useSelector((state) => state.posts)
  console.log(item_list)


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
      <div>가격</div> <br/>
      <div>이미지</div> <br/>
      <div>재고현황???</div> <br/>
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
