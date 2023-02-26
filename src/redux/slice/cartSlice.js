import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  product: [],
  readyClick: false,
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product.push(action.payload);
      state.totalPrice = state.product.reduce((sum, obj) => sum + obj.price, 0);
    },
    removeProduct(state, action) {
      state.product = state.product.filter(
        (product) => product.id !== action.payload
      );
      state.totalPrice = state.product.reduce((sum, obj) => sum + obj.price, 0);
    },
    isReadyClick(state, action) {
      state.readyClick = true;
      state.product = [];
      state.totalPrice = state.product.reduce((sum, obj) => sum + obj.price, 0);
    },
  },
});

export const cartSelect = (state) => state.cartSlice;

export const { addProduct, removeProduct, isReadyClick } = cartSlice.actions;

export default cartSlice.reducer;
