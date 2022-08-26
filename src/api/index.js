const BASE_URL = "http://localhost:8080/api";

const registerUser = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
};

const signIn = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
};

const resetPassword = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/resetpassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  console.log(res);
  return res;
};

const getProducts = async () => {
  const res = fetch("http://localhost:8080/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

const getProduct = async () => {
  const res = fetch(`http://localhost:8080/api/products/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

const createProduct = async (productInfo) => {
  const res = await fetch("http://localhost:8080/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productInfo),
  });
  return res;
};

export default {
  registerUser,
  signIn,
  resetPassword,
  getProducts,
  getProduct,
  createProduct,
};
