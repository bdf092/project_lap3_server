const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users found" });
  res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "User ID required" });
  const user = await User.findOne({ _id: req.body.id });
  if (!user) {
    return res
      .status(204)
      .json({ message: `User ID ${req.body.id} not found` });
  }
  const result = await user.deleteOne({ _id: req.body.id });
  res.status(200).json(result);
};

const getUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "User ID required" });
  const user = await User.findOne({ _id: req.params.id });

  if (!user) {
    return res
      .status(204)
      .json({ message: `User ID ${req.params.id} not found` });
  }
  res.status(200).json(user);
};

const updateQuizzesPlayed = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "User ID required" });
  try {
    const user = await User.findOne({ _id: req.params.id });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      
      user.quizzesPlayed += 1;
      await user.save();
      
      res.status(200).json({ message: "Quiz completed successfully" });
  } catch (error) {
      console.error("Error completing quiz:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  getUser,
  updateQuizzesPlayed
};
