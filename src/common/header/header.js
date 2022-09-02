import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./cart/cart";
import { logOut } from "../../redux/userReducer";
import {
  setAccountModalContent,
  setAccountModalVisible,
  setCartModualVisible,
} from "../../redux/modalReducer";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.modal.cartModal.visible);
  const { userID, isLoggedIn, isAdmin, cart } = useSelector(
    (state) => state.user
  );

  const cartQantity = (function () {
    return cart.reduce((pre, cur) => {
      return pre + cur.quantity;
    }, 0);
  })();

  const cartAmount = (function () {
    return cart.reduce((pre, cur) => {
      return pre + cur.quantity * cur.price;
    }, 0);
  })();

  const handleSignIn = () => {
    dispatch(setAccountModalVisible(true), setAccountModalContent("signIn"));
  };
  const handleSignOut = () => {
    dispatch(logOut());
  };

  const handleClick = () => {
    dispatch(setCartModualVisible(!showCart));
  };

  return (
    <div className="header-container">
      <h1 id="management">Management</h1>
      <div className="search-bar">
        <input placeholder="Search" />
      </div>
      <div className="signin-button">
        {isLoggedIn ? (
          <Button type="primary" onClick={handleSignOut}>
            <UserOutlined />
            SIGN OUT
          </Button>
        ) : (
          <Button type="primary" onClick={handleSignIn}>
            <UserOutlined />
            SIGN IN
          </Button>
        )}
      </div>
      <div className="total-amount">
        <span onClick={handleClick}>
          <ShoppingCartOutlined />
        </span>
        <span id="cartQty">{cartQantity}</span>
        <span id="cartAmount">${cartAmount}</span>
      </div>
    </div>
  );
};

export default Header;
