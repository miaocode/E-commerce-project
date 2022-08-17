import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [itemQty, setItemQty] = useState(0);
  const navigate = useNavigate();

  const handlePlusOne = () => {
    if (stockQty > 0) {
      stockQty -= 1;
      setItemQty(itemQty + 1);
      setCartQty((prev) => {
        return prev + 1;
      });
      setCartSum((prev) => {
        return prev + price;
      });
    } else {
      return;
    }
  };

  const handleMinusOne = () => {
    stockQty += 1;
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
        <Link to={`/products/${id}`}>
          <img src={imgUrl} alt="" />
        </Link>

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
          <Link to={`/editProduct/${id}`}>
            <button onClick={() => navigate("editProduct")}>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
