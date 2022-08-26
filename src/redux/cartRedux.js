import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addOneProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeOneProduct: (state, action) => {
      state.quantity -= 1;
      state.products.push(action.payload);
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addOneProduct, removeOneProduct } = cartSlice.actions;
export default cartSlice.reducer;
