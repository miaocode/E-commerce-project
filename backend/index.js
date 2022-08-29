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

//Register new user
app.get("/api/register", async (req, res) => {
  res.send("success!");
});

app.post("/api/register", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await newUser.save();
    res.status(200).json("You have been signed up!");
  } catch (err) {
    res.status(400).json(err);
  }
});

//SignIn
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

//update password

app.post("/api/resetpassword", async (res, req) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user.password === req.body.password) {
      try {
        const updatedPassword = { password: req.body.newPassword };
        const updatedUser = await User.findOneAndUpdate(
          { email: req.body.email },
          updatedPassword,
          {
            new: true,
          }
        );
        return res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

//Create new product
// app.get("/api/product", async (req, res) => {
//   res.send("success!");
// });

app.post("/api/product", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
app.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen("8080", () => {
  console.log("Backend is running.");
});

module.exports = app;