import { createSlice } from "@reduxjs/toolkit"

import cartItems from '../../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const { clearCart } = 
export default cartSlice.reducer;