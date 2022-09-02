import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyHeader from "../../common/header/header";
import ShoppingCart from "../../common/header/cart/ShoppingCart";
import Content from "../modalContent/content";
import Footer from "../../common/footer/footer";
import CreateProduct from "../product/createProduct/createProduct";
import EditProduct from "../product/editProduct/editProduct";
import ProductDetails from "../../components/product/productDetails/productDetails";
import Products from "../product/products/products";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);
  const showCart = useSelector((state) => state.modal.cartModal.visible);

  return (
    <div className="body">
      <MyHeader cartQty={cartQty} cartSum={cartSum} />

      <Content />
      <div className="routes">
        <Routes>
          <Route
            path="/products"
            element={
              <Products
                cartQty={cartQty}
                setCartQty={setCartQty}
                setCartSum={setCartSum}
              />
            }
          ></Route>
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                cartQty={cartQty}
                setCartQty={setCartQty}
                setCartSum={setCartSum}
              />
            }
          />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </div>
      {showCart && <ShoppingCart />}
      <Footer />
    </div>
  );
};

export default Home;
