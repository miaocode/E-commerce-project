import { React, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../../../redux/productReducer";
import { updateCart } from "../../../redux/userReducer";
import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { userID, isAdmin, cart } = useSelector((state) => state.user);
  const { imgUrl, name, category, stockQty, description, price } = useSelector(
    (state) => state.product.product
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProduct = cart.find((item) => item._id === id);
  const quantity = cartProduct.quantity;

  useEffect(() => {
    dispatch(findProduct(id));
  }, [id]);

  const handleClick = (userID, productID, qty, name, price) => {
    dispatch(updateCart({ userID, productID, qty, name, price }));
  };

  return (
    <div className="product-details">
      <h3>Product Detail</h3>
      <div className="product-content">
        <img className="product-image" src={imgUrl} alt={name} />

        <div className="text-detail">
          <p>{category}</p>
          <h4>{name}</h4>
          <p id="price">${price}</p>
          {stockQty === 0 && <p id="out-of-stock">Out of Stock</p>}
          <p id="description">{description}</p>
          {quantity ? (
            <div>
              <button onClick={() => handleClick(userID, id, -1, name, price)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleClick(userID, id, 1, name, price)}>
                +
              </button>
            </div>
          ) : (
            <button onClick={() => handleClick(userID, id, 1, name, price)}>
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

export default ProductDetails;
