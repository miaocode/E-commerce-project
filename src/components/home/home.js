import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyHeader from "../../common/header/header";
import SignIn from "../signIn/content";
import Footer from "../../common/footer/footer";
import CreateProduct from "../product/createProduct/createProduct";
import EditProduct from "../product/editProduct/editProduct";
import ProductDetails from "../../common/productDetails/productDetails";
import Products from "../product/products/products";
import "./home.css";

const Home = () => {
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);

  return (
    <div className="body">
      <MyHeader cartQty={cartQty} cartSum={cartSum} />
      <SignIn />
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
      <Footer />
    </div>
  );
};

export default Home;
