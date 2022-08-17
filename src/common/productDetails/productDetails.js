import { React, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsInfo from "../../data/productsInfo";
import "./productDetails.css";

const ProductDetails = ({ setCartQty, setCartSum }) => {
  const { productId } = useParams();
  const findProduct = ProductsInfo.find((product) => {
    console.log(product.id, productId);
    return product.id === productId;
  });
  const [itemQty, setItemQty] = useState(0);

  const handlePlusOne = () => {
    setItemQty(itemQty + 1);
    setCartQty((prev) => {
      return prev + 1;
    });
    setCartSum((prev) => {
      return prev + findProduct.price;
    });
  };

  const handleMinusOne = () => {
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
          {/* <p id="out-of-stock">Out of Stock</p> */}
          <p id="description">{findProduct.description}</p>
          {itemQty ? (
            <div>
              <button onClick={handleMinusOne}>-</button>
              <span>{itemQty}</span>
              <button onClick={handlePlusOne}>+</button>
            </div>
          ) : (
            <button onClick={handlePlusOne}>Add/Qty</button>
          )}{" "}
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
