import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountModal: { visible: false, content: "signIn" },
  cartModal: { visible: false },
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAccountModalVisible(state, action) {
      state.accountModal.visible = action.payload;
    },
    setAccountModalContent(state, action) {
      state.accountModal.content = action.payload;
    },
    setCartModualVisible(state, action) {
      state.cartModal.visible = action.payload;
    },
  },
});

export const {
  setAccountModalVisible,
  setAccountModalContent,
  setCartModualVisible,
} = modalSlice.actions;
export default modalSlice.reducer;
