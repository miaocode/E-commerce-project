import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../common/productCard/productCard";
import api from "../../../api/index";
import "./products.css";

const Products = ({ isLoggedIn, cartQty, setCartQty, setCartSum }) => {
  const [product, setProduct] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await api.getProducts();
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProduct();
  }, []);

  const productList = product.map((product) => {
    return (
      <ProductCard
        key={product._id}
        id={product._id}
        category={product.category}
        imgUrl={product.imgUrl}
        productName={product.name}
        price={product.price}
        descrioption={product.description}
        stockQty={product.stockQty}
        cartQty={cartQty}
        setCartQty={setCartQty}
        setCartSum={setCartSum}
        isLoggedIn={isLoggedIn}
      />
    );
  });
  return (
    <main>
      <h3>Products</h3>

      {isLoggedIn && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigate("/createProduct");
          }}
        >
          Add Product
        </button>
      )}

      <div className="products-container">{productList}</div>
    </main>
  );
};

export default Products;
