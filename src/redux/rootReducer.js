import { combineReducers } from "redux";
import modal from "./modalReducer";
import product from "./productReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  modal,
  product,
  user,
});

export default rootReducer;
