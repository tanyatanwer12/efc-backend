const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    userId: {
  type: String,
  required: true,
  unique: true,
  uppercase: true,
},

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: [
        "Admin",
        "Manager",
        "Verifier",
      ],
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "User",
    userSchema
  );