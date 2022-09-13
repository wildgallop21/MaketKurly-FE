import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_USERS_URL = "http://localhost:3001/users";

const initialState = {
  users: [
    {
      member_id: "",
      password: "",
      name:"",
      email:"",
      phone_number:"",
      address: "",
      gender:"",
      birth:"",
      policy:""
    }
  ],
  isLoading: false,
  error: null,
};

export const createUserThunk = createAsyncThunk(
  "users/createUserThunk",
  async (newUser, thunkAPI) => {
    try {
      // const data = await axios.post("http://localhost:3001/users", newUser);
      // const data = await axios.post("http://15.164.170.68/member/signup", newUser);
      const data = await axios.post('http://52.79.58.138/member/signup', newUser)
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/findUser",
  async (userInfo, thunk) => {
    console.log("test");
    try {
      // const data =
        await // axios.post('http://localhost:3001/user/login', userInfo)
        axios
        // .post('http://localhost:3001/users', userInfo)
        // .post('http://15.164.170.68/api/member/login', userInfo)
        .post('http://52.79.58.138/member/login', userInfo)
        
          .then((response) => {
            // if (response.data.success) {
            //  const aaa = response.headers["Authorization"].replace("Bearer ", "")
              localStorage.setItem(
                //splice
                // "Authoriazation",
                // response.headers["accesstoken"]
                "Authoriazation",
                response.headers["Authorization"]
                // `Bearer ${response.headers.Authorization}`
                // aaa
              );
              console.log(response) 

              localStorage.setItem(
                "Refresh-Token",
                response.headers["refresh-token"]
              );
            // } else if (response.status !== 200) {
            //   alert("서버와 연결에 실패했습니다.");
            // } else {
            //   alert("이메일과 비밀번호를 확인해주세요.");
            // }
          });
      // console.log(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [createUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    },
  },
});


export const {} = usersSlice.actions;
export default usersSlice.reducer;
