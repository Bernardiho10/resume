const mongoose = require("mongoose");
const User = require("../models/User");
const Clients = require("../models/Clients");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ users: users });
});

const createUser = asyncHandler(async (req, res) => {
  const { username, password, roles, email, firstName, lastName, bio } =
    req.body;

  if (
    !username ||
    !password ||
    !Array.isArray(roles) ||
    !roles.length ||
    !email ||
    !firstName ||
    !lastName
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "This Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userObj = {
    username,
    password: hashedPassword,
    roles,
    firstName,
    lastName,
    email,
    bio,
  };

  const user = await User.create(userObj);

  if (user) {
    res.status(201).json({
      message: `Welcome ${user.username}, your account has been created successfully.`,
    });
  } else {
    res.status(400).json({ message: "Invalid user data received." });
  }
});

// Edit a user
const updateUser = asyncHandler(async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    username,
    password,
    roles,
    active,
    bio,
    email,
  } = req.body;

  if (!id || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    if (err instanceof CastError) {
      return res.status(400).send("Invalid ID");
    }

    return res.status(404).send("User not found");
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Username already exist" });
  }

  user.username = username;
  user.roles = roles;
  user.active = active;
  user.bio = bio;
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} updated successfully` });
});

// Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "User Id required" });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = await user.deleteOne();

  const reply = `${deleteUser.username} has been deleted from our records`;

  res.json(reply);
});

module.exports = {
  getUsers,
  updateUser,
  deleteUser,
  createUser,
};
