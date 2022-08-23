const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

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

app.listen("8080", () => {
  console.log("Backend is running.");
});

module.exports = app;
