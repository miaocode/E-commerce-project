import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/index";

export const logIn = createAsyncThunk(
  "user/logIn",
  async (userInfo, thunkAPI) => {
    try {
      const data = await api.signIn(userInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    isLoggedIn: false,
    loading: false,
    isAdmin: false,
    shoppingCart: [],
  },
  reducers: {
    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.loading = false;
        alert("Welcome back!");
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        console.log("Error:" + action.payload);
        alert("Please check your email and password!");
      });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
