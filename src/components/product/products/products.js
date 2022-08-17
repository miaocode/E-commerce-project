import { useNavigate } from "react-router-dom";
import ProductCard from "../../../common/productCard/productCard";
import ProductsInfo from "../../../data/productsInfo";
import "./products.css";

const Products = ({ content, setContent, cartQty, setCartQty, setCartSum }) => {
  let navigate = useNavigate();
  const productList = ProductsInfo.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        category={product.category}
        url={product.imgUrl}
        productName={product.name}
        price={product.price}
        descrioption={product.description}
        content={content}
        setContent={setContent}
        cartQty={cartQty}
        setCartQty={setCartQty}
        setCartSum={setCartSum}
      />
    );
  });

  return (
    <main>
      <h3>Products</h3>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate("/createProduct");
        }}
      >
        Add Product
      </button>

      <div className="products-container">{productList}</div>
    </main>
  );
};

export default Products;
