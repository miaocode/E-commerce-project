import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { quantity: 0 },
  reducers: {
    increment: (state) => {
      state.quantity++;
    },
    decrement: (state) => {
      state.quantity--;
    },
  },
});

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
