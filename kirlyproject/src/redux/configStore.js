import { configureStore } from "@reduxjs/toolkit";
import users from "./modules/users";

import posts from "./modules/posts";


const store = configureStore({
  reducer: {
    users,
    posts,

  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
