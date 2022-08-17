import { React, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ProductsInfo from "../../data/productsInfo";
import "./productDetails.css";

const ProductDetails = ({ setCartQty, setCartSum }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const findProduct = ProductsInfo.find((product) => {
    return product.id === productId;
  });
  const [itemQty, setItemQty] = useState(0);

  const handlePlusOne = () => {
    if (findProduct.stockQty > 0) {
      findProduct.stockQty -= 1;
      setItemQty(itemQty + 1);
      setCartQty((prev) => {
        return prev + 1;
      });
      setCartSum((prev) => {
        return prev + findProduct.price;
      });
    }
  };

  const handleMinusOne = () => {
    findProduct.stockQty += 1;
    setItemQty(itemQty - 1);
    setCartQty((prev) => {
      return prev - 1;
    });
    setCartSum((prev) => {
      return prev - findProduct.price;
    });
  };
  return (
    <div className="product-details">
      <h3>Product Detail</h3>
      <div className="product-content">
        <img
          className="product-image"
          src={findProduct.imgUrl}
          alt={findProduct.productName}
        />

        <div className="text-detail">
          <p>{findProduct.category}</p>
          <h4>{findProduct.productName}</h4>
          <p id="price">${findProduct.price}</p>
          {findProduct.stockQty === 0 && <p id="out-of-stock">Out of Stock</p>}
          <p id="description">{findProduct.description}</p>
          {itemQty ? (
            <div>
              <button onClick={handleMinusOne}>-</button>
              <span>{itemQty}</span>
              <button onClick={handlePlusOne}>+</button>
            </div>
          ) : (
            <button onClick={handlePlusOne}>Add/Qty</button>
          )}
          <Link to={`/editProduct/${productId}`}>
            <button onClick={() => navigate("editProduct")}>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
