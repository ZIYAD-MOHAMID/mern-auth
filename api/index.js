import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "../api/route/user.route.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("MongoDB Connected ^_^");
  })
  .catch((err) => {
    console.log("Connection Failed To MongoDB! \n", err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(
    ` Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
app.use("/api/user", userRouter);
