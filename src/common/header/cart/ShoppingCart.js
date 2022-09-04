import { React } from "react";
import { setCartModualVisible } from "../../../redux/modalReducer";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import "./cart.css";

const ShoppingCart = () => {
  // const showCart = useSelector((state) => state.modal.cartModal.visible);
  const dispatch = useDispatch();
  const { userID, isLoggedIn, isAdmin, cart } = useSelector(
    (state) => state.user
  );
  const handleClick = () => {
    dispatch(setCartModualVisible(false));
  };
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

  const tax = (total) => {
    return (total * 0.0825).toFixed(2);
  };
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
            <span>Subtotal:</span> <span>${cartAmount.toFixed(2)}</span>
          </div>
          <div className="subtotal">
            <span>Tax:</span> <span>${tax(cartAmount)}</span>
          </div>
          <div className="subtotal">
            <span>Discount:</span> <span></span>
          </div>
          <div className="subtotal">
            <span>Estimated total:</span> <span></span>
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
