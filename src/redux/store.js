import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import searchSlice from "./slice/searchSlice";
import product from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    searchSlice,
    product,
  },
});
