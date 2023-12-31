import { createSlice } from "@reduxjs/toolkit"

import cartItems from '../../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
})

const export 
export default cartSlice.reducer;