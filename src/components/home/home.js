import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyHeader from "../../common/header/header";
import SignIn from "../signIn/signIn";
import Footer from "../../common/footer/footer";
import CreateProduct from "../product/createProduct/createProduct";
import EditProduct from "../product/editProduct/editProduct";
import ProductDetails from "../../common/productDetails/productDetails";
import Products from "../product/products/products";
import "./home.css";
import Default from "../default/default";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);

  // useEffect(() => {});

  return (
    <div className="body">
      <MyHeader
        setVisible={setVisible}
        cartQty={cartQty}
        cartSum={cartSum}
        isLoggedIn={isLoggedIn}
      />
      <SignIn
        visible={visible}
        setVisible={setVisible}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
      <div className="routes">
        <Routes>
          {/* <Route path="/" element={<Default />} /> */}
          <Route
            path="/products"
            element={
              <Products
                isLoggedIn={isLoggedIn}
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
                isLoggedIn={isLoggedIn}
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
