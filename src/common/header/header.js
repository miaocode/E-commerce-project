import React from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { LOGIN_FORM } from "../../content/form";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccountModalContent,
  setAccountModalVisible,
} from "../../redux/modalReducer";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setAccountModalVisible(true), setAccountModalContent("signIn"));
  };

  return (
    <div className="header-container">
      <h1 id="management">Management</h1>

      <div className="search-bar">
        <input placeholder="Search" />
      </div>
      <div className="signin-button">
        <Button type="primary" onClick={handleClick}>
          <UserOutlined />
          {isLoggedIn ? LOGIN_FORM.SIGNOUT : LOGIN_FORM.SIGNIN}
        </Button>
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
