const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
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
    cart: [
      {
        _id: { type: String },
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        url: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
