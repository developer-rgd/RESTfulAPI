import mongoose from "mongoose";

const userSchems = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
});

const User = mongoose.model("User", userSchems);
export default User;
