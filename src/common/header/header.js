import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/userReducer";
import {
  setAccountModalContent,
  setAccountModalVisible,
  setCartModualVisible,
} from "../../redux/modalReducer";
import { filterProduct } from "../../redux/productReducer";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useMediaQuery } from "react-responsive";
import "./header.css";

const Header = () => {
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();
  const mobileDevice = useMediaQuery({ maxDeviceWidth: 820 });
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
    dispatch(setCartModualVisible(true));
  };

  const signInButton = mobileDevice ? (
    <div type="primary" onClick={handleSignIn}>
      <UserOutlined />
    </div>
  ) : (
    <Button type="primary" onClick={handleSignIn}>
      <UserOutlined />
      Sign In
    </Button>
  );

  const signOutButton = mobileDevice ? (
    <div type="primary" onClick={handleSignOut}>
      <UserOutlined />
    </div>
  ) : (
    <Button type="primary" onClick={handleSignOut}>
      <UserOutlined />
      Sign Out
    </Button>
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
    //dispatch(filterProduct(setSearchField));
  };

  return (
    <div className="header-container">
      <div id="management">
        {mobileDevice ? <p id="M">M</p> : <p id="Mgt">Management</p>}
        <span>Shop</span>
      </div>

      <div className="search-bar">
        <input
          placeholder="Search products"
          type="search"
          value={searchField}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="signin-button">
        {isLoggedIn ? signOutButton : signInButton}
      </div>
      <div className="total-amount">
        <div onClick={handleClick}>
          <ShoppingCartOutlined />
        </div>
        {mobileDevice ? <></> : <span id="cartQty">{cartQantity}</span>}
        <div id="cartAmount">${cartAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Header;
