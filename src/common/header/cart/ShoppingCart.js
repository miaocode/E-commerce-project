import { React, useState } from "react";
import { setCartModualVisible } from "../../../redux/modalReducer";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import "./cart.css";

const ShoppingCart = () => {
  const [discountCode, setDiscountCode] = useState("");
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCartModualVisible(false));
  };
  const cartQantity = (function () {
    return cart.reduce((pre, cur) => {
      return pre + cur.quantity;
    }, 0);
  })();

  const cartAmount = (function () {
    const totalBeforeTax = cart.reduce((pre, cur) => {
      return pre + cur.quantity * cur.price;
    }, 0);
    if (discountCode === "SAVE20") {
      return (totalBeforeTax * 0.8).toFixed(2);
    } else {
      return totalBeforeTax;
    }
  })();

  const tax = (cartAmount * 0.0825).toFixed(2);
  const total = (Number(cartAmount) + Number(tax)).toFixed(2);

  const cartItem = cart.map((product) => {
    if (product.quantity) {
      return (
        <CartItem
          key={product._id}
          id={product._id}
          imgUrl={product.url}
          name={product.name}
          price={product.price}
        />
      );
    }
  });

  return (
    <div className="shopping-cart">
      <h2>
        Cart ({cartQantity}) <CloseCircleTwoTone onClick={handleClick} />
      </h2>
      <div className="shopping-cart-content">
        <div className="cart-list">
          <ul>{cartItem}</ul>
        </div>
        <div className="cart-summary">
          <div className="subtotal">
            <span>Subtotal:</span> <span>${cartAmount}</span>
          </div>
          <div className="subtotal">
            <span>Tax:</span> <span>${tax}</span>
          </div>
          <div className="subtotal">
            <span>Discount:</span>
            <input
              id="discount"
              name="discount"
              placeholder="SAVE20"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            ></input>
          </div>
          <div className="subtotal">
            <span>Estimated total:</span> <span>${total}</span>
          </div>
          <Button type="primary" block>
            Continue to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
