import express from "express";
import mongoose from "./config/connectToDB.js";
import dotenv from "dotenv";

dotenv.config();
mongoose();

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(
    ` Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
