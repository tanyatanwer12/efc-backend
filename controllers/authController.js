const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (
  req,
  res
) => {
  try {
    const {
      name,
      userId,
      email,
      password,
    } = req.body;

    const userExists =
      await User.findOne({
        email,
      });

    if (userExists) {
      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    const userIdExists =
      await User.findOne({
        userId,
      });

    if (userIdExists) {
      return res.status(400).json({
        message:
          "User ID already exists",
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    const user =
      await User.create({
        name,
        userId: userId.toUpperCase(),
        email,
        password:
          hashedPassword,
      });

    res.status(201).json({
      message:
        "User Registered Successfully",

      user: {
        id: user._id,
        name: user.name,
        userId: user.userId,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};

const loginUser = async (
  req,
  res
) => {
  try {
    const {
      userId,
      password,
    } = req.body;

    const user =
      await User.findOne({
        userId:
          userId.toUpperCase(),
      });

    if (!user) {
      return res.status(400).json({
        message:
          "Invalid User ID",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message:
          "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message:
        "Login Successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        userId: user.userId,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};