import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../productDetails/productDetails";
import "./productCard.css";
import ProductsInfo from "../../data/productsInfo";

const ProductCard = ({
  id,
  url,
  productName,
  price,
  content,
  setContent,
  setCartQty,
  setCartSum,
}) => {
  const [itemQty, setItemQty] = useState(0);
  const navigate = useNavigate();

  const handlePlusOne = () => {
    setItemQty(itemQty + 1);
    setCartQty((prev) => {
      return prev + 1;
    });
    setCartSum((prev) => {
      return prev + price;
    });
  };

  const handleMinusOne = () => {
    setItemQty(itemQty - 1);
    setCartQty((prev) => {
      return prev - 1;
    });
    setCartSum((prev) => {
      return prev - price;
    });
  };

  return (
    <div className="productCard-container">
      <div className="product-info">
        <img onClick={() => setContent("productDetails")} src={url} alt="" />
        <p id="product-name">{productName}</p>
        <p id="product-price">${price}</p>
        <div className="button-container">
          {itemQty ? (
            <div>
              <button onClick={handleMinusOne}>-</button>
              <span>{itemQty}</span>
              <button onClick={handlePlusOne}>+</button>
            </div>
          ) : (
            <button onClick={handlePlusOne}>Add/Qty</button>
          )}

          <button onClick={() => navigate("editProduct")}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
