import { configureStore } from "@reduxjs/toolkit";
import users from "./modules/users";
import carts from "./modules/carts";
import posts from "./modules/posts";


const store = configureStore({
  reducer: {
    users,
    posts,
    carts,

  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
