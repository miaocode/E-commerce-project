import { React } from "react";
import { setCartModualVisible } from "../../../redux/modalReducer";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { Button } from "antd";
import "./cart.css";

const ShoppingCart = () => {
  // const showCart = useSelector((state) => state.modal.cartModal.visible);
  const dispatch = useDispatch();
  const { userID, isLoggedIn, isAdmin, cart } = useSelector(
    (state) => state.user
  );

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
    <div className="shopping-cart">
      <h2>Cart</h2>
      <div className="shopping-cart-content">
        <div className="cart-list">
          <ul>{cartItem}</ul>
        </div>
        <div>Subtotal:</div>
        <div>Tax:</div>
        <div>Discount:</div>
        <div>Estimated total:</div>
        <Button type="primary">Continue to checkout</Button>
      </div>
    </div>
  );
};
export default ShoppingCart;
