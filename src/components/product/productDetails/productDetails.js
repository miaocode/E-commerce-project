import { React, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProduct, loadProducts } from "../../../redux/productReducer";
import { updateCart, removeItem } from "../../../redux/userReducer";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { userID, isAdmin, cart } = useSelector((state) => state.user);
  const { imgUrl, name, category, stockQty, description, price } = useSelector(
    (state) => state.product.product
  );
  const isLoading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProduct = cart.find((item) => item._id === id);
  const quantity = cartProduct ? cartProduct.quantity : 0;

  useEffect(() => {
    dispatch(findProduct(id));
  }, []);

  // if (isLoading) {
  //   return (
  //     <div>
  //       {console.log("loading")}
  //       <LoadingOutlined />
  //     </div>
  //   );
  // }

  const handleClick = (userID, productID, url, qty, name, price) => {
    if (!userID) {
      alert("Please sign in to add products!");
    } else if (quantity === 1 && qty === -1) {
      dispatch(removeItem({ userID, id }));
    } else {
      dispatch(updateCart({ userID, productID, url, qty, name, price }));
    }
  };

  const handleBackToHome = () => {
    dispatch(loadProducts());
    setTimeout(() => {
      navigate("/products");
    }, 200);
  };

  return (
    <div className="product-details">
      <div className="product-details-header">
        <h3>Product Detail</h3>
        <Button onClick={handleBackToHome}>Back to Home</Button>
      </div>
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
              <Button
                onClick={() => handleClick(userID, id, imgUrl, -1, name, price)}
              >
                -
              </Button>
              <span>{quantity}</span>
              <Button
                onClick={() => handleClick(userID, id, imgUrl, 1, name, price)}
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => handleClick(userID, id, imgUrl, 1, name, price)}
            >
              Add/Qty
            </Button>
          )}
          {isAdmin && (
            <Link to={`/editProduct/${id}`}>
              <Button onClick={() => navigate("editProduct")}>Edit</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
