import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateCart } from "../../../redux/userReducer";
import "./productCard.css";

const ProductCard = ({ id, imgUrl, name, price }) => {
  const { userID, isAdmin, cart } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProduct = cart.find((item) => item._id === id);
  const quantity = (function () {
    if (cartProduct) {
      return cartProduct.quantity;
    } else {
      return 0;
    }
  })();

  const handleClick = (userID, productID, url, qty, name, price) => {
    dispatch(updateCart({ userID, productID, url, qty, name, price }));
  };

  return (
    <div className="productCard-container">
      <div className="product-img">
        <Link to={`/products/${id}`}>
          <img src={imgUrl} alt="" />
        </Link>
      </div>
      <div className="product-info">
        <p id="product-name">{name}</p>
        <p id="product-price">${price}</p>
        <div className="button-container">
          {quantity ? (
            <div>
              <button
                onClick={() => handleClick(userID, id, imgUrl, -1, name, price)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleClick(userID, id, imgUrl, 1, name, price)}
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
          {isAdmin && (
            <Link to={`/editProduct/${id}`}>
              <button onClick={() => navigate("editProduct")}>Edit</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
