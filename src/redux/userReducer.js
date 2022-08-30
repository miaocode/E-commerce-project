import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/index";

export const register = createAsyncThunk(
  "user/register",
  async (userInfo, thunkAPI) => {
    try {
      const data = await api.register(userInfo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/logIn",
  async (userInfo, thunkAPI) => {
    try {
      const res = await api.signIn(userInfo);
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
      .addCase(register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.email = action.payload;
        state.isAdmin = false;
        state.loading = false;
        alert("You have been signed up!");
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        alert(action.payload);
      })
      .addCase(logIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        alert("Welcome back!");
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        alert("Please check your email and password!");
      });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
