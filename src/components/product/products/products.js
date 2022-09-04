import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadProducts } from "../../../redux/productReducer";
import ProductCard from "../productCard/productCard";
import "./products.css";

const Products = ({ cartQty, setCartQty, setCartSum }) => {
  const { isAdmin, cart } = useSelector((state) => state.user);
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  //  console.log(cart);
  const productList = product.map((product) => {
    return (
      <ProductCard
        key={product._id}
        id={product._id}
        imgUrl={product.imgUrl}
        name={product.name}
        price={product.price}
      />
    );
  });
  return (
    <main>
      <h3>Products</h3>

      {isAdmin && (
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
