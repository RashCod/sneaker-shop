import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    searchSlice,
  },
});
