import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeItem } from "../../../redux/userReducer";
import "./cart.css";

const CartItem = ({ id, imgUrl, name, price }) => {
  const { userID, isAdmin } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const cartProduct = cart.find((item) => item._id === id);
  const quantity = cartProduct ? cartProduct.quantity : 0;
  // const quantity = (function () {
  //   if (cartProduct) {
  //     return cartProduct.quantity;
  //   } else {
  //     return 0;
  //   }
  // })();

  console.log(cart);
  const handleClick = (userID, productID, url, qty, name, price) => {
    dispatch(updateCart({ userID, productID, url, qty, name, price }));
    console.log("updat cart");
    console.log(cart);
  };

  const handleRemove = (userID, id) => {
    dispatch(removeItem({ userID, id }));
    console.log("after remove");
    console.log(cart);
  };
  return (
    <>
      <li className="cart-item">
        <img src={imgUrl} alt={id} />
        <div className="product-info">
          <span>{name}</span>
          <span>${price}</span>
          <div className="cartItem-buttons">
            {quantity ? (
              <div>
                <button
                  onClick={() =>
                    handleClick(userID, id, imgUrl, -1, name, price)
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    handleClick(userID, id, imgUrl, 1, name, price)
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleClick(userID, id, imgUrl, 1, name, price)}
              >
                Add/Qty
              </button>
            )}

            <button type="primary" onClick={() => handleRemove(userID, id)}>
              Remove
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
