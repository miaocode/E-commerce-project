import React, { useState } from "react";
import { setCartModualVisible } from "../../../redux/modalReducer";
import { Modal, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = ({ visible, totalQty }) => {
  // const showCart = useSelector((state) => state.modal.cartModal.visible);
  const dispatch = useDispatch();
  const { userID, isLoggedIn, isAdmin, cart } = useSelector(
    (state) => state.user
  );

  const handleOnCancel = () => {
    dispatch(setCartModualVisible(false));
  };
  const cartItem = cart.map((product) => {
    return (
      <CartItem
        key={product._id}
        id={product._id}
        url={product.url}
        name={product.name}
        price={product.price}
      />
    );
  });
  return (
    <Modal
      title="Shopping Cart"
      visible={visible}
      closeIcon={<CloseCircleOutlined />}
      onCancel={handleOnCancel}
      bodyStyle={{ overflowY: "scroll", height: "500px" }}
      footer={[<Button key="back">Continue to checkout</Button>]}
    >
      <ul className="cart-list">{cartItem}</ul>
      <div className>
        <span>Subtotal</span>
        <span>Tax</span>
        <span>Discount</span>
        <span>Estimated total</span>
      </div>
    </Modal>
  );
};

export default Cart;
