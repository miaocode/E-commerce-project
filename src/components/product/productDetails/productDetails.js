import { React, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../../../redux/productReducer";
import "./productDetails.css";

const ProductDetails = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const product = useSelector((state) => state.product.product);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findProduct(id));
  }, [id]);

  const handleChange = (num) => {};
  const handlePlusOne = () => {};

  const handleMinusOne = () => {};

  return (
    <div className="product-details">
      <h3>Product Detail</h3>
      <div className="product-content">
        <img
          className="product-image"
          src={product.imgUrl}
          alt={product.productName}
        />

        <div className="text-detail">
          <p>{product.category}</p>
          <h4>{product.productName}</h4>
          <p id="price">${product.price}</p>
          {product.stockQty === 0 && <p id="out-of-stock">Out of Stock</p>}
          <p id="description">{product.description}</p>
          {quantity ? (
            <div>
              <button onClick={handleChange(1)}>-</button>
              <span>{quantity}</span>
              <button onClick={handleChange(-1)}>+</button>
            </div>
          ) : (
            <button onClick={handlePlusOne}>Add/Qty</button>
          )}
          {isAdmin && (
            <Link to={`/editProduct/${id}`}>
              {<button onClick={() => navigate("editProduct")}>Edit</button>}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
