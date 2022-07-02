import express from "express";
const routers = express.Router();
import User from "../models/user.js";

routers.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
routers.post("/", async (req, res) => {
  try {
    const newUser = new User({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
    });
    const user = await newUser.save();
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});
routers.put("/:_id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params._id, {
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
    });
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});
routers.delete("/:_id", async(req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params._id);
    res.status(200).json("successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default routers;
