import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_USERS_URL = "http://localhost:3001/users";

const initialState = {
  users: [
    {
      member_id: "",
      password: "",
      name: "",
      email: "",
      phone_number: "",
      address: "",
      gender: "",
      birth: "",
      policy: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const createUserThunk = createAsyncThunk(
  "users/createUserThunk",
  async (newUser, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://52.79.58.138/member/signup",
        newUser
      );
      console.log(data);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
