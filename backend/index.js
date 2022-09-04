const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Product = require("./models/Product");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Chuwa:Chuwa2022@cluster0.55je29k.mongodb.net/project?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log(err);
  });

//REGISTER NEW USER
app.post("/api/register", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();
    if (user !== null) {
      res.status(400).json("Email has been registed!");
    } else {
      try {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
        });
        const savedUser = await newUser.save();
        res.status(200).json("You have been signed up!");
      } catch (err) {
        res.status(500).json("Something went wrong...");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//SIGN IN
app.post("/api/signin", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(401).json("Invalid email!");
  } else if (user.password === req.body.password) {
    return res.status(200).json(user);
  } else {
    return res.status(401).json("Incorrect password!");
  }
});

//UPDATE CART
app.put("/api/cart", async (req, res) => {
  try {
    const { userID, productID, url, qty, name, price } = req.body;
    let user = await User.findById(userID);
    let product = user.cart.find((item) => {
      return item._id === productID;
    });
    if (product) {
      product.quantity = product.quantity + qty;
    } else {
      user.cart.push({
        _id: productID,
        name: name,
        quantity: qty,
        price: price,
        url: url,
      });
    }
    console.log("update cart");
    console.log(user.cart);
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//REMOVE ITEM FROM CART
app.put("/api/cart-remove", async (req, res) => {
  try {
    const { userID, id } = req.body;
    let user = await User.findById(userID);
    let index = user.cart.findIndex((item) => item._id === id);
    user.cart.splice(index, 1);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE PRODUCT BY ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE NEW PRODUCT
app.post("/api/newProduct", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.productName,
      price: req.body.price,
      stockQty: req.body.inStockQuantity,
      category: req.body.category,
      description: req.body.productDescription,
      imgUrl: req.body.url,
    });
    const savedProduct = await newProduct.save();
    res.status(200).json("Product has been added!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// app.post("/api/product", async (req, res) => {
//   const newProduct = new Product(req.body);
//   try {
//     const savedProduct = await newProduct.save();
//     res.status(200).json(savedProduct);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

app.listen("8080", () => {
  console.log("Backend is running.");
});

module.exports = app;
