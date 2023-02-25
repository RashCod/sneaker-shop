import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  
}


const searchSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
     setSearchValue(state,action){
      state.searchValue = action.payload
     },
    },
  })

  

export const searchSelect = (state) => state.searchSlice.searchValue
  export const { setSearchValue} = searchSlice.actions
export default searchSlice.reducer