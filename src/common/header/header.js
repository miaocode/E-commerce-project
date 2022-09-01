import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/userReducer";
import {
  setAccountModalContent,
  setAccountModalVisible,
} from "../../redux/modalReducer";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./header.css";

const Header = () => {
  const [quantity, setQuantity] = useState(0);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(setAccountModalVisible(true), setAccountModalContent("signIn"));
  };
  const handleSignOut = () => {
    dispatch(logOut());
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
      <div className="cart-icon"></div>
      <div className="total-amount">
        <ShoppingCartOutlined />
        <span id="cartQty">{quantity}</span>
        <span id="cartAmount">$0.00</span>
      </div>
    </div>
  );
};

export default Header;
