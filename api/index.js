import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());

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
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
