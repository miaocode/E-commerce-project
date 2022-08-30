import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/index";

export const uploadProduct = createAsyncThunk(
  "product/upload",
  async (productInfo, thunkAPI) => {}
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    name: "",
    price: "",
    stockQty: "",
    category: "",
    description: "",
    imgUrl: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(upload.pending, (state, action) => {
      state.loading = true;
    });
  },
});

//export { } = productSlice.actions;
export default productSlice.reducer;
