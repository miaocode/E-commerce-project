const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email cannot be blank"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  shoppingCart: [
    {
      _id: { type: String },
      item: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
