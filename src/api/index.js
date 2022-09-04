//USER
const register = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  if (!res.ok) {
    const message = await res.json();
    throw Error(message);
  } else {
    return res.json();
  }
};

const signIn = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (!res.ok) {
    const message = `an error has occured: ${res.status}`;
    throw new Error(message);
  } else {
    return res;
  }
};

const updateCart = async (cartInfo) => {
  const res = await fetch("http://localhost:8080/api/cart", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartInfo),
  });
  if (!res.ok) {
    const message = `an error has occured: ${res.status}`;
    throw new Error(message);
  } else {
    return res;
  }
};

const removeItem = async (userItemId) => {
  const res = await fetch("http://localhost:8080/api/cart-remove", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userItemId),
  });

  if (!res.ok) {
    const message = `an error has occured: ${res.status}`;
    throw new Error(message);
  } else {
    return res;
  }
};

//PRODUCT
//GET ALL PRODUCTS
const getProducts = async () => {
  const data = await fetch("http://localhost:8080/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

//GET ONE PRODUCT BY ID
const getProduct = async (id) => {
  const data = await fetch(`http://localhost:8080/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

//CREATE NEW PRODUCT
const createProduct = async (productInfo) => {
  console.log(productInfo);
  const res = await fetch("http://localhost:8080/api/newProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productInfo),
  });
  return res;
};

export default {
  register,
  signIn,
  getProducts,
  getProduct,
  updateCart,
  removeItem,
  createProduct,
};
