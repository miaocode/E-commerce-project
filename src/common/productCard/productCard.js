import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneProduct, removeOneProduct } from "../../redux/cartRedux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../api";
import "./productCard.css";

const ProductCard = ({
  id,
  imgUrl,
  stockQty,
  productName,
  price,
  setCartQty,
  setCartSum,
  isLoggedIn,
}) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlusOne = () => {
    setQuantity(quantity + 1);
    dispatch(addOneProduct({ ...product, quantity }));
  };

  const handleMinusOne = () => {
    setQuantity(quantity - 1);
    dispatch(removeOneProduct({ ...product, quantity }));
  };

  return (
    <div className="productCard-container">
      <div className="product-info">
        <Link to={`/products/${id}`}>
          <img src={imgUrl} alt="" />
        </Link>

        <p id="product-name">{productName}</p>
        <p id="product-price">${price}</p>
        <div className="button-container">
          {quantity ? (
            <div>
              <button onClick={handleMinusOne}>-</button>
              <span>{quantity}</span>
              <button onClick={handlePlusOne}>+</button>
            </div>
          ) : (
            <button onClick={handlePlusOne}>Add/Qty</button>
          )}
          {isLoggedIn && (
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
