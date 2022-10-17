import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyHeader from "./common/header/header";
import ShoppingCart from "./common/header/cart/ShoppingCart";
import Content from "./components/modalContent/content";
import Footer from "./common/footer/footer";
import CreateProduct from "./components/product/createProduct/createProduct";
import EditProduct from "./components/product/editProduct/editProduct";
import ProductDetails from "./components/product/productDetails/productDetails";
import Products from "./components/product/products/products";
import "./App.css";
import { useSelector } from "react-redux";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

const App = () => {
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);
  //const product = useSelector((state) => state.product.product);
  //const filteredProduct =
  const showCart = useSelector((state) => state.modal.cartModal.visible);

  return (
    <div className="App">
      <MyHeader cartQty={cartQty} cartSum={cartSum} />
      <ErrorBoundary>
        <Content />
        <div className="body">
          <Routes>
            <Route
              path="/"
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
      </ErrorBoundary>
      {showCart && <ShoppingCart />}
      <Footer />
    </div>
  );
};

export default App;
