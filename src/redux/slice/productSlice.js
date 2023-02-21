import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async ({ search }) => {
    const { data } = await axios.get(
      `https://6383e2be4ce192ac604c6e5a.mockapi.io/iphone?${search}`
    );
    return data;
  }
);

const initialState = {
  product: [],
  status: "loading", // loading | success | error
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.product = [];
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state,action) => {
      state.product = [];
      state.status = "error";
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
