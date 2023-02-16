import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  product : [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state,action){
        state.product.push(action.payload );
        state.totalPrice = state.product.reduce((sum,obj) => sum + obj.price, 0);

    },
    removeProduct(state,action){
      state.product = state.product.filter((product) => product.id !== action.payload);
      state.totalPrice = state.product.reduce((sum,obj) => sum + obj.price, 0);
    }
  
  },
})

export const {addProduct,removeProduct} = cartSlice.actions

export default cartSlice.reducer