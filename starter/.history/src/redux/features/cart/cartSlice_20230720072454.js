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
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },

    removeItem: (state) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    }
  }
})

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;