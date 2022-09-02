import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

const CartItem = () => {
  const { userID, isLoggedIn, isAdmin, cart } = useSelector(
    (state) => state.user
  );

  return (
    <>
      <li className="cart-item">
        <img src="" />
        <div className="product-info">
          <span>Name</span>
          <span>$100</span>
          <div className="cartItem-buttons">
            <button>-</button>quantity<button>+</button>
            <button>Remove</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
