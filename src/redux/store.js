import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import modalRuducer from "./modalReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalRuducer,
  },
});
