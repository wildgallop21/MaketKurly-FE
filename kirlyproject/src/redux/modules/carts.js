import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* InitialState */
// data, isLoading, error로 상태관리

// const initialState = {
//   carts: [{
//     test:"test"
//   }],
//   isLoading: false,
//   error: null,
// };
const initialState = {
    carts: [{
      test:"test"
    }],
    isLoading: false,
    error: null,
  };
  

export const postCartThunk = createAsyncThunk(
  "carts/postCartThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/carts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
export const getCartThunk = createAsyncThunk(
  "carts/getCartThunk",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/carts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);




/* createSlice */
export const postsSlice = createSlice({
  // 모듈 이름
  name: "carts",
  // 초기 상태값
  initialState,
  // reducers
  reducers: {},
  //extraReducers
  extraReducers: {

  },
});

/* export */
export const {} = postsSlice.actions;
export default postsSlice.reducer;
