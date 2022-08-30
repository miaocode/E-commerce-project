import { combineReducers } from "redux";
import cart from "./cartReducer";
import modal from "./modalReducer";
import product from "./modalReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  cart,
  modal,
  product,
  user,
});

export default rootReducer;
