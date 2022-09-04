import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/index";

export const loadProducts = createAsyncThunk(
  "product/loadProducts",
  async (thunkAPI) => {
    try {
      const res = await api.getProducts();
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findProduct = createAsyncThunk(
  "product/findProduct",
  async (id, thunkAPI) => {
    try {
      const res = await api.getProduct(id);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productInfo, thunkAPI) => {
    try {
      const res = await api.createProduct(productInfo);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(findProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(findProduct.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
