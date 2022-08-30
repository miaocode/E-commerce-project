// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import api from "../../api";
import "./productCard.css";

const ProductCard = ({
  id,
  imgUrl,
  stockQty,
  productName,
  price,
  setCartQty,
  setCartSum,
}) => {
  // const [product, setProduct] = useState({});
  const quantity = useSelector((state) => state.product.quantity);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlusOne = () => {};

  const handleMinusOne = () => {};

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
