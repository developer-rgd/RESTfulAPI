import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routers from "./routers/routers.js";

const app = express();

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MDB_URL, () => {
  console.log("mdb connected");
});

app.use("/", routers);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
